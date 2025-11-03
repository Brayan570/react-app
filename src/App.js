import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Founders from "./components/Founders";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import index from "./index.css";
function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {" "}
      <Navbar /> <Hero /> <Founders /> <Projects /> <About /> <Contact />{" "}
    </div>
  );
}
export default App;
