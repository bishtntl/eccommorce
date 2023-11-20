import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DisplayRoute from "./Route/Display";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DisplayRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
