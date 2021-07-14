import React from "react";
import HeroSlider from "react-slick";

//Import arrow component
import { NextArrow,PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {

       const settingsLG = {
          dots:true,
          arrows: true,
          autoplay: true,
          centerMode: true,
          centerPadding: "300px",
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          nextArrow:<NextArrow />,
          prevArrow:<PrevArrow />,
        };
        const settings = {
            arrows:true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow:< NextArrow />,
            prevArrow:< PrevArrow />,
        };

        const images = [
            "https://in.bmscdn.com/promotions/cms/creatives/1626197447125_nomis_1280x500webbanner_14julios.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1625077257492_dearishqafestivalofkisseykahaniyaanpoetry_webshowcase_1280x500.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1625685026902_joboltahaiwohihotahaifeatharshgujral_webshowcase_1280x500.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1625559912123_bsm_1280x500_chickflick.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1625720005981_upgradgrouppagebanner_webshowcase_1280x500.jpg",
        ];

        
        return (
            <>
              <div className="lg:hidden">
                <HeroSlider {...settings}>
                  {images.map((image) => (
                    <div className="w-full h-56 md:h-80 py-3">
                      <img src={image} alt="testing" className="w-full h-full" />
                    </div>
                  ))}
                </HeroSlider>
              </div>
        
              <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                  {images.map((image) => (
                    <div className="w-full h-72 px-1 py-2">
                      <img
                        src={image}
                        alt="testing"
                        className="w-full h-full rounded-md"
                      />
                    </div>
                  ))}
                </HeroSlider>
              </div>
            </>
        );
};

export default HeroCarousal;