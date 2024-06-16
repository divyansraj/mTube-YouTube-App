import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { POPULAR_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/MenuSlice";
import Shimmer from "./Shimmer";

function VideoContainer() {
  const [popVideos, setPopVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
    getVideos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getVideos = async () => {
    try {
      const data = await fetch(POPULAR_VIDEOS_API);
      const json = await data.json();
	  console.log(json)
      setPopVideos(json.items);
      setLoading(false); // Once data is fetched, set loading to false
    } catch (error) {
      console.error("Error fetching videos:", error);
      setLoading(false); // Handle error state
    }
  };

  // Return JSX based on loading state
  return (
    <>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="flex flex-row gap-3 flex-wrap justify-center items-center ml-auto mr-0">
          <ButtonList />
          {popVideos.map((video) => (
            <Link to={`/watch?v=${video.id}`} key={video.id}>
              <VideoCard
                key={video.id}
                url={video.id}
                thumbnail={
                  video?.snippet?.thumbnails?.maxres?.url ||
                  video?.snippet?.thumbnails?.standard?.url
                }
                duration={video?.contentDetails?.duration}
                channelTitle={video?.snippet?.channelTitle}
                channelLink={video?.snippet?.channelId}
                descTitle={video?.snippet?.localized?.title}
                views={video?.statistics?.viewCount}
                likes={video?.statistics?.likeCount}
                publish={video?.snippet?.publishedAt}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default VideoContainer;
