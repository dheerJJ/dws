import { motion } from "framer-motion";
import { SplitText } from "./reactbits/SplitText";
import { ShinyText } from "./reactbits/ShinyText";
import { MagnetButton } from "./reactbits/MagnetButton";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 1.9 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
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
                <ShinyText text="🔥 Premium Digital Marketing Agency" />
              </span>
            </motion.div>

            <SplitText
              as="h1"
              className="display-2 mt-4 mb-4 dws-split"
              text="Grow Your Brand with a Results-Driven Agency."
              delay={2.1}
              stagger={0.06}
            />

            <motion.p className="dws-hero-sub dws-muted mx-auto mb-5" variants={item}>
              DwS builds high-performance websites, brand systems and paid growth engines for
              ambitious companies. Strategy first, design obsessed, measured on revenue.
            </motion.p>

            <motion.div
              className="d-flex flex-column flex-sm-row justify-content-center gap-3"
              variants={item}
            >
              <MagnetButton href="#contact" className="dws-btn dws-btn-solid">
                Book a Free Strategy Call
              </MagnetButton>
              <MagnetButton href="#portfolio" className="dws-btn dws-btn-outline">
                View Our Work
              </MagnetButton>
            </motion.div>

            <motion.div
              className="row row-cols-3 g-4 mt-5 pt-4 text-center dws-mono"
              variants={item}
            >
              {[
                ["10+", "Projects delivered"],
                ["4.2x", "Avg. ROAS lift"],
                ["2 yrs", "Compounding craft"],
              ].map(([value, label]) => (
                <div className="col" key={label}>
                  <div className="fs-3 fw-semibold">{value}</div>
                  <div className="dws-muted small">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
