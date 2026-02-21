"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import slide1Image from "../../assets/slider/2a4c21c90b6f3d240aa2733ef673145ebd5805c2.jpg";
import slide2Image from "../../assets/slider/38ebeaef65e8a4c756d91943e939483fb4a3ac33.jpg";
import slide3Image from "../../assets/slider/939075dffd4bd06634fea8dd490366544ecd6841.jpg";
import slide4Image from "../../assets/slider/a4c464ab655116e108d93f876f2848f2e7cde31b.jpg";
import slide5Image from "../../assets/slider/af4a20181b0a39bf34e167f803582beb2222ec4b.jpg";

const slides = [
    {
        id: 1,
        image: slide1Image.src,
    },
    {
        id: 2,
        image: slide2Image.src,
    },
    {
        id: 3,
        image: slide3Image.src,
    },
    {
        id: 4,
        image: slide4Image.src,
    },
    {
        id: 5,
        image: slide5Image.src,
    },
];

const Slider = () => {
    return (
        <section className="w-full">
            <div className="max-w-[1441px] mx-auto px-4">
                <div className="h-[450px] lg:h-[650px] flex items-center relative">

                    <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10"></div>

                    <Swiper
                        modules={[EffectCoverflow, Autoplay]}
                        effect="coverflow"
                        centeredSlides
                        slidesPerView={"auto"}
                        loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 150,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        className="w-full"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide
                                key={slide.id}
                                className="!w-[240px] sm:!w-[300px] md:!w-[350px] lg:!w-[420px]"
                            >
                                <div className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/40">

                                    <Image
                                        src={slide.image}
                                        alt="property"
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Overlay Content */}
                                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow text-sm">
                                        <p className="font-semibold text-gray-800">
                                            Godrej South Estate
                                        </p>
                                        <p className="text-xs text-gray-500">Pal, Surat</p>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md w-8 h-8 rounded-lg flex items-center justify-center shadow">
                                        <span className="text-gray-700 text-lg">↗</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    );
}

export default Slider;