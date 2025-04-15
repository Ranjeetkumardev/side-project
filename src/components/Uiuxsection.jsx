import React from "react";

const UXAuditSection = () => {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-32 py-10 md:py-16 font-sans">
      <div className="w-full">
        <p className="text-lg md:text-xl text-gray-700 mb-4 inline-block bg-gray-100 border border-gray-300 rounded-full px-4 py-2 font-medium">
          UX Audit Service
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Stand Out Of The Crowd: Rely On Our UX Audit Services
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          With creative tools and techniques, we facilitate a data-driven
          approach that helps understand user needs, preferences, and
          challenges. The ultimate aim is to improve your designs drastically.
        </p>

        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-8 rounded-full mb-10 shadow-md hover:opacity-90 text-lg">
          Schedule Your Website’s Checkup
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-base text-gray-800">
          <div className="flex items-center gap-2">
            <span
              className="bg-gray-100 border border-gray-300 rounded-full px-2 py-1"
              role="img"
              aria-label="test"
            >
              🧪
            </span>
            Usability Testing
          </div>
          <div className="flex items-center gap-2">
            <span
              className="bg-gray-100 border border-gray-300 rounded-full px-2 py-1"
              role="img"
              aria-label="audit"
            >
              🛠️
            </span>
            Comprehensive User Experience Audits
          </div>
          <div className="flex items-center gap-2">
            <span
              className="bg-gray-100 border border-gray-300 rounded-full px-2 py-1"
              role="img"
              aria-label="support"
            >
              🧰
            </span>
            Ongoing Maintenance and Support
          </div>
          <div className="flex items-center gap-2">
            <span
              className="bg-gray-100 border border-gray-300 rounded-full px-2 py-1"
              role="img"
              aria-label="ecommerce"
            >
              🛍️
            </span>
            E-Commerce Platform Integration
          </div>
          <div className="flex items-center gap-2">
            <span
              className="bg-gray-100 border border-gray-300 rounded-full px-2 py-1"
              role="img"
              aria-label="recommendations"
            >
              🔍
            </span>
            Personalized Recommendations
          </div>
        </div>
      </div>
    </section>
  );
};

export default UXAuditSection;
