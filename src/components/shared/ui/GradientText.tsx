import type { HTMLAttributes } from "react";

type Variant = "cyan" | "white" | "purple";

const VARIANTS: Record<Variant, string> = {
  cyan: "from-cyan-400 to-blue-500",
  white: "from-white to-white/30",
  purple: "from-[#A855F7] to-[#3B82F6]",
};

type Props = HTMLAttributes<HTMLSpanElement> & { variant?: Variant };

export default function GradientText({
  variant = "cyan",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <span
      className={`text-transparent bg-clip-text bg-linear-to-r ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
