import { Header } from "./components/Header/Header ";
import { Hooter } from "./components/Hooter/Hooter";
import { TopView } from "./components/TopView/TopView";
import { Product } from "./components/Product/Product";
import { Infomation } from "./components/Infomation/Infomation";
// import { Test } from "./components/Item3/test1";
// import { News } from "./components/News/News";
import { Test2 } from "./components/News/test2";

function App() {
  return (
    <div className="w-auto h-auto bg-white">
      <Header />
      <TopView />
      <Product />
      <Infomation />
      {/* <Test /> */}
      {/* <News /> */}
      <Test2 />
      <Hooter />
    </div>
  );
}

export default App;
