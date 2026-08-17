import type { ElementType, HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children?: ReactNode;
};

export default function Container({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: Props) {
  const Component = Tag as ElementType<HTMLAttributes<HTMLElement>>;
  return (
    <Component
      className={`w-full max-w-350 mx-auto px-8 md:px-16 lg:px-32 xl:px-40 ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
