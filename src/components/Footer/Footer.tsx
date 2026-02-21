"use client";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full flex justify-center">
            <div className="w-full max-w-[1440px]">
                <div className="bg-[#FF4D4F] text-white px-[100px] py-[50px] flex flex-col lg:flex-row justify-between gap-10">
                    <div className="max-w-sm">
                        <h2 className="text-4xl font-bold mb-6">
                            360<span className="font-light">HOME</span>
                        </h2>

                        <p className="text-[16px] md:text-[18px] text-[#EBF5F5] font-normal font-sans" style={{ fontWeight: "400" }}>
                            Buying property doesn’t have to be complicated or stressful.
                            <br /><br />
                            We bring buyers together, offer clear pricing insights,
                            and help you make confident, informed decisions — at
                            your own pace.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="font-normal mb-4 text-[20px] md:text-[24px] font-serif">Explore</h4>
                            <ul className="space-y-2 text-[15px] md:text-[18px] font-normal font-sans text-white/90">
                                <li>Properties</li>
                                <li>Our Approach</li>
                                <li>How it Works</li>
                                <li>Case Studies</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-normal mb-4 text-[20px] md:text-[24px] font-serif">For Buyers</h4>
                            <ul className="space-y-2 text-[15px] md:text-[18px] font-normal font-sans text-white/90">
                                <li>Blogs</li>
                                <li>About 360 home</li>
                                <li>Listing</li>
                                <li>Articles</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-normal mb-4 text-[20px] md:text-[24px] font-serif">Links</h4>
                            <ul className="space-y-2 text-[15px] md:text-[18px] font-normal font-sans text-white/90">
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Contact Us</li>
                                <li>Reels</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="bg-black text-white px-[100px] py-[20px] flex flex-col sm:flex-row justify-between items-center text-sm">

                    <p className="text-white/80 font-normal font-sans text-[15px] md:text-[16px]">
                        © Copyright 2025 <span className="font-semibold">360 HOME</span>
                    </p>

                    <div className="flex gap-4 text-white/80 mt-3 sm:mt-0 font-normal font-sans text-[15px] md:text-[16px]">
                        <span>X</span>
                        <span>Youtube</span>
                        <span>Facebook</span>
                        <span>Insta</span>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;