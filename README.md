# DwS — Digital with Strategy

> High-performance digital agency platform showcasing web engineering, SaaS product development, SEO, performance marketing, and bespoke brand solutions.

DwS is a modern digital agency platform designed to deliver an interactive digital showcase, service catalog, case studies, pricing estimators, dynamic blog, and lead capture system for clients across India and worldwide.

---

## 🚀 Key Features

- **Interactive Agency Showcase**: Dynamic hero animations, interactive service cards, structured development processes, and portfolio showcases.
- **Service & Solutions Catalog**: Deep-dive service pages covering Web Development, SaaS Engineering, Search Engine Optimisation (SEO), Performance Marketing, and Conversion Rate Optimisation (CRO).
- **Interactive Pricing & Estimators**: Dynamic service-specific pricing matrices and project estimation calculators.
- **Case Studies & Portfolio**: Real-world project demonstrations showcasing measurable client impact and performance metrics.
- **Content & Insights Engine**: Dynamic blog platform with structured article templates, tags, and reading estimates.
- **Lead Capture & Contact Workflow**: Validated lead generation forms with integrated notifications and email dispatch.
- **Client & Admin Authentication**: Secure authentication flow with role-based routing and protected dashboard views.
- **Modern Performance & SEO**:
  - Full SSR (Server-Side Rendering) with TanStack Start
  - Semantic HTML5 with Schema.org JSON-LD structured data for rich snippets
  - Dynamic XML Sitemap generation
  - Optimized Core Web Vitals and fluid responsive design

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [TanStack Start](https://tanstack.com/start) (Full-stack SSR), [TanStack Router](https://tanstack.com/router) |
| **Frontend UI** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Icons** | [Tailwind CSS v4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/) |
| **Data & State** | [TanStack Query](https://tanstack.com/query), [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) |
| **Backend & Services** | [Supabase](https://supabase.com/) (Auth, Database, Edge Functions), [Nitro Engine](https://nitro.unjs.io/) |
| **Email Templates** | [React Email](https://react.email/) |
| **Build & Tooling** | [Vite](https://vitejs.dev/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) |

---

## 📂 Project Structure

```
├── public/                 # Static assets and public resources
├── src/
│   ├── assets/             # Brand logos, icons, and vector graphics
│   ├── components/         # Reusable UI component library
│   │   ├── dws/            # Agency components (Hero, Navbar, Services, Portfolio, etc.)
│   │   └── ui/             # Radix UI primitives & design system components
│   ├── data/               # Business configuration, pricing, and case study data
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # Supabase and external service client integrations
│   ├── lib/                # Utility helpers, validators, and email templates
│   ├── routes/             # File-based routing definitions (TanStack Router)
│   │   ├── __root.tsx      # Root application layout
│   │   ├── index.tsx       # Landing page / Home
│   │   ├── about.tsx       # Agency story & team
│   │   ├── services.tsx    # Comprehensive service catalog
│   │   ├── pricing/        # Pricing overview and service calculators
│   │   ├── case-studies.tsx# Project portfolio and client showcases
│   │   ├── blog/           # Editorial insights & blog articles
│   │   ├── contact.tsx     # Inquiries and contact forms
│   │   └── auth.tsx        # Authentication and client login
│   ├── router.tsx          # Router configuration
│   ├── server.ts           # Nitro server entrypoint
│   └── styles.css          # Global design tokens and Tailwind CSS imports
├── supabase/               # Supabase configuration and database migrations
└── package.json            # Project dependencies and operational scripts
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm` (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd "DwS Digital Showcase"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy the example environment file and populate your Supabase credentials:
   ```bash
   cp .env.example .env
   ```
   Provide the following configuration:
   ```env
   SUPABASE_PROJECT_ID="your_project_id"
   SUPABASE_URL="https://your_project_id.supabase.co"
   SUPABASE_PUBLISHABLE_KEY="your_publishable_key"
   SUPABASE_SECRET_KEY="your_secret_key"
   SUPABASE_SERVICE_ROLE_KEY="your_service_role_key"
   SUPABASE_JWKS_URL="https://your_project_id.supabase.co/auth/v1/.well-known/jwks.json"

   VITE_SUPABASE_PROJECT_ID="your_project_id"
   VITE_SUPABASE_URL="https://your_project_id.supabase.co"
   VITE_SUPABASE_PUBLISHABLE_KEY="your_publishable_key"
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port displayed in the console) to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with HMR. |
| `npm run build` | Compiles the production build for server and client. |
| `npm run build:dev` | Compiles a development-mode build. |
| `npm run preview` | Runs the production build locally for verification. |
| `npm run lint` | Runs ESLint across the codebase for static code analysis. |
| `npm run format` | Formats all code files using Prettier. |

---

## 🏢 Business & Agency Details

- **Agency Name**: DwS (Digital with Strategy)
- **Headquarters**: Jaipur, Rajasthan, India
- **Email**: [tech.dws.co@gmail.com](mailto:tech.dws.co@gmail.com)
- **Founder**: Dheerajj Kumawat
- **Website**: [https://dws.io](https://dws.io)

---

## 📄 License

Proprietary — All rights reserved by DwS (Digital with Strategy).
