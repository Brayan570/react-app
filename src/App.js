import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Founders from "./components/Founders";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import PublicidadDigital from "./components/PublicidadDigital"; // 👈 Importa tu nuevo componente
import Desarrolloweb from "./components/Desarrolloweb";
import "./index.css"; // 👈 No hace falta asignarlo a una variable

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Founders />
      <Projects />
      <About />
      <PublicidadDigital /> {/* 👈 Aquí aparece tu sección */}
      <Desarrolloweb />
      <Contact />
    </div>
  );
}

export default App;
