import FeatureEntry from "../components/FeatureEntry";

export default function FeatureSection({}) {
  return (
    <div className="feature__section">
      <div className="feature__section__header">Key features of Our CMS</div>
      <div className="feature__section__content">
        <FeatureEntry />
        <FeatureEntry />
        <FeatureEntry />
        <FeatureEntry />
        <FeatureEntry />
        <FeatureEntry />
      </div>
    </div>
  );
}
