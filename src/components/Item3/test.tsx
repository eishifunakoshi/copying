import PropTypes from "prop-types";

interface FeatureSection {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

function FeatureSection({
  imgSrc,
  imgAlt,
  title,
  description,
}: FeatureSection) {
  return (
    <div className="px-4">
      <div className="flex justify-center pt-9 pb-2">
        <img className="rounded-3xl" src={imgSrc} alt={imgAlt} />
      </div>
      <div>
        <div className="text-green-500">{title}</div>
        <div className="text-gray-500">{description}</div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureSection;
