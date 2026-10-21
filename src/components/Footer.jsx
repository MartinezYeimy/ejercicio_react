
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#inicio" className={styles.logo}>
        GameHub<span>.</span>
      </a>

      <p className={styles.description}>
        Tu espacio para descubrir videojuegos,
        explorar nuevas aventuras y guardar tus favoritos.
      </p>

      <div className={styles.credits}>
        <span>Ejercicio desarrollado con React.</span>
        <span>© 2026 GameHub. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
