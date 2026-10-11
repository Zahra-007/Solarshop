import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Solutions } from "@/components/Solutions";
import { WhySolarshop } from "@/components/WhySolarshop";
import { HowItWorks } from "@/components/HowItWorks";
import { Projects } from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory text-ink flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Solutions />
        <WhySolarshop />
        <HowItWorks />
        <Projects />
        <Testimonial />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
