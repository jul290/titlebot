import Button from "@mui/material/Button";
import TitleBotForm from "./components/TitleBotForm";
import TitleHistory from "./components/TitleHistory";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>TitleBot</h1>
      <TitleBotForm />
      <TitleHistory />
    </div>
  );
}

export default App;
