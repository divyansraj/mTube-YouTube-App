import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/constant";
import { Link, useSearchParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import ButtonList from "./ButtonList";
import ShimmerBox from "./Shimmer";

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const searchQuery = searchParam.get("query");
  const [allResults, setAllResults] = useState([]);
  const [visibleResults, setVisibleResults] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      resetAndFetchResults();
    }
  }, [searchQuery]);

  const resetAndFetchResults = async () => {
    setAllResults([]);
    setVisibleResults([]);
    setNextPageToken(null);
    await fetchSearchData();
  };

  const fetchSearchData = async (pageToken = "") => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&type=video&q=${searchQuery}&key=${API_KEY}&pageToken=${pageToken}`
      );
      const data = await response.json();

      setAllResults((prev) => [...prev, ...data.items]);
      setVisibleResults((prev) => [...prev, ...data.items.slice(0, 6)]);
      setNextPageToken(data.nextPageToken);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }

    setLoading(false);
  };

  const loadMoreResults = () => {
    const nextResults = allResults.slice(
      visibleResults.length,
      visibleResults.length + 6
    );

    if (nextResults.length === 0 && nextPageToken) {
      fetchSearchData(nextPageToken);
    } else {
      setVisibleResults((prev) => [...prev, ...nextResults]);
    }
  };

  const handleScrollEvent = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      loadMoreResults();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [allResults, visibleResults, nextPageToken]);

  return (
    <>
      {loading ? (
        <ShimmerBox />
      ) : (
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
          <ButtonList />
          {visibleResults.map((video) => (
            <Link to={"/watch?v=" + video.id.videoId} key={video?.id.videoId}>
              <SearchVideoCard
                key={video?.id.videoId}
                title={video?.snippet?.title}
                url={video?.id?.videoId}
                channelTitle={video?.snippet?.channelTitle}
                thumbnail={video?.snippet?.thumbnails?.high?.url}
                publish={video?.snippet?.publishedAt}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchPage;
