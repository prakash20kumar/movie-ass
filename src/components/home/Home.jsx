import React, { useEffect } from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../actions/movies.actions";
import RBCarousel from "react-bootstrap-carousel";
import styles from "./home.module.css";
import MovieLists from "./movieLists/MovieLists";
import Footer from "../footer/Footer";
import MoviesCarousel from "./moviesCarousel/MoviesCarousel";
import Favorite from "./movieLists/favorite/Favorite";

const Home = () => {
  const nowPlaying = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const movies = nowPlaying.slice(0, 5).map((item, i) => {
    return <MoviesCarousel item={item} index={i} key={i} />;
  });

  const movieList = nowPlaying.map((item, i) => {
    return <MovieLists movies={item} index={i} key={i} />;
  });

  return (
    <div className="container">
      <div className="row mt-2 mb-4">
        <div className="col">
          <RBCarousel autoplay={true} pauseOnVisibility={true} slideshowSpeed={5000} version={4} indicators={false}>
            {movies}
          </RBCarousel>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className={styles.heading}>LATEST MOVIES</p>
          <Favorite />
        </div>
      </div>
      <div className={`row ${styles.movie_list}`}>{movieList}</div>
      <Footer />
    </div>
  );
};

export default Home;
