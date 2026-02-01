import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { WhyOpenClaw } from "@/components/landing/why-open-claw";
import { VadViGor } from "@/components/landing/vad-vi-gor";
import { CommunityBenefits } from "@/components/landing/community-benefits";
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
      <CommunityBenefits />
      <EarlyAdopter />
      <VemArDettaFor />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
