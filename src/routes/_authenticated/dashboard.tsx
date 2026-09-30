import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { supabase } from "@/integrations/supabase/client";
import { SkeletonScreen } from "@/components/dws/Skeleton";
import {
  ensureAdmin,
  listEnquiries,
  replyToEnquiry,
  setEnquiryStatus,
} from "@/lib/admin.functions";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Enquiries Dashboard - DwS" },
      { name: "description", content: "Review and reply to DwS client enquiries." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: DashboardPage,
});

const filters = [
  { key: "all", label: "All" },
  { key: "new", label: "New" },
  { key: "replied", label: "Replied" },
  { key: "archived", label: "Archived" },
] as const;

function DashboardPage() {
  useDwsBody();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const claimAdmin = useServerFn(ensureAdmin);
  const fetchEnquiries = useServerFn(listEnquiries);
  const sendReply = useServerFn(replyToEnquiry);
  const updateStatus = useServerFn(setEnquiryStatus);

  const [filter, setFilter] = useState<(typeof filters)[number]["key"]>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    claimAdmin().then(() => queryClient.invalidateQueries({ queryKey: ["enquiries"] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, isPending, error } = useQuery({
    queryKey: ["enquiries"],
    queryFn: () => fetchEnquiries(),
  });

  const replyMutation = useMutation({
    mutationFn: (vars: { enquiryId: string; body: string }) => sendReply({ data: vars }),
    onSuccess: (result) => {
      setDraft("");
      setOpenId(null);
      setFeedback(
        result.emailStatus === "sent"
          ? "Reply sent."
          : `Reply saved, but the email did not send (${result.emailStatus}).`,
      );
      queryClient.invalidateQueries({ queryKey: ["enquiries"] });
    },
    onError: (err) => setFeedback(err instanceof Error ? err.message : "Could not send reply."),
  });

  const statusMutation = useMutation({
    mutationFn: (vars: { enquiryId: string; status: "new" | "replied" | "archived" }) =>
      updateStatus({ data: vars }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["enquiries"] }),
  });

  async function signOut() {
    await supabase.auth.signOut();
    queryClient.clear();
    navigate({ to: "/auth" });
  }

  const enquiries = data?.enquiries ?? [];
  const visible = enquiries.filter((e) => filter === "all" || e.status === filter);
  const counts = {
    total: enquiries.length,
    new: enquiries.filter((e) => e.status === "new").length,
    replied: enquiries.filter((e) => e.status === "replied").length,
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="dws-section pt-5">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
              <div>
                <p className="dws-eyebrow mb-2">Dashboard</p>
                <h1 className="h2 mb-0">Client enquiries</h1>
              </div>
              <button type="button" className="dws-btn dws-btn-outline" onClick={signOut}>
                Sign out
              </button>
            </div>

            {data && !data.isAdmin && (
              <div className="dws-form-card">
                <h2 className="h5 mb-2">No access</h2>
                <p className="dws-muted mb-0">
                  This account isn't an admin. Sign in with tech.dws.co@gmail.com to view enquiries.
                </p>
              </div>
            )}

            {error && <p className="dws-form-error">Couldn't load enquiries. Try refreshing.</p>}
            {isPending && <SkeletonScreen label="Loading enquiries" rows={4} />}

            {data?.isAdmin && (
              <>
                <div className="row g-3 mb-4">
                  <div className="col-4">
                    <div className="dws-stat">
                      <span className="dws-stat-num">{counts.total}</span>
                      <span className="dws-muted small">Total</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="dws-stat">
                      <span className="dws-stat-num">{counts.new}</span>
                      <span className="dws-muted small">New</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="dws-stat">
                      <span className="dws-stat-num">{counts.replied}</span>
                      <span className="dws-muted small">Replied</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {filters.map((f) => (
                    <button
                      key={f.key}
                      type="button"
                      className={`dws-chip ${filter === f.key ? "is-active" : ""}`}
                      onClick={() => setFilter(f.key)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {feedback && <p className="dws-muted small">{feedback}</p>}

                {visible.length === 0 && <p className="dws-muted">No enquiries here yet.</p>}

                <div className="d-flex flex-column gap-3">
                  {visible.map((e) => (
                    <div className="dws-enquiry" key={e.id}>
                      <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                        <div>
                          <strong>{e.name}</strong>{" "}
                          <a href={`mailto:${e.email}`} className="dws-muted small">
                            {e.email}
                          </a>
                          {e.company && <span className="dws-muted small"> · {e.company}</span>}
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <span className={`dws-badge dws-badge-${e.status}`}>{e.status}</span>
                          <span className="dws-muted small">
                            {new Date(e.created_at).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      {e.budget && <p className="dws-mono small mb-2">Budget: {e.budget}</p>}
                      <p className="dws-enquiry-msg mb-3">{e.message}</p>

                      {e.replies.length > 0 && (
                        <div className="mb-3">
                          {e.replies.map((r) => (
                            <div className="dws-reply" key={r.id}>
                              <span className="dws-mono small d-block mb-1">
                                You ·{" "}
                                {new Date(r.created_at).toLocaleString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                                {r.email_status !== "sent" && ` · email ${r.email_status}`}
                              </span>
                              <span className="dws-enquiry-msg">{r.body}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {openId === e.id ? (
                        <form
                          onSubmit={(ev) => {
                            ev.preventDefault();
                            replyMutation.mutate({ enquiryId: e.id, body: draft });
                          }}
                        >
                          <label className="dws-label" htmlFor={`reply-${e.id}`}>
                            Your reply (emailed to {e.email})
                          </label>
                          <textarea
                            id={`reply-${e.id}`}
                            className="dws-input mb-3"
                            rows={5}
                            value={draft}
                            onChange={(ev) => setDraft(ev.target.value)}
                            required
                            minLength={5}
                          />
                          <div className="d-flex flex-wrap gap-2">
                            <button
                              type="submit"
                              className="dws-btn dws-btn-solid"
                              disabled={replyMutation.isPending}
                            >
                              {replyMutation.isPending ? "Sending…" : "Send reply"}
                            </button>
                            <button
                              type="button"
                              className="dws-btn dws-btn-outline"
                              onClick={() => {
                                setOpenId(null);
                                setDraft("");
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      ) : (
                        <div className="d-flex flex-wrap gap-2">
                          <button
                            type="button"
                            className="dws-btn dws-btn-solid"
                            onClick={() => {
                              setOpenId(e.id);
                              setDraft("");
                              setFeedback(null);
                            }}
                          >
                            Reply by email
                          </button>
                          <button
                            type="button"
                            className="dws-btn dws-btn-outline"
                            onClick={() =>
                              statusMutation.mutate({
                                enquiryId: e.id,
                                status: e.status === "archived" ? "new" : "archived",
                              })
                            }
                          >
                            {e.status === "archived" ? "Restore" : "Archive"}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
