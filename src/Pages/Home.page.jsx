import React from "react";

//Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
import StreamImage from "../components/Stream/Stream.components";
import PosterSlider  from "../components/PosterSlider/PosterSlider.component";

//config
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
    return (
        <>
          { " "}
          <div className="w-auto h-auto bg-bms-100 mt-8">
            <div className="container mx-auto px-4">
              <StreamImage />
              <h1 className="text-xl font-bold text-gray-800 mt-10">The Best of Entertainment</h1>
              <EntertainmentCardSlider />
            </div>
          </div>
          <div className="bg-bms-800 py-12">
            <div className="container mx-auto px-4">
              <img className="w-full h-full pb-16" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="premier image"/>
              <PosterSlider images={TempPosters} title="Premiers" subtitle="Brand new releas Every Friday" isDark/>
            </div>
          </div>

          <div className="bg-bms-100">
            <div className="container mx-auto px-4 py-6">
              <PosterSlider images={TempPosters} title="Online Streaming Events" isDark={false}/>
            </div>

            <div className="container mx-auto px-4 py-6">
              <PosterSlider images={TempPosters} title="Outdoor Events" isDark={false}/>
            </div>

            <div className="container mx-auto px-4 py-6">
              <PosterSlider images={TempPosters} title="Popular Events" isDark={false}/>
            </div>
          </div>
        </>
    );
};

export default HomePage;

