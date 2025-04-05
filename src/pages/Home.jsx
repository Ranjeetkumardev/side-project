import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold transition-all duration-300">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl">
          We build modern and stylish web solutions using cutting-edge
          technology. Let's make something amazing together!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Fast", "Responsive", "Modern"].map((feature) => (
            <div
              key={feature}
              className="p-6 cursor-pointer bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold">{feature}</h3>
              <p className="text-gray-400 mt-2">
                We ensure your website is {feature.toLowerCase()} and
                high-performing.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Elevate Your Business?
        </h2>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;

