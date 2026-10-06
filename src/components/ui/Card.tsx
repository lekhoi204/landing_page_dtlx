import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "featured" | "flat";
  as?: React.ElementType;
}

const cardVariants = {
  default:
    "bg-white border border-slate-200/90 rounded-2xl shadow-sm transition-shadow duration-200",
  interactive:
    "bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-200",
  featured:
    "bg-white border-2 border-brand-500 rounded-2xl shadow-md relative overflow-hidden",
  flat: "bg-slate-50 border border-slate-200/70 rounded-2xl",
};

export function Card({
  className,
  variant = "default",
  as: Component = "div",
  children,
  ...props
}: CardProps) {
  return (
    <Component className={cn(cardVariants[variant], className)} {...props}>
      {children}
    </Component>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pb-3 flex flex-col gap-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  as: Component = "h3",
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: React.ElementType }) {
  return (
    <Component
      className={cn("text-lg font-bold text-slate-900 tracking-tight", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-slate-600 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0 text-slate-700", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-6 pt-0 border-t border-slate-100 flex items-center justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
