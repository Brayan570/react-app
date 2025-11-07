// src/components/Cursos.jsx
import React, { useState } from "react";
import "./Cursos.css";
import { Helmet } from "react-helmet-async";

export default function Cursos() {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const cursos = [
    {
      id: 1,
      title: "React desde Cero",
      description:
        "Aprende React desde los fundamentos hasta aplicaciones avanzadas",
      duration: "Indefinido",
      level: "Principiante a Avanzado",
      students: "2.5K",
      rating: "4.8",
      price: "Gratis",
      category: "Frontend",
      link: "https://cursoreact.dev/",
      image: "react-icon",
      tags: ["React", "JavaScript", "Hooks"],
    },
    {
      id: 2,
      title: "Node.js & API REST",
      description: "Crea APIs profesionales con Node.js, Express y MongoDB",
      duration: "3 horas",
      level: "Intermedio",
      students: "1.8K",
      rating: "4.9",
      price: "Gratis",
      category: "Backend",
      link: "https://youtu.be/yd_QpXWrbtQ",
      image: "node-icon",
      tags: ["Node.js", "Express"],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      description: "Conviértete en desarrollador Full Stack con MERN",
      duration: "30 horas",
      level: "Avanzado",
      students: "3.2K",
      rating: "5.0",
      price: "Gratis",
      category: "Full Stack",
      link: "#",
      image: "fullstack-icon",
      tags: ["MERN", "React", "Node.js"],
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Diseña interfaces modernas y experiencias de usuario increíbles",
      duration: "10 horas",
      level: "Principiante",
      students: "1.5K",
      rating: "4.7",
      price: "Gratis",
      category: "Design",
      link: "#",
      image: "design-icon",
      tags: ["Figma", "UI", "UX"],
    },
    {
      id: 5,
      title: "Python & Data Science",
      description: "Análisis de datos y Machine Learning con Python",
      duration: "20 horas",
      level: "Intermedio",
      students: "2.1K",
      rating: "4.8",
      price: "Gratis",
      category: "Data",
      link: "",
      image: "python-icon",
      tags: ["Python", "Pandas", "ML"],
    },
    {
      id: 6,
      title: "DevOps Esencial",
      description: "CI/CD, Docker, Kubernetes y deployment en la nube",
      duration: "18 horas",
      level: "Avanzado",
      students: "1.2K",
      rating: "4.9",
      price: "Gratis",
      category: "DevOps",
      link: "#",
      image: "devops-icon",
      tags: ["Docker", "K8s", "AWS"],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Principiante":
        return "level-beginner";
      case "Intermedio":
        return "level-intermediate";
      case "Avanzado":
        return "level-advanced";
      default:
        return "level-beginner";
    }
  };

  return (
    <section className="cursos-section">
      <div className="cursos-container">
        {/* Header */}
        <div className="cursos-header">
          <h2 className="cursos-title">Cursos Para Mejorar tus Habilidades</h2>
          <div className="cursos-underline"></div>
          <p className="cursos-subtitle">
            En Spektra Ingenieria no solo creamos soluciones digitales, sino que
            también te ayudamos a crecer profesionalmente con nuestros cursos
            especializados totalmente gratuitos y con certificación.
          </p>
        </div>

        {/* Cursos Grid */}
        <div className="cursos-grid">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="curso-card"
              onMouseEnter={() => setHoveredCourse(curso.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              {/* Icon/Image */}
              <div className="curso-icon-wrapper">
                <div className="curso-icon">
                  {curso.image === "react-icon" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="2" />
                      <path d="M12,2C11.42,2 10.86,2.03 10.32,2.09C7.54,2.46 5.45,4.55 5.08,7.33C4.67,10.43 6.09,13.19 8.56,14.53C9.28,14.95 10.13,15.16 11,15.16C11.21,15.16 11.42,15.15 11.63,15.12C13.5,14.89 15.09,13.82 16,12.21C16.93,10.57 17,8.65 16.23,6.93C15.46,5.21 13.91,3.91 12,3.91C11.79,3.91 11.58,3.92 11.37,3.95C10.5,4.08 9.75,4.54 9.23,5.23C8.71,5.92 8.5,6.79 8.64,7.66C8.78,8.53 9.24,9.28 9.93,9.8C10.62,10.32 11.49,10.53 12.36,10.39C13.23,10.25 13.98,9.79 14.5,9.1C15.02,8.41 15.23,7.54 15.09,6.67C14.95,5.8 14.49,5.05 13.8,4.53C13.11,4.01 12.24,3.8 11.37,3.94" />
                    </svg>
                  )}
                  {curso.image === "node-icon" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.31,6.63 3,7.15 3,7.71V16.29C3,16.85 3.31,17.37 3.78,17.65L11.22,21.95C11.45,22.08 11.73,22.15 12,22.15C12.27,22.15 12.55,22.08 12.78,21.95L20.22,17.65C20.69,17.37 21,16.85 21,16.29V7.71C21,7.15 20.69,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85M12,3.15L19,7.06V16.94L12,20.85L5,16.94V7.06L12,3.15Z" />
                    </svg>
                  )}
                  {curso.image === "fullstack-icon" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20,3H4A2,2 0 0,0 2,5V15A2,2 0 0,0 4,17H11V19.17L8.5,21.67L9.92,23.08L12,21L14.08,23.08L15.5,21.67L13,19.17V17H20A2,2 0 0,0 22,15V5A2,2 0 0,0 20,3M20,15H4V5H20V15M7,7H9V9H7V7M11,7H13V9H11V7M15,7H17V9H15V7Z" />
                    </svg>
                  )}
                  {curso.image === "design-icon" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.5,1.15C17.97,1.15 17.46,1.34 17.07,1.73L11.26,7.55L16.91,13.2L22.73,7.39C23.5,6.61 23.5,5.35 22.73,4.56L19.89,1.73C19.5,1.34 19,1.15 18.5,1.15M10.3,8.5L4.34,14.46C3.56,15.24 3.56,16.5 4.36,17.31L11.15,24.1C11.54,24.5 12.18,24.5 12.58,24.1L21.63,15.05L10.3,8.5M2.86,15.91L1.11,17.65C0.32,18.43 0.32,19.69 1.11,20.5L3.5,22.89C4.28,23.67 5.54,23.67 6.35,22.89L8.09,21.14L2.86,15.91Z" />
                    </svg>
                  )}
                  {curso.image === "python-icon" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.14,7.5A2.86,2.86 0 0,1 22,10.36V14.14A2.86,2.86 0 0,1 19.14,17H12C12,17.39 12.32,17.96 12.71,17.96H17V19.64A2.86,2.86 0 0,1 14.14,22.5H9.86A2.86,2.86 0 0,1 7,19.64V15.89C7,14.31 8.28,13.04 9.86,13.04H15.11C16.69,13.04 17.96,11.76 17.96,10.18V7.5H19.14M14.86,19.29C14.46,19.29 14.14,19.59 14.14,20.18C14.14,20.77 14.46,21.07 14.86,21.07A.86,.86 0 0,0 15.71,20.18C15.71,19.59 15.39,19.29 14.86,19.29M4.86,17.5C3.28,17.5 2,16.22 2,14.64V10.86C2,9.28 3.28,8 4.86,8H12C12,7.61 11.68,7.04 11.29,7.04H7V5.36C7,3.78 8.28,2.5 9.86,2.5H14.14C15.72,2.5 17,3.78 17,5.36V9.11C17,10.69 15.72,11.96 14.14,11.96H8.89C7.31,11.96 6.04,13.24 6.04,14.82V17.5H4.86M9.14,4.71C9.54,4.71 9.86,4.41 9.86,3.82C9.86,3.23 9.54,2.93 9.14,2.93C8.75,2.93 8.43,3.23 8.43,3.82C8.43,4.41 8.75,4.71 9.14,4.71Z" />
                    </svg>
                  )}
                  {curso.image === "devops-icon" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="curso-content">
                {/* Level Badge */}
                <span className={`curso-level ${getLevelColor(curso.level)}`}>
                  {curso.level}
                </span>

                <h3 className="curso-title">{curso.title}</h3>
                <p className="curso-description">{curso.description}</p>

                {/* Tags */}
                <div className="curso-tags">
                  {curso.tags.map((tag, idx) => (
                    <span key={idx} className="curso-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info Row */}
                <div className="curso-info">
                  <div className="info-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{curso.duration}</span>
                  </div>
                  <div className="info-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>{curso.students}</span>
                  </div>
                  <div className="info-item">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{curso.rating}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="curso-footer">
                  <span className="curso-price">{curso.price}</span>
                  <a href={curso.link} className="curso-button">
                    Ir al Curso
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
