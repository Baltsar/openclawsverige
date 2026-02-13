"use client";

import { motion } from "framer-motion";

const items = [
  "Autonoma agenter som löser verkliga problem",
  "Multi-agent-system där agenter samarbetar",
  "MCP-servrar och tool use-integrationer",
  "Automationsflöden och AI-pipelines",
  "Verktyg ovanpå LLMs — inte bara wrappers, utan agenter med minne, verktyg och mål",
  "Allt från vibecodade prototyper till produktionssystem",
];

export function VadViGor() {
  return (
    <section
      id="vad-vi-gor"
      className="border-b border-border/40 px-6 py-16 md:py-20"
      aria-labelledby="vad-heading"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          id="vad-heading"
          className="text-3xl font-bold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Vad bygger folk?
        </motion.h2>
        <ul className="mt-8 space-y-6">
          {items.map((text, i) => (
            <motion.li
              key={text}
              className="flex gap-4 text-muted-foreground"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              <span className="leading-relaxed">{text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
