import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 {/* <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-screen ">
              <div className="max-w-3xl">
                <div
                  className={`mb-4 transition-all duration-1000 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <h1
                    className="text-3xl lg:text-[29px] font-normal leading-tight"
                    style={{ color: "#D4AF37" }}
                  >
                    VAISHNAVI AT-ONE
                    <br />
                    KRISHNA BRINDAVAN
                  </h1>
                </div>

                <div
                  className={`mb-2 transition-all duration-1000 delay-200 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <p className="text-white md:text-[20px] font-light tracking-wider">
                    AT BANASHANKARI, BANGALORE
                  </p>
                </div>

                <div
                  className={`mb-2 transition-all duration-1000 delay-300 ${
                    isInView ? "w-100 opacity-100" : "w-0 opacity-0"
                  }`}
                >
                  <div className="h-px bg-white"></div>
                </div>

                <div
                  className={`space-y-3 mb-8 transition-all duration-1000 delay-400 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <p className="text-white text-lg md:text-xl font-light tracking-wide">
                    3 AND 4 BHK APARTMENTS
                  </p>
                  <div
                    className={`mb-2 transition-all duration-1000 delay-300 ${
                      isInView ? "w-100 opacity-100" : "w-0 opacity-0"
                    }`}
                  >
                    <div className="h-px bg-white"></div>
                  </div>
                  <p className="text-white text-xl md:text-2xl font-light">
                    ₹ 3.50 CR* ONWARDS
                  </p>
                </div>

                <div
                  className={`transition-all duration-1000 delay-600 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <button className="group mb-10 relative px-8 py-3 border-2 border-yellow-600 text-white text-sm tracking-[0.2em] font-light overflow-hidden transition-all duration-300 hover:text-black">
                    <span className="absolute inset-0 bg-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative z-10">REQUEST A CALLBACK</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}