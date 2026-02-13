"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Bot, Globe, Users, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Agenter, inte chatbots",
    description:
      "Vi bygger saker som gör saker. Autonoma workflows, tool use, multi-agent-system. Nästa steg efter promptande.",
    icon: Bot,
  },
  {
    title: "På svenska, i din tidszon",
    description:
      "Diskutera, felsök och innovera på ditt modersmål. Inga språkbarriärer, inga tidsskillnader.",
    icon: Globe,
  },
  {
    title: "Online + IRL",
    description:
      "Discord för det dagliga. Fysiska byggsessioner runt om i Sverige för det som skärmar inte kan ge dig.",
    icon: Users,
  },
  {
    title: "Verktygsagnostiskt",
    description:
      "OpenClaw, CrewAI, AutoGen, LangGraph, MCP, Claude tool use, rå Python — vi bryr oss om vad du bygger, inte vilket ramverk du använder.",
    icon: Wrench,
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
          Varför opensverige?
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
