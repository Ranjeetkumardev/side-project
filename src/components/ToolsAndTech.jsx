import React from "react";
import tools from "../assets/toolsAndTech.png";

const TechAndTools = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen ">
      <div className="text-center px-4 ml-30 mr-30">
        <div className="mb-4">
          <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm">
            Tech &amp; Tools
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-8">
          Advanced Tech &amp; Tools Capable For Your Success
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Designing Tools Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Designing Tools</h2>
            <p className="text-gray-700 mb-4">
              The Designing Tools We Use Empower Creativity And Precision,
              Enabling Designers To Craft Visually Stunning And User-Friendly
              Interfaces. With Advanced Features For Wireframing, Prototyping
              And Collaborative Design, These Tools Streamline The Creative
              Process, Ensuring That Ideas Come To Life Seamlessly And
              Efficiently.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <img src={tools} alt="" />
            </div>
          </div>

          {/* Development Tools Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Development Tools</h2>
            <p className="text-gray-700 mb-4">
              Our Set Of Development Tools Provides Robust Frameworks And
              Resources For Building Scalable, High-Performance Applications.
              From Code Editors To Version Control Systems, These Tools Support
              Efficient Coding, Debugging, And Deployment, Enabling Developers
              To Turn Complex Ideas Into Functional, Reliable Software Solutions
              Quickly.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <img src={tools} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechAndTools;
