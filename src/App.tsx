import Title from "./components/Title";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Title size="h1" text="Dit is een titel h1" />
      <Title size="h2" text="Dit is een titel h2" />
      <Title size="h3" text="Dit is een titel h3" />
      <Title size="h4" text="Dit is een titel h4" />
      <Title size="h5" text="Dit is een titel h5" />
    </div>
  );
}

export default App;
