import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { supabase } from "@/integrations/supabase/client";
import { CommentSkeleton } from "./Skeleton";

type Comment = {
  id: string;
  author_name: string;
  body: string;
  created_at: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const { data, error: err } = await supabase
      .from("blog_comments")
      .select("id, author_name, body, created_at")
      .eq("post_slug", slug)
      .order("created_at", { ascending: false })
      .limit(100);
    if (!err && data) setComments(data as Comment[]);
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    setLoading(true);
    void load();
  }, [load]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedBody = body.trim();
    if (trimmedName.length < 2 || trimmedBody.length < 3) {
      setError("Add your name and a comment before posting.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError(null);
    const { error: err } = await supabase.from("blog_comments").insert({
      post_slug: slug,
      author_name: trimmedName.slice(0, 80),
      body: trimmedBody.slice(0, 2000),
    });
    if (err) {
      setError("Could not post your comment. Please try again.");
      setStatus("error");
      return;
    }
    setBody("");
    setStatus("sent");
    await load();
  }

  return (
    <section id="comments" className="dws-comments">
      <div className="dws-divider mb-5" />
      <h2 className="h5 mb-1">
        Comments{" "}
        <span className="dws-muted dws-mono small">({loading ? "…" : comments.length})</span>
      </h2>
      <p className="dws-muted small mb-4">
        Join the discussion. Comments are public and moderated.
      </p>

      <form className="dws-comment-form mb-5" onSubmit={onSubmit}>
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <label className="dws-label" htmlFor="c-name">
              Your name
            </label>
            <input
              id="c-name"
              className="dws-input"
              value={name}
              maxLength={80}
              onChange={(e) => setName(e.target.value)}
              placeholder="Rahul S."
            />
          </div>
          <div className="col-12">
            <label className="dws-label" htmlFor="c-body">
              Comment
            </label>
            <textarea
              id="c-body"
              className="dws-input"
              rows={4}
              maxLength={2000}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="What did you take away from this article?"
            />
          </div>
        </div>

        {status === "error" && error && <p className="dws-form-error mt-3 mb-0">{error}</p>}
        {status === "sent" && (
          <p className="dws-form-success mt-3 mb-0">Thanks — your comment is live.</p>
        )}

        <button
          type="submit"
          className="dws-btn dws-btn-solid mt-4"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Posting…" : "Post comment"}
        </button>
      </form>

      {loading ? (
        <div className="dws-skeleton-screen" role="status" aria-label="Loading comments">
          <CommentSkeleton />
          <CommentSkeleton />
          <CommentSkeleton />
        </div>
      ) : comments.length === 0 ? (
        <p className="dws-muted small mb-0">No comments yet — be the first.</p>
      ) : (
        <AnimatePresence initial={false}>
          {comments.map((c) => (
            <motion.article
              key={c.id}
              className="dws-comment"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="d-flex align-items-center justify-content-between gap-3 mb-2">
                <span className="dws-comment-author">{c.author_name}</span>
                <span className="dws-muted dws-mono small">{formatDate(c.created_at)}</span>
              </div>
              <p className="dws-comment-body mb-0">{c.body}</p>
            </motion.article>
          ))}
        </AnimatePresence>
      )}
    </section>
  );
}
