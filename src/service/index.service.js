const service = () => {
  const apiKey = "4e44d9029b1270a757cddc766a1bcb63";
  const url = "https://api.themoviedb.org/3";
  const nowPlayingUrl = `${url}/movie/now_playing`;
  const movieUrl = `${url}/movie`;

  const getAllMovies = () => {
    return fetch(`${nowPlayingUrl}?api_key=${apiKey}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      })
      .catch((e) => e);
  };

  const getMovieDetails = (id) => {
    return fetch(`${movieUrl}/${id}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((e) => e);
  };

  const getMovieVideos = (id) => {
    return fetch(`${movieUrl}/${id}/videos?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  };

  const getMovieCasts = (id) => {
    return fetch(`${movieUrl}/${id}/credits?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  };

  return {
    getAllMovies,
    getMovieDetails,
    getMovieVideos,
    getMovieCasts,
  };
};

const movieService = service();

export default movieService;
