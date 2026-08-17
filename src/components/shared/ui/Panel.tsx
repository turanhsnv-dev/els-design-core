import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article";
  interactive?: boolean;
};

export default function Panel({
  as: Tag = "div",
  interactive = true,
  className = "",
  children,
  ...rest
}: Props) {
  const hover = interactive ? "hover:border-white/12 transition-all duration-500" : "";
  return (
    <Tag
      className={`rounded-2xl bg-[#0e0e13] border border-white/6 ${hover} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
