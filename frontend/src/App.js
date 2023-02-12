import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddData from "./components/AddData";
import DisplayData from "./components/DisplayData";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addData" element={<AddData/>} />
          <Route path="/displayData/:id" element={<DisplayData/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;