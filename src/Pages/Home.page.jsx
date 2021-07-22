import React, { useState, useEffect } from "react";

//Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
import StreamImage from "../components/Stream/Stream.components";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
// import TempPosters from "../config/TempPosters.config";
import axios from "axios";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);


  return (
    <>
      {" "}
      <div className="w-auto h-auto bg-bms-100 mt-8">
        <div className="container mx-auto px-4">
          <StreamImage />
          <h1 className="text-xl font-bold text-gray-800 mt-10">
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
      </div>
      <div className="bg-bms-800 py-12">
        <div className="container mx-auto px-4">
          <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="premier"
            className="w-full h-full pb-16"
          />
          <PosterSlider
            images={popularMovies}
            title="Premiers"
            subtitle="Brand new releas Every Friday"
            isDark
          />
        </div>
      </div>
      <div className="bg-bms-100">
        <div className="container mx-auto px-4 py-6">
          <PosterSlider
            images={topRatedMovies}
            title="Top Rated Movies"
            isDark={false}
          />
        </div>

        <div className="container mx-auto px-4 py-6">
          <PosterSlider
            images={upcomingMovies}
            title="Upcoming Movies"
            isDark={false}
          />
        </div>
          
      </div>
    </>
  );
};

export default HomePage;
