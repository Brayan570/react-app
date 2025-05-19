import React from "react";
import "./Hero.css"; // ← Importa el archivo CSS

export default function Hero() {
  return (
    <section className="hero-section">
      <h2 className="hero-title">¡Hola! Soy Brayan</h2>
      <p className="hero-subtitle">
        Desarrollador Frontend | React & UI/UX
      </p>
    </section>
  );
}

