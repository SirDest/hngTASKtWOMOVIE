import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-fit py-6 items-center place-content-center flex flex-col justify-center">
      <ClipLoader className="bg-white m-auto" size={80} />
      <p className="mt-8">
        Loading... If it takes time, check internet connection.{" "}
      </p>
    </div>
  );
};

export default Loading;
