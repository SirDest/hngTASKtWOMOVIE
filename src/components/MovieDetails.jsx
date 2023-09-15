import React from "react";
import SideBar from "./SideBar";
import EachDetails from "./EachDetails";

const MovieDetails = ({ movies }) => {
  return (
    <div className="flex">
      <SideBar />
      <EachDetails movie={movies} />
    </div>
  );
};

export default MovieDetails;
