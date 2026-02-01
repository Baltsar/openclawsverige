"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Flag, Wrench, Rocket, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Samarbeta på svenska",
    description:
      "Inget språkbarriär. Diskutera, felsök och innovera på ditt modersmål med folk i samma tidszon.",
    icon: Flag,
  },
  {
    title: "Hands-on, inte fluff",
    description:
      "Vi delar faktisk kod, verkliga use cases och konkreta lösningar. Mindre teori, mer action.",
    icon: Wrench,
  },
  {
    title: "Early adopter-fördel",
    description:
      "OpenClaw exploderar globalt. Bli en av de första i Norden som behärskar tekniken.",
    icon: Rocket,
  },
  {
    title: "Open source first",
    description:
      "Vi tror på FOSS-filosofin. Allt vi bygger delas öppet. Alla kan bidra, alla får tillgång.",
    icon: Handshake,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function WhyOpenClaw() {
  return (
    <section
      id="varfor"
      className="border-b border-border/40 px-6 py-16 md:py-20"
      aria-labelledby="why-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          id="why-heading"
          className="text-center text-3xl font-bold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Varför ett svenskt OpenClaw-community?
        </motion.h2>
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={item}>
              <Card className="h-full border-border/60 bg-card/50 transition-colors hover:border-emerald-500/20 hover:bg-card/80">
                <CardHeader className="space-y-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400"
                    aria-hidden="true"
                  >
                    <f.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
