import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Community } from "@/components/landing/Community";
import { Events } from "@/components/landing/Events";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function AesamoPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Community />
        <Events />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
