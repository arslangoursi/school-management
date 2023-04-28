import HomeSection from "../components/HomeSection";
import FeatureSection from "../components/FeatureSection";
import PricingSection from "../components/PricingSection";
import FooterSection from "../components/FooterSection";

export default function Index() {
  return (
    <>
      <div className="jumbo__div">
        <HomeSection />
        <FeatureSection />
        <PricingSection />

        <FooterSection />
      </div>
    </>
  );
}
