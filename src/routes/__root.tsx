import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, lazy, Suspense, type ReactNode } from "react";

import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css?url";
import appCss from "../styles.css?url";
import dwsCss from "../dws.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BootSkeleton, BOOT_CRITICAL_CSS } from "../components/dws/BootSkeleton";
import { Preloader } from "../components/dws/Preloader";

const ChatWidget = lazy(() => import("../components/dws/ChatWidget"));
import { business } from "../data/business";
import {
  formatMetaDescription,
  formatMetaTitle,
  getCanonicalUrl,
  getOrganizationSchema,
} from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-5">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page Not Found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist or has been relocated.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go to Homepage
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Contact Studio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-5">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page did not load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected error occurred. You can try refreshing or return to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const defaultTitle = formatMetaTitle(business.keywords.home.primary);
    const defaultDescription = formatMetaDescription(
      `${business.name} is a Jaipur-based web development, mobile app development, and SEO studio building high-performance websites, SaaS MVPs and digital platforms.`,
    );
    const canonical = getCanonicalUrl("/");
    const ogImageUrl = `${business.siteUrl}/og-image.png`;

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#000000" },
        { title: defaultTitle },
        { name: "description", content: defaultDescription },
        { name: "google-site-verification", content: business.googleVerificationToken },
        { property: "og:site_name", content: business.name },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_IN" },
        { property: "og:url", content: canonical },
        { property: "og:title", content: defaultTitle },
        { property: "og:description", content: defaultDescription },
        { property: "og:image", content: ogImageUrl },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: defaultTitle },
        { name: "twitter:description", content: defaultDescription },
        { name: "twitter:image", content: ogImageUrl },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(getOrganizationSchema()),
        },
      ],
      links: [
        { rel: "canonical", href: canonical },
        { rel: "manifest", href: "/manifest.json" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
        },
        { rel: "stylesheet", href: bootstrapCss },
        { rel: "stylesheet", href: appCss },
        { rel: "stylesheet", href: dwsCss },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/dws-icon.png" },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <style dangerouslySetInnerHTML={{ __html: BOOT_CRITICAL_CSS }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <BootSkeleton />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    document.documentElement.classList.add("dws-hydrated");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <Outlet />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </QueryClientProvider>
  );
}
