import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "./Reveal";
import { getFeaturedServices } from "@/data/services";

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
  const featuredServices = getFeaturedServices(6);

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
                From bespoke website architecture and mobile apps to ERP systems and organic growth. Direct senior execution with zero handoffs.
              </p>
            </Reveal>
          </div>
        </div>

        <div>
          {featuredServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06} y={20}>
              <motion.div className="dws-service">
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="dws-service-link"
                  aria-label={`${service.title} - see details`}
                />
                <span className="dws-service-index dws-mono">
                  {"{"}
                  {String(i + 1).padStart(2, "0")}
                  {"}"}
                </span>
                <div>
                  <h3 className="dws-service-title">{service.title}</h3>
                  <span className="dws-service-meta d-none d-sm-inline">{service.category} · {service.startsAt}</span>
                </div>
                <ArrowIcon />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 pt-2">
          <Reveal delay={0.4}>
            <Link
              to="/services"
              className="dws-btn dws-btn-outline d-inline-flex align-items-center gap-2"
            >
              <span>Explore All 15+ Services</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
