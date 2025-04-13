import React from "react";

const GridSection = () => {
  return (
    <>
      <hr className="border-t border-black/20 my-8" />
      <div className="grid grid-cols-3 grid-rows-2 gap-4 p-6">
        <div className="bg-white/10 text-white rounded-xl border border-white/20 p-6 flex items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          Box 1
        </div>
        <div className="bg-white/10 text-white rounded-xl border border-white/20 p-6 flex items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          Box 2
        </div>
        <div className="bg-white/10 text-white rounded-xl border border-white/20 p-6 flex items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          Box 3
        </div>
        <div className="bg-white/10 text-white rounded-xl border border-white/20 p-6 flex items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          Box 4
        </div>
        <div className="bg-white/10 text-white rounded-xl border border-white/20 p-6 flex items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          Box 5
        </div>
        <div className="bg-white/10 text-white rounded-xl border border-white/20 p-6 flex items-center justify-center text-lg font-semibold backdrop-blur-sm shadow-md">
          Box 6
        </div>
      </div>
      <hr className="border-t border-black/20 my-8" />
    </>
  );
};

export default GridSection;
