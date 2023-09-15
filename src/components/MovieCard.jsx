import React, { useState } from "react";
import { LiaImdb } from "react-icons/lia";
import { GiTomato } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [liked, setLiked] = useState(false);
  const likedImage = () => {
    setLiked(!liked);
  };

  const apiImage = "https://image.tmdb.org/t/p/w500";
  const { title, poster_path, release_date, vote_average } = movie;

  return (
    <div data-testid="movie-card" className="relative">
      <div
        onClick={likedImage}
        style={{
          color: liked ? "red" : "white",
          backgroundColor: liked ? "rgba(0,0,0,0)" : "grey",
          transition: "all 0.3s ease-in-out",
        }}
        className="absolute z-10 top-2 right-4 p-2 group rounded-full"
      >
        <AiFillHeart className="text-lg border-none outline-none" />
      </div>
      <Link to={`/movies/${movie.id}`}>
        <div className="card bg-none group h-[490px] rounded-[6px]">
          <div className="h-fit w-full text-center">
            <img
              data-testid="movie-poster"
              src={apiImage + poster_path}
              alt={title}
              className="w-full h-[370px] object-cover relative group-hover:scale-110 ease-in-out duration-500"
            />
          </div>
          <div className="w-full">
            <p className="text-[12px] mt-4 text-gray-400 leading-[15.62px]">
              USA, <span data-testid="movie-release-date">{release_date}</span>
            </p>
            <p
              data-testid="movie-title"
              className="text-[18px] mt-2 font-extrabold leading-[23.44px] text-gray-900"
            >
              {title}
            </p>
            <div className="flex w-full mt-3 justify-between">
              <div className="flex text-center justify-center items-center">
                <LiaImdb className="bg-none border-none outline-none text-yellow-600 text-[18px]" />
                <p className="text-[12px] ml-2">
                  <span>{vote_average}</span>/10
                </p>
              </div>
              <div className="flex text-center justify-center items-center">
                <GiTomato className="bg-none border-none outline-none text-red-600 text-[18px]" />
                <p className="text-[12px] ml-2">97%</p>
              </div>
            </div>
            <p className="text-[12px] mt-3 text-gray-400 leading-[15.62px]">
              Action, Adventure, Horror
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
