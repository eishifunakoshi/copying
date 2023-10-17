import { Header } from "./components/Header/Header ";
import { Hooter } from "./components/Hooter/Hooter";
import { Item1 } from "./components/Item1/Item1";
import { Item2 } from "./components/Item2/Item2";
import { Item3 } from "./components/Item3/Item3";
// import { Test } from "./components/Item3/test1";
import { Item4 } from "./components/Item4/Item4";
// import Test2 from "./components/Item4/test2";

function App() {
  return (
    <div className="w-auto h-auto bg-white">
      <Header />
      <Item1 />
      <Item2 />
      <Item3 />
      {/* <Test /> */}
      <Item4 />
      {/* <Test2 /> */}
      <Hooter />
    </div>
  );
}

export default App;
