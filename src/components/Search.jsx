import React from "react";
import { useRef } from "react";

const Search = ({ searchData, eventHandler, searchWeatherHandler }) => {
    const seachInput = useRef();
  return (
    <div className="flex justify-center items-center flex-col md:flex-row ">
      <input
        type="search"
        value={searchData}
        placeholder="Enter a city"
        onChange={() => eventHandler(seachInput.current.value)}
        ref={seachInput}
        className="w-10/12 mx-auto p-4 outline-none border-none rounded-md text-2xl"
      />
      <button className="uppercase mt-3 md:mt-0 p-5 w-6/12 md:w-2/12 bg-[#8D3DAF] text-white-shade  rounded-md text-lg hover:bg-[#5e2975] hover:scale-95 hover:ease-in-out hover:duration-300"
      onClick={searchWeatherHandler}>
        Search
      </button>
    </div>
  );
};

export default Search;
