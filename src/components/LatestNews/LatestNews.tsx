"use client";
import React from "react";
import { Calendar, Clock } from "lucide-react";
import news1Image from "../../assets/news/1ab6d666e6d13d4fcb54d6ba21357859f55079f8.png";
import news2Image from "../../assets/news/cba432265f686a1f7d8207e93a02b2f98de07bf6.png";
import news3Image from "../../assets/news/d3e9cc314f0120d49829c9f12a015c15cbcdaff1.png";

const newsData = [
    {
        image: news2Image.src,
        title: "The Ultimate Checklist for Selling Your Home Faster",
        desc: "To maximize ROI in GIFT City, investors should combine early stage property entry, IFSC driven rental targeting...",
    },
    {
        image: news1Image.src,
        title: "Short-Term Rentals vs. Long-Term Leases: Which One's Right for You?",
        desc: "To maximize ROI in GIFT City, investors should combine early stage property entry, IFSC driven rental targeting...",
    },
    {
        image: news3Image.src,
        title: "Luxury Living Trends in 2025: What Buyers Really Want",
        desc: "To maximize ROI in GIFT City, investors should combine early stage property entry, IFSC driven rental targeting...",
    },
];

const LatestNews = () => {
    return (
        <section className="w-full bg-[#F4F1EF] py-10">
            <div className="w-full max-w-[1240px] mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[25px] md:text-[32px] font-serif text-[#171414]">
                        Latest <span className="text-[#FF5349]">News</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {newsData.map((news, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[20px] shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
                        >
                            <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px]">
                                <img
                                    src={news.image}
                                    alt="news"
                                    className="w-full h-full object-cover rounded-t-[20px]"
                                />
                            </div>

                            <div className="p-5 flex flex-col gap-3 flex-1">

                                <div className="flex items-center gap-4 text-[10px] md:text-[14px] text-[#818181] font-normal font-sans">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>April 12, 2025</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>6 min read</span>
                                    </div>
                                </div>

                                <h3 className="text-[15px] md:text-[20px] font-medium font-sans text-[#171414] leading-snug">
                                    {news.title}
                                </h3>

                                <p className="text-[12px] md:text-[14px] text-[#818181] font-normal font-sans line-clamp-2">
                                    {news.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatestNews;