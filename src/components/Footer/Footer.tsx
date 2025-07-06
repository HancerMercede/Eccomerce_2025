import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <h2>CompraYa</h2>
          <p>Tu mercado digital de confianza</p>
        </div>

        <div className={styles.links}>
          <a href="/about">Sobre Nosotros</a>
          <a href="/contact">Contacto</a>
          <a href="/privacy">Privacidad</a>
        </div>

        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank">
            🌐
          </a>
          <a href="https://instagram.com" target="_blank">
            📸
          </a>
          <a href="https://twitter.com" target="_blank">
            🐦
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        © {year} CompraYa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
