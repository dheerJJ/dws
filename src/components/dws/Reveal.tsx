import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT_EXPO, STAGGER, useMotionPreference } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  scale?: number;
  duration?: number;
};

/**
 * Standard Viewport Reveal Component
 *
 * Implements physics-based deceleration:
 * - Ease-Out Expo curve for a fast start and soft, luxurious landing
 * - Secondary motion: 24px vertical lift + 0.985 -> 1.0 subtle scale settling
 * - Viewport trigger: 15% inside viewport (start: "top 85%")
 * - Accessibility: Automatically drops transform and shortens duration when reduced motion is preferred
 */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
  scale = 0.985,
  duration = DURATION.section,
}: RevealProps) {
  const shouldReduceMotion = useMotionPreference();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : y,
        scale: shouldReduceMotion ? 1 : scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.25 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EASE_OUT_EXPO,
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

/**
 * Choreographed Stagger Group
 * Staggers children entries naturally without manual index math.
 */
export function StaggerGroup({
  children,
  className,
  stagger = STAGGER.tight,
  delay = 0.05,
}: StaggerGroupProps) {
  const shouldReduceMotion = useMotionPreference();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: shouldReduceMotion ? 0 : delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export function StaggerItem({ children, className, y = 20 }: StaggerItemProps) {
  const shouldReduceMotion = useMotionPreference();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : y,
      scale: shouldReduceMotion ? 1 : 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.25 : DURATION.card,
        ease: EASE_OUT_EXPO,
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
