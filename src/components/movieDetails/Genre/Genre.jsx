import React from "react";
import { useSelector } from "react-redux";
import styles from "./genre.module.css";

const Genre = () => {
  const genres = useSelector((state) => state.movieDetails.genres);

  let genresList;
  if (genres) {
    genresList = genres.map((genre, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <button type="button" className="btn btn-outline-info">
            {genre.name}
          </button>
        </li>
      );
    });
  }
  return (
    <div className={`row ${styles.genre}`}>
      <div className="col">
        <ul className="list-inline">{genresList}</ul>
      </div>
    </div>
  );
};

export default Genre;
