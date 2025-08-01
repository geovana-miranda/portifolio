import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <main className="font-montserrat border-3 mx-auto my-4 shadow-[5px_5px_0px_black] md:w-4xl lg:w-7xl">
    <Home />
    </main>
  );
}

export default App;
