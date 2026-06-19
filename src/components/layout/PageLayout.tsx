import RiskBanner from "./RiskBanner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TrustStrip from "@/components/sections/TrustStrip";

interface PageLayoutProps {
  children: React.ReactNode;
  showTrust?: boolean;
}

export default function PageLayout({ children, showTrust = true }: PageLayoutProps) {
  return (
    <>
      <RiskBanner />
      <Navbar />
      <main>{children}</main>
      {showTrust && <TrustStrip />}
      <Footer />
    </>
  );
}
