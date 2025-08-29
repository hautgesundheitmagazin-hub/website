import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// CI nutzt CSS-Variablen. Fallbacks sind gesetzt, falls :root noch nicht definiert ist.
// :root Beispiel (global.css):
// :root{
//   --teal-500:#2FB7A2; --teal-700:#1F8C7F; --sand:#F5EDE6;
//   --sage:#CDE6DF; --graphite:#243236; --fog:#9AA7AE;
// }

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal-700,_#1F8C7F)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sand,_#F5EDE6)] disabled:pointer-events-none disabled:opacity-50 border shadow-sm",
  {
    variants: {
      variant: {
        // Primär: CI-Gradient (Teal 500 → Teal 700)
        default:
          "text-white bg-[linear-gradient(90deg,var(--teal-500,_#2FB7A2),var(--teal-700,_#1F8C7F))] hover:brightness-95 border-0",

        // Outline: Graphite-Text, Sage-Border, Hover Sand
        outline:
          "bg-white text-[var(--graphite,_#243236)] border-[var(--sage,_#CDE6DF)] hover:bg-[var(--sand,_#F5EDE6)]",

        // Ghost: transparent, dezente Sand-Hinterlegung auf Hover
        ghost:
          "bg-transparent text-[var(--graphite,_#243236)] hover:bg-[var(--sand,_#F5EDE6)] border-transparent shadow-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
