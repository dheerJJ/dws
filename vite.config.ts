// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import path from "node:path";

import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv, type Plugin } from "vite";

// Server-side env vars (no VITE_ prefix) for server routes/functions.
const serverEnv = loadEnv(process.env["NODE_ENV"] ?? "development", process.cwd(), "");
Object.assign(process.env, serverEnv);

function sanitizePermissionsPolicyHeader(val: unknown): string {
  const disallowed = new Set([
    "attribution-reporting",
    "private-aggregation",
    "join-ad-interest-group",
    "run-ad-auction",
  ]);
  const standardDefault = "camera=(), microphone=(), geolocation=()";
  const valStr = Array.isArray(val) ? val.join(", ") : String(val ?? "");
  if (!valStr) return standardDefault;

  const filtered = valStr
    .split(",")
    .map((s) => s.trim())
    .filter((s) => {
      const feat = s.split("=")[0]?.trim().toLowerCase();
      return feat && !disallowed.has(feat);
    })
    .join(", ");

  return filtered || standardDefault;
}

const sanitizePermissionsPolicyPlugin = (): Plugin => ({
  name: "sanitize-permissions-policy-headers",
  configureServer(server) {
    server.middlewares.use((_req, res, next) => {
      const originalSetHeader = res.setHeader.bind(res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      res.setHeader = (name: string, value: any) => {
        if (name.toLowerCase() === "permissions-policy") {
          return originalSetHeader("Permissions-Policy", sanitizePermissionsPolicyHeader(value));
        }
        return originalSetHeader(name, value);
      };
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((_req, res, next) => {
      const originalSetHeader = res.setHeader.bind(res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      res.setHeader = (name: string, value: any) => {
        if (name.toLowerCase() === "permissions-policy") {
          return originalSetHeader("Permissions-Policy", sanitizePermissionsPolicyHeader(value));
        }
        return originalSetHeader(name, value);
      };
      next();
    });
  },
});

export default defineConfig({
  plugins: [sanitizePermissionsPolicyPlugin()],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    server: {
      headers: {
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      },
    },
    preview: {
      headers: {
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      },
    },
    resolve: {
      alias: {
        "entities/lib/decode.js": path.resolve(
          import.meta.dirname,
          "node_modules/entities/lib/decode.js",
        ),
        "entities/lib/encode.js": path.resolve(
          import.meta.dirname,
          "node_modules/entities/lib/encode.js",
        ),
        entities: path.resolve(import.meta.dirname, "node_modules/entities"),
      },
    },
  },
});
