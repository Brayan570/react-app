import React from "react";
import "./Navbar.css"; // ← importa el archivo CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Spektra Ingenieria</h1>
      <ul className="navbar-menu">
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#sobre-mi">Sobre nosotros</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
