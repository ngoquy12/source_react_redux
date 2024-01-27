import "./App.css";
import Count from "./components/Count";
import Random from "./components/Random";

function App() {
  return (
    <>
      <Count />
      {/* Tạo component Random, khi click vào button thì push một số ngẫu nhiên vào trong mảng */}
      <Random />
    </>
  );
}

export default App;
