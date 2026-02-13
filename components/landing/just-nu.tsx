"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const topics = [
  {
    title: "OpenClaw",
    description:
      "Exploderar globalt, vi har svenska early adopters som bygger och delar kod",
  },
  {
    title: "MCP-servrar",
    description:
      "Koppla Claude och andra modeller till verkliga verktyg och data",
  },
  {
    title: "Multi-agent patterns",
    description:
      "System där agenter delegerar, samarbetar och löser uppgifter tillsammans",
  },
  {
    title: "Lokal körning",
    description: "Agenter som kör på din egen hårdvara, dina regler",
  },
];

export function JustNu() {
  return (
    <section
      id="just-nu"
      className="border-b border-border/40 px-6 py-16 md:py-20"
      aria-labelledby="just-nu-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          id="just-nu-heading"
          className="flex items-center gap-2 text-3xl font-bold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Just nu i communityt
          <span className="text-2xl" aria-hidden="true">
            🔥
          </span>
        </motion.h2>
        <motion.p
          className="mt-3 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Det rör sig snabbt. Här är vad folk labbar med just nu:
        </motion.p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="border-border/60 bg-card/50 transition-colors hover:border-emerald-500/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="mt-6 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Det här ändras varje månad. Det som inte ändras: folket som bygger.
        </motion.p>
      </div>
    </section>
  );
}
