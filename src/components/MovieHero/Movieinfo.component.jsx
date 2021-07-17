import React from 'react';

const Movieinfo = () => {
    return (
        <div className="flex flex-col gap-5 lg:gap-6 md:px-1">
            <div className="flex items-center gap-3">
                <div className="w-20 h-4">
                    <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premier" className="w-full h-full" />
                </div>
                <span className="bg-bms-800 text-xs text-white rounded-md">Streaming Now</span>
            </div> 
            <h1 className="lg:text-3xl text-white font-bold hidden lg:block">Zack Snyder`s Justice League</h1>
            <div className="flex flex-col-reverse lg:gap-5 lg:flex-col">
                <div className="text-white text-sm font-light flex flex-col gap-2">
                    <h4>4K &bull; English &bull; Action</h4>
                    <h4 className="font-semibold">4h 1m &bull; Action,ci-Fi Thriller &bull; 13+</h4>
                </div>
                <div className="flex items-center gap-3 md:px-4 md:py-3 mt-3 md:w-screen lg:w-full">
                    <button className="bg-red-500 w-full h-10 text-white font-semibold rounded-lg">Rent₹140</button>
                    <button className="bg-red-500 w-full h-10 text-white font-semibold rounded-lg">Buy₹140</button>
                </div>
            </div>
        </div>
    )
}

export default Movieinfo;
