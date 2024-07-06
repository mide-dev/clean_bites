import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchAutocomplete from "./SearchAutocomplete";

interface SearchBarProps {
  className?: string;
}

function SearchBar({ className }: SearchBarProps) {
  const [searchAutocomplete, setSearchAutocomplete] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className={className}>
      <SearchInput
        setSearchAutocomplete={setSearchAutocomplete}
        setIsInputFocused={setIsInputFocused}
      />
      {isInputFocused && (
        <SearchAutocomplete
          results={searchAutocomplete}
          setIsInputFocused={setIsInputFocused}
        />
      )}
    </div>
  );
}

export default SearchBar;
