export const Item3 = () => {
  return (
    <div className="py-12 bg-green-100 md:flex md:justify-center md:px-4">
      <div className="px-4" id="company">
        <div className="flex justify-center pb-2 md:pt-9">
          <img className="rounded-3xl" src="./images/company.jpg" />
        </div>
        <div>
          <div className="text-green-500">ABOUT</div>
          <div className="text-gray-500">会社情報</div>
        </div>
      </div>
      <div className="px-4" id="product">
        <div className="flex justify-center pt-9 pb-2">
          <img className="rounded-3xl" src="./images/product.jpg" />
        </div>
        <div>
          <div className="text-green-500">PRODUCTS</div>
          <div className="text-gray-500">商品情報</div>
        </div>
      </div>
      <div className="px-4" id="recruit">
        <div className="flex justify-center pt-9 pb-2">
          <img className="rounded-3xl" src="./images/recruit.jpg" />
        </div>
        <div>
          <div className="text-green-500">RECRUIT</div>
          <div className="text-gray-500">採用情報</div>
        </div>
      </div>
    </div>
  );
};
