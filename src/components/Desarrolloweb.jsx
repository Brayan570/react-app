// src/components/ServiciosDestacados.jsx
import React from "react";
import optimizacionIcon from "../assets/optimizacion.png";
import marketingIcon from "../assets/marketing.png";
import soporteIcon from "../assets/soporte.png";
import "./Desarrolloweb.css";

export default function ServiciosDestacados() {
  const servicios = [
    {
      title: "Optimización de Rendimiento",
      description:
        "Mejoramos la velocidad y eficiencia de tu sitio web para ofrecer la mejor experiencia de usuario y mejores conversiones.",
      image: optimizacionIcon,
      color: "optimizacion",
    },
    {
      title: "Marketing Digital",
      description:
        "Estrategias personalizadas para aumentar tu presencia online, engagement con clientes y generar resultados medibles.",
      image: marketingIcon,
      color: "marketing",
    },
    {
      title: "Soporte Técnico",
      description:
        "Asistencia continua y mantenimiento profesional para garantizar que tu proyecto digital funcione sin problemas.",
      image: soporteIcon,
      color: "soporte",
    },
  ];

  return (
    <section className="servicios-destacados-section">
      <div className="servicios-destacados-container">
        {/* Header */}
        <div className="servicios-header">
          <h2 className="servicios-title">Nuestros Servicios Destacados</h2>
          <div className="title-underline-servicios"></div>
          <p className="servicios-subtitle">
            Soluciones completas para llevar tu negocio al siguiente nivel
            digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className={`servicio-card ${servicio.color}`}>
              {/* Image Container */}
              <div className="servicio-image-container">
                <img
                  src={servicio.image}
                  alt={servicio.title}
                  className="servicio-image"
                />
                <div className="image-glow"></div>
              </div>

              {/* Content */}
              <div className="servicio-content">
                <h3 className="servicio-title">{servicio.title}</h3>
                <p className="servicio-description">{servicio.description}</p>

                {/* CTA Link */}
                <button className="servicio-cta">
                  Conocer más
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
              </div>

              {/* Background decoration */}
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
