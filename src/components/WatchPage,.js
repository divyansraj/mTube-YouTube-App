import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
import CommentsContainer from "./CommentsContainer";
import RelatedVideoCard from "./RelatedVideoCard"; // Assuming RelatedVideoCard component is defined
import { API_KEY } from "../utils/constant";

const WatchPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [relatedVideos, setRelatedVideos] = useState([]);
    const [mainVideoDetails, setMainVideoDetails] = useState({
      title: "",
      channelId: "",
      channelTitle: "",
      description: "",
      thumbnail: "",
      publishDate: "",
    });

    useEffect(() => {
      dispatch(closeMenu());

      // Extract video ID from the URL (assuming it's in a specific format)
      const videoId = new URLSearchParams(location.search).get("v");

      // Fetch video details and category based on video ID
      fetchVideoDetailsAndCategory(videoId);
    }, [location]);

    const fetchVideoDetailsAndCategory = async (videoId) => {
      try {
        // Fetch details of the current video to get its snippet and category ID
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.items.length > 0) {
          const snippet = data.items[0].snippet;
          setMainVideoDetails({
            title: snippet.title,
            channelId: snippet.channelId,
            channelTitle: snippet.channelTitle,
            description: snippet.description,
            thumbnail: snippet.thumbnails.high.url,
            publishDate: snippet.publishedAt,
          });

          const categoryId = snippet.categoryId;
          if (categoryId) {
            // Fetch related videos based on the category ID
            fetchRelatedVideos(categoryId);
          }
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

  const fetchRelatedVideos = async (categoryId) => {
    try {
      // Fetch related videos based on the category ID
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&videosCategoryId=${categoryId}&key=${API_KEY}`
      );
      const data = await response.json();

      setRelatedVideos(data.items || []);
    } catch (error) {
      console.error("Error fetching related videos:", error);
    }
  };

  return (
    <div className="w-full flex flex-wrap">
      {/* Left pane for main video */}
      <div className="w-full lg:w-3/5 p-4">
        <div className="mb-4">
          <iframe
            className="w-full"
            height="400"
            src={`https://www.youtube.com/embed/${new URLSearchParams(
              location.search
            ).get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="text-xl font-bold mb-2">
          Title: {mainVideoDetails.title}
        </h2>
        <p className="text-gray-700 mb-2">
          Channel: {mainVideoDetails.channelTitle}
        </p>
        <p className="text-gray-700 mb-2">
          Published:{" "}
          {new Date(mainVideoDetails.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="text-gray-700 mb-4">{mainVideoDetails.description}</p>
        <CommentsContainer />
      </div>

      {/* Right pane for related videos */}
      <div className="w-full lg:w-2/5 p-4">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold mb-4">Related Videos</h2>
          {relatedVideos.map((video) => (
            <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
              <RelatedVideoCard
                title={video.snippet.title}
                url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                channelTitle={video.snippet.channelTitle}
                thumbnail={video.snippet.thumbnails.high.url}
                publish={video.snippet.publishedAt}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
