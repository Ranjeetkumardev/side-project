import React from "react";
import word1 from "../assets/word.png"; // Use this until other images are available
import word2 from "../assets/word2.png";
import word3 from "../assets/word3.png";
import word4 from "../assets/word4.png";
import word5 from "../assets/word5.png";
import word6 from "../assets/word6.png";

const sectors = [
  {
    title: "Healing With Innovation",
    description:
      "We craft patient-focused WordPress solutions for healthcare providers, integrating features such as appointment scheduling, telemedicine, and secure access to medical data.",
    image: word1, // Replace later with a healthcare image
  },
  {
    title: "Driving Digital Commerce",
    description:
      "Boost your online sales with expertly designed e-commerce platforms. We focus on creating seamless UX from product pages to payment systems.",
    image: word2, // Replace later with an e-commerce image
  },
  {
    title: "Securing Financial Transactions",
    description:
      "Our bespoke financial websites use encryption, secure login, and fraud detection to protect data and ensure seamless user experience.",
    image: word3, // Replace later with a finance image
  },
  {
    title: "Engaging Entertainment",
    description:
      "Tailored WordPress platforms for media and entertainment that optimize product display, boost engagement, and provide user-friendly experiences.",
    image: word4, // Replace later with an entertainment image
  },
  {
    title: "Empowering Education",
    description:
      "Interactive e-learning environments with quizzes, collaboration tools, and dynamic courses to make education engaging and accessible.",
    image: word5, // Replace later with an education image
  },
  {
    title: "Navigating Global Adventures",
    description:
      "Scalable platforms for travel businesses with booking tools, SEO boosts, and traffic management to grow your tourism brand.",
    image: word6, // Replace later with a travel/tourism image
  },
];

const WordPressWebDevelopment = () => {
  return (
    <div className="bg-[#111827] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h4 className="bg-gray-800 text-white px-6 py-2 rounded-full inline-block m-4">
          WordPress Development
        </h4>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Transforming Industries With Tailored WordPress Web Solutions
        </h2>
        <p className="text-gray-300 mb-12 max-w-3xl text-lg">
          Our WordPress development agency spells magic with our expertise and
          dedication in diverse industries. Check out the sectors we cover:
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-[#1F2937] p-6 rounded-xl border border-gray-700 hover:shadow-lg transition"
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="h-60 w-80 mb-4"
              />
              <h3 className="text-2xl font-semibold mb-3">{sector.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordPressWebDevelopment;
