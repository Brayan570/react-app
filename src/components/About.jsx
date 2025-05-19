import React from "react";
import "./About.css"; // ← importa el archivo CSS

export default function About() {
  return (
    <section id="sobre-mi" className="about-section">
      <h3 className="about-title">Sobre mí</h3>
      <p className="about-text">
        Soy desarrollador Frontend con experiencias solidad en HTML5, CSS3, JavaScript, PHP, SQL, con conocimientos basicos en React y Node.js. Me apasiona crear aplicaciones web atractivas y funcionales, siempre buscando mejorar mis habilidades y aprender nuevas tecnologías.
        <br />
        Experiencia en la creacion y mantenimiento de sistemas creados en WordPress y asi mismo escalamiento de proyectos de e-commerce, como lo es Woocommerce.
      </p>
    </section>
  );
}
