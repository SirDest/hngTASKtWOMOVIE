import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./pages/movies/MovieDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
