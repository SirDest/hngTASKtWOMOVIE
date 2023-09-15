import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import MovieCard from "./MovieCard";
import Loading from "./Loading";

const Movies = ({ movies, loading }) => {
  return (
    <div className="w-full h-fit lg:px-[100px] sm:px-[50px] md:px-[50px]">
      <div className="bg-white w-full h-full">
        <div className="w-full flex justify-between pt-[100px] ">
          <p className="text-3xl font-bold">Featured Movie</p>
          <button className="text-rose-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm">
            See more <AiOutlineRight />
          </button>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="mt-10 gap-[80px] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
            {/* Movie cards */}
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
