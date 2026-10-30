import { motion, type Variants } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ShinyText } from "./reactbits/ShinyText";
import { DURATION, EASE_OUT_EXPO, STAGGER, useMotionPreference } from "@/lib/motion";

export function Hero() {
  const shouldReduceMotion = useMotionPreference();

  // Choreographed parent container with 90ms stagger cadence
  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : STAGGER.medium,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  // Physics-based decelerating child item with subtle scale settling
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      scale: shouldReduceMotion ? 1 : 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.25 : DURATION.section,
        ease: EASE_OUT_EXPO,
      },
    },
  };

  return (
    <section id="home" className="dws-hero">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <motion.div
          className="row justify-content-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="col-lg-10 col-xl-9">
            <motion.div variants={itemVariants}>
              <span className="dws-badge">
                <ShinyText text="Web Development & SEO Studio in Jaipur" />
              </span>
            </motion.div>

            {/* Exactly one H1 containing the primary keyword - SSR rendered on frame 1 */}
            <motion.h1 variants={itemVariants} className="display-2 mt-4 mb-4 text-white fw-bold">
              Website Design &amp; SEO Agency in Jaipur
            </motion.h1>

            {/* Subheading follows visual reading hierarchy */}
            <motion.p variants={itemVariants} className="dws-hero-sub dws-muted mx-auto mb-5">
              DWS Web Services builds high-performance websites, brand systems and paid growth
              engines for ambitious companies. Strategy first, design obsessed, measured on revenue.
            </motion.p>

            {/* CTA action buttons */}
            <motion.div
              variants={itemVariants}
              className="d-flex flex-column flex-sm-row justify-content-center gap-3"
            >
              <Link to="/contact" className="dws-btn dws-btn-solid">
                Book a Free Strategy Call
              </Link>
              <Link to="/case-studies" className="dws-btn dws-btn-outline">
                View Our Work
              </Link>
            </motion.div>

            {/* Three key foundational pillars */}
            <motion.div
              variants={itemVariants}
              className="row row-cols-1 row-cols-sm-3 g-4 mt-5 pt-4 text-center dws-mono"
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
