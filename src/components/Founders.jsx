import React from "react";
import "./Founders.css";

// Importamos las imágenes desde src/assets
import kellyImg from "../assets/kelly.jpg";
import yesidImg from "../assets/yesid.jpg";

export default function Founders() {
  const founders = [
    {
      name: "Kelly Contreras",
      role: "CEO & Fundador",
      img: kellyImg,
      description: "Apasionado por la tecnología y el desarrollo de soluciones innovadoras."
    },
    {
      name: "Brayan Gómez",
      role: "CEO & Cofundador",
      img: yesidImg,
      description: "Especialista en software, siempre en busca de mejorar la experiencia digital."
    }
  ];

  return (
    <section className="founders-section">
      <h2 className="founders-title">Nuestros Fundadores</h2>
      <div className="founders-container">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card">
            <img src={founder.img} alt={founder.name} className="founder-img" />
            <h3>{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <p className="founder-description">{founder.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
