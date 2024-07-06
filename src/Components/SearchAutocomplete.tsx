import { useEffect, useRef } from "react";
import Divider from "./Divider";
import { Link } from "react-router-dom";

interface Category {
  name: string;
}

interface Place {
  id: string;
  business_name: string;
}

interface SearchResults {
  categoriesAutocomplete: Category[];
  placeAutocomplete: Place[];
}

interface SearchAutocompleteProps {
  results: SearchResults;
  setIsInputFocused: (focused: boolean) => void;
}

const SearchAutocomplete = ({
  results,
  setIsInputFocused,
}: SearchAutocompleteProps) => {
  const autocompleteRef = useRef(null);

  // Hide autocomplete when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setIsInputFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsInputFocused]);

  return (
    (results.categoriesAutocomplete || results.placeAutocomplete) && (
      <div
        ref={autocompleteRef}
        className="custom-scrollbar absolute rounded-md p-4 mt-4 border-[1px] bg-white z-10 w-52 lg:w-58 max-h-64 overflow-y-auto shadow
        scrollbar-thin scrollbar-thumb scrollbar-track scrollbar-thumb-rounded"
      >
        {results.categoriesAutocomplete.length > 0 && (
          <>
            <span className="text-custom_primary_50 text-sm italic">
              In Categories:
            </span>
            {results.categoriesAutocomplete.map((category) => (
              <Link
                to={`/search/?query=${category.name}`}
                key={category.name}
                className="py-2 block"
              >
                {category.name}
              </Link>
            ))}
            <Divider axis="horizontal" />
          </>
        )}

        {results.placeAutocomplete.length > 0 && (
          <>
            <span className="text-custom_primary_50 text-sm italic">
              In Places:
            </span>
            {results.placeAutocomplete.map((place) => (
              <Link
                to={`/places/${place.id}`}
                key={place.id}
                className="block py-2"
              >
                {place.business_name}
              </Link>
            ))}
          </>
        )}
      </div>
    )
  );
};

export default SearchAutocomplete;
