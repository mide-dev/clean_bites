import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchAutocomplete from "./SearchAutocomplete";

function SearchBar({ className }) {
  const [searchAutocomplete, setSearchAutocomplete] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [autoCompleteClicked, setAutoCompleteClicked] = useState(false);

  return (
    <div className={className}>
      <SearchInput
        setSearchAutocomplete={setSearchAutocomplete}
        setIsInputFocused={setIsInputFocused}
      />
      {/* {isInputFocused && ( */}
      <SearchAutocomplete
        results={searchAutocomplete}
        isInputFocused={isInputFocused}
      />
      {/* )} */}
    </div>
  );
}

export default SearchBar;
