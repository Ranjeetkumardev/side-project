import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import faq from "../assets/faq.png";

const faqs = [
  {
    question: "How do you approach a new design and development project?",
    answer:
      "We start with client discussions, then move to planning, designing, prototyping, development, and finally testing and deployment.",
  },
  {
    question: "Can you assist with digital marketing and SEO for my website?",
    answer:
      "Yes! We offer SEO services and marketing strategies tailored to improve your website's visibility and traffic.",
  },
  {
    question:
      "What is the cost of design and development services at the Mad brains?",
    answer:
      "Cost varies depending on project scope. We offer flexible and transparent pricing based on your needs.",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Absolutely! All our websites are built to be fully responsive and optimized for all screen sizes.",
  },
  {
    question: "Can you help me design and develop my website from scratch?",
    answer:
      "Yes, we can handle everything from ideation, design, development, to launch and maintenance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          {/* FAQ Section */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-green-100 p-4 rounded shadow transition-all"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAnswer(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-red-500 font-bold text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-gray-700"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Contact Box */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 flex flex-col items-center">
            <img
              src={faq}
              alt="Woman pointing at a large question mark"
              className="mb-4"
            />
            <div className="bg-orange-500 text-white p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold mb-2">
                Have More Queries? Ask Us
              </h2>
              <p className="mb-4">
                If you have any more queries or would like to discuss things
                before stepping ahead, we would love to hear and satisfy you in
                every aspect. Contact us and let us know how we can assist you!
              </p>
              <button className="bg-blue-900 text-white py-2 px-4 rounded-full flex items-center justify-center">
                <i className="fas fa-paper-plane mr-2" />
                Shoot Your Questions/Comments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
