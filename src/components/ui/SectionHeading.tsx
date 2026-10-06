import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  badge?: string;
  badgeVariant?: "brand" | "accent" | "success" | "neutral";
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  titleAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  badge,
  badgeVariant = "brand",
  title,
  description,
  align = "center",
  titleAs: TitleTag = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-10 md:mb-14",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
      {...props}
    >
      {badge && (
        <Badge variant={badgeVariant} size="md" className="font-semibold uppercase tracking-wider text-[11px]">
          {badge}
        </Badge>
      )}

      <TitleTag
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
      >
        {title}
      </TitleTag>

      {description && (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
