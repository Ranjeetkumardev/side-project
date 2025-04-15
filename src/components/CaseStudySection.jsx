import React, { useState } from "react";
import mobileImg1 from "../assets/mobileImg1.png";
import mobileImg2 from "../assets/mobileImg2.png";
import mobileImg3 from "../assets/mobileImg3.png";

const UXCaseStudyCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [mobileImg1, mobileImg2, mobileImg3];

  const caseStudies = [
    {
      image: mobileImg1,
      results: {
        visitors: "31K+",
        growth: "45%",
        bounce: "45%",
      },
    },
    {
      image: mobileImg2,
      results: {
        visitors: "50K+",
        growth: "60%",
        bounce: "30%",
      },
    },
    {
      image: mobileImg3,
      results: {
        visitors: "75K+",
        growth: "80%",
        bounce: "20%",
      },
    },
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const { visitors, growth, bounce } = caseStudies[currentImageIndex].results;

  return (
    <section className="bg-white text-black px-4 sm:px-12 lg:px-36 py-14 md:py-40 font-sans">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-10 md:p-14 bg-gray-800 shadow-xl border border-gray-200">
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-2 border-2 border-white rounded-lg p-2 inline-block">
            Case Study
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white border-b-4 border-white pb-2">
            Just Wravel
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            We redesigned and undertook proficient UX auditing for this
            travelling site. The results?
          </p>

          <div className="flex flex-wrap gap-6 bg-white/10 p-6 rounded-2xl mb-8">
            <div>
              <p className="text-gray-400 text-xl">Results</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{visitors}</h3>
              <p className="text-sm text-gray-400">New Visitors Attracted</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{growth}</h3>
              <p className="text-sm text-gray-400">Rise in Growth</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{bounce}</h3>
              <p className="text-sm text-gray-400">Bounce Rate</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="px-8 py-4 border-2 border-white rounded-full text-white text-lg font-semibold hover:bg-white hover:text-black hover:border-black transition">
              View Case Study
            </button>
            <div className="flex gap-3">
              <div
                className="w-14 h-14 flex items-center justify-center border-2 border-white text-white rounded-full cursor-pointer hover:bg-white hover:text-black transition"
                onClick={handlePrevImage}
              >
                ←
              </div>
              <div
                className="w-14 h-14 flex items-center justify-center border-2 border-white text-white rounded-full cursor-pointer hover:bg-white hover:text-black transition"
                onClick={handleNextImage}
              >
                →
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-120 bg-gray-700 rounded-2xl flex items-center justify-center">
            <img
              src={images[currentImageIndex]}
              alt="Mobile"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UXCaseStudyCard;
