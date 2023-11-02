import React, { useState } from "react";
import Dialogue from "./Dialogue";

const CardStyle = ({ title, imageURL, description }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const firstFullStopIndex = description.indexOf(".");
  const cardHeight = 50; 

  return (
    <div className="flex justify-center mt-10">
      <label className=" border border-black rounded-md bg-black shadow-2xl shadow-red-700/50 w-[27rem] h-[32rem] relative">
        <img
          src={imageURL}
          className=" border border-black rounded-md  w-[27rem] h-[20rem]"
          alt=""
        />
        <h1 className=" hover:text-black font-bold text-xl flex justify-center text-gray-500    hover:bg-[#ed3082] bg-white  p-2">
          {title}
        </h1>
        <div
          className="text-white mt-2 ml-2"
          style={{
            maxHeight: `calc(${cardHeight}rem - 2rem)`, 
            overflowY: "auto",
          }}
        >
          {description.length > firstFullStopIndex + 1 ? (
            <>
              {description.substring(0, firstFullStopIndex + 1)}
              <span onClick={toggleDialog} className="cursor-pointer text-blue-500 absolute bottom-5 right-5">
                {isDialogOpen ? (
                  ""
                ) : (
                  <span className="border bg-white text-black p-1 ">Read More</span>
                )}
              </span>
            </>
          ) : (
            description
          )}
        </div>
      </label>

      <Dialogue
        isOpen={isDialogOpen}
        onClose={toggleDialog}
        title={title}
        description={description}
      />
    </div>
  );
};

export default CardStyle;
