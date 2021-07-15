import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./moviesCarousel.module.css";

const MoviesCarousel = ({ item: { backdrop_path, title, id } }) => {
  return (
    <div className={styles.carousel}>
      <div className="carousel-center">
        <NavLink to={`/movie/${id}`}>
          <img
            className={styles.carousel_img}
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
          />
        </NavLink>
      </div>
      <div className={`carousel-caption ${styles.carousel_caption}`}>{title}</div>
    </div>
  );
};

export default MoviesCarousel;
