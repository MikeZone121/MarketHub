import Button from "./components/Button";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <h1 className="tw-text-red-500">MarketHub</h1>
      <Button onClick={() => alert("button clicked")} text="Button" />
    </div>
  );
}

export default App;
