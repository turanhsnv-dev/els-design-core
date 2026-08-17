import type { UseInViewOptions, Variants } from "framer-motion";

export const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;
export const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

/** Single trigger per block — reliable on desktop + mobile with Lenis */
export const VIEWPORT_ONCE: UseInViewOptions = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -40px 0px",
};

export const containerVariants = (stagger = 0.07, delayChildren = 0.04): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const fadeUpItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_OUT } },
};

export const fadeInItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
};

export const scaleDownItemVariants: Variants = {
  hidden: { opacity: 0, scale: 1.06, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE_SMOOTH },
  },
};

export const slideInLeftItemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};
