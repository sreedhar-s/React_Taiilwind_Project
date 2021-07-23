import React, {useContext}  from "react";
import { BiSearch, BiMenu, BiChevronDown, BiShareAlt } from "react-icons/bi/";

//context
import { MovieContext } from "../../context/movie.context";

const NavSm = () => {

  const { movie } = useContext(MovieContext); 

  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">{movie.original_title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {

  return (
    <>
      <div className="container mx-auto p-1 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>

          <div className="w-full flex items-center gap-3 bg-white  px-1 py-1 rounded">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparant border-none focus:outline-none"
              placeholder="Search for Movies,Events,plays,Sports and Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
            Guntakal <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-3 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-6 h-6 text-white">
            <BiMenu className="w-full h-full cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4">
        <div className="md:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>
        <div className="hidden md:block lg:hidden">
          {/* Medium/Tab screen */}
          <NavSm />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
