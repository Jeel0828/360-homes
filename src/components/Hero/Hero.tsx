"use client";

import { Search, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import backgroundImage from "../../assets/c142055776fb6329173868091570dc749e3c4ca0.jpg";

const Hero = () => {
    const [selectedCity, setSelectedCity] = useState("Mumbai");
    const [searchQuery, setSearchQuery] = useState("");

    const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai"];

    return (
        <section className="w-full py-8 sm:py-10 px-4">
            <div className="max-w-[1240px] mx-auto">
                <div
                    className="relative w-full h-full lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${backgroundImage.src}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

                    <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 lg:p-12">
                        <div className="space-y-4 max-w-[529px]">
                            <div className="inline-block bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                                <p className="text-white/90 text-[12px] md:text-[20px] font-regular">
                                    Buying a home is a big decision.
                                </p>
                            </div>

                            <div>
                                <h1 className="text-[30px] md:text-[60px] font-normal" style={{ fontWeight: "400" }}>
                                    <span className="text-[#FF5A5F] block" style={{ fontFamily: 'sans-serif' }}>
                                        360 HOME
                                    </span>
                                    <span className="text-white block" style={{ fontFamily: 'sans-serif' }}>
                                        Makes it easier.
                                    </span>
                                </h1>
                            </div>

                            <p className="text-white text-[12px] md:text-[20px] font-normal">
                                Buy together. Save more than buying alone.
                            </p>

                            <button className="group bg-[#FF5A5F] hover:bg-[#FF4449] cursor-pointer text-[13px] md:text-[18px] text-white font-normal px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                                style={{ letterSpacing: "0.5px" }}>
                                Want to see how it works?
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="w-full max-w-[730px]">
                            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-2 sm:p-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                                <div className="relative flex-shrink-0">
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        className="w-full sm:w-auto appearance-none bg-transparent text-[#FF5A5F] font-semibold px-4 py-3 sm:py-4 pr-8 rounded-lg focus:outline-none cursor-pointer text-sm sm:text-base"
                                    >
                                        {cities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                    <svg
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF5A5F] pointer-events-none"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                <div className="hidden sm:block w-px h-8 bg-gray-300"></div>

                                <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-4">
                                    <MapPin size={20} className="text-gray-400 flex-shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Search for Developers, Location, Projects"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none text-sm sm:text-base"
                                    />
                                </div>

                                <button className="bg-[#FF5A5F] hover:bg-[#FF4449] text-white rounded-lg sm:rounded-xl px-6 sm:px-8 py-3 sm:py-4 transition-colors flex items-center justify-center flex-shrink-0">
                                    <Search size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end">
                    <div className="bg-white rounded-2xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center -space-x-2">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white flex items-center justify-center shadow-sm">
                                <span className="text-white text-xs sm:text-sm font-bold">L</span>
                            </div>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white flex items-center justify-center shadow-sm">
                                <span className="text-white text-xs sm:text-sm font-bold">P</span>
                            </div>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white flex items-center justify-center shadow-sm">
                                <span className="text-white text-xs sm:text-sm font-bold">G</span>
                            </div>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-red-400 to-pink-500 border-2 border-white flex items-center justify-center shadow-sm">
                                <span className="text-white text-xs sm:text-sm font-bold">M</span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-gray-700 font-semibold text-xs sm:text-sm">
                                100+ Featured Developers
                            </p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF5A5F]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-1 text-gray-700 font-semibold text-xs sm:text-sm">4.8/5</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Hero;