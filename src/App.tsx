import { Header } from "./components/Header/Header ";
import { Hooter } from "./components/Hooter/Hooter";
import { Item1 } from "./components/Item1/Item1";
import { Item2 } from "./components/Item2/Item2";
import { Item3 } from "./components/Item3/Item3";
import { Item4 } from "./components/Item4/Item4";

function App() {
  return (
    <div className="w-auto h-auto bg-white">
      <Header />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Hooter />
    </div>
  );
}

export default App;
