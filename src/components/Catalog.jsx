
import { useState } from "react";
import styles from "./Catalog.module.css";

const games = [
  {
    id: 1,
    name: "Hades",
    genre: "Acción · Roguelike",
    platform: "PC · PlayStation · Switch · Xbox",
    description:
      "Lucha para escapar del inframundo en esta aventura inspirada en la mitología griega.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
  },
  {
    id: 2,
    name: "Stardew Valley",
    genre: "Simulación · RPG",
    platform: "PC · PlayStation · Switch · Xbox · Móvil",
    description:
      "Construye tu granja, cultiva alimentos, conoce personajes y explora el valle.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
  },
  {
    id: 3,
    name: "Cyberpunk 2077",
    genre: "RPG · Mundo abierto",
    platform: "PC · PlayStation 5 · Xbox Series X/S",
    description:
      "Explora Night City en una aventura futurista llena de misiones y decisiones.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
  },
  {
    id: 4,
    name: "Hollow Knight",
    genre: "Aventura · Metroidvania",
    platform: "PC · PlayStation · Switch · Xbox",
    description:
      "Recorre un reino subterráneo, descubre secretos y enfréntate a criaturas misteriosas.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
  },
  {
    id: 5,
    name: "Portal 2",
    genre: "Puzles · Ciencia ficción",
    platform: "PC · PlayStation 3 · Xbox 360",
    description:
      "Resuelve acertijos utilizando portales, lógica y objetos del entorno.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg",
  },
  {
    id: 6,
    name: "The Witcher 3",
    genre: "RPG · Fantasía",
    platform: "PC · PlayStation · Switch · Xbox",
    description:
      "Acompaña a Geralt en una aventura de fantasía con monstruos y misiones.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
  },
];

function Catalog() {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  function toggleFavorite(id) {
    setFavorites((previousFavorites) =>
      previousFavorites.includes(id)
        ? previousFavorites.filter(
            (favoriteId) => favoriteId !== id
          )
        : [...previousFavorites, id]
    );
  }

  const visibleGames = showFavorites
    ? games.filter((game) => favorites.includes(game.id))
    : games;

  return (
    <section className={styles.catalog} id="catalogo">
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>
            EXPLORA NUEVAS AVENTURAS
          </p>

          <h2>
            {showFavorites
              ? "Mis videojuegos favoritos"
              : "Catálogo de videojuegos"}
          </h2>

          <p className={styles.subtitle}>
            {showFavorites
              ? "Aquí encontrarás los juegos que has guardado."
              : "Descubre juegos, conoce sus características y guarda los que más te gusten."}
          </p>
        </div>

        <a
          href="#favoritos"
          className={styles.counter}
          aria-label={`Ver favoritos: ${favorites.length} videojuegos`}
          onClick={() => setShowFavorites(true)}
        >
          <span className={styles.counterHeart}>♥</span>

          <span className={styles.counterInfo}>
            <strong>{favorites.length}</strong>
            <small>
              {favorites.length === 1
                ? "Favorito"
                : "Favoritos"}
            </small>
          </span>
        </a>
      </div>

      <div className={styles.filters}>
        <button
          type="button"
          className={!showFavorites ? styles.active : ""}
          onClick={() => setShowFavorites(false)}
          aria-pressed={!showFavorites}
        >
          Todos los juegos ({games.length})
        </button>

        <button
          type="button"
          className={showFavorites ? styles.active : ""}
          onClick={() => setShowFavorites(true)}
          aria-pressed={showFavorites}
        >
          ♥ Mis favoritos ({favorites.length})
        </button>
      </div>

      <div id="favoritos">
        {visibleGames.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyHeart}>♡</span>

            <h3>Aún no tienes favoritos</h3>

            <p>
              Explora el catálogo y agrega los videojuegos que
              quieras guardar en tu lista.
            </p>

            <button
              type="button"
              className={styles.exploreButton}
              onClick={() => setShowFavorites(false)}
            >
              Explorar catálogo
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {visibleGames.map((game) => {
              const isFavorite = favorites.includes(game.id);

              return (
                <article
                  className={styles.card}
                  key={game.id}
                >
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.image}
                      src={game.image}
                      alt={`Portada de ${game.name}`}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.gameHeading}>
                      <h3>{game.name}</h3>

                      <button
                        type="button"
                        className={`${styles.heart} ${
                          isFavorite ? styles.selected : ""
                        }`}
                        onClick={() => toggleFavorite(game.id)}
                        aria-label={
                          isFavorite
                            ? `Quitar ${game.name} de favoritos`
                            : `Agregar ${game.name} a favoritos`
                        }
                        aria-pressed={isFavorite}
                      >
                        {isFavorite ? "♥" : "♡"}
                      </button>
                    </div>

                    <span className={styles.genre}>
                      {game.genre}
                    </span>

                    <p className={styles.description}>
                      {game.description}
                    </p>

                    <p className={styles.platform}>
                      <strong>Plataformas</strong>
                      <span>{game.platform}</span>
                    </p>

                    <button
                      type="button"
                      className={`${styles.favoriteButton} ${
                        isFavorite ? styles.removeButton : ""
                      }`}
                      onClick={() => toggleFavorite(game.id)}
                    >
                      {isFavorite
                        ? "♥ En favoritos"
                        : "+ Agregar a favoritos"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalog;
