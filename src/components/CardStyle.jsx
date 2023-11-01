import React, { useState } from "react";

const CardStyle = ({ title, imageURL, description }) => {
  const handleClick = () => {
    console.log(`Clicked on image`);
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const firstFullStopIndex = description.indexOf(".");

  const truncatedDescription = showFullDescription
    ? description
    : description.substring(0, firstFullStopIndex + 1);

  return (
    <div className="flex justify-center mt-10">
      <label
        className="border border-gray-300 rounded-xl shadow-2xl shadow-red-700/50 w-[27rem] h-auto"
        onClick={handleClick}
      >
        <img
          src={imageURL}
          className="border rounded-xl w-[30rem] h-[20rem]"
          alt=""
        />
        <h1 className="text-white text-xl mt-2 hover:text-gray-500 underline  border  bg-[#C084FC] hover:bg-white rounded-xl">{title}</h1>
        <p className="text-white">
          {truncatedDescription}
          {description.length > firstFullStopIndex + 1 && (
            <span
              onClick={toggleDescription}
              className="cursor-pointer text-blue-500"
            >
              {showFullDescription ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 border ml-2  text-white border-white p-2 rounded-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 border ml-2 text-white border-purple-400 rounded-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
              )}
            </span>
          )}
        </p>
      </label>
    </div>
  );
};

export default CardStyle;
