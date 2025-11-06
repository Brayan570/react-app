// src/components/PublicidadDigital.jsx
import React, { useState } from "react";
import tiktokLogo from "../assets/tiktok.png";
import metaLogo from "../assets/meta.png";
import whatsappLogo from "../assets/whatsapp.png";
import "./PublicidadDigital.css";
import { Helmet } from "react-helmet-async";

export default function PublicidadDigital() {
  const [expandedCard, setExpandedCard] = useState(null);

  const platforms = [
    {
      name: "TikTok Ads",
      image: tiktokLogo,
      gradient: "tiktok-gradient",
      bgGradient: "tiktok-bg",
      description: "Alcanza audiencias jóvenes",
      detailedInfo: {
        title: "Publicidad en TikTok",
        features: [
          "Alcance a más de 1 billón de usuarios activos mensuales",
          "Formatos creativos: In-Feed Ads, TopView, Branded Effects",
          "Targeting preciso por edad, intereses y comportamiento",
          "Ideal para productos y servicios dirigidos a Gen Z y Millennials",
          "Contenido viral y auténtico que genera engagement",
        ],
        benefits:
          "TikTok ofrece una de las tasas de engagement más altas del mercado, perfecta para marcas que buscan visibilidad y conversión rápida.",
      },
    },
    {
      name: "Meta Ads",
      image: metaLogo,
      gradient: "meta-gradient",
      bgGradient: "meta-bg",
      description: "Facebook e Instagram Ads",
      detailedInfo: {
        title: "Publicidad en Meta",
        features: [
          "Acceso a Facebook, Instagram, Messenger y Audience Network",
          "Más de 3 mil millones de usuarios combinados",
          "Segmentación avanzada basada en datos demográficos y psicográficos",
          "Formatos variados: Stories, Reels, Feed, Marketplace",
          "Herramientas de remarketing y conversión optimizada",
        ],
        benefits:
          "Meta ofrece el ecosistema publicitario más completo, con herramientas probadas para cualquier objetivo de negocio.",
      },
    },
    {
      name: "WhatsApp Business",
      image: whatsappLogo,
      gradient: "whatsapp-gradient",
      bgGradient: "whatsapp-bg",
      description: "Comunicación directa efectiva",
      detailedInfo: {
        title: "WhatsApp Business",
        features: [
          "Comunicación directa 1 a 1 con tus clientes",
          "Más de 2 mil millones de usuarios en el mundo",
          "Mensajes automatizados y respuestas rápidas",
          "Catálogo de productos integrado",
          "Click-to-WhatsApp Ads desde Facebook e Instagram",
        ],
        benefits:
          "La herramienta definitiva para atención al cliente, ventas directas y construcción de relaciones duraderas con tu audiencia.",
      },
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "573005957222"; // Reemplaza con tu número real (código país + número sin +)
    const message = encodeURIComponent(
      "¡Hola! Me interesa comenzar una campaña de publicidad digital. ¿Podrían darme más información?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const toggleCardExpansion = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="publicidad-section">
      <div className="publicidad-container">
        {/* Header */}
        <div className="publicidad-header">
          <h2 className="publicidad-title">Publicidad Digital</h2>
          <div className="title-underline"></div>
          <p className="publicidad-subtitle">
            Impulsa tu negocio en las plataformas más importantes del mundo
            digital
          </p>
        </div>

        {/* Cards Grid */}
        <div className="publicidad-grid">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`platform-card ${
                expandedCard === index ? "expanded" : ""
              }`}
            >
              {/* Gradient Background Effect */}
              <div className={`card-bg-effect ${platform.bgGradient}`}></div>

              {/* Content */}
              <div className="card-content">
                {/* Logo Container */}
                <div className={`logo-container ${platform.gradient}`}>
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="platform-logo"
                  />
                </div>

                {/* Platform Name */}
                <h3 className="platform-name">{platform.name}</h3>

                {/* Description */}
                <p className="platform-description">{platform.description}</p>

                {/* Detailed Information (Collapsible) */}
                {expandedCard === index && (
                  <div className="detailed-info">
                    <h4 className="info-title">
                      {platform.detailedInfo.title}
                    </h4>

                    <div className="info-section">
                      <h5 className="info-subtitle">Características:</h5>
                      <ul className="info-list">
                        {platform.detailedInfo.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="info-section">
                      <h5 className="info-subtitle">Beneficios:</h5>
                      <p className="info-text">
                        {platform.detailedInfo.benefits}
                      </p>
                    </div>
                  </div>
                )}

                {/* Toggle Button */}
                <button
                  className="platform-cta"
                  onClick={() => toggleCardExpansion(index)}
                >
                  <span className="cta-text">
                    {expandedCard === index
                      ? "Ocultar información"
                      : "Conocer más"}
                  </span>
                  <svg
                    className={`cta-arrow ${
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

              {/* Animated Border */}
              <div className="card-border">
                <div className={`border-glow ${platform.gradient}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="publicidad-cta">
          <button className="cta-button" onClick={handleWhatsAppClick}>
            <svg
              className="whatsapp-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Comienza tu campaña digital
          </button>
        </div>
      </div>
    </section>
  );
}
