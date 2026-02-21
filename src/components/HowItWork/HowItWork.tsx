import React from "react";

const HowItWork = () => {
    return (
        <section className="w-full bg-[#F9F7F6] flex justify-center">
            <div className="w-full max-w-[1240px] h-auto lg:h-[800px] px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="flex-1 space-y-10">

                    <div>
                        <h2 className="text-[30px] md:text-[40px] font-serif text-gray-900">
                            How <span className="text-[#FF5A4D]">360 HOME</span>
                            <br />
                            Makes Buying Easier
                        </h2>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h4 className="text-[20px] md:text-[24px] font-serif text-[#171414]">
                                Explore & Shortlist
                            </h4>
                            <p className="text-[#818181] text-[14px] md:text-[16px] mt-2 font-sans">
                                Explore and shortlist properties easily using our search,
                                map view, and virtual site visits.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h4 className="text-[20px] md:text-[24px] font-serif text-[#171414]">
                                Show interest. No Commitment yet.
                            </h4>
                            <p className="text-[#818181] text-[14px] md:text-[16px] mt-2 font-sans">
                                Once you shortlist a few projects, simply show interest. We
                                add you to a buyer group — nothing is final at this stage.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="flex-1 flex justify-center relative">
                    <div className="relative w-[280px] md:w-[340px] lg:w-[380px] rounded-3xl overflow-hidden shadow-2xl rotate-2">

                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                            alt="home"
                            className="w-full h-[450px] md:h-[550px] object-cover"
                        />

                        {/* <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition">
                                ▶
                            </div>
                        </div> */}

                    </div>
                </div>

                <div className="flex-1 space-y-10">

                    <div className="flex items-start gap-4">
                        <div>
                            <h4 className="text-[20px] md:text-[24px] font-serif text-[#171414]">
                                Buyers come together
                            </h4>
                            <p className="text-[#818181] text-[14px] md:text-[16px] mt-2 font-sans">
                                You join a private buyer group on our platform to stay
                                informed, share views, and move forward together.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h4 className="text-[20px] md:text-[24px] font-serif text-[#171414]">
                                Unlock better pricing options
                            </h4>
                            <p className="text-[#818181] text-[14px] md:text-[16px] mt-2 font-sans">
                                When buyers come together, better pricing becomes possible —
                                helping you save much more than individual buying.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h4 className="text-[20px] md:text-[24px] font-serif text-[#171414]">
                                You decide. No pressure.
                            </h4>
                            <p className="text-[#818181] text-[14px] md:text-[16px] mt-2 font-sans">
                                Once the group deal is ready, you complete your purchase
                                with confidence — knowing you're getting the best value available.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HowItWork;