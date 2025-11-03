// src/components/ServiciosDestacados.jsx
import React, { useState } from "react";
import optimizacionIcon from "../assets/optimizacion.png";
import marketingIcon from "../assets/reputacion.png";
import soporteIcon from "../assets/soporte.png";
import "./ServiciosDestacados.css";

export default function ServiciosDestacados() {
  const [expandedCard, setExpandedCard] = useState(null);

  const servicios = [
    {
      title: "Optimización de Rendimiento",
      description:
        "Mejoramos la velocidad y eficiencia de tu sitio web para ofrecer la mejor experiencia de usuario y mejores conversiones.",
      image: optimizacionIcon,
      color: "optimizacion",
      detalles: {
        beneficios: [
          "Reducción del tiempo de carga hasta un 70%",
          "Mejor posicionamiento en Google (SEO)",
          "Aumento de conversiones del 30-50%",
          "Reducción de tasa de rebote",
        ],
        incluye: [
          "Auditoría completa de rendimiento",
          "Optimización de imágenes y código",
          "Implementación de caché",
          "CDN y compresión de archivos",
          "Monitoreo continuo de velocidad",
        ],
        metricas: "Alcanza un PageSpeed de 90+ en móvil y desktop",
      },
    },
    {
      title: "Marketing Digital",
      description:
        "Estrategias personalizadas para aumentar tu presencia online, engagement con clientes y generar resultados medibles.",
      image: marketingIcon,
      color: "marketing",
      detalles: {
        beneficios: [
          "Incremento de alcance y visibilidad",
          "Mayor engagement con tu audiencia",
          "ROI medible en cada campaña",
          "Generación constante de leads",
        ],
        incluye: [
          "Gestión de redes sociales",
          "Campañas en Meta Ads y TikTok",
          "Email marketing automatizado",
          "Creación de contenido atractivo",
          "Analítica y reportes mensuales",
        ],
        metricas: "Promedio de 3-5x retorno de inversión",
      },
    },
    {
      title: "Soporte Técnico",
      description:
        "Asistencia continua y mantenimiento profesional para garantizar que tu proyecto digital funcione sin problemas.",
      image: soporteIcon,
      color: "soporte",
      detalles: {
        beneficios: [
          "Disponibilidad 24/7 los 365 días",
          "Respuesta inmediata ante incidencias",
          "Prevención de problemas futuros",
          "Tranquilidad y seguridad total",
        ],
        incluye: [
          "Monitoreo proactivo del sitio",
          "Backups automáticos diarios",
          "Actualizaciones de seguridad",
          "Corrección de errores urgentes",
          "Soporte por WhatsApp y email",
        ],
        metricas: "99.9% de uptime garantizado",
      },
    },
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
            <div
              key={index}
              className={`servicio-card ${servicio.color} ${
                expandedCard === index ? "expanded" : ""
              }`}
            >
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

                {/* Expanded Details */}
                {expandedCard === index && (
                  <div className="servicio-detalles">
                    {/* Beneficios */}
                    <div className="detalle-section">
                      <h4 className="detalle-title">
                        <svg
                          className="detalle-icon"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Beneficios Clave
                      </h4>
                      <ul className="detalle-list">
                        {servicio.detalles.beneficios.map((beneficio, idx) => (
                          <li key={idx}>
                            <svg
                              className="check-icon"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Incluye */}
                    <div className="detalle-section">
                      <h4 className="detalle-title">
                        <svg
                          className="detalle-icon"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Qué Incluye
                      </h4>
                      <ul className="detalle-list">
                        {servicio.detalles.incluye.map((item, idx) => (
                          <li key={idx}>
                            <svg
                              className="check-icon"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Métrica Destacada */}
                    <div className="metrica-destacada">
                      <svg
                        className="metrica-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{servicio.detalles.metricas}</span>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  className="servicio-cta"
                  onClick={() => toggleCard(index)}
                >
                  {expandedCard === index ? "Ocultar detalles" : "Conocer más"}
                  <svg
                    className={`cta-icon ${
                      expandedCard === index ? "rotated" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
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
