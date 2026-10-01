import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

import { Reveal } from "./Reveal";

const services = [
  {
    title: "Website Design & Development",
    meta: "Next-gen builds, CRO-ready",
    service: "website-design",
  },
  {
    title: "Brand Identity & Design Systems",
    meta: "Positioning to pixels",
    service: "website-design",
  },
  {
    title: "Mobile App Development",
    meta: "iOS & Android (Flutter / React Native)",
    service: "mobile-app-development",
  },
  { title: "SEO & Content Engines", meta: "Compounding organic reach", service: "seo" },
  {
    title: "Cross-Platform App Engineering",
    meta: "From prototype to App Store",
    service: "mobile-app-development",
  },
  {
    title: "SaaS & Product Engineering",
    meta: "MVPs that reach paying users",
    service: "saas-mvp",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="dws-service-arrow"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="services" className="dws-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 col-xl-7">
            <Reveal>
              <p className="dws-eyebrow mb-2">Services</p>
              <h2 className="dws-section-title display-5 mb-3">
                Specialized engineering and growth, on demand.
              </h2>
              <p className="dws-muted fs-5 mb-0">
                From bespoke website architecture and cross-platform apps to production SaaS MVPs. Direct senior execution with zero handoffs.
              </p>
            </Reveal>
          </div>
        </div>

        <div>
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06} y={20}>
              <motion.div className="dws-service">
                <Link
                  to="/pricing/$service"
                  params={{ service: service.service }}
                  className="dws-service-link"
                  aria-label={`${service.title} - see pricing`}
                />
                <span className="dws-service-index dws-mono">
                  {"{"}
                  {String(i + 1).padStart(2, "0")}
                  {"}"}
                </span>
                <div>
                  <h3 className="dws-service-title">{service.title}</h3>
                  <span className="dws-service-meta d-none d-sm-inline">{service.meta}</span>
                </div>
                <ArrowIcon />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
