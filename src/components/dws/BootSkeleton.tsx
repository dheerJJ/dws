/**
 * Critical inline CSS ensuring immediate dark background without white flash.
 * The skeleton overlay is hidden so real SSR content paints on frame 1 without blocking LCP.
 */
export const BOOT_CRITICAL_CSS = `
html,body{background:#000;color:#fff;margin:0;-webkit-font-smoothing:antialiased}
#dws-boot{display:none!important}
`;

export function BootSkeleton() {
  return <div id="dws-boot" aria-hidden="true" style={{ display: "none" }} />;
}
