import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { useDwsBody } from "@/components/dws/useDwsBody";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Team Sign In — DwS" },
      {
        name: "description",
        content: "Sign in to the DwS team dashboard to review and reply to client enquiries.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  useDwsBody();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);

    if (mode === "signup") {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/dashboard` },
      });
      setBusy(false);
      if (signUpError) {
        setError(signUpError.message);
        return;
      }
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) {
        setNotice("Account created. Confirm your email, then sign in.");
        setMode("signin");
        return;
      }
      navigate({ to: "/dashboard" });
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    navigate({ to: "/dashboard" });
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="dws-section pt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <p className="dws-eyebrow mb-3">Team access</p>
                <h1 className="h2 mb-4">
                  {mode === "signin" ? "Sign in" : "Create your admin account"}
                </h1>
                <div className="dws-form-card">
                  <form onSubmit={onSubmit}>
                    <label className="dws-label" htmlFor="auth-email">
                      Email
                    </label>
                    <input
                      id="auth-email"
                      type="email"
                      className="dws-input mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                    />
                    <label className="dws-label" htmlFor="auth-password">
                      Password
                    </label>
                    <input
                      id="auth-password"
                      type="password"
                      className="dws-input mb-3"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      autoComplete={mode === "signin" ? "current-password" : "new-password"}
                    />
                    {error && <p className="dws-form-error">{error}</p>}
                    {notice && <p className="dws-muted small">{notice}</p>}
                    <button type="submit" className="dws-btn dws-btn-solid w-100" disabled={busy}>
                      {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
                    </button>
                  </form>
                  <p className="dws-muted small mt-3 mb-0">
                    {mode === "signin" ? "First time here? " : "Already have an account? "}
                    <button
                      type="button"
                      className="dws-link-btn"
                      onClick={() => {
                        setMode(mode === "signin" ? "signup" : "signin");
                        setError(null);
                      }}
                    >
                      {mode === "signin" ? "Create your admin account" : "Sign in instead"}
                    </button>
                  </p>
                  <p className="dws-muted small mt-3 mb-0">
                    Dashboard access is limited to tech.dws.co@gmail.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
