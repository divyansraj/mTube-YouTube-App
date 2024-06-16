import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ name }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  return (
    <button
      onClick={(e) => {
        const searchTerm = name;
        setText(searchTerm);
        navigate(`/search?query=${searchTerm}`);
      }}
      className="px-2 py-1 my-4 bg-gray-200 rounded mx-2 hover:bg-gray-300"
    >
      {name}
    </button>
  );
};

export default Button;
