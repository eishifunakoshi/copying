import { HamburgerIcon } from "./Icon";

export const Header = () => {
  return (
    <header className="md:flex place-content-around ">
      <div className="flex items-center py-6">
        <div className="pl-6 md:hidden">
          <button className="text-2xl">
            <HamburgerIcon />
          </button>
        </div>
        <div className="flex items-center mx-auto">
          <img className="w-16 md:w-32" src="./images/logo.jpg" />
        </div>
      </div>

      <div className="hidden md:flex space-x-6 py-8">
        <div>会社情報</div>
        <div>商品情報</div>
        <div>採用情報</div>
        <div>ニュース</div>
        <div>お問い合わせ</div>
      </div>
    </header>
  );
};
