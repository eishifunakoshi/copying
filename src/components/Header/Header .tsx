import { HamburgerIcon } from "./Icon";
import { useState } from "react";
import { Modal } from "./Modal";

export const Header = () => {
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="md:flex place-content-around ">
      <div className="flex items-center py-6">
        <div className="pl-6 md:hidden">
          <button className="text-2xl" onClick={() => setIsMenuOpen(true)}>
            <HamburgerIcon />
          </button>
        </div>
        <div className="flex items-center mx-auto">
          <img className="w-16 md:w-32" src="./images/logo.jpg" />
        </div>
      </div>

      <Modal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <ul className="space-y-8 py-6">
          <li>
            <a href="#company">会社情報</a>
          </li>
          <li>
            <a href="#product">商品情報</a>
          </li>
          <li>
            <a href="#recruit">採用情報</a>
          </li>
          <li>
            <a href="#news">ニュース</a>
          </li>
        </ul>
      </Modal>

      <div className="hidden md:flex space-x-6 py-8">
        <a href="#company" onClick={() => scrollToSection("company")}>
          会社情報
        </a>
        <a href="#product" onClick={() => scrollToSection("product")}>
          商品情報
        </a>
        <a href="#recruit" onClick={() => scrollToSection("recruit")}>
          採用情報
        </a>
        <a href="#news" onClick={() => scrollToSection("news")}>
          ニュース
        </a>

        <div>お問い合わせ</div>
      </div>
    </header>
  );
};
