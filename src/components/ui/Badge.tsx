import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "accent" | "success" | "neutral" | "outline";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

const badgeVariants = {
  brand: "bg-brand-50 text-brand-700 border border-brand-200/70",
  accent: "bg-accent-50 text-accent-700 border border-accent-200/70",
  success: "bg-emerald-50 text-emerald-700 border border-emerald-200/70",
  neutral: "bg-slate-100 text-slate-700 border border-slate-200",
  outline: "bg-transparent text-slate-700 border border-slate-300",
};

const badgeSizes = {
  sm: "text-[11px] px-2 py-0.5 font-medium rounded",
  md: "text-xs px-2.5 py-1 font-medium rounded-md",
};

export function Badge({
  children,
  className,
  variant = "brand",
  size = "md",
  icon,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-sans tracking-wide",
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
