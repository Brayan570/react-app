// src/components/PublicidadDigital.jsx
import React from "react";
import tiktokLogo from "../assets/tiktok.png";
import metaLogo from "../assets/meta.png";
import whatsappLogo from "../assets/whatsapp.png";
import "./PublicidadDigital.css";

export default function PublicidadDigital() {
  const platforms = [
    {
      name: "TikTok Ads",
      image: tiktokLogo,
      gradient: "tiktok-gradient",
      bgGradient: "tiktok-bg",
      description: "Alcanza audiencias jóvenes",
    },
    {
      name: "Meta Ads",
      image: metaLogo,
      gradient: "meta-gradient",
      bgGradient: "meta-bg",
      description: "Facebook e Instagram Ads",
    },
    {
      name: "WhatsApp Business",
      image: whatsappLogo,
      gradient: "whatsapp-gradient",
      bgGradient: "whatsapp-bg",
      description: "Comunicación directa efectiva",
    },
  ];

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
            <div key={index} className="platform-card">
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

                {/* Hover Arrow */}
                <div className="platform-cta">
                  <span className="cta-text">Conocer más</span>
                  <svg
                    className="cta-arrow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
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
          <button className="cta-button">Comienza tu campaña digital</button>
        </div>
      </div>
    </section>
  );
}
