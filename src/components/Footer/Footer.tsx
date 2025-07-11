import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/images/NewLogo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <img src={Logo} alt="Logo" className={styles.logoImage} />
        </div>

        <div className={styles.links}>
          <a href="/about">Sobre Nosotros</a>
          <a href="/contact">Contacto</a>
          <a href="/privacy">Privacidad</a>
        </div>

        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className={styles.copy}>© {year} Todos los derechos reservados.</div>
    </footer>
  );
};

export default Footer;
