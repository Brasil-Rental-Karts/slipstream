import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-black rounded-full shadow-soft hover:bg-primary/90 active:bg-primary/80",
        secondary: "bg-secondary text-white rounded-full shadow-soft hover:bg-secondary/90 active:bg-secondary/80",
        outline: "border border-foreground/20 rounded-full text-foreground bg-transparent hover:bg-foreground/5 active:bg-foreground/10",
        ghost: "bg-transparent text-foreground rounded-full hover:bg-foreground/5 active:bg-foreground/10",
        destructive: "bg-destructive text-black rounded-full hover:bg-destructive/90 active:bg-destructive/80",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
      loading: {
        true: "cursor-progress",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, disabled, leftIcon: LeftIcon, rightIcon: RightIcon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || isLoading;
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, loading: isLoading ? true : undefined }), className)}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        )}
        {!isLoading && LeftIcon && <LeftIcon className="h-4 w-4" />}
        {children}
        {!isLoading && RightIcon && <RightIcon className="h-4 w-4" />}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };


