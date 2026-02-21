"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Heart, Share2, Phone, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

// Import feature images from assets
import feature1Image from "../../assets/features/15b7dc971d999aa9433c1d4f8023fe2298ac28f4.jpg";
import feature2Image from "../../assets/features/56b57cc4a241cc7063c2064f7b6fa005c89cc2da.jpg";
import feature3Image from "../../assets/features/b1795b7dc16cdd821cac72cbb42f2b1a37e62c80.jpg";

const properties = [
    {
        id: 1,
        image: feature1Image.src,
        title: "Godrej South Estate",
        location: "Vesu, Surat, Gujarat",
    },
    {
        id: 2,
        image: feature2Image.src,
        title: "Godrej South Estate",
        location: "Vesu, Surat, Gujarat",
    },
    {
        id: 3,
        image: feature3Image.src,
        title: "Godrej South Estate",
        location: "Vesu, Surat, Gujarat",
    },
    {
        id: 4,
        image: feature1Image.src,
        title: "Godrej South Estate",
        location: "Vesu, Surat, Gujarat",
    },
];

export default function FeatureProperties() {
    return (
        <section className="w-full py-12">
            <div className="max-w-[1240px] mx-auto px-4 relative">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[25px] md:text-[32px] font-regular">
                        <span className="text-black">Featured </span>
                        <span className="text-[#FF5A4D]">Properties</span>
                    </h2>
                </div>

                {/* <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 hidden md:block">
                    <button className="prevBtn cursor-pointer bg-white text-black shadow-md w-10 h-10 rounded-lg flex items-center justify-center">
                        <ChevronLeft size={18} />
                    </button>
                </div>

                <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 hidden md:block">
                    <button className="nextBtn cursor-pointer bg-white text-black shadow-md w-10 h-10 rounded-lg flex items-center justify-center">
                        <ChevronRight size={18} />
                    </button>
                </div> */}

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: ".prevBtn",
                        nextEl: ".nextBtn",
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                        1280: { slidesPerView: 2.5 },
                    }}
                >
                    {properties.map((property) => (
                        <SwiperSlide key={property.id}>
                            <div className="relative rounded-[20px] overflow-hidden shadow-lg group w-full h-[250px] sm:h-[280px] md:h-[300px]">

                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />

                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button className="bg-white/90 backdrop-blur w-9 h-9 rounded-lg flex items-center justify-center shadow">
                                        <Heart size={16} className="text-red-500 cursor-pointer" />
                                    </button>
                                    <button className="bg-white/90 backdrop-blur w-9 h-9 rounded-lg flex items-center justify-center shadow">
                                        <Share2 size={16} className="text-black cursor-pointer" />
                                    </button>
                                </div>

                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-[15px] md:text-[20px] font-normal">
                                        {property.title}
                                    </h3>
                                    <p className="text-[10px] md:text-[14px] text-white">
                                        {property.location}
                                    </p>
                                </div>

                                <button className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition">
                                    <Phone size={18} />
                                </button>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}