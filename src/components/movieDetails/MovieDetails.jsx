import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../actions/movies.actions";
import Footer from "../footer/Footer";
import Casts from "./Casts/Casts";
import Genre from "./Genre/Genre";
import MovieCarouselDetails from "./movieCarouselDetails/MovieCarouselDetails";
import Overview from "./overview/Overview";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <MovieCarouselDetails />
      <Genre />
      <Overview />
      <Casts />
      <Footer />
    </div>
  );
};

export default MovieDetails;
