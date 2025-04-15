import React from "react";

const Hero = () => {
  return (
    <section
      className="pt-32 pb-20 text-center px-6 text-white relative overflow-hidden min-h-screen"
      style={{
        background: `radial-gradient(circle at center, #3b82f6 0%, #1e3a8a 40%, #0f172a 100%)`,
      }}
    >
      <div className="relative z-10 my-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          MAD BRAIN TECHNOLOGY
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-blue-100 font-medium">
          We create stunning digital products and experiences that drive growth
          and innovation.
        </p>
      </div>
    </section>
  );
};

export default Hero;
