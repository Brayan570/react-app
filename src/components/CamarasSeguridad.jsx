// src/components/CamarasSeguridad.jsx
import React, { useState } from "react";
import "./CamarasSeguridad.css";

export default function CamarasSeguridad() {
  const [hoveredService, setHoveredService] = useState(null);

  // Número de WhatsApp para cotizaciones
  const whatsappNumber = "573005957222"; // Formato internacional

  // Servicios de cámaras de seguridad
  const servicios = [
    {
      id: 1,
      title: "Cámara IP WiFi",
      description:
        "Cámara de seguridad inalámbrica con visión nocturna y detección de movimiento",
      features: ["1080p Full HD", "Visión Nocturna", "App Móvil"],
      resolution: "1080p",
      type: "Interior",
      warranty: "1 año",
      price: 150000, // Precio editable
      category: "Básico",
      image: "wifi-camera",
      included: ["Cámara", "Instalación", "Configuración"],
    },
    {
      id: 2,
      title: "Kit 4 Cámaras DVR",
      description:
        "Sistema completo con 4 cámaras y grabador digital para monitoreo 24/7",
      features: ["4 Cámaras", "DVR 1TB", "Cables Incluidos"],
      resolution: "720p",
      type: "Exterior/Interior",
      warranty: "2 años",
      price: 850000, // Precio editable
      category: "Profesional",
      image: "dvr-kit",
      included: [
        "4 Cámaras",
        "DVR",
        "Disco Duro",
        "Instalación",
        "Capacitación",
      ],
    },
    {
      id: 3,
      title: "Cámara PTZ Exterior",
      description:
        "Cámara motorizada con control remoto, zoom óptico y seguimiento automático",
      features: ["4MP", "Zoom 4x", "Rotación 360°"],
      resolution: "4MP",
      type: "Exterior",
      warranty: "2 años",
      price: 450000, // Precio editable
      category: "Premium",
      image: "ptz-camera",
      included: ["Cámara PTZ", "Instalación", "Configuración App"],
    },
    {
      id: 4,
      title: "Sistema NVR 8 Canales",
      description:
        "Red de cámaras IP profesional con almacenamiento en la nube y acceso remoto",
      features: ["8 Cámaras IP", "NVR 2TB", "Cloud Storage"],
      resolution: "1080p",
      type: "Comercial",
      warranty: "3 años",
      price: 1850000, // Precio editable
      category: "Empresarial",
      image: "nvr-system",
      included: [
        "8 Cámaras IP",
        "NVR",
        "Almacenamiento",
        "Instalación",
        "Soporte 6 meses",
      ],
    },
    {
      id: 5,
      title: "Cámara Domo Interior",
      description:
        "Cámara discreta tipo domo con audio bidireccional y almacenamiento local",
      features: ["2MP", "Audio 2 Vías", "MicroSD"],
      resolution: "1080p",
      type: "Interior",
      warranty: "1 año",
      price: 180000, // Precio editable
      category: "Básico",
      image: "dome-camera",
      included: ["Cámara Domo", "Instalación", "MicroSD 32GB"],
    },
    {
      id: 6,
      title: "Kit Solar Autónomo",
      description:
        "Sistema de vigilancia con panel solar, ideal para zonas sin electricidad",
      features: ["4G LTE", "Panel Solar", "Batería"],
      resolution: "1080p",
      type: "Rural/Remoto",
      warranty: "2 años",
      price: 950000, // Precio editable
      category: "Especializado",
      image: "solar-camera",
      included: [
        "Cámara 4G",
        "Panel Solar",
        "Batería",
        "SIM Card",
        "Instalación",
      ],
    },
  ];

  // Función para formatear precio en COP
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Función para generar mensaje de WhatsApp
  const generateWhatsAppMessage = (servicio) => {
    const message = `¡Hola! Me interesa el servicio de *${servicio.title}* por ${formatPrice(
      servicio.price,
    )}. 

Me gustaría recibir más información sobre:
- Características del producto
- Proceso de instalación
- Garantía y soporte
- Formas de pago

¡Gracias!`;

    return encodeURIComponent(message);
  };

  // Función para abrir WhatsApp
  const openWhatsApp = (servicio) => {
    const message = generateWhatsAppMessage(servicio);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Básico":
        return "category-basic";
      case "Profesional":
        return "category-professional";
      case "Premium":
        return "category-premium";
      case "Empresarial":
        return "category-enterprise";
      case "Especializado":
        return "category-specialized";
      default:
        return "category-basic";
    }
  };

  return (
    <section className="camaras-section">
      <div className="camaras-container">
        {/* Header */}
        <div className="camaras-header">
          <h2 className="camaras-title">
            Venta e Instalación de Cámaras de Seguridad
          </h2>
          <div className="camaras-underline"></div>
          <p className="camaras-subtitle">
            Protege tu hogar, negocio o empresa con nuestros sistemas de
            seguridad profesionales. Ofrecemos instalación experta,
            configuración completa y soporte técnico garantizado. Solicita tu
            cotización personalizada vía WhatsApp.
          </p>
        </div>

        {/* Servicios Grid */}
        <div className="camaras-grid">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="camara-card"
              onMouseEnter={() => setHoveredService(servicio.id)}
              onMouseLeave={() => setHoveredService(null)}>
              {/* Icon */}
              <div className="camara-icon-wrapper">
                <div className="camara-icon">
                  {servicio.image === "wifi-camera" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
                    </svg>
                  )}
                  {servicio.image === "dvr-kit" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2M5,6H14V11H5V6M15,6H19V8H15V6M19,9V14H15V9H19M5,12H9V14H5V12M10,12H14V14H10V12Z" />
                    </svg>
                  )}
                  {servicio.image === "ptz-camera" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
                    </svg>
                  )}
                  {servicio.image === "nvr-system" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H8V4H20V16M16,9H18V11H16V9M12,9H14V11H12V9M16,13H18V15H16V13M12,13H14V15H12V13M8,9H10V11H8V9M8,13H10V15H8V13Z" />
                    </svg>
                  )}
                  {servicio.image === "dome-camera" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z" />
                    </svg>
                  )}
                  {servicio.image === "solar-camera" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="camara-content">
                {/* Category Badge */}
                <span
                  className={`camara-category ${getCategoryColor(
                    servicio.category,
                  )}`}>
                  {servicio.category}
                </span>

                <h3 className="camara-title">{servicio.title}</h3>
                <p className="camara-description">{servicio.description}</p>

                {/* Features */}
                <div className="camara-features">
                  {servicio.features.map((feature, idx) => (
                    <span key={idx} className="camara-feature">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Info Row */}
                <div className="camara-info">
                  <div className="info-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>{servicio.warranty}</span>
                  </div>
                  <div className="info-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{servicio.resolution}</span>
                  </div>
                  <div className="info-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{servicio.type}</span>
                  </div>
                </div>

                {/* Included Items */}
                <div className="camara-included">
                  <h4>Incluye:</h4>
                  <ul>
                    {servicio.included.map((item, idx) => (
                      <li key={idx}>
                        <svg fill="currentColor" viewBox="0 0 20 20">
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

                {/* Footer */}
                <div className="camara-footer">
                  <span className="camara-price">
                    {formatPrice(servicio.price)}
                  </span>
                  <button
                    onClick={() => openWhatsApp(servicio)}
                    className="camara-button">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Cotizar por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="camaras-contact">
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <h3>¿Necesitas asesoría personalizada?</h3>
            <p>
              Contáctanos por WhatsApp y te ayudaremos a elegir el mejor sistema
              de seguridad para tus necesidades
            </p>
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "¡Hola! Me gustaría recibir asesoría sobre sistemas de cámaras de seguridad.",
                  )}`,
                  "_blank",
                )
              }
              className="contact-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chatear con Asesor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
