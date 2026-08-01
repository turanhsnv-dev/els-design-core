"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import {
  VIEWPORT_ONCE,
  containerVariants,
  fadeUpItemVariants,
  fadeUpTransition,
} from "@/lib/motion";

type RevealContainerProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delayChildren?: number;
};

export function RevealContainer({
  children,
  stagger = 0.07,
  delayChildren = 0.04,
  ...props
}: RevealContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={containerVariants(stagger, delayChildren)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = HTMLMotionProps<"div"> & {
  variants?: Variants;
};

export function RevealItem({
  children,
  variants = fadeUpItemVariants,
  ...props
}: RevealItemProps) {
  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={fadeUpTransition(delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
