"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DISCORD_URL = "https://discord.gg/ZE8CtUkaWD";
const FACEBOOK_URL = "https://www.facebook.com/groups/2097332881024571";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="border-b border-border/40 px-6 py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto max-w-2xl text-center">
        <motion.h2
          id="cta-heading"
          className="text-3xl font-bold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          Redo att börja bygga?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Gå med idag. Dela dina idéer. Bygg någonting häftigt.
        </motion.p>
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Button
            variant="discord"
            size="lg"
            className="min-w-[200px] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            asChild
          >
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              Gå med i Discord
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-[200px] border-border bg-transparent transition-transform hover:scale-[1.02] hover:bg-secondary active:scale-[0.98]"
            asChild
          >
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook-gruppen
            </a>
          </Button>
        </motion.div>
        <p className="mt-6 text-sm text-muted-foreground">
          Gratis. Inga krav. Bara bygga.
        </p>
      </div>
    </section>
  );
}
