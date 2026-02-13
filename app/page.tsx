import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { WhyOpenClaw } from "@/components/landing/why-open-claw";
import { VadViGor } from "@/components/landing/vad-vi-gor";
import { IRLSessioner } from "@/components/landing/irl-sessioner";
import { JustNu } from "@/components/landing/just-nu";
import { EarlyAdopter } from "@/components/landing/early-adopter";
import { VemArDettaFor } from "@/components/landing/vem-ar-detta-for";
import { FAQ } from "@/components/landing/faq";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyOpenClaw />
      <VadViGor />
      <IRLSessioner />
      <JustNu />
      <VemArDettaFor />
      <EarlyAdopter />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
