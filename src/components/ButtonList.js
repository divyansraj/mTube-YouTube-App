import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["Explore","India","Trending","Cricket World Cup","Superheros","Live News","Web development","Gaming","Computer Science","Music","Nodejs","React","Fifa 2025"];

  return (
    <div className="flex overflow-x-auto max-w-full space-x-2 py-2">
      {list.map((comp, index) => (
        <Button name={comp} key={index} />
      ))}
    </div>
  );
}

export default ButtonList;
