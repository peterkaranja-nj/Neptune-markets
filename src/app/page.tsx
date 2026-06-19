import RiskBanner from "@/components/layout/RiskBanner";
import Navbar from "@/components/layout/Navbar";
import Ticker from "@/components/layout/Ticker";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyNeptune from "@/components/sections/WhyNeptune";
import MarketsTable from "@/components/sections/MarketsTable";
import PlatformsBanner from "@/components/sections/PlatformsBanner";
import Promotions from "@/components/sections/Promotions";
import Education from "@/components/sections/Education";
import TrustStrip from "@/components/sections/TrustStrip";
import CTAStrip from "@/components/sections/CTAStrip";
import CTABottom from "@/components/sections/CTABottom";

export default function HomePage() {
  return (
    <>
      <RiskBanner />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <WhyNeptune />
        <MarketsTable />
        <CTAStrip />
        <PlatformsBanner />
        <Promotions />
        <Education />
        <CTABottom />
        <TrustStrip />
      </main>
      <Footer />
    </>
  );
}
