import { Link, type LinkProps } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const styles = {
  primary: "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-brand transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  secondary: "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  light: "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-background px-6 py-3 text-sm font-bold text-primary shadow-brand transition-all hover:-translate-y-0.5 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof styles };
export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`${styles[variant]} ${className}`} {...props} />;
}

export function ButtonLink({ children, variant = "primary", className = "", ...props }: LinkProps & { children: ReactNode; variant?: keyof typeof styles; className?: string }) {
  return <Link className={`${styles[variant]} ${className}`} {...props}>{children}</Link>;
}
