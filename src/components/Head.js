import React, { useEffect, useState } from "react";
import Logo from "../assets/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import userimg from "../assets/img/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/MenuSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { cacheResults } from "../utils/CacheSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowsuggestions] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
  const searchCache = useSelector((store) => store.cache);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleBar = () => {
    dispatch(toggleMenu());
  };

  //debouncing and caching for search optimisation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //updating the cacheresults

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );

    //console.log(json[1]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowsuggestions(false);
    navigate(`/search?query=${searchQuery}`);
  };

  const handleSuggestionClick = (searchTerm) => {
    setSearchQuery(searchTerm);
    setShowsuggestions(false);
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center z-0 p-2 pl-4 pr-4">
        <div className="flex">
          <div className="outline-none rounded-md flex items-center w-10 h-8">
            <div className=" cursor-pointer hover:shadow-lg">
              <FontAwesomeIcon icon={faBars} onClick={() => toggleBar()} />
            </div>
          </div>
          <a href="/">
            <div className="outline-none rounded-md flex items-center w-10 h-8 bg-black">
              <img src={Logo} alt="logo"></img>MTube
            </div>
          </a>
        </div>

        <form className="flex relative" onSubmit={handleSearch}>
          <input
            type="text"
            className="relative border-2 w-[600px] rounded-lg rounded-r-none px-10 p-2 outline-none"
            placeholder="Search Bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestions(true)}
            onBlur={() => setShowsuggestions(false)}
          ></input>
          <div>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              alt="search"
              className="absolute left-2 top-4 w-8"
            />
          </div>
          <button className="border-2 rounded-lg rounded-l-none">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8" />
          </button>
        </form>

        <div>
          <img className="h-8 w-10 " src={userimg} alt="user"></img>
        </div>
      </div>
      {showSuggestions && (
        <div className="fixed w-[600px] mx-[29rem] z-10 bg-white shadow-lg rounded-lg ">
          <ul>
            {suggestions.map((each, index) => (
              <li
                key={index}
                className="flex items-center py-2 px-3 rounded-xl text-md duration-150 shadow-sm bg-gray-50 cursor-pointer hover:bg-gray-100"

                onMouseDown={() => handleSuggestionClick(each)}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8" />
                <div
                  onClick={(e) => {
                    const searchTerm = each;
                    setSearchQuery(searchTerm);
                    setShowsuggestions(false);
                    navigate(`/search?query=${searchTerm}`);
                  }}
                >
                  {each}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Head;
