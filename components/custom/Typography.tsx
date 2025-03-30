import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

export function Typography({
  variant = "p",
  children,
  className,
}: {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: ReactNode;
  className?: string;
}) {
  const variants: ClassValue = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
    p: "text-base",
    span: "text-sm text-gray-800",
  };

  const variantClass = variants[variant];
  return (
    <div
      className={cn(
        "text-accent-foreground flex items-center gap-2",
        variantClass,
        className
      )}
    >
      {children}
    </div>
  );
}
