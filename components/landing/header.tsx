"use client";

import { Button } from "@/components/ui/button";

const DISCORD_URL = "https://discord.gg/ZE8CtUkaWD";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="text-xl font-semibold tracking-tight">
          Open Claw Sverige
        </a>
        <nav className="flex items-center gap-3">
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Öppet community
          </span>
          <Button variant="discord" size="sm" asChild>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              Gå med i Discord
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
