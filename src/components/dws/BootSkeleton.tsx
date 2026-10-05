/**
 * Critical inline CSS ensuring immediate dark theme paint and exact font fallback.
 * Renders on frame 1 before external stylesheets finish downloading.
 */
export const BOOT_CRITICAL_CSS = `
:root {
  --dws-black: #000000;
  --dws-white: #ffffff;
  --dws-border: #222222;
  --dws-muted: #b3b3b3;
}
html { scroll-behavior: smooth; }
html, body {
  background-color: #000000 !important;
  color: #ffffff;
  margin: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.dws-hero { min-height: 85vh; }
#dws-boot { display: none !important; }
`;

export function BootSkeleton() {
  return null;
}
