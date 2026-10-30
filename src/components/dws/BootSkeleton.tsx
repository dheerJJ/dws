/**
 * Critical inline CSS ensuring immediate dark theme paint and exact font fallback.
 * Renders on frame 1 before external stylesheets finish downloading.
 */
export const BOOT_CRITICAL_CSS = `
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('/fonts/inter-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Inter Fallback';
  src: local('Arial'), local('Helvetica');
  ascent-override: 90%;
  descent-override: 22.5%;
  line-gap-override: 0%;
  size-adjust: 107.5%;
}

:root {
  --dws-black: #000000;
  --dws-white: #ffffff;
  --dws-border: #222222;
  --dws-muted: #b3b3b3;
}

html {
  scroll-behavior: smooth;
}

html, body {
  background-color: #000000 !important;
  color: #ffffff;
  margin: 0;
  font-family: 'Inter', 'Inter Fallback', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.dws-nav {
  background-color: var(--dws-black);
  border-bottom: 1px solid var(--dws-border);
}

.dws-logo {
  height: 40px;
  width: 150px;
  object-fit: contain;
}

.dws-hero {
  min-height: 85vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.dws-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--dws-border);
  border-radius: 999px;
  padding: 0.45rem 1.1rem;
  font-size: 0.82rem;
  color: #e6e6e6;
  background: rgba(255, 255, 255, 0.03);
}

.dws-btn {
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.7rem 1.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.dws-btn-solid {
  background-color: var(--dws-white);
  color: var(--dws-black);
}

.dws-btn-outline {
  background-color: transparent;
  color: var(--dws-white);
  border: 1px solid #3a3a3a;
}

#dws-boot { display: none !important; }
`;

export function BootSkeleton() {
  return null;
}
