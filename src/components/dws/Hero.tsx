import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ShinyText } from "./reactbits/ShinyText";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Hero() {
  return (
    <section id="home" className="dws-hero">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <motion.div
          className="row justify-content-center text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="col-lg-10 col-xl-9">
            <motion.div variants={item}>
              <span className="dws-badge">
                <ShinyText text="Web Development & SEO Studio in Jaipur" />
              </span>
            </motion.div>

            {/* Exactly one H1 containing the primary keyword */}
            <motion.h1 className="display-2 mt-4 mb-4 text-white fw-bold" variants={item}>
              Website Design &amp; SEO Agency in Jaipur
            </motion.h1>

            {/* Tagline preserved as subheading without em dashes */}
            <motion.p className="dws-hero-sub dws-muted mx-auto mb-5" variants={item}>
              DWS Web Services builds high-performance websites, brand systems and paid growth
              engines for ambitious companies. Strategy first, design obsessed, measured on revenue.
            </motion.p>

            <motion.div
              className="d-flex flex-column flex-sm-row justify-content-center gap-3"
              variants={item}
            >
              <Link to="/contact" className="dws-btn dws-btn-solid">
                Book a Free Strategy Call
              </Link>
              <Link to="/case-studies" className="dws-btn dws-btn-outline">
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              className="row row-cols-1 row-cols-sm-3 g-4 mt-5 pt-4 text-center dws-mono"
              variants={item}
            >
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
