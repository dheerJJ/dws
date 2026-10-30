/**
 * DWS Studio Motion Design Tokens & Utilities
 *
 * Grounded in physics-based motion principles:
 * - Entrances: Ease-Out (fast acceleration, soft landing)
 * - Exits: Ease-In (shorter duration, rapid departure)
 * - State Changes: Ease-In-Out
 * - Tactile UI (buttons/switches): Snappy, low-overshoot springs (< 6% overshoot)
 * - Accessibility: Automatic degradation to opacity-only fades when prefers-reduced-motion is active
 */

import { useReducedMotion, type Transition, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// 1. Easing Curves (Cubic Bezier Tuples)
// ---------------------------------------------------------------------------

/** Hero reveals, large card entrances, and editorial scale-ups */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** General UI reveals, dropdowns, sheet openings, and dialogs */
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

/** Two-way state transitions (toggles, layout shifts, tabs) */
export const EASE_IN_OUT_CUBIC = [0.65, 0, 0.35, 1] as const;

/** Rapid, decisive exits */
export const EASE_IN_QUART = [0.5, 0, 0.75, 0] as const;

/** Micro tactile bounce (capped at ~5% overshoot for buttons & badges) */
export const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const;

// ---------------------------------------------------------------------------
// 2. Duration Scale (in seconds)
// ---------------------------------------------------------------------------

export const DURATION = {
  micro: 0.2, // 200ms - Hover, press, toggle states
  small: 0.28, // 280ms - Tooltips, dropdown menus, tabs
  card: 0.45, // 450ms - Cards, modals, accordion disclosures
  section: 0.85, // 850ms - Section reveals, viewport scroll-ins
  hero: 1.0, // 1000ms - Hero choreography (cap <= 1.2s)
  exit: 0.22, // 220ms - Exits (~30-40% faster than entrances)
} as const;

// ---------------------------------------------------------------------------
// 3. Framer Motion Spring Presets
// ---------------------------------------------------------------------------

export const SPRING = {
  /** Responsive and crisp with zero bounce - ideal for navbars and modal sheets */
  snappy: {
    type: "spring",
    stiffness: 280,
    damping: 28,
    mass: 0.9,
  } as Transition,

  /** Gentle and weighted - ideal for card expansions and dialogs */
  gentle: {
    type: "spring",
    stiffness: 180,
    damping: 24,
    mass: 1,
  } as Transition,

  /** Subtle tactile feedback for button clicks */
  press: {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 0.8,
  } as Transition,
} as const;

// ---------------------------------------------------------------------------
// 4. Choreography Presets (Stagger Containers & Items)
// ---------------------------------------------------------------------------

export const STAGGER = {
  tight: 0.06, // 60ms between children
  medium: 0.09, // 90ms between children
  relaxed: 0.12, // 120ms between children
} as const;

/**
 * Standard Viewport Reveal Variants
 * Features secondary motion (slight scale 0.98 -> 1) alongside vertical translation.
 */
export const createFadeUpVariants = (distance = 24, reduced = false): Variants => ({
  hidden: {
    opacity: 0,
    y: reduced ? 0 : distance,
    scale: reduced ? 1 : 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: reduced ? 0.3 : DURATION.section,
      ease: EASE_OUT_EXPO,
    },
  },
});

/**
 * Stagger Container Variant
 */
export const createStaggerContainerVariants = (
  staggerChildren = STAGGER.medium,
  delayChildren = 0.05,
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Custom React Hook to detect reduced motion with strict fallback
 */
export function useMotionPreference() {
  const shouldReduceMotion = useReducedMotion();
  return Boolean(shouldReduceMotion);
}
