import React from "react";
import Slider from "react-slick";

// components
import Poster from "../poster/poster.component";

//configs
import PosterCarouselsettings from "../../config/PosterCarousel.config";

export const PosterSlider = (props) => {
  const SliderConfig = props.config ? props.config : PosterCarouselsettings;
  return (
    <>
      <div className="flex flex-col items-start my-2">
        <h3
          className={`text-xl font-bold ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}
        >
          {props.subtitle}
        </p>
      </div>
      <Slider {...SliderConfig}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
