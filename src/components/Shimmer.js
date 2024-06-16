import React from "react";
const ShimmerBox = () => {
  return (
  <div className="flex flex-col gap-10">
    <div className="flex overflow-x-auto max-w-full space-x-2 py-2 items-center justify-center ">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="shimmer-box flex w-[100px] h-[40px] rounded-lg z-10 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer"></div>
      ))}
    </div>
    <div className="flex flex-row gap-3 flex-wrap justify-center items-center ml-auto mr-0">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="shimmer-box flex w-[400px] h-[200px] rounded-lg z-10 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer"></div>
      ))}
    </div>
  </div>
)};



export default ShimmerBox;
