import React from "react";

const RelatedVideoCard = ({ title, url, channelTitle, thumbnail, publish }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white flex">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className=" w-40">
          <img className=" w-full" src={thumbnail} alt={title} />
        </div>
      </a>
      <div className="px-4 py-2">
        <div className="font-bold text-base text-gray-800 mb-2">{title}</div>
        <p className="text-sm text-gray-600">{channelTitle}</p>
        <p className="text-sm text-gray-600">
          {new Date(publish).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
