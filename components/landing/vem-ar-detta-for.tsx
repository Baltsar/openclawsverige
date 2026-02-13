"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Bygger eller vill bygga AI-agenter",
  "Experimenterar med multi-agent-system, MCP, tool use",
  "Vibecodar, promptar, eller skriver från scratch — alla nivåer",
  "Vill ha ett svenskt community istället för att drunkna i globala Discord-servrar",
  "Föredrar att bygga framför att prata om att bygga",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export function VemArDettaFor() {
  return (
    <section
      id="vem"
      className="border-b border-border/40 bg-card/30 px-6 py-16 md:py-20"
      aria-labelledby="vem-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h2
              id="vem-heading"
              className="text-3xl font-bold tracking-tight md:text-4xl"
            >
              Vem är detta för?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Du passar här om du:
            </p>
            <p className="mt-6 font-medium text-foreground">
              Du behöver inte vara expert. Du behöver inte ens ha en fungerande
              agent. Du behöver bara vilja bygga en.
            </p>
          </div>
          <motion.ul
            className="grid gap-3 sm:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {points.map((p) => (
              <motion.li key={p} variants={item}>
                <Card className="border-border/60 bg-background/50 transition-colors hover:border-emerald-500/30 hover:bg-background/80">
                  <CardContent className="flex flex-row items-center gap-3 p-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-foreground/90">
                      {p}
                    </span>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
