
import styles from "./Navbar.module.css";

function Navbar({ darkMode, toggleTheme }) {
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

        <button
          type="button"
          className={styles.themeButton}
          onClick={toggleTheme}
          aria-label={
            darkMode
              ? "Cambiar a modo claro"
              : "Cambiar a modo oscuro"
          }
        >
          {darkMode ? "☀️ Modo claro" : "🌙 Modo oscuro"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
