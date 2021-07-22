import React from "react";
import Poster from "../components/poster/poster.component";

import PlaysFilter from "../components/PalysFilters/PlaysFilters.components";

const Plays = () => {
  return (
    <>
      <div className="w-auto h-auto bg-bms-100 mt-7">
        <div className="container mx-auto px-4">
          <div className="w-full lg:flex lg:flex-row-reverse gap-8">
            <div className="lg:w-8/12 mt-8">
              <h2 className="text-gray-800 font-bold text-2xl mb-5">
                Plays in Guntakal
              </h2>
              <div className="flex flex-wrap">
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                    subtitle="Telugu -> ₹400"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-ekwuvquphc-portrait.jpg"
                    title="Admission - 31st July (Saturday)"
                    subtitle="Comedy, Drama | English | 12yrs + | 24hrs"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311042-wmtzbczsdj-portrait.jpg"
                    title="Ellamae Thamash Than"
                    subtitle="Comedy, Drama | Tamil | All age groups | 12hrs"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311042-wmtzbczsdj-portrait.jpg"
                    title="Ellamae Thamash Than"
                    subtitle="Comedy, Drama | Tamil | All age groups | 12hrs"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-3/12 mt-8">
              <h2 className="text-gray-800 font-bold text-2xl mb-5">
                Filters
              </h2>
              <div>
                  <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]} />
                  <PlaysFilter title= "Language" tags={["Tamil","Telugu","English"]} />
                  <PlaysFilter title="Categories" tags={["Theater"]} />
                  <PlaysFilter title="Generes" tags={["Drama","Addption","Comedy","Historical"]} />
                  <PlaysFilter title="More filters" tags={["Online Streaming","Kids Play"]} />
                  <PlaysFilter title="Price" tags={["Free","0-500","501-2000","Above 2000"]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
