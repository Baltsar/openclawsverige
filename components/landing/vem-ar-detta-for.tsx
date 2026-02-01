"use client";

import { motion } from "framer-motion";

const points = [
  "Kodar i Python/TypeScript/JavaScript",
  "Är nyfiken på AI-agenter och automation",
  "Vill experimentera med OpenClaw",
  "Föredrar svenskt community framför globala",
  "Gillar open source och kunskapsdelning",
  "Vill bygga, inte bara prata",
];

export function VemArDettaFor() {
  return (
    <section
      id="vem"
      className="border-b border-border/40 bg-card/30 px-6 py-24 md:py-32"
      aria-labelledby="vem-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="grid gap-16 lg:grid-cols-2 lg:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h2
              id="vem-heading"
              className="text-3xl font-bold tracking-tight md:text-4xl"
            >
              Vem är detta för?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Du passar här om du:
            </p>
          </div>
          <div className="space-y-4">
            {points.map((p, i) => (
              <motion.p
                key={p}
                className="flex gap-3 text-muted-foreground"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <span className="text-emerald-500">•</span> {p}
              </motion.p>
            ))}
            <p className="pt-4 font-medium text-foreground">
              Du behöver INTE vara expert – vi lär oss tillsammans.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
