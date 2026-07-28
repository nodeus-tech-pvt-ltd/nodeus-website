import Hero from "../../components/home/Hero";
import TrustStrip from "../../components/home/TrustStrip";
import SolutionsPreview from "../../components/home/SolutionsPreview";
import HowWeWork from "../../components/home/HowWeWork";
import WhyNodeus from "../../components/home/WhyNodeus";
import ProofSection from "../../components/home/ProofSection";
import ContactSection from "../../components/home/ContactSection";

import AnimatedPage from "../../components/shared/AnimatedPage";

function Home() {
  return (
    <AnimatedPage>
      <main>
        <Hero />

        <TrustStrip />

        <SolutionsPreview />

        <HowWeWork />

        <WhyNodeus />

        <ProofSection />

        <ContactSection />
      </main>
    </AnimatedPage>
  );
}

export default Home;