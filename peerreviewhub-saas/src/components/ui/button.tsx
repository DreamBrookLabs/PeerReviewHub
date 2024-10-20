import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-netural-100 disabled:from-neutral-100 disabled:to-neutral-100 disabled:text-neutral-300 border border-neutral-200 shadow-sm",
  {
    variants: {
      variant: {
        prh:
         "bg-gradient-to-b from-[#6968DA] to-[#5C5BCE] text-primary-foreground hover:from-[#5C5BCE] hover:to-[#5C5BCE]",
        prh2:
         "bg-gradient-to-b from-[#2F9665] to-[#297F5C] text-primary-foreground hover:from-[#297F5C] hover:to-[#297F5C]",
        primary:
          "bg-gradient-to-b from-blue-600 to-blue-700 text-primary-foreground hover:from-blue-700 hover:to-blue-700",
        destructive:
          "bg-gradient-to-b from-orange-600 to-orange-700 text-destructive-foreground hover:from-orange-700 hover:to-orange-700",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-white text-black hover:bg-netural-100",
        ghost: "border-transparent showdow-none hover:bg-accent hover:text-accent-foreground",
        muted: "bg-netural-200 text-neutral-600 hover:bg-neutral-200/80",
        tertiary: "bg-blue-100 text-blue-600 border-transparent hover:bg-blue-200 shadow-none"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        xs: "h-7 rounded-md px-2 text-xs",
        lg: "h-12 rounded-md px-8",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "prh",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
