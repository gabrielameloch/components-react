// NovoIcon.js
import React from "react";
import "./style.css";

const NovoIcon = ({ src, alt }) => {
  return (
    <div className="icon-boo">
      <img src={src} alt={alt} className="icon-boo" />
    </div>
  );
};

export default NovoIcon;
