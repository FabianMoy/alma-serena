import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "outlineLight";
type Common = { variant?: Variant; className?: string; children: ReactNode };
type AnchorProps = Common & { href: string } & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;
type ButtonProps = Common & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

const variants: Record<Variant, string> = {
  primary: "bg-sage-700 text-white hover:bg-sage-800",
  secondary: "border border-sage-700/30 text-sage-800 hover:bg-sage-100",
  light: "bg-ivory text-sage-900 hover:bg-white",
  outlineLight: "border border-white/40 text-white hover:bg-white/10",
};

export default function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[0.95rem] font-medium transition-colors duration-200 ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    const { href, variant: _v, className: _c, children: _ch, ...rest } = props;
    return <a href={href} className={classes} {...rest}>{children}</a>;
  }
  const { variant: _v, className: _c, children: _ch, href: _h, ...rest } = props;
  return <button type="button" className={classes} {...rest}>{children}</button>;
}
