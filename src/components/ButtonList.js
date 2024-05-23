import React from "react";
import Button from "./Button";

function ButtonList() {

  const list = ["All","Trending","News","Superhero movies","Live","Gaming","Cooking","Cricket","Computer Science","Recently Uploaded","Liked","New to you"]
  return (
    <div className="flex">
      {
        list.map((comp,index) => 
          <Button name= {comp} key={index} ></Button>)
      }
    </div>
  );
}

export default ButtonList;
