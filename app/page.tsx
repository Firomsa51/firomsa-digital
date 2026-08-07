import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <WhyWorkWithMe />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
