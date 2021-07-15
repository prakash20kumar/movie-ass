import React from "react";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import styles from "./movieLists.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeMovieFromFavorite } from "./favorite/favorite.action";

const MovieLists = ({ movies }) => {
  const dispatch = useDispatch();
  const { favMovies } = useSelector((state) => state.favorite);
  const isMovie = favMovies.find((favMovies) => favMovies.id === movies.id);

  const onAddFavorite = () => {
    if (!isMovie) {
      dispatch(addToFavorite(movies));
    }
  };

  const handleRemoveFavorite = (id) => {
    if (isMovie) {
      dispatch(removeMovieFromFavorite(id));
    }
  };

  return (
    <div className={`col-md-3 col-sm-6 ${styles.movie_list}`}>
      <div className="card">
        <NavLink to={`/movie/${movies.id}`}>
          <img
            className="img-fluid"
            src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
            alt={movies.title}
          />
        </NavLink>
      </div>
      <div className="mt-2">
        <p className={styles.card_title}>
          {movies.title}
          <span className={styles.heart_icon} onClick={isMovie ? () => handleRemoveFavorite(movies.id) : onAddFavorite}>
            <i className={isMovie ? `fa fa-heart` : `far fa-heart`}></i>
          </span>
        </p>
        <p>Rated: {movies.vote_average}</p>
        <ReactStars
          count={10}
          value={movies.vote_average}
          size={22}
          edit={false}
          activeColor={"#f4c10f"}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
        ></ReactStars>
      </div>
    </div>
  );
};

export default MovieLists;
