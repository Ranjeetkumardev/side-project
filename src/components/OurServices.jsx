import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <button className="bg-gray-200 text-gray-800 py-1 px-4 rounded-full mb-4">
          Our Services
        </button>
        <h1 className="text-3xl font-bold">
          Extensive Services To Become Your One-Stop Shop
        </h1>
        <p className="text-gray-600 mt-2">
          With our comprehensive UI UX design and development services, we aim
          to become your one-stop shop for your needs
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-start">
        {/* Left Content */}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg md:w-2/3 mb-8 md:mb-0">
          <div className="text-gray-400 mb-4">01</div>
          <h2 className="text-2xl font-bold mb-4">
            Adept Development Services
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Transforming ideas into reality with end-to-end software
              development.
            </li>
            <li>Expert guidance from initial concept to final product.</li>
            <li>Custom solutions tailored to meet specific business needs.</li>
            <li>
              Innovative applications designed for functionality and
              scalability.
            </li>
          </ul>
          <button className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-full flex items-center">
            Learn More <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>

        {/* Right Side Timeline Style */}
        <div className="relative flex flex-col md:ml-8 w-full md:w-1/3">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-400 rounded-full z-0"></div>

          {/* Item 1 */}
          <div className="relative z-10 pl-10 mb-6">
            <div className="bg-yellow-200 text-gray-800 py-4 px-6 rounded-lg shadow-lg">
              User-Friendly & Satisfying Designing Services
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative z-10 pl-10 mb-6">
            <div className="bg-blue-200 text-gray-800 py-4 px-6 rounded-lg shadow-lg">
              Expert UX Auditing Services
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative z-10 pl-10">
            <div className="bg-pink-200 text-gray-800 py-4 px-6 rounded-lg shadow-lg">
              Strategic Branding Services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
