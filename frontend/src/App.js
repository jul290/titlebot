import TitleBotForm from "./components/TitleBotForm";
import TitleBotHistory from "./components/TitleHistory";
import { useState } from "react";
import "./App.css";

function App() {
  const [numSearched, setNumSearched] = useState(0);
  return (
    <div id="App">
      <h1>Grab Title and Favicon from Any Webpage </h1>
      <TitleBotForm numSearched={numSearched} setNumSearched={setNumSearched} />
      <TitleBotHistory
        numSearched={numSearched}
        setNumSearched={setNumSearched}
      />
    </div>
  );
}

export default App;
