// src/components/About.jsx
import React from "react";
import "./About.css";

export default function About() {
  const servicios = [
    {
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Páginas Web Estratégicas",
      description:
        "Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados para la conversión. Landing pages, ecommerce o sitios corporativos que funcionan 24/7.",
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "Desarrollo de Software a Medida",
      description:
        "Resolvemos tus desafíos operativos con soluciones personalizadas. Desde sistemas CRM/ERP hasta aplicaciones móviles innovadoras.",
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Tecnología de Vanguardia",
      description:
        "Utilizamos las tecnologías más modernas y seguras para garantizar soluciones rápidas, escalables y preparadas para el futuro.",
    },
  ];

  const valores = [
    {
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      title: "Centrado en el Usuario",
      text: "Creamos experiencias intuitivas que hacen que tus clientes amen tu marca",
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Soporte Continuo",
      text: "Tu proyecto no termina con el lanzamiento. Evolucionamos contigo",
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Resultados Medibles",
      text: "Ofrecemos estrategia, diseño y tecnología enfocados en tus resultados",
    },
  ];

  return (
    <section id="sobre-nosotros" className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2 className="about-title">¿Qué Hacemos?</h2>
          <div className="about-underline"></div>
          <p className="about-intro">
            Somos expertos en crear la columna vertebral de tu éxito digital
          </p>
        </div>

        {/* Servicios Grid */}
        <div className="servicios-about-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-about-card">
              <div className="servicio-icon-wrapper">
                <svg
                  className="servicio-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={servicio.icon}
                  />
                </svg>
              </div>
              <h3 className="servicio-about-title">{servicio.title}</h3>
              <p className="servicio-about-description">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="about-divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div>

        {/* Valores */}
        <div className="valores-section">
          <h3 className="valores-title">Nuestro Enfoque</h3>
          <div className="valores-grid">
            {valores.map((valor, index) => (
              <div key={index} className="valor-item">
                <div className="valor-icon-container">
                  <svg
                    className="valor-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={valor.icon}
                    />
                  </svg>
                </div>
                <div className="valor-content">
                  <h4 className="valor-title">{valor.title}</h4>
                  <p className="valor-text">{valor.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <p className="cta-text">
            No solo escribimos código; ofrecemos{" "}
            <span className="highlight">estrategia, diseño y tecnología</span>{" "}
            enfocadas en tus resultados.
          </p>
          <button className="about-cta-button">Comencemos tu proyecto</button>
        </div>
      </div>
    </section>
  );
}
