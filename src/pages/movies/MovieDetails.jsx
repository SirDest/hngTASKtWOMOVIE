import React, { useEffect, useState } from "react";
import MovieDetails from "../../components/MovieDetails";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";

const MovieDetailsPage = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=dbeb68ad8241266d74b056cd39ebc519&language=en-US&page=1`;
  const getMovie = async (Url) => {
    const res = await axios(Url);
    setMovies(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getMovie(apiUrl);
  }, [apiUrl]);
  return <div>{loading ? <Loading /> : <MovieDetails movies={movies} />}</div>;
};

export default MovieDetailsPage;
