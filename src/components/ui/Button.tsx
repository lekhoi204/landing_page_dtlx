import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "secondary" | "outline" | "outline-dark" | "white" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const buttonVariants = {
  variant: {
    primary:
      "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-sm hover:shadow transition-all duration-150 border border-transparent",
    accent:
      "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 shadow-sm hover:shadow-md transition-all duration-150 font-semibold border border-transparent",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 active:bg-slate-300 border border-slate-200/80 transition-colors duration-150",
    white:
      "bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-200 border border-white shadow-md transition-all duration-150 font-bold",
    outline:
      "bg-white text-slate-700 border border-slate-300 hover:border-brand-600 hover:bg-brand-50/50 hover:text-brand-700 active:bg-brand-100/60 transition-all duration-150",
    "outline-dark":
      "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40 active:bg-white/25 transition-all duration-150 font-semibold",
    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200 transition-colors duration-150",
    link: "bg-transparent text-brand-600 hover:text-brand-700 underline-offset-4 hover:underline p-0 h-auto",
  },
  size: {
    sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
    md: "text-sm px-4 py-2.5 rounded-lg gap-2",
    lg: "text-base px-6 py-3.5 rounded-xl gap-2.5",
    icon: "p-2 rounded-lg",
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      href,
      target,
      rel,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center font-medium select-none cursor-pointer",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.99]",
      buttonVariants.variant[variant],
      variant !== "link" && buttonVariants.size[size],
      fullWidth && "w-full",
      className
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={baseClasses}
          aria-disabled={disabled || isLoading}
          tabIndex={disabled || isLoading ? -1 : undefined}
        >
          {isLoading && (
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {!isLoading && leftIcon && (
            <span className="shrink-0">{leftIcon}</span>
          )}
          <span>{children}</span>
          {!isLoading && rightIcon && (
            <span className="shrink-0">{rightIcon}</span>
          )}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={baseClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
