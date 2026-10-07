import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const DISALLOWED_PERMISSIONS_FEATURES = new Set([
  "attribution-reporting",
  "private-aggregation",
  "join-ad-interest-group",
  "run-ad-auction",
]);

function sanitizePermissionsPolicy(policy: string | null): string {
  const standardDefault = "camera=(), microphone=(), geolocation=()";
  if (!policy) return standardDefault;

  const parts = policy
    .split(",")
    .map((item) => item.trim())
    .filter((item) => {
      const featureName = item.split("=")[0]?.trim().toLowerCase();
      return featureName && !DISALLOWED_PERMISSIONS_FEATURES.has(featureName);
    });

  return parts.length > 0 ? parts.join(", ") : standardDefault;
}

function applySecurityHeaders(response: Response): Response {
  const newHeaders = new Headers(response.headers);
  if (!newHeaders.has("X-Content-Type-Options")) {
    newHeaders.set("X-Content-Type-Options", "nosniff");
  }
  if (!newHeaders.has("X-Frame-Options")) {
    newHeaders.set("X-Frame-Options", "SAMEORIGIN");
  }
  if (!newHeaders.has("Referrer-Policy")) {
    newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
  }

  // Actively sanitize Permissions-Policy by removing non-standard Privacy Sandbox
  // directives (attribution-reporting, private-aggregation, join-ad-interest-group,
  // run-ad-auction) that trigger console errors in non-Chrome/Brave browsers.
  const currentPolicy = newHeaders.get("Permissions-Policy");
  newHeaders.set("Permissions-Policy", sanitizePermissionsPolicy(currentPolicy));

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      return applySecurityHeaders(normalized);
    } catch (error) {
      console.error(error);
      return applySecurityHeaders(
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
  },
};
