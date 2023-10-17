import FeatureSection from "./test.tsx";

export const Test = () => {
  return (
    <div className="py-12 bg-green-100 md:flex md:px-4">
      <FeatureSection
        imgSrc="./images/company.jpg"
        imgAlt="Company Image"
        title="ABOUT"
        description="会社情報"
      />
      <FeatureSection
        imgSrc="./images/product.jpg"
        imgAlt="Product Image"
        title="PRODUCTS"
        description="商品情報"
      />
      <FeatureSection
        imgSrc="./images/recruit.jpg"
        imgAlt="Recruit Image"
        title="RECRUIT"
        description="採用情報"
      />
    </div>
  );
};
