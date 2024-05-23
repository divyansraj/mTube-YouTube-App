import React from 'react'

const SearchVideoCard = ({title,url,channelTitle,thumbnail,publish}) => {
  return (
    <div className="flex w-[400px] flex-col rounded-lg z-10 duration-100 hover:scale-105">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="rounded-lg bg-conatin relative"
      />
      <h2 className=" text-base font-medium">{title}</h2>
      <h2>{channelTitle}</h2>
      <h2>{publish.slice(0, 10)}</h2>
    </div>
  );
}

export default SearchVideoCard