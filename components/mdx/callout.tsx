import { cn } from "@/lib/utils";
import { Info, AlertTriangle, Lightbulb, AlertCircle } from "lucide-react";

export type CalloutType = "info" | "warning" | "tip" | "danger";

const styles: Record<
  CalloutType,
  { icon: typeof Info; border: string; bg: string; iconColor: string }
> = {
  info: {
    icon: Info,
    border: "border-l-blue-500",
    bg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-l-amber-500",
    bg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  tip: {
    icon: Lightbulb,
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  danger: {
    icon: AlertCircle,
    border: "border-l-red-500",
    bg: "bg-red-500/10",
    iconColor: "text-red-400",
  },
};

type CalloutProps = {
  type?: CalloutType;
  children: React.ReactNode;
  className?: string;
};

export function Callout({ type = "info", children, className }: CalloutProps) {
  const { icon: Icon, border, bg, iconColor } = styles[type];
  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-r-lg border border-border/60 border-l-4 py-4 pl-4 pr-4 transition-colors",
        border,
        bg,
        className
      )}
      role="note"
    >
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", iconColor)} aria-hidden />
      <div className="min-w-0 flex-1 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
