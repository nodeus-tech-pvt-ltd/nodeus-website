import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Solutions from "../components/Solutions";
import HowWeWork from "../components/HowWeWork";
import WhyNodeus from "../components/WhyNodeus";
import ProofSection from "../components/ProofSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;