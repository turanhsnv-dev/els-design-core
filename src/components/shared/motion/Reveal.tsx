"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { VIEWPORT_ONCE, containerVariants, fadeUpItemVariants } from "@/lib/motion";

type ContainerProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delayChildren?: number;
};

export function RevealContainer({
  children,
  stagger = 0.07,
  delayChildren = 0.04,
  ...props
}: ContainerProps) {
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

type ItemProps = HTMLMotionProps<"div"> & { variants?: Variants };

export function RevealItem({
  children,
  variants = fadeUpItemVariants,
  ...props
}: ItemProps) {
  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}
