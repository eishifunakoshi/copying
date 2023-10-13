import "./Header .css";

export const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <div className="company-name">N&Co.</div>
      </div>
      <div className="light">
        <div className="item">会社情報</div>
        <div className="item">商品情報</div>
        <div className="item">採用情報</div>
        <div className="item">ニュース</div>
        <div className="item">お問い合わせ</div>
      </div>
    </header>
  );
};
