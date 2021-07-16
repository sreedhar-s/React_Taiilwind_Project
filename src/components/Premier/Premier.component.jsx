import React from "react";
import Slider from "react-slick";

// components
import Poster from "../poster/poster.component";

//configs
import PosterCarouselsettings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";


export const Premier = () => {
    
return (
    <>
      <div className="container mx-auto px-4 flex flex-col items-start pb-2">
        <h3 className="text-white text-xl font-bold">Premiers</h3>
        <p className="text-white text-sm">Brand new release every Friday</p>
      </div>  
      <Slider {...PosterCarouselsettings}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark/>
        ))}
      </Slider>
    </>
  );
};

export default Premier;