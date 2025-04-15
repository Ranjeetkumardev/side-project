import React from "react";
import {
  FaWhatsapp,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const ContactBanner = () => {
  return (
    <div className="flex items-center justify-center h-auto ">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-8 w-full max-w-4xl m-10">
        <div className="text-center mb-4">
          <p className="text-sm">Work with us</p>
          <h1 className="text-2xl font-bold">
            Improve Your Experience & Start the Conversation
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* WhatsApp */}
          <div className="flex items-center space-x-2 bg-red-600 rounded-full px-4 py-2 cursor-pointer hover:opacity-90 transition">
            <FaWhatsapp />
            <span>+1 757 272 1059</span>
            <FaArrowRight />
          </div>

          {/* Schedule a Call */}
          <div className="flex items-center space-x-2 bg-white text-black rounded-full px-4 py-2 cursor-pointer hover:bg-gray-200 transition">
            <FaPhoneAlt />
            <span>Schedule a Call</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2 bg-red-600 rounded-full px-4 py-2 cursor-pointer hover:opacity-90 transition">
            <FaEnvelope />
            <span>@themadbrains.com</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
