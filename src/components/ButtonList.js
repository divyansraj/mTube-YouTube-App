import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["Explore","India","Trending","Entertainment","Superheros","Live","Web development","Gaming","Cricket","Computer Science","Music","Nodejs","React","Sports"];

  return (
    <div className="flex overflow-x-auto max-w-full space-x-2 py-2">
      {list.map((comp, index) => (
        <Button name={comp} key={index} />
      ))}
    </div>
  );
}

export default ButtonList;
