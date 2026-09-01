import { createOpenAI } from "@ai-sdk/openai";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { buildDwsSystemPrompt } from "@/lib/chat-knowledge";
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayResponseHeaders,
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "@/lib/ai-gateway.server";

type ChatRequestBody = { messages?: unknown; sessionId?: unknown };

function textOf(message: UIMessage): string {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("")
    .trim();
}

async function persist(sessionId: string, role: "user" | "assistant", content: string) {
  if (!sessionId || !content) return;
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("chat_messages")
      .insert({ session_id: sessionId, role, content });
    if (error) console.error("chat persist failed", error);
  } catch (error) {
    console.error("chat persist threw", error);
  }
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as ChatRequestBody;
        const messages = body.messages;
        if (!Array.isArray(messages) || messages.length === 0) {
          return new Response("Messages are required", { status: 400 });
        }
        const sessionId = typeof body.sessionId === "string" ? body.sessionId.slice(0, 100) : "";

        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response("The assistant is not configured yet.", { status: 500 });
        }

        const uiMessages = (messages as UIMessage[]).slice(-24);
        const lastMessage = uiMessages[uiMessages.length - 1];
        if (lastMessage?.role === "user") {
          await persist(sessionId, "user", textOf(lastMessage));
        }

        const initialRunId = getLovableAiGatewayRunId(request);
        const runIdFetch = createLovableAiGatewayRunIdFetch(initialRunId);
        const lovable = createOpenAI({
          baseURL: "https://ai.gateway.lovable.dev/v1",
          apiKey,
          headers: {
            "Lovable-API-Key": apiKey,
            "X-Lovable-AIG-SDK": "vercel-ai-sdk",
          },
          fetch: runIdFetch.fetch,
        });

        const result = streamText({
          model: lovable.responses("openai/gpt-5.6-sol"),
          system: buildDwsSystemPrompt(),
          messages: await convertToModelMessages(uiMessages),
          abortSignal: request.signal,
          providerOptions: {
            openai: {
              forceReasoning: true,
              reasoningEffort: "low",
              reasoningSummary: "auto",
              store: false,
              include: ["reasoning.encrypted_content"],
            },
          },
        });

        const response = result.toUIMessageStreamResponse({
          originalMessages: uiMessages,
          sendReasoning: true,
          onFinish: async ({ responseMessage }) => {
            await persist(sessionId, "assistant", textOf(responseMessage));
          },
          headers: getLovableAiGatewayResponseHeaders(undefined, {
            ...(initialRunId ? { "X-Lovable-AIG-Run-ID": initialRunId } : {}),
          }),
        });

        return withLovableAiGatewayRunIdHeader(response, runIdFetch);
      },
    },
  },
});
