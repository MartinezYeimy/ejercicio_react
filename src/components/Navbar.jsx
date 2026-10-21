
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#inicio" className={styles.logo}>
          GameHub<span>.</span>
        </a>

        <div className={styles.links}>
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#favoritos">Favoritos</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
