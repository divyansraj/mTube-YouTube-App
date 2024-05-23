import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constant';
import { Link, useSearchParams } from'react-router-dom';
import SearchVideoCard from './SearchVideoCard';
const SearchPage = () => {
  const [searchParam] = useSearchParams(); //access to the current query parameters
  const searchQuery = searchParam.get("query");
  const [searchList,setSearchlist] =useState([]);

  useEffect(()=> {
    getSearchData();
  },[searchQuery]);

  const getSearchData = async() => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&regionCode=IN&q=${searchQuery}&type=video&key=${API_KEY}`
    );
    const json= await data.json();
    console.log(json.items);
    setSearchlist(json.items);
  }

  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
      {searchList.map((video) => (
        <Link to={"/watch?v=" + video.id.videoId}>
          <SearchVideoCard
            key={video?.id.videoId}
            title={video?.snippet?.title}
            url={video?.id?.videoId}
            channelTitle={video?.snippet?.channelTitle}
            thumbnail={video?.snippet?.thumbnails?.high?.url}
            publish={video?.snippet?.publishedAt}
          ></SearchVideoCard>
        </Link>
      ))}
    </div>
  );
}

export default SearchPage