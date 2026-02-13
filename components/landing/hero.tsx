"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const DISCORD_URL = "https://discord.gg/ZE8CtUkaWD";
const FACEBOOK_URL = "https://www.facebook.com/groups/2097332881024571";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden border-b border-border/40 px-6 py-12 md:py-16"
      aria-labelledby="hero-heading"
    >
      <div className="container relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 lg:grid-cols-[auto_1fr] lg:gap-8">
        <motion.div
          className="relative mx-auto flex justify-center lg:mx-0 lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-24 w-24 shrink-0 md:h-28 md:w-28 lg:h-32 lg:w-32">
            <Image
              src="/500x500-opensverige_transp.png"
              alt="opensverige – AI agent-community"
              fill
              className="object-contain object-center"
              priority
              sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
            />
          </div>
        </motion.div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.h1
            id="hero-heading"
            className="text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Det svenska AI agent-communityt.
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground md:text-xl lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            opensverige samlar folk som bygger AI-agenter i Sverige. Vi delar
            kod, ses IRL, och hjälper varandra skicka saker — oavsett om du kör
            OpenClaw, CrewAI, MCP, eller bygger eget.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="discord"
              size="lg"
              className="min-w-[200px] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                Gå med i Discord →
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] border-border bg-transparent transition-transform hover:scale-[1.02] hover:bg-secondary active:scale-[0.98]"
              asChild
            >
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                Facebook-gruppen →
              </a>
            </Button>
          </motion.div>
          <motion.p
            className="mt-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Gratis. Öppen källkod. Verktygsagnostiskt.
          </motion.p>
        </div>
      </div>
      <motion.a
        href="#varfor"
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        aria-label="Scrolla ned för att utforska"
      >
        <span className="text-xs font-medium">Scroll för att utforska</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
