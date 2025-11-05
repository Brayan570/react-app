// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  const stats = [
    { value: "100+", label: "Proyectos Completados" },
    { value: "50+", label: "Clientes Satisfechos" },
    { value: "10+", label: "Años de Experiencia" },
  ];

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Animated particles */}
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <svg
            className="badge-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span>Soluciones Digitales Innovadoras</span>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Transformamos Ideas en
          <span className="hero-title-highlight"> Soluciones Digitales</span>
          <span className="hero-title-brilliant"> Brillantes</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Somos <strong>Spektra Ingeniería</strong>, y nuestra misión es
          impulsar el éxito de tu negocio en el mundo digital con experiencias
          memorables que te diferencian.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <button className="cta-primary">
            Comenzar Proyecto
            <svg
              className="cta-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <button className="cta-secondary">
            <svg className="play-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Ver Portfolio
          </button>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll para explorar</span>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  );
}
