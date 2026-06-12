import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

const variantStyles = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary:
    "bg-secondary text-primary hover:bg-secondary/90 font-semibold rounded-none",
  outline: "border border-border bg-transparent hover:bg-muted",
  ghost: "hover:bg-muted",
} as const;

const sizeStyles = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-14 px-10 text-base",
} as const;

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "default",
      asChild = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = clsx(
      "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      className,
    );

    if (asChild) {
      return (
        <span ref={ref as never} className={classes}>
          {children}
        </span>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
