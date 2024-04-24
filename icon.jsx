import React from "react";
import "./style.css"; // Importe o arquivo de estilos CSS para aplicar estilos personalizados

const Icon = ({ src, alt }) => {
  return (
    <div className="icon-bella">
      <img src={src} alt={alt} className="icon-bella" />
    </div>
  );
};

export default Icon;
