import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import VideoCard from './VideoCard'
import { POPULAR_VIDEOS_API } from '../utils/constant';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMenu } from '../utils/MenuSlice';

function VideoContainer() {
  const [popVideos,setPopVideos] = useState([])

  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
    dispatch(openMenu());
  }, [] ) 

  const getVideos = async () => {
    const data = await fetch(POPULAR_VIDEOS_API);
    const json = await data.json();
    console.log(json.items)
    setPopVideos(json.items)
  } 
  return (
		<>
			<div className="flex flex-row gap-3 flex-wrap justify-center items-center ml-auto mr-0">
				<ButtonList /> 
				{popVideos.map((video) => (
					<Link to={"/watch?v=" + video.id} key={video.id}>
						<VideoCard
							key={video.id}
							url={video.id}
							thumbnail={(video?.snippet?.thumbnails?.maxres?.url) ?(video?.snippet?.thumbnails?.maxres?.url) :(video?.snippet?.thumbnails?.standard?.url) }
							duration={video?.contentDetails?.duration}
							channelTitle={video?.snippet?.channelTitle}
							channelLink={video?.snippet?.channelId}
							descTitle={video?.snippet?.localized?.title}
							views={video?.statistics?.viewCount}
							likes={video?.statistics?.likeCount}
							publish={video?.snippet?.publishedAt}
						></VideoCard>
					</Link>
				))}
			</div>
		</>
	);
}

export default VideoContainer
