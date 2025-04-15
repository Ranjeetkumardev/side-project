import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Adept Development Services",
    points: [
      "Transforming ideas into reality with end-to-end software development.",
      "Expert guidance from initial concept to final product.",
      "Custom solutions tailored to meet specific business needs.",
      "Innovative applications designed for functionality and scalability.",
    ],
    color: "bg-black",
    textColor: "text-white",
  },
  {
    title: "User-Friendly & Satisfying Designing Services",
    points: [
      "Intuitive UI designs that delight users.",
      "User-first design approach for satisfaction.",
      "Seamless integration with development.",
    ],
    color: "bg-yellow-100",
    textColor: "text-black",
  },
  {
    title: "Expert UX Auditing Services",
    points: [
      "Comprehensive UX evaluations.",
      "Detailed reports and actionable insights.",
      "Usability testing and heuristic reviews.",
    ],
    color: "bg-blue-100",
    textColor: "text-black",
  },
  {
    title: "Strategic Branding Services",
    points: [
      "Build strong brand identity.",
      "Logo design, typography, and colors.",
      "Consistent brand messaging and voice.",
    ],
    color: "bg-pink-100",
    textColor: "text-black",
  },
];

const ServicesSection = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="p-10 bg-white text-black">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Extensive Services To Become Your One-Stop Shop
        </h2>
        <p className="mt-2 text-gray-600">
          With our comprehensive <strong>UI UX design and development</strong>{" "}
          services, we aim to become your one-stop shop for your needs
        </p>
      </div>

      <div className="flex items-stretch min-h-[420px] gap-4">
        {services.map((service, index) => {
          const isFlipped = flippedIndex === index;

          return (
            <div
              key={index}
              className={`relative perspective-[1200px] w-full h-[420px] cursor-pointer`}
              onClick={() => handleCardClick(index)}
            >
              <motion.div
                className={`relative w-full h-full rounded-2xl ${service.color} ${service.textColor} transition-transform duration-700`}
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
              >
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-4">
                  <div className="transform -rotate-90 text-xs font-semibold text-center w-[150px] whitespace-nowrap">
                    {service.title}
                  </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-semibold mb-2">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 leading-snug">
                      {service.title.split(" ").slice(0, -1).join(" ")} <br />
                      <span
                        className="border-l-4 pl-2"
                        style={{ borderColor: "currentColor" }}
                      >
                        {service.title.split(" ").slice(-1)}
                      </span>
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      {service.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-6 bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
