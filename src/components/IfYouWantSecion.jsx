import React from "react";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Better user acquisition and retention",
    icon: "👤",
  },
  {
    title: "Enhanced design responsiveness",
    icon: "💻",
  },
  {
    title: "Refined performance and boosted trust",
    icon: "⚙️",
  },
  {
    title: "A website that stands out",
    icon: "📈",
  },
];

const UXAuditCallToAction = () => {
  return (
    <div className="p-8 bg-white  ml-30 mr-30">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800">
        If You Want
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border rounded-xl p-6 bg-gray-50 hover:shadow-lg transition"
          >
            <div className="text-red-600 text-5xl mb-4">{feature.icon}</div>
            <p className="text-center text-xl font-semibold text-gray-800">
              {feature.title}
            </p>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center bg-black text-white rounded-xl px-6 py-8 hover:bg-red-600 transition cursor-pointer">
          <span className="text-xl font-bold text-center leading-tight">
            You must choose our <br />
            <span className="text-2xl font-extrabold">UX audit company</span>
          </span>
          <ArrowRight className="mt-4 w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default UXAuditCallToAction;
