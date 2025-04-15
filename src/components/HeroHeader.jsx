import React from "react";
import "./Hero.css";
import leftImg from "../assets/left.png";
import rightImg from "../assets/right.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import img1 from "../assets/glogo.jpg";

const Hero = () => {
  return (
    <section
      className="pt-32 pb-20 text-center px-6 text-white relative overflow-hidden min-h-screen"
      style={{
        background: `radial-gradient(circle at center, rgb(52, 54, 57) 0%, #1e3a8a 40%, #0f172a 100%)`,
      }}
    >
      <div className="relative z-10 my-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          MAD BRAIN TECHNOLOGY
        </h1>

        {/* Oscillating Images + Paragraph */}
        <div className="flex justify-center items-center mt-6 gap-4 relative">
          {/* Left Image */}
          <div className="hidden md:block animate-oscillate ml-20">
            <img
              src={leftImg}
              alt="Left"
              className="w-30 h-40 md:w-50 md:h-80"
            />
          </div>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 font-medium">
            We create stunning digital products and experiences that drive
            growth and innovation.
          </p>

          {/* Right Image */}
          <div className="hidden md:block animate-oscillate mr-20">
            <img
              src={rightImg}
              alt="Right"
              className="w-10 h-10 md:w-50 md:h-80"
            />
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 text-lg rounded-2xl transition-all duration-300 shadow-lg">
          Let&apos;s Begin Your Transformation
        </button>

        {/* Grid Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-full mx-auto px-6">
          {/* First Image Card */}
          <div className="bg-white/10 rounded-2xl p-6 text-white shadow-lg backdrop-blur-sm flex justify-center items-center">
            <img
              src={first}
              alt="first"
              className="w-80 h-80 md:w-100 md:h-80"
            />
          </div>

          {/* Info Boxes */}
          <div className="bg-white/10 rounded-2xl p-3 text-white shadow-lg backdrop-blur-sm h-64 flex flex-col">
            <div className="bg-white/10 rounded-xl flex-1 p-3 m-1 transition-all duration-300 hover:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0.05)_100%)]">
              <p className="text-xl font-semibold">
                18% rise in customer increment
              </p>
              <p>Customer increment</p>
            </div>
            <div className="bg-white/10 rounded-xl flex-1 p-3 m-1 transition-all duration-300 hover:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0.05)_100%)]">
              <p className="text-xl font-semibold">
                18% rise in customer increment
              </p>
              <p>Customer increment</p>
            </div>
          </div>

          {/* Second Image Card */}
          <div className="bg-white/10 rounded-2xl p-6 text-white shadow-lg backdrop-blur-sm flex justify-center items-center">
            <img
              src={second}
              alt="second"
              className="w-80 h-80 md:w-60 md:h-80"
            />
          </div>

          {/* Scroll Animation Block */}
          <div className="bg-white/10 rounded-2xl p-6 text-white shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">
              Pleasant & Satisfactory Client Reviews
            </h3>
            <div className="flex gap-4 justify-center items-center">
              <p className="text-sm border border-white/50 rounded-full px-4 py-1">
                code
              </p>
              <p className="text-sm border border-white/50 rounded-full px-4 py-1">
                code
              </p>
              <p className="text-sm border border-white/50 rounded-full px-4 py-1">
                code
              </p>
            </div>

            {/* Scroll Image Animation */}
            <div className="relative w-full overflow-hidden mt-6 h-28">
              <div className="absolute flex animate-scroll gap-4">
                {[...Array(10)].map((_, index) => (
                  <img
                    key={index}
                    src={img1}
                    alt={`img-${index + 1}`}
                    className="w-24 h-24 object-contain"
                  />
                ))}
              </div>
            </div>
            {/* Reverse Scroll Animation */}
            <div className="relative w-full overflow-hidden mt-4 h-28">
              <div className="absolute flex animate-scroll-reverse gap-4">
                {[...Array(10)].map((_, index) => (
                  <img
                    key={index}
                    src={img1}
                    alt={`img-rev-${index + 1}`}
                    className="w-24 h-24 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
