import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      text: `Working with this team was an absolute pleasure...`,
      name: "Tamara Yannay",
      title: "Co-founder & CEO, TORAC",
      image: "https://placehold.co/40x40",
    },
    {
      id: 2,
      text: `Their attention to detail and commitment to our project were unparalleled...`,
      name: "Jeff Bryant",
      title: "Design at FORTAL",
      image: "https://placehold.co/40x40",
    },
    {
      id: 3,
      text: `We were impressed by the team's professionalism and dedication...`,
      name: "Annie Pham",
      title: "Operations Manager",
      image: "https://placehold.co/40x40",
    },
    {
      id: 4,
      text: `The team was fantastic! They took the time to understand our challenges...`,
      name: "Marcus Allen",
      title: "Marketing Head, TechVibe",
      image: "https://placehold.co/40x40",
    },
    {
      id: 5,
      text: `We couldn't have asked for a better partner to work with...`,
      name: "Lucy Henderson",
      title: "Product Manager, InnovateX",
      image: "https://placehold.co/40x40",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentTestimonialIndex > 0) {
      setCurrentTestimonialIndex(currentTestimonialIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentTestimonialIndex < testimonials.length - 3) {
      setCurrentTestimonialIndex(currentTestimonialIndex + 1);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 border border-white rounded-full inline-block px-4 py-1">
          testimonials
        </h2>

        <h1 className="text-3xl font-bold mt-2">
          Reviews That Warms Our Hearts
        </h1>
        <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded-full text-lg font-semibold">
          Succeed With Proficiency
        </button>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto mt-12">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentTestimonialIndex * (100 / 3)}%)`,
              width: `${(testimonials.length / 3) * 100}%`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-3">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full">
                  <p className="text-lg leading-relaxed mb-4">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-yellow-500 mr-2"
                    />
                    {testimonial.text}
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Buttons (Lower and Centered) */}
        <div className="mt-10 flex justify-center space-x-4">
          <button
            className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition"
            onClick={handlePrevClick}
            disabled={currentTestimonialIndex === 0}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition"
            onClick={handleNextClick}
            disabled={currentTestimonialIndex >= testimonials.length - 3}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
