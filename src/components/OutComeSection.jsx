import React from "react";

const HiringProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Schedule A Call",
      description:
        "Schedule a call with our team to discuss needs, timelines, and goals.",
      image: "https://placehold.co/50x50",
    },
    {
      id: 2,
      title: "Get Consultation",
      description:
        "In-depth discussion with experts. Analyze requirements and feasibility.",
      image: "https://placehold.co/50x50",
    },
    {
      id: 3,
      title: "Get An Estimate",
      description:
        "Get a detailed project estimate and choose an engagement, from us.",
      image: "https://placehold.co/50x50",
    },
    {
      id: 4,
      title: "Kickoff The Project",
      description:
        "Initiate the project with a meet-and-greet session. Followed by onboarding.",
      image: "https://placehold.co/50x50",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto p-4">
        <div className="text-center mb-8">
          <span className="text-sm text-gray-700 border border-black rounded-full px-3 py-1 inline-block">
            Platforms
          </span>
          <h1 className="text-3xl font-bold mt-2">
            Get Your Business Up & Running With Our Streamlined Hiring Process
          </h1>
          <p className="text-gray-600 mt-2">
            Our MERN stack web development solutions are fast-tracked to
            kickstart your project in a few days.
          </p>
          <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full">
            <i className="fas fa-play-circle mr-2" />
            Kickstart Your Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:shadow-xl hover:scale-105 border border-black"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white text-lg font-bold mx-auto mb-4 border border-black">
                {step.id}
              </div>
              <img
                src={step.image}
                alt={`Step ${step.id}`}
                className="mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringProcess;
