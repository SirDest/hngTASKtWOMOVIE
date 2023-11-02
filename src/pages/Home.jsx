import { useEffect, useState } from "react";
import Landing from "../components/Landing";
import Movies from "../components/Movies";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=b7a4a649482ae6b85f96f25cfb20fdf5";
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const topTen = data.results.slice(0, 10);
        setMovies(topTen);
        setLoading(false);
      })
      .catch((error) => setLoading(true));
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Landing />
          <Movies movies={movies} loading={loading} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
