import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserPlus,faArrowTrendUp, faBagShopping,faFilm,faMusic,faGamepad,faTowerBroadcast,faPodcast} from "@fortawesome/free-solid-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
	const navigate = useNavigate();
	const [text,setText] =useState("");
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

 if(!isMenuOpen) return null;//early return

  return (
    <div className="flex flex-col gap-2 w-56 bg-white z-50">
      {/* <div className="flex">
        <div className="outline-none rounded-md flex items-center w-10 h-8">
        <FontAwesomeIcon icon={faBars}  onClick={()=> toggleBar()}/>  
        </div>
        <div className="outline-none rounded-md flex items-center w-10 h-8 bg-black">
          <img src={Logo} alt="logo"></img>MTube
        </div>
    </div> */}
      <ul>
        <Link to="/">
          <li className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200">
            <FontAwesomeIcon icon={faHouse} />
            Home
          </li>
        </Link>

        <li
          className="flex gap-3 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"
          onClick={(e) => {
            const searchTerm = "shorts";
            setText(searchTerm);
            navigate(`/search?query=${searchTerm}`);
          }}
        >
          <div>
            <FontAwesomeIcon icon={faTiktok} />
          </div>
          Shorts
        </li>
      </ul>
      <hr className="w-full  bg-black"></hr>

      <h1 className=" font-semibold">Explore</h1>
      <ul>
        <li
          onClick={(e) => {
            const searchTerm = "Trending";
            setText("Trending");
            navigate(`/search?query=${searchTerm}`);
          }}
          className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faArrowTrendUp} />
          Trending
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Shopping";
            setText("Shopping");
            navigate(`/search?query=${searchTerm}`);
          }}
          className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faBagShopping} />
          Shopping
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Movies";
            setText("Movies");
            navigate(`/search?query=${searchTerm}`);
          }}
          className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faFilm} />
          Movies
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Music";
            setText("Music");
            navigate(`/search?query=${searchTerm}`);
          }}
          className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faMusic} />
          Music
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Gaming";
            setText("Gaming");
            navigate(`/search?query=${searchTerm}`);
          }}
          className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faGamepad} />
          Gaming
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Live";
            setText("Live");
            navigate(`/search?query=${searchTerm}`);
          }}
          className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faTowerBroadcast} />
          Live
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Podcasts";
            setText("Podcasts");
            navigate(`/search?query=${searchTerm}`);
          }}
          className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faPodcast} />
          Podcasts
        </li>
      </ul>
      <hr className="w-full  bg-black"></hr>
      <div className="flex items-center font-semibold">
        <FontAwesomeIcon icon={faUserPlus} />
        <h1 className="ml-1">Subscriptions</h1>
      </div>
    </div>
  );
};

export default SideBar;
