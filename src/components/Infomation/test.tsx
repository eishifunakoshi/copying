interface FeatureSection {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const FeatureSection = ({
  imgSrc,
  imgAlt,
  title,
  description,
}: FeatureSection) => {
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
};

export default FeatureSection;
