import { Link } from "@tanstack/react-router";
import { ShinyText } from "./reactbits/ShinyText";

export function Hero() {
  return (
    <section id="home" className="dws-hero">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-xl-9">
            <div>
              <span className="dws-badge">
                <ShinyText text="Web Development & SEO Studio in Jaipur" />
              </span>
            </div>

            {/* Exactly one H1 containing the primary keyword - Renders immediately on frame 1 for instant LCP */}
            <h1 className="display-2 mt-4 mb-4 text-white fw-bold">
              Website Design &amp; SEO Agency in Jaipur
            </h1>

            {/* Tagline preserved as subheading without em dashes */}
            <p className="dws-hero-sub dws-muted mx-auto mb-5">
              DWS Web Services builds high-performance websites, brand systems and paid growth
              engines for ambitious companies. Strategy first, design obsessed, measured on revenue.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Link to="/contact" className="dws-btn dws-btn-solid">
                Book a Free Strategy Call
              </Link>
              <Link to="/case-studies" className="dws-btn dws-btn-outline">
                View Our Work
              </Link>
            </div>

            <div className="row row-cols-1 row-cols-sm-3 g-4 mt-5 pt-4 text-center dws-mono">
              {[
                ["Custom Code", "No bloated page builders"],
                ["Jaipur Studio", "Direct founder execution"],
                ["Core Web Vitals", "Sub-second load targets"],
              ].map(([heading, desc]) => (
                <div className="col" key={heading}>
                  <div className="fs-4 fw-semibold text-white">{heading}</div>
                  <div className="dws-muted small mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
