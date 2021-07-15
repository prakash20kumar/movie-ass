import React from "react";
import { useSelector } from "react-redux";
import styles from "./casts.module.css";

const Casts = () => {
  const { casts } = useSelector((state) => state.movieDetails);

  const castList =
    casts &&
    casts.cast.slice(0, 8).map((cast, i) => {
      return (
        <div className="col-md-3 text-center" key={i}>
          <img
            className="img-fluid rounded-circle mx-auto d-block"
            src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
            alt={cast.name}
          />
          <p className="font-weight-bold text-center">{cast.name}</p>
          <p className={`font-weight-light text-center ${styles.heading}`}>{cast.character}</p>
        </div>
      );
    });

  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <p className={styles.heading}>CASTS</p>
        </div>
      </div>
      <div className="row mt-3">{castList}</div>
    </>
  );
};

export default Casts;
