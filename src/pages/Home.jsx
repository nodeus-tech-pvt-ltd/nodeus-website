import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Solutions from "../components/Solutions";
import HowWeWork from "../components/HowWeWork";
import WhyNodeus from "../components/WhyNodeus";
import ProofSection from "../components/ProofSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AnimatedPage from "../components/AnimatedPage";

function Home() {
  return (
    <AnimatedPage>
      <Navbar />

      <main>
        <Hero />
        <TrustStrip />
        <Solutions />
        <HowWeWork />
        <WhyNodeus />
        <ProofSection />
        <ContactSection />
      </main>

      <Footer />
    </AnimatedPage>
  );
}

export default Home;