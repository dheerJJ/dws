import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Artificial delays removed to protect LCP and prevent crawler blocking.
    // Transition out swiftly under 200ms without freezing scroll.
    const t = setTimeout(() => setDone(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="dws-preloader"
          aria-hidden="true"
          initial={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          style={{ pointerEvents: "none" }}
        />
      )}
    </AnimatePresence>
  );
}
