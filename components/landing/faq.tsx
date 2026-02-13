"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Vad är opensverige?",
    answer:
      "opensverige är det svenska AI agent-communityt. Vi samlas på Discord och Facebook, ses IRL på byggsessioner, och hjälper varandra bygga agenter — oavsett verktyg (OpenClaw, CrewAI, MCP, eget).",
  },
  {
    question: "Vem kan gå med?",
    answer:
      "Alla som vill bygga eller lära sig bygga AI-agenter. Du behöver inte vara expert eller ens ha en fungerande agent — bara vilja bygga.",
  },
  {
    question: "Varför ett svenskt community?",
    answer:
      "På svenska, i din tidszon. Inga språkbarriärer, och vi kör dessutom fysiska byggsessioner runt om i Sverige.",
  },
  {
    question: "Kostar det något?",
    answer:
      "Nej. opensverige är gratis, öppet och verktygsagnostiskt. Inga krav.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-border/40 px-6 py-16 md:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          id="faq-heading"
          className="text-3xl font-bold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Vanliga frågor
        </motion.h2>
        <motion.p
          className="mt-3 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Allt du behöver veta för att komma igång
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-1 rounded-lg border border-border/60 bg-card/30"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border-border/40 px-6 last:border-0"
              >
                <AccordionTrigger className="py-5 text-left font-medium hover:no-underline hover:text-emerald-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
