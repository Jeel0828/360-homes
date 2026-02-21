"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

// Import developer images from assets
import dev1Image1 from "../../assets/developer/06c21d32b503ad0c498c590bbf18fec6711b98a4.jpg";
import dev1Image2 from "../../assets/developer/5f1e8cbc336556568684eea8b16de0d251c31df4.jpg";
import dev1Image3 from "../../assets/developer/8822342757c70d5a51266fd9737c884522a18ed4.jpg";

const developers = [
    {
        images: [
            dev1Image1.src,
            dev1Image2.src,
            dev1Image3.src,
        ],
        title: "Godrej South Estate",
        location: "Okla, Phase 1, New Delhi",
        company: "Burrington Property Group",
        projects: 35,
    },
    {
        images: [
            dev1Image2.src,
            dev1Image3.src,
            dev1Image1.src,
        ],
        title: "Godrej South Estate",
        location: "Okla, Phase 1, New Delhi",
        company: "Burrington Property Group",
        projects: 35,
    },
    {
        images: [
            dev1Image3.src,
            dev1Image1.src,
            dev1Image2.src,
        ],
        title: "Godrej South Estate",
        location: "Okla, Phase 1, New Delhi",
        company: "Burrington Property Group",
        projects: 35,
    },
];

const TopDevelopers = () => {
    return (
        <section className="w-full bg-[#F4F1EF] py-10">
            <div className="w-full max-w-[1240px] mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[25px] md:text-[32px] font-serif text-[#171414]">
                        Top <span className="text-[#FF5A4D]">Developers</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {developers.map((dev, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[20px] shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
                        >
                            <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px]">

                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    className="h-full"
                                >
                                    {dev.images.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <img
                                                src={img}
                                                alt="property"
                                                className="w-full h-full object-cover"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="absolute bottom-6 left-4 text-white z-10">
                                    <h3 className="text-[15px] md:text-[20px] font-normal font-serif drop-shadow-md" style={{ fontWeight: '400' }}>
                                        {dev.title}
                                    </h3>
                                    <p className="text-[10px] md:text-[14px] font-normal font-sans opacity-90 drop-shadow-md" style={{ fontWeight: '400' }}>
                                        {dev.location}
                                    </p>
                                </div>

                                <button className="absolute cursor-pointer bottom-6 right-4 bg-white/30 backdrop-blur-md p-2 rounded-lg z-10" style={{ backdropFilter: 'blur(54px)' }}>
                                    <ArrowUpRight size={16} className="text-white" />
                                </button>
                            </div>

                            <div className="p-5 flex flex-col gap-3 flex-1">

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#FF5A4D] rounded-md flex items-center justify-center text-white text-xs font-bold">
                                        360
                                    </div>
                                    <div>
                                        <p className="font-semibold font-sans text-gray-800 text-[10px] md:text-[14px]" style={{ fontWeight: '600' }}>
                                            {dev.company}
                                        </p>
                                        <p className="text-[10px] md:text-[14px] font-medium font-sans text-[#96817F]" style={{ fontWeight: '400' }}>
                                            Developer
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-[14px] md:text-[18px] font-normal font-sans text-[#818181]" style={{ fontWeight: '400' }}>
                                        No of Projects :
                                    </p>
                                    <p className="font-semibold font-sans text-[#171414] text-[15px] md:text-[20px]" style={{ fontWeight: '600' }}>
                                        {dev.projects} Properties
                                    </p>
                                </div>

                                <button className="bg-[#FF5349] cursor-pointer text-white py-3 rounded-lg hover:bg-[#ff4437] transition text-[14px] md:text-[18px] font-normal font-sans" style={{ fontWeight: '400' }}>
                                    View All Projects
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default TopDevelopers;