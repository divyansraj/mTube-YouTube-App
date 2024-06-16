import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { API_KEY } from "../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/MenuSlice";
import Shimmer from "./Shimmer";

function VideoContainer() {
  const [popVideos, setPopVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
    resetAndFetchVideos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const resetAndFetchVideos = async () => {
    setPopVideos([]);
    setVisibleVideos([]);
    setNextPageToken(null);
    await fetchVideos();
  };

  const fetchVideos = async (pageToken = "") => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}&pageToken=${pageToken}`
      );
      const data = await response.json();
      console.log(data);

      setPopVideos((prev) => [...prev, ...data.items]);
      setVisibleVideos((prev) => [...prev, ...data.items.slice(0, 6)]);
      setNextPageToken(data.nextPageToken);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }

    setLoading(false);
  };

  const loadMoreVideos = () => {
    const nextVideos = popVideos.slice(
      visibleVideos.length,
      visibleVideos.length + 6
    );

    if (nextVideos.length === 0 && nextPageToken) {
      fetchVideos(nextPageToken);
    } else {
      setVisibleVideos((prev) => [...prev, ...nextVideos]);
    }
  };

  const handleScrollEvent = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      loadMoreVideos();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [popVideos, visibleVideos, nextPageToken]);

  return (
    <>
      {loading && visibleVideos.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-row gap-3 flex-wrap justify-center items-center ml-auto mr-0">
          <ButtonList />
          {visibleVideos.map((video) => (
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
          {loading && <Shimmer />}
        </div>
      )}
    </>
  );
}

export default VideoContainer;
