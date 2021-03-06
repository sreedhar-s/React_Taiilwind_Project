import React from "react";
import { BiChevronRight,BiSearch,BiMenu,BiChevronDown, } from "react-icons/bi/";
const NavSm = () => {
    return ( 
    <>
      <nav className="text-white flex items-center justify-between">
          <div>
              <h3 className="text-2xl font-bold">It All starts Here!</h3>
              <span className="text-gray-400 text-xs flex items-center">Guntakal <BiChevronRight /></span>
          </div>
          <div className="w-8 h-8">
            <BiSearch className="w-full h-full"/>
          </div>
      </nav>
    </>
    );  
};
const NavMd = () => {
  return (
    <>
      <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded">
        <BiSearch />
        <input type="search" className="w-full bg-transparant border-none focus:outline-none" placeholder="Search for Movies,Events,plays,Sports and Activities"/>
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
            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />
          </div>

          <div className="w-full flex items-center gap-3 bg-white  px-1 py-1 rounded">
            <BiSearch />
            <input type="search" className="w-full bg-transparant border-none focus:outline-none" placeholder="Search for Movies,Events,plays,Sports and Activities"/>
          </div> 
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">Guntakal <BiChevronDown /></span>
          <button className="bg-red-600 text-white px-3 py-1 text-sm rounded">Sign in</button>
          <div className="w-6 h-6 text-white">
            <BiMenu className="w-full h-full cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
    return (
        <>
          <nav className="bg-bms-700 px-3 py-3">
            <div className="md:hidden">{/* Mobile Screen */}
              <NavSm />
            </div>
            <div className="hidden md:flex lg:hidden">{/* Tablet Screen */}
              <NavMd /> 
            </div>
            <div className="hidden md-hidden lg:flex">{/* Large Screen */}
              <NavLg />
            </div>  
          </nav> 
        </>
    );
};

export default Navbar;