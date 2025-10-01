import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero.jpg"; // Importamos la imagen desde src/assets

export default function Hero() {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: `url(${heroImg})` }} // Usamos la imagen como fondo
    >
      <h2 className="hero-title">¡Hola! Somos Spektra Ingenieria</h2>
      <p className="hero-subtitle">
        ¡Transformamos Ideas en Soluciones Digitales Brillantes!
      </p>
      <p className="hero-description">
        Hola, somos Spektra Ingenieria, y nuestra misión es impulsar el éxito de negocios como el tuyo en el mundo digital.
        <br /><br />
        En el panorama actual, una simple presencia en línea ya no es suficiente.
        Lo que necesitas es una experiencia digital memorable que te diferencie y te haga crecer.
      </p>
    </section>
  );
}
