import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchAutocomplete, { SearchResults } from "./SearchAutocomplete";

interface SearchBarProps {
  className?: string;
}

type SearchResultsOrEmpty = SearchResults | [];

function SearchBar({ className }: SearchBarProps) {
  const [searchAutocomplete, setSearchAutocomplete] =
    useState<SearchResultsOrEmpty>([]);
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
