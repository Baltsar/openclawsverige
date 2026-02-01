"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Tillgång till svenskt OpenClaw-community",
  "Direktkanal till andra svenska utvecklare",
  "Delad kodbank och resurser",
  "Hjälp när du kör fast",
  "Möjlighet att påverka svensk AI-utveckling",
  "Nätverk med likasinnade tech-entusiaster",
];

export function CommunityBenefits() {
  return (
    <section
      id="vad-far-du"
      className="border-b border-border/40 bg-card/30 px-6 py-24 md:py-32"
      aria-labelledby="benefits-heading"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          id="benefits-heading"
          className="text-3xl font-bold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Vad får du?
        </motion.h2>
        <ul className="mt-12 space-y-5">
          {benefits.map((text, i) => (
            <motion.li
              key={text}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
                aria-hidden="true"
              >
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-foreground/90">{text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
