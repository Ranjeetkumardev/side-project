import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";

// AnimatedCounter Component
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1000;
      const stepTime = Math.max(Math.floor(duration / target), 10);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) clearInterval(timer);
      }, stepTime);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="text-3xl font-extrabold mb-1">
      {count}+
    </div>
  );
};

const GridSection = () => {
  return (
    <>
      <hr className="border-t border-black/20 my-8" />

      <div className="grid grid-cols-4 grid-rows-2 gap-12 px-12 py-6 ml-20 mr-20">
        {/* Box 1 */}
        <div className="bg-white/10 text-black rounded-xl border border-white/20  flex items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          <img
            src={grid1}
            alt="grid1"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        {/* Box 2 - Animated 11K+ */}
        <div className="bg-[#1C1D20] text-white rounded-xl border border-white/20  flex flex-col items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          <p className="text-3xl font-extrabold mb-1">
            <AnimatedCounter target={11000} />
          </p>
          <p className="text-sm text-white/80">Happy Family Globally</p>
        </div>

        {/* Box 3 */}
        <div className="bg-white/10 text-black rounded-xl border border-white/20  flex items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          <img
            src={grid2}
            alt="grid2"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        {/* Box 4 - Animated Country Count */}
        <div className="bg-[#FFF27A] text-white rounded-xl border border-white/20  relative overflow-hidden flex items-end justify-start backdrop-blur-sm shadow-md">
          <div className="absolute bottom-4 left-4">
            <AnimatedCounter target={120} />
            <p className="text-sm text-white/70">Country We Cover</p>
          </div>
        </div>

        {/* Box 5 */}
        <div className="bg-[#FF6945] text-white rounded-xl border border-white/20  relative overflow-hidden flex items-end justify-start backdrop-blur-sm shadow-md">
          <div className="absolute bottom-4 left-4">
            <AnimatedCounter target={120} />
            <p className="text-sm text-white/70">Country We Cover</p>
          </div>
        </div>

        {/* Box 6 */}
        <div className="bg-white/10 text-black rounded-xl border border-white/20  flex items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          <img
            src={grid3}
            alt="grid3"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        {/* Box 7 */}
        <div className="bg-[#1C1D20] text-white rounded-xl border border-white/20  relative overflow-hidden flex items-end justify-start backdrop-blur-sm shadow-md">
          <div className="absolute bottom-4 left-4">
            <AnimatedCounter target={120} />
            <p className="text-sm text-white/70">Country We Cover</p>
          </div>
        </div>

        {/* Box 8 */}
        <div className="bg-white/10 text-black rounded-xl border border-white/20  flex items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          <img
            src={grid4}
            alt="grid4"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>

      <hr className="border-t border-black/20 my-8" />
    </>
  );
};

export default GridSection;
