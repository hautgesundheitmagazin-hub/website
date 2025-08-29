import * as React from "react";
import { cn } from "@/lib/utils";

// CI-Defaults via CSS-Variablen (mit Fallbacks)
// :root sollte enthalten:
// --sage:#CDE6DF; --graphite:#243236; --sand:#F5EDE6;

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border bg-white text-[var(--graphite,#243236)] shadow-sm",
        "border-[var(--sage,#CDE6DF)]",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, style, ...props }, ref) => (
    <h3
      ref={ref as any}
      className={cn("text-lg md:text-xl font-semibold tracking-tight", className)}
      style={{ fontFamily: 'Fraunces, serif', color: 'var(--graphite,#243236)', ...(style || {}) }}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, style, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm leading-relaxed", className)}
      style={{ color: 'var(--graphite,#243236)', opacity: 0.85, ...(style || {}) }}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export default Card;
