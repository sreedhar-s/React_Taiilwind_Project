import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component";
  
//HeroCarousal
import HeroCarousal from "../components/HeroCarousal/HeroCourasal.components";

const DefaultLayout = (props) =>{
    return (
      <>
        <Navbar />
        <HeroCarousal />
        {props.children}
      </>
    );
};

export default DefaultLayout;