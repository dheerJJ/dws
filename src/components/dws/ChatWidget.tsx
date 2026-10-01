import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

import logo from "@/assets/dws-logo.png.asset.json";
import { getChatHistory } from "@/lib/chat.functions";

const SESSION_KEY = "dws-chat-session";

const SUGGESTIONS = [
  "What does a website build cost?",
  "How does your SEO programme work?",
  "Show me your recent projects",
  "Which package should I pick?",
];

function readSessionId(): string {
  const existing = window.localStorage.getItem(SESSION_KEY);
  if (existing && existing.length >= 8) return existing;
  const created =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `s-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  window.localStorage.setItem(SESSION_KEY, created);
  return created;
}

function messageText(message: UIMessage): string {
  return message.parts.map((part) => (part.type === "text" ? part.text : "")).join("");
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [errorText, setErrorText] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSessionId(readSessionId());
  }, []);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: () => ({ sessionId }),
      }),
    [sessionId],
  );

  const { messages, setMessages, sendMessage, status, stop } = useChat({
    id: sessionId ?? "dws-chat",
    transport,
    onError: (error) => {
      setErrorText(
        error.message?.includes("402")
          ? "The assistant is out of credits right now - please email tech.dws.co@gmail.com."
          : "Something went wrong. Please try again, or email tech.dws.co@gmail.com.",
      );
    },
  });

  useEffect(() => {
    if (!sessionId) return;
    let cancelled = false;
    getChatHistory({ data: { sessionId } })
      .then((rows) => {
        if (cancelled || !rows.length) return;
        setMessages(
          rows.map((row) => ({
            id: row.id,
            role: row.role,
            parts: [{ type: "text" as const, text: row.content }],
          })),
        );
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [sessionId, setMessages]);

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => textareaRef.current?.focus(), 250);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!busy) textareaRef.current?.focus();
  }, [busy]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, status, open]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value || busy) return;
    setErrorText(null);
    setInput("");
    void sendMessage({ text: value });
  };

  return (
    <>
      <motion.button
        type="button"
        className={`dws-chat-fab${open ? " is-open" : ""}`}
        aria-label={open ? "Close the DwS assistant" : "Chat with the DwS assistant"}
        onClick={() => setOpen((value) => !value)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        {open ? (
          <span className="dws-chat-fab-close" aria-hidden="true">
            ×
          </span>
        ) : (
          <img src={logo.url} alt="" className="dws-chat-fab-logo" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.aside
            className="dws-chat-panel"
            role="dialog"
            aria-label="DwS assistant"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <header className="dws-chat-head">
              <img src={logo.url} alt="DwS" className="dws-chat-head-logo" />
              <div>
                <p className="dws-chat-title">DwS Assistant</p>
                <p className="dws-chat-sub">Pricing, services, projects - ask anything</p>
              </div>
            </header>

            <div className="dws-chat-body" ref={scrollRef}>
              {messages.length === 0 && (
                <div className="dws-chat-empty">
                  <p className="dws-chat-empty-title">Hi, I'm the DwS assistant.</p>
                  <p className="dws-chat-empty-copy">
                    I can walk you through our packages, rates in ₹, past work, process and how to
                    start a project.
                  </p>
                  <div className="dws-chat-suggestions">
                    {SUGGESTIONS.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        className="dws-chat-suggestion"
                        onClick={() => send(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => {
                const text = messageText(message);
                if (!text && message.role === "assistant" && !busy) return null;
                return (
                  <div key={message.id} className={`dws-chat-msg dws-chat-msg-${message.role}`}>
                    {message.role === "assistant" ? (
                      <div className="dws-chat-markdown">
                        <ReactMarkdown>{text}</ReactMarkdown>
                      </div>
                    ) : (
                      <div className="dws-chat-bubble">{text}</div>
                    )}
                  </div>
                );
              })}

              {busy &&
                (messages.length === 0 ||
                  messages[messages.length - 1]?.role === "user" ||
                  !messageText(messages[messages.length - 1]!).trim()) && (
                  <p className="dws-chat-thinking">Thinking…</p>
                )}
              {errorText && <p className="dws-chat-error">{errorText}</p>}
            </div>

            <form
              className="dws-chat-form"
              onSubmit={(event) => {
                event.preventDefault();
                send(input);
              }}
            >
              <textarea
                ref={textareaRef}
                className="dws-chat-input"
                rows={1}
                value={input}
                placeholder="Ask about pricing, services, timelines…"
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    send(input);
                  }
                }}
              />
              {busy ? (
                <button type="button" className="dws-chat-send" onClick={() => stop()}>
                  Stop
                </button>
              ) : (
                <button type="submit" className="dws-chat-send" disabled={!input.trim()}>
                  Send
                </button>
              )}
            </form>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
