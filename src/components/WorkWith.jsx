import React from "react";
import img1 from "../assets/glogo.jpg";
import "./Hero.css"; // assuming the scroll animation styles are in here

const WorkWith = () => {
  return (
    <div className="w-full px-6 py-12">
      <div className="grid grid-cols-5 gap-4 items-center">
        {/* 20% Column (1/5 of 5 columns) */}
        <div className="col-span-1 text-black text-xl font-semibold flex flex-col justify-center items-center">
          <p>Our Partner</p>
          <p className="text-xl text-center font-normal">
            Firms Who Relied On Us & Got The Best Results
          </p>
        </div>

        {/* 80% Column (4/5 of 5 columns) */}
        <div className="col-span-4 relative overflow-hidden h-28">
          <div className="absolute flex animate-scroll gap-4">
            {[...Array(10)].map((_, index) => (
              <img
                key={index}
                src={img1}
                alt={`partner-${index + 1}`}
                className="w-24 h-24 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWith;
