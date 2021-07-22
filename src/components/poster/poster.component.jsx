import React from "react";
import { Link } from "react-router-dom";

export const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col items-start gap-2 px-3">
        <div className="h-68">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.original_title}
            className="w-full h-full rounded-md"
          />
        </div>
        <h3
          className={`text-base font-semibold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.original_title}
        </h3>
        <p
          className={`text-xs ${props.isDark ? "text-white" : "text-gray-700"}`}
        >
          {props.subtitle}
        </p>
      </div>
    </Link>
  );
};

export default Poster;
