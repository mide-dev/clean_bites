import { useState, HTMLAttributes } from "react";
import { Search as Magnifier } from "lucide-react";
import { getPlaceAutocomplete } from "../constants/api";

const SearchInput = ({
  setSearchAutocomplete,
  setIsInputFocused,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const [query, setQuery] = useState("");

  const handleChange = async (value) => {
    setQuery(value);
    const searchSuggestions = value && (await getPlaceAutocomplete(value));
    setSearchAutocomplete(searchSuggestions);
  };
  return (
    <div>
      <div
        className={`flex flex-1 relative drop-shadow-lg md:drop-shadow md:hover:drop-shadow-md duration-75 ${className}`}
        {...props}
      >
        {/* <div className="search-bar rounded-full lg:rounded-none lg:rounded-l-full border-l-[0.5px] border-y-[0.5px] absolute bg-red-500 h-20 w-20 z-[5]"></div> */}
        <input
          className="search-bar rounded-full lg:rounded-none lg:rounded-l-full border-l-[0.5px] border-y-[0.5px]"
          type="text"
          placeholder="e.g. pizza, sushi, pasta"
          value={query}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
        />

        <div className="hidden lg:block relative w-full">
          <input
            className="search-bar md:rounded-r-full focus:outline-none border-r-[0.5px] border-y-[0.5px] text-gray-400"
            type="text"
            placeholder="Location"
            value="London"
            readOnly
          />
          <div className="before:content-[''] before:w-20 before:h-20 before:bg-red-500"></div>
          <span className="absolute w-[1px] h-[70%] bg-gray-300 top-[50%] left-[0px] -translate-y-[50%]"></span>
        </div>
        <div className="w-8 h-8 rounded-full grid place-content-center bg-custom_accent absolute top-[50%] right-[10px] -translate-y-[50%] cursor-pointer">
          <Magnifier
            className="w-[0.875rem] h-[0.875rem]"
            color="white"
            strokeWidth={3}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
