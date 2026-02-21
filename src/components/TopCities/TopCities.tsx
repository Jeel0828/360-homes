// "use client";
// import React from "react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

// const cities = [
//     { name: "Vasai", properties: 158 },
//     { name: "Mumbai", properties: 158 },
//     { name: "Thane", properties: 158 },
//     { name: "Navi Mumbai", properties: 158 },
//     { name: "Virar", properties: 158 },
//     { name: "Pune", properties: 210 },
//     { name: "Hyderabad", properties: 320 },
// ];

// const TopCities = () => {
//     return (
//         <section className="w-full bg-[#F4F1EF] flex justify-center">
//             <div className="w-full max-w-[1200px] px-6 lg:px-0 py-10 flex flex-col justify-between">
//                 <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
//                         Top <span className="text-[#FF5A4D]">Cities</span>
//                     </h2>
//                 </div>

//                 <div className="relative">

//                     <Swiper
//                         modules={[Navigation, Autoplay]}
//                         spaceBetween={24}
//                         loop={true}
//                         autoplay={{
//                             delay: 2500,
//                             disableOnInteraction: false,
//                         }}
//                         navigation={{
//                             nextEl: ".custom-next",
//                             prevEl: ".custom-prev",
//                         }}
//                         breakpoints={{
//                             0: { slidesPerView: 1.2 },
//                             480: { slidesPerView: 2 },
//                             768: { slidesPerView: 3 },
//                             1024: { slidesPerView: 4 },
//                             1280: { slidesPerView: 5 },
//                         }}
//                     >
//                         {cities.map((city, index) => (
//                             <SwiperSlide key={index}>
//                                 <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 w-[250px] h-[158px] flex flex-col justify-center">

//                                     <div className="w-10 h-10 bg-[#FFF1EF] rounded-xl flex items-center justify-center mb-4">
//                                         <MapPin size={18} className="text-[#FF5A4D]" />
//                                     </div>

//                                     <h3 className="text-lg font-medium text-gray-800">
//                                         {city.name}
//                                     </h3>
//                                     <p className="text-sm text-gray-400 mt-1">
//                                         {city.properties} properties
//                                     </p>

//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     <button className="custom-prev absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:shadow-lg transition hidden md:flex items-center justify-center">
//                         <ChevronLeft size={18} />
//                     </button>

//                     <button className="custom-next absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:shadow-lg transition hidden md:flex items-center justify-center">
//                         <ChevronRight size={18} />
//                     </button>

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default TopCities;

"use client";
import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const cities = [
    { name: "Vasai", properties: 158 },
    { name: "Mumbai", properties: 158 },
    { name: "Thane", properties: 158 },
    { name: "Navi Mumbai", properties: 158 },
    { name: "Virar", properties: 158 },
    { name: "Pune", properties: 210 },
    { name: "Hyderabad", properties: 320 },
];

const TopCities = () => {
    return (
        <section className="bg-[#F4F1EF] flex justify-center">
            <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-0 py-10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
                        Top <span className="text-[#FF5A4D]">Cities</span>
                    </h2>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1.2 },
                            480: { slidesPerView: 2 },
                            640: { slidesPerView: 2.5 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                        }}
                        className="!overflow-visible"
                    >
                        {cities.map((city, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 h-[150px] sm:h-[160px] flex flex-col justify-center">

                                    <div className="w-10 h-10 bg-[#FFF1EF] rounded-xl flex items-center justify-center mb-4">
                                        <MapPin size={18} className="text-[#FF5A4D]" />
                                    </div>

                                    <h3 className="text-base sm:text-lg font-medium text-gray-800">
                                        {city.name}
                                    </h3>

                                    <p className="text-sm text-gray-400 mt-1">
                                        {city.properties} properties
                                    </p>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className="custom-prev absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hover:shadow-lg transition hidden md:flex items-center justify-center">
                        <ChevronLeft size={18} />
                    </button>

                    <button className="custom-next absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hover:shadow-lg transition hidden md:flex items-center justify-center">
                        <ChevronRight size={18} />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default TopCities;