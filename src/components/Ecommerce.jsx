import React from "react";

import ecomImmg from "../assets/ecom.png";
const EcommerceExpertise = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-8 gap-10 rounded-2xl shadow-md ml-30 mr-30">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-8">
        <div className="bg-gray-100 text-base font-semibold text-gray-600 px-5 py-2 rounded-full w-max">
          Ecommerce
        </div>
        <h2 className="text-5xl font-bold text-gray-900">
          Unparalleled E-Commerce Expertise
        </h2>
        <p className="text-xl text-gray-600">
          Our expertise as a top-notch{" "}
          <span className="font-semibold text-black">
            e-commerce development
          </span>{" "}
          agency yields success in the competitive market. Our support extends
          to the following services:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-800">
          <li className="before:content-['\2713'] before:text-orange-500 before:mr-2">
            Website Designing & Development
          </li>
          <li className="before:content-['\2713'] before:text-orange-500 before:mr-2">
            E-Commerce Platform Integration
          </li>
          <li className="before:content-['\2713'] before:text-orange-500 before:mr-2">
            Mobile Responsive Designs
          </li>
          <li className="before:content-['\2713'] before:text-orange-500 before:mr-2">
            Payment Gateway Integration
          </li>
          <li className="before:content-['\2713'] before:text-orange-500 before:mr-2">
            Continuous Maintenance & Support
          </li>
        </ul>
        <button className="bg-orange-500 hover:bg-orange-600 text-xl text-white font-semibold px-7 py-4 rounded-full w-max">
          See our portfolio
        </button>
      </div>

      {/* Right Section - Placeholder for image */}
      <div className="lg:w-1/2 flex justify-center items-center">
        {/* Replace this div with your image */}
        <div className="w-full max-w-md h-80 bg-gray-100 border border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-2xl text-center rounded-xl">
          <img src={ecomImmg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EcommerceExpertise;
