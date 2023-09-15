import React from "react";
import Search from "./Search";
import logo from "./Images/Logo.png";
import { FaEquals } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full text-white flex justify-between text-center m-auto h-fit pl-4 sm:px-[40px] md:px-[95px] md:py-3 absolute top-0 z-1">
      <div className="h-fit flex justify-center text-center items-center py-[15px] cursor-pointer">
        <Link to={"/"}>
          <img
            src={logo}
            alt="MovieBox"
            className="w-[186px] h-[50px] hover:scale-110 ease-in-out duration-500"
          />
        </Link>
      </div>
      <Search />
      <div className="w-[fit] h-[36px] pr-4 gap-3 mt-[22px] flex justify-between leading-6 bold font-[16px] cursor-pointer">
        <p className="md:flex hidden justify-center text-center content-center items-center m-auto">
          Sign in
        </p>
        <div className="w-[36px] rounded-full h-[36px] bg-rose-700 hover:bg-rose-500 ease-in-out duration-500 flex justify-center cursor-pointer text-center content-center items-center m-auto">
          <FaEquals />
        </div>
      </div>
    </div>
  );
};

export default Header;
