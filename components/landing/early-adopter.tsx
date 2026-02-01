"use client";

import { motion } from "framer-motion";

const bullets = [
  "Du kan forma communityts riktning",
  "Möjlighet att bli moderator/community leader",
  "Tidigt nätverk med framtidens svenska AI-builders",
  "Ingen fluff, bara folk som verkligen vill bygga",
];

export function EarlyAdopter() {
  return (
    <section
      id="early-adopter"
      className="border-b border-border/40 px-6 py-16 md:py-20"
      aria-labelledby="early-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.article
          className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 px-8 py-10 md:px-10 md:py-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <h2
            id="early-heading"
            className="text-2xl font-bold tracking-tight text-emerald-400 md:text-3xl"
          >
            Vi har precis börjat – och det är din chans
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vi är i uppstartsfasen. Det betyder:
          </p>
          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2 text-foreground/90">
                <span className="text-emerald-500">•</span>
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted-foreground">
            OpenClaw har gått från 0 till miljontals användare på veckor
            globalt. Nu bygger vi svenska hubben.
          </p>
        </motion.article>
      </div>
    </section>
  );
}
