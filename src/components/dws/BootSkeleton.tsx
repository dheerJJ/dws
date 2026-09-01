/**
 * Critical inline CSS + a server-rendered skeleton overlay.
 *
 * Both are emitted inside the document shell so they paint on the very first
 * frame — before Bootstrap / app CSS or any JS has downloaded. This removes the
 * white flash on initial page load and shows a Bootstrap-style shimmering
 * layout skeleton instead. The overlay removes itself as soon as React hydrates.
 */
export const BOOT_CRITICAL_CSS = `
html,body{background:#000;color:#fff;margin:0;-webkit-font-smoothing:antialiased}
#dws-boot{position:fixed;inset:0;z-index:9998;background:#000;padding:88px 20px 20px;overflow:hidden}
#dws-boot .b{background:linear-gradient(90deg,rgba(255,255,255,.05) 25%,rgba(255,255,255,.13) 37%,rgba(255,255,255,.05) 63%);background-size:400% 100%;animation:dws-boot-sh 1.35s ease-in-out infinite;border-radius:10px}
#dws-boot .bar{position:absolute;top:0;left:0;right:0;height:64px;border-bottom:1px solid #222;display:flex;align-items:center;justify-content:space-between;padding:0 20px}
#dws-boot .wrap{max-width:1140px;margin:0 auto}
#dws-boot .row{display:flex;gap:16px;flex-wrap:wrap;margin-top:40px}
#dws-boot .row>div{flex:1 1 220px}
@keyframes dws-boot-sh{0%{background-position:100% 50%}100%{background-position:0 50%}}
html.dws-hydrated #dws-boot{opacity:0;visibility:hidden;pointer-events:none;transition:opacity .35s ease,visibility 0s linear .35s}
`;

export function BootSkeleton() {
  return (
    <div id="dws-boot" aria-hidden="true">
      <div className="bar">
        <span className="b" style={{ width: 92, height: 26 }} />
        <span className="b" style={{ width: 110, height: 34, borderRadius: 999 }} />
      </div>
      <div className="wrap">
        <div
          className="b"
          style={{ width: 180, height: 12, borderRadius: 999, margin: "24px auto" }}
        />
        <div
          className="b"
          style={{ width: "min(760px,100%)", height: 46, margin: "0 auto 14px" }}
        />
        <div className="b" style={{ width: "min(560px,86%)", height: 46, margin: "0 auto 26px" }} />
        <div className="b" style={{ width: "min(440px,70%)", height: 14, margin: "0 auto 10px" }} />
        <div className="b" style={{ width: "min(360px,58%)", height: 14, margin: "0 auto" }} />
        <div className="row">
          <div>
            <div className="b" style={{ height: 150 }} />
          </div>
          <div>
            <div className="b" style={{ height: 150 }} />
          </div>
          <div>
            <div className="b" style={{ height: 150 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
