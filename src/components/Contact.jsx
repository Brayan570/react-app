import React from "react";
import "./Contact.css"; // ← importar el archivo CSS

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <h3 className="contact-title">Contactanos</h3>
      <p className="contact-text">
        Puedes escribirnos a:{" "}
        <a href="mailto:gomezbrayanyesid78@gmail.com">
          gomezbrayanyesid78@gmail.com
        </a>
      </p>
    </section>
  );
}
