import PricingEntry from "../components/PricingEntry";

export default function PricingSection({}) {
  return (
    <div className="pricing__section">
      <div className="pricing__section__header">Pricing</div>
      <div className="pricing__section__entries">
        <PricingEntry
          heading="Free Trail"
          Price="Free"
          btnheading="Upload for Free"
          text1="Free static.app domain included."
          text2="No credit card"
        />

        <PricingEntry
          heading="Monthly"
          Price="$49"
          Priceheading="/monthly"
          btnheading="Proceed Monthly"
          text1="Billed $12 per website monthly."
          text2="Total is $144 per year."
          style={{ background: "#6768E8", color: "white" }}
          btnStyle={{ background: "#8586ED" }}
          hstyle={{ color: "rgba(255, 255, 255, 0.5)" }}
        />
        <PricingEntry
          heading="Yearly"
          Price="$499"
          Priceheading="/year"
          btnheading="Proceed Yearly"
          text1="Billed $108 per website annually."
          text2="$36 cheaper to this way."
          style={{ background: "#272727", color: "white" }}
          btnStyle={{ background: "#5354CD" }}
          hstyle={{ color: "rgba(255, 255, 255, 0.5)" }}
          discount={true}
        />
      </div>
    </div>
  );
}
