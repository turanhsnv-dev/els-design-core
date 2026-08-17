import type { ElementType, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & { as?: ElementType };

export default function Container({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <Tag
      className={`w-full max-w-350 mx-auto px-8 md:px-16 lg:px-32 xl:px-40 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
