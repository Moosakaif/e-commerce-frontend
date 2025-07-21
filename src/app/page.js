import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Protected from "@/components/Protected"
import Services from "@/components/Services";
import GlobalCenters from "@/components/GlobalCenters";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Protected />
      <Services />
      <GlobalCenters />
      <TrustSection />
      <Testimonials />
      <Footer />
      {/* Other upcoming sections: Services, Trust, Testimonials, etc. */}
    </main>
  );
}
