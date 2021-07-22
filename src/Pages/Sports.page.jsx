import React from "react";
import Poster from "../components/poster/poster.component";

import SportsFilter from "../components/PalysFilters/PlaysFilters.components";

const Sports = () => {
  return (
    <>
      <div className="w-auto h-auto bg-bms-100 mt-8">
        <div className="container mx-auto px-4">
          <div className="w-full lg:flex lg:flex-row-reverse gap-8">
            <div className="lg:w-8/12 mt-8">
              <h2 className="text-gray-800 font-bold text-2xl mb-5">
                Sports in Guntakal
              </h2>
              <div className="flex flex-wrap">
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00134925-swezkrzhsz-portrait.jpg"
                    title="Free Fire Solo And Squad (Bermuda)"
                    subtitle="E Sports | English | 16yrs +"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312550-rkmxnlvdwg-portrait.jpg"
                    title="BGMI Tournament (Solo & Squad) By VP Gaming"
                    subtitle="E Sports | English | 18yrs +"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00310867-cstkdakrum-portrait.jpg"
                    title="Pegasus Project- Online Escape Room- Witty Escapes"
                    subtitle="E Sports | English | 2hrs"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311112-dlsqznpzsw-portrait.jpg"
                    title="Battlegrounds Mobile India Tournament"
                    subtitle="E Sports | English | 16yrs +"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311497-yncssersnf-portrait.jpg"
                    title="Online Game - Flight 9032 Murder Mystery"
                    subtitle="E Sports | English | 10yrs + | 1hr"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00137986-rglrembfmb-portrait.jpg"
                    title="Indian Chess League 2021"
                    subtitle="E Sports | English | 5yrs + | 30mins"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00310502-rjdpzwclrw-portrait.jpg"
                    title="Weekly Chess Maha Muqabla"
                    subtitle="E Sports | English | 5yrs +"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311397-dxpcgndrha-portrait.jpg"
                    title="Online Game - The Haunted Lake"
                    subtitle="E Sports | English | 10yrs + | 1hr"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-3/12 mt-8">
              <h2 className="text-gray-800 font-bold text-2xl mb-5">
                Filters
              </h2>
              <div>
                  <SportsFilter title="Date" tags={["Today","Tomorrow","This Weekend"]} />
                  <SportsFilter title= "Categories" tags={["ESoprts"]} />
                  <SportsFilter title="More Filters" tags={["Kids Allowed","Kids Activities","Online Streaming"]} />
                  <SportsFilter title="Price" tags={["Free","0-500","501-2000","Above 2000"]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sports;