import React from 'react'
import Movieinfo from './Movieinfo.component';

export const MovieHero = () => {
    return (
        <>
           {/* Mobile screen */}
           <div className="relative md:hidden w-full" style={{height:"calc(180vw)"}}>
               <div className="absolute z-20 bottom-4 left-4">
                   <Movieinfo />
               </div>
               <div className="w-full h-52 absolute bg-opacity-50 bg-black z-10 bottom-0" />
               <img  src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="poster" className="w-full h-full"/>
           </div>

           {/* Tablet Screen */}
           <div className="relative hidden md:block w-full lg:hidden" style={{height:"calc(100vw)"}}>
                <div className="absolute z-20 bottom-4">
                   <Movieinfo />
                </div>
               <div className="w-full h-52 absolute bg-opacity-50 bg-black z-10 bottom-0" />
               <img  src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="poster" className="w-full h-full"/>
           </div>

           {/* Large Screen */}
           <div className="relative hidden w-full lg:block" style={{height: "28rem"}}>
               <div className="absolute z-10 w-full h-full" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%"}} />
               <div className="absolute z-30 left-24 top-8 flex items-center gap-10">
                    <div className=" w-56 h-96 ">
                       <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="poster" className="w-full h-full rounded-xl" />
                    </div>
                    <div>
                        <Movieinfo />
                    </div>
                </div> 
               <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="poster" className="w-full h-full"/>
           </div> 
        </>
    )
}

export default MovieHero;