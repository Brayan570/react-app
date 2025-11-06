// src/components/Founders.jsx
import React from "react";
import "./Founders.css";
import { Helmet } from "react-helmet-async";

// Importamos las imágenes desde src/assets
import kellyImg from "../assets/kelly.jpg";
import yesidImg from "../assets/yesid.jpg";

export default function Founders() {
  const founders = [
    {
      name: "Kelly Contreras",
      role: "CEO & Fundador",
      img: kellyImg,
      description:
        "Especialista en desarrollo Backend apasionada por la tecnología y el desarrollo de soluciones innovadoras.",
      specialties: ["Backend", "APIs", "Arquitectura"],
      social: {
        linkedin: "#",
        github: "#",
        email: "kelly@company.com",
      },
    },
    {
      name: "Brayan Gómez",
      role: "CEO & Cofundador",
      img: yesidImg,
      description:
        "Especialista en desarrollo Frontend, siempre en busca de mejorar la experiencia digital.",
      specialties: ["Frontend", "UX/UI", "React"],
      social: {
        linkedin: "#",
        github: "#",
        email: "brayan@company.com",
      },
    },
  ];

  return (
    <section className="founders-section">
      <div className="founders-container-wrapper">
        {/* Header */}
        <div className="founders-header">
          <h2 className="founders-title">Nuestro Equipo Fundador</h2>
          <div className="founders-underline"></div>
          <p className="founders-subtitle">
            La visión y pasión detrás de cada proyecto
          </p>
        </div>

        {/* Founders Grid */}
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              {/* Background decoration */}
              <div className="card-background"></div>

              {/* Image container */}
              <div className="founder-image-wrapper">
                <div className="image-ring"></div>
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="founder-img"
                />
                <div className="image-overlay">
                  <div className="overlay-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="founder-content">
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p className="founder-description">{founder.description}</p>

                {/* Specialties */}
                <div className="founder-specialties">
                  {founder.specialties.map((specialty, idx) => (
                    <span key={idx} className="specialty-tag">
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="founder-social">
                  <a
                    href={founder.social.linkedin}
                    className="social-link linkedin"
                    aria-label="LinkedIn"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={founder.social.github}
                    className="social-link github"
                    aria-label="GitHub"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${founder.social.email}`}
                    className="social-link email"
                    aria-label="Email"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card shine effect */}
              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="founders-footer">
          <p className="footer-text">
            Juntos combinamos más de 10 años de experiencia en desarrollo de
            software
          </p>
        </div>
      </div>
    </section>
  );
}
