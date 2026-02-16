"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type TabsProps = {
  items: string[];
  children: React.ReactNode;
  className?: string;
};

export function Tabs({ items, children, className }: TabsProps) {
  const [active, setActive] = useState(0);
  const tabs = Array.isArray(children) ? children : [children];
  return (
    <div className={cn("my-6 overflow-hidden rounded-xl border border-border/60", className)}>
      <div className="flex border-b border-border/60 bg-muted/30">
        {items.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium transition-colors",
              active === i
                ? "border-b-2 border-emerald-500 text-emerald-400 bg-background/50"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-selected={active === i}
            role="tab"
          >
            {label}
          </button>
        ))}
      </div>
      <div className="bg-[hsl(0_0%_8%)] p-0" role="tabpanel">
        {tabs[active]}
      </div>
    </div>
  );
}

type TabProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tab({ children, className }: TabProps) {
  return (
    <div
      className={cn("overflow-x-auto [&_pre]:my-0 [&_pre]:rounded-none [&_pre]:border-0", className)}
    >
      {children}
    </div>
  );
}
