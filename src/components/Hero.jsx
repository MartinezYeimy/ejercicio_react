
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <p className={styles.tag}>
          DESCUBRE TU PRÓXIMA AVENTURA
        </p>

        <h1>
          Tu próximo juego favorito
          <span> está aquí.</span>
        </h1>

        <p className={styles.description}>
          Explora mundos, descubre nuevas historias y encuentra
          los videojuegos que más te gustan. Guarda tus favoritos
          y organiza tu próxima aventura.
        </p>

        <a href="#catalogo" className={styles.button}>
          Explora ahora <span aria-hidden="true">→</span>
        </a>

        <p className={styles.note}>
          Explora. Descubre. Juega.
        </p>
      </div>
    </section>
  );
}

export default Hero;
