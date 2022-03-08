import TitleBotForm from "./components/TitleBotForm";
import CurrentTitle from "./components/CurrentTitle";
import TitleHistory from "./components/TitleHistory";

import "./App.css";

function App() {
  return (
    <div id="App">
      <h1>Grab Title and Favicon from Any Webpage </h1>
      <TitleBotForm />
      <CurrentTitle />
      <TitleHistory />
    </div>
  );
}

export default App;
