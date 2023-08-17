// import { useEffect } from "react";
import search from "../assets/search.svg";

function Search() {
  return (
    <div className="flex flex-1 relative drop-shadow-md">
      <input
        className="w-full rounded-full md:rounded-none md:rounded-l-full inline-block py-3 px-6 
            focus:outline-none border-l-[0.5px] border-y-[0.5px] border-gray-100"
        type="text"
        placeholder="e.g. pizza, sushi, pasta"
      />
      <div className="hidden md:block relative w-full">
        <input
          className="w-full md:rounded-none md:rounded-r-full py-3 px-6 
            focus:outline-none border-r-[0.5px] border-y-[0.5px] border-gray-100"
          type="text"
          placeholder="London"
        />
        <span className="absolute w-[1px] h-[70%] bg-gray-300 top-[50%] left-[0px] -translate-y-[50%]"></span>
      </div>
      <div className="w-8 h-8 rounded-full grid place-content-center bg-custom_accent absolute top-[50%] right-[10px] -translate-y-[50%] cursor-pointer">
        <img
          src={search}
          alt="search icon"
          className="w-[0.875rem] h-[0.875rem]"
        />
      </div>
    </div>
  );
}

export default Search;
