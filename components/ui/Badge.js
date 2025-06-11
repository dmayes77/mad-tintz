import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// CVA-based badge with 3D gradient and glow effect
const badgeVariants = cva(
  "inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transform-gpu text-nowrap relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-accent/60 via-accent/40 to-accent/20 text-accent",
        danger:
          "bg-gradient-to-br from-destructive/60 via-destructive/40 to-destructive/20 text-white",
        mute: "bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200 text-gray-800",
        header:
          "bg-gradient-to-br from-accent via-accent/70 to-accent text-accent-foreground h2 py-6!",
      },
      size: {
        default: "h-9 text-sm",
        sm: "h-8 text-xs",
        lg: "h-10 text-base",
        icon: "h-9 w-9 p-0 justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Pseudo-element glow under badge
const glowClasses =
  "after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:block after:h-2 after:w-3/4 after:rounded-full after:bg-current after:opacity-40 after:blur-xl";

/**
 * Badge component with 3D-ish gradient and bottom glow
 * @param {{ children: React.ReactNode; variant?: keyof typeof badgeVariants.__types.variants.variant; size?: keyof typeof badgeVariants.__types.variants.size; className?: string; asChild?: boolean }} props
 */
const Badge = React.forwardRef(
  ({ children, variant, size, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }), glowClasses)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
