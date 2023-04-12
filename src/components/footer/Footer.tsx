import { Link } from "react-router-dom";

import React from "react";
import "./footer.scss";
import { FooterProps } from "./Footer.types";

export const Footer = ({ logoUrl, text }: FooterProps) => {
  return (
    <footer>
      <div className="footer-logo">
        <Link to="/">
          <img src={logoUrl} alt="Logo" />
        </Link>
      </div>
      <p>{text}</p>
    </footer>
  );
};

Footer.defaultProps = {
  logoUrl: "../images/logo.png",
  text: "Lorem ipsum footer text",
};
