import { cn } from "../../lib/utils";

export function Badge({ className, variant = "default", children, ...props }: any) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "secondary" && "bg-zinc-100 text-zinc-800",
        variant === "default" && "bg-zinc-900 text-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function Button({ className, variant = "default", size = "default", children, ...props }: any) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors text-sm",
        size === "default" && "px-4 py-2",
        size === "icon" && "size-9",
        variant === "default" && "bg-zinc-900 text-white hover:bg-zinc-800",
        variant === "outline" && "border border-zinc-200 bg-white hover:bg-zinc-50",
        variant === "ghost" && "hover:bg-zinc-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({ className, children, ...props }: any) {
  return (
    <div
      className={cn("rounded-xl border border-zinc-200 bg-white shadow-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: any) {
  return <div className={cn("flex flex-col space-y-1.5", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: any) {
  return <h3 className={cn("font-semibold leading-none tracking-tight", className)} {...props}>{children}</h3>;
}

export function CardDescription({ className, children, ...props }: any) {
  return <p className={cn("text-sm text-zinc-500", className)} {...props}>{children}</p>;
}

export function CardContent({ className, children, ...props }: any) {
  return <div className={cn(className)} {...props}>{children}</div>;
}

export function CardFooter({ className, children, ...props }: any) {
  return <div className={cn("flex items-center", className)} {...props}>{children}</div>;
}