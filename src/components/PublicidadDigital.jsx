// src/components/PublicidadDigital.jsx
import React from "react";
import tiktokLogo from "../assets/tiktok.png";
import metaLogo from "../assets/meta.png";
import whatsappLogo from "../assets/whatsapp.png";
import "./PublicidadDigital.css";

export default function PublicidadDigital() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Publicidad Digital
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        <img
          src={tiktokLogo}
          alt="TikTok Ads"
          className="w-32 h-32 object-contain"
        />
        <img
          src={metaLogo}
          alt="Meta Ads"
          className="w-32 h-32 object-contain"
        />
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className="w-32 h-32 object-contain"
        />
      </div>
    </section>
  );
}
