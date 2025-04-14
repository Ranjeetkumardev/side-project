import React, { useState } from "react";
import bowApp1 from "../assets/bowApp.png";
import bowApp2 from "../assets/bowApp1.png";
import bowApp3 from "../assets/bowApp3.png";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("App Design");

  const categories = [
    "App Design",
    "Web Design",
    "WordPress",
    "Shopify",
    "Development",
  ];

  const projects = [
    {
      title: "Auraluxe Fragrances",
      subtitle: "App Design",
      description:
        "Indulge in the finest BBQ experiences. Discover flavors, find recipes, and connect with BBQ enthusiasts effortlessly.",
      category: "App Design",
      image: bowApp1,
    },
    {
      title: "Tanishq App",
      subtitle: "App Design",
      description:
        "Discover exquisite jewelry collections. Find timeless pieces, explore craftsmanship, and celebrate moments with Tanishq.",
      category: "App Design",
      image: bowApp2,
    },
    {
      title: "Medical App",
      subtitle: "App Design",
      description:
        "Find trusted medical help, consult doctors, and manage health with ease.",
      category: "App Design",
      image: bowApp3,
    },
    {
      title: "Portfolio Website",
      subtitle: "Web Design",
      description:
        "Sleek and responsive personal portfolio website built with React and Tailwind CSS.",
      category: "Web Design",
      image: bowApp1,
    },
    {
      title: "E-Commerce Site",
      subtitle: "Shopify",
      description:
        "A modern e-commerce experience built on Shopify for small businesses.",
      category: "Shopify",
      image: bowApp2,
    },
    {
      title: "Company Blog",
      subtitle: "WordPress",
      description:
        "Dynamic and SEO-friendly blog platform using WordPress and custom plugins.",
      category: "WordPress",
      image: bowApp3,
    },
    {
      title: "API Dashboard",
      subtitle: "Development",
      description:
        "A real-time API analytics dashboard built with Node.js and Chart.js.",
      category: "Development",
      image: bowApp2,
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <div className="text-center bg-white py-16 px-4">
      {/* Rounded label */}
      <div className="inline-block px-6 py-2 border-2 border-gray-300 rounded-full mb-4">
        <p className="text-lg text-gray-500">Browse Our Work</p>
      </div>

      <h2 className="text-5xl font-bold text-gray-900 mb-10">
        Portfolio Where Our Creativity & Your Imagination Collide
      </h2>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 text-lg font-semibold mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`pb-1 transition-all ${
              selectedCategory === category
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-600 hover:text-red-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-base">{project.description}</p>
          </div>
        ))}
      </div>

      <button className="mt-12 bg-orange-500 text-white text-xl font-semibold px-8 py-4 rounded-full hover:bg-orange-600 transition-all">
        View Portfolio
      </button>
    </div>
  );
};

export default PortfolioSection;
