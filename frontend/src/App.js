import TitleBotForm from "./components/TitleBotForm";
import TitleBotHistory from "./components/TitleHistory";
import "./App.css";

function App() {
  return (
    <div id="App">
      <h1>Grab Title and Favicon from Any Webpage </h1>
      <TitleBotForm />
      <TitleBotHistory />
    </div>
  );
}

export default App;
