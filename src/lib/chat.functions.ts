import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const HistoryInput = z.object({ sessionId: z.string().min(8).max(100) });

export type StoredChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export const getChatHistory = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => HistoryInput.parse(input))
  .handler(async ({ data }): Promise<StoredChatMessage[]> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin
      .from("chat_messages")
      .select("id, role, content")
      .eq("session_id", data.sessionId)
      .order("created_at", { ascending: true })
      .limit(100);

    if (error) {
      console.error("chat history failed", error);
      return [];
    }

    return (rows ?? []).map((row) => ({
      id: row.id,
      role: row.role === "assistant" ? "assistant" : "user",
      content: row.content,
    }));
  });
