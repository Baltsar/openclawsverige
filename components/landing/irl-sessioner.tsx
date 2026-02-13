"use client";

import { motion } from "framer-motion";
import { Coffee, MapPin, Users } from "lucide-react";

const steps = [
  "Fika & intros (15 min)",
  "Byggsession (50 min)",
  "Paus (10 min)",
  "Byggsession (50 min)",
  "Show & tell (20 min) — visa vad du byggt, halvfärdigt är standard",
];

export function IRLSessioner() {
  return (
    <section
      id="irl"
      className="border-b border-border/40 bg-card/30 px-6 py-16 md:py-20"
      aria-labelledby="irl-heading"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          id="irl-heading"
          className="text-3xl font-bold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          IRL-sessioner
        </motion.h2>
        <motion.h3
          className="mt-6 flex items-center gap-2 text-xl font-semibold text-emerald-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Coffee className="h-5 w-5" aria-hidden="true" />
          Fika. Bygg. Visa.
        </motion.h3>
        <motion.p
          className="mt-4 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Vi ses inte bara online. opensverige kör fysiska byggsessioner där vi
          sitter ner och jobbar på våra projekt — ihop.
        </motion.p>
        <div className="mt-6">
          <p className="font-medium text-foreground">Formatet:</p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted-foreground">
            {steps.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </div>
        <motion.div
          className="mt-8 flex flex-col gap-4 rounded-lg border border-border/60 bg-background/50 p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center gap-2 font-medium text-foreground">
            <MapPin className="h-4 w-4 text-emerald-500" aria-hidden="true" />
            Var?
          </p>
          <p className="text-muted-foreground">
            Coworking-spaces, caféer, parker med en Starlink och ett batteri. Vi
            är inte bundna till en lokal eller en stad.
          </p>
          <p className="flex items-center gap-2 font-medium text-foreground">
            <Users className="h-4 w-4 text-emerald-500" aria-hidden="true" />
            Starta en nod
          </p>
          <p className="text-muted-foreground">
            Du behöver inte fråga om lov. Hitta en plats, posta i Discord, dyk
            upp. Tre personer räcker.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
