import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/MenuSlice";
const Watchpage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    },[])
    return (
			<div>
				<iframe
					width="1200"
					height="600"
					src={"https://www.youtube.com/embed/" + searchParams.get("v")}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
		);
}

export default Watchpage;