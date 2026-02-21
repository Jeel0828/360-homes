"use client";
import React from "react";

const Partnership = () => {
    return (
        <section className="relative w-full">
            <div className="relative w-full max-w-[1440px] h-[735px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover"
                    style={{
                        backgroundImage:
                            "url('/f6f1030262ce7fa967105fa7990eb918a2808c5a.jpg')",
                    }}
                />

                <div className="relative z-10 w-full max-w-[1007px] mx-auto px-6 pt-20 text-center flex flex-col items-center gap-5">

                    <h2 className="text-[28px] md:text-[45px] font-serif font-normal text-[#171414]">
                        We’d like to personally invite you to
                        Explore a <br /> potential partnership with{" "}
                        <span className="text-[#FF5349] font-bold">360HOME</span>
                    </h2>

                    <p className="text-[16px] md:text-[22px] text-[#3C3939] font-normal font-sans" style={{ fontWeight: "400" }}>
                        Whether you want to rent out your property or sell it, list your
                        property here and connect with the right buyers or tenants easily.
                    </p>

                    <button className="bg-[#FF5349] cursor-pointer text-white text-[15px] px-6 py-3 rounded-[10px] font-normal font-sans" style={{ fontWeight: "400" }}>
                        Learn More About 360 home Listed →
                    </button>

                    <div className="mt-2 bg-orange-100 text-gray-700 px-5 py-2 rounded-[55px] font-normal font-sans text-[17px] md:text-[22px] flex items-center gap-2">
                        Discover <span className="text-yellow-500">●</span> a Place 🏠 you’ll
                        Love ❤️ to Live
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Partnership;