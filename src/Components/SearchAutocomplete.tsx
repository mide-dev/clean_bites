import { useEffect, useState } from "react";
import Divider from "./Divider";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

const SearchAutocomplete = ({ results }) => {
  const { place_id } = useParams();
  const [previousID, setPreviousID] = useState([]);

  useEffect(() => {
    setPreviousID((prev) => [...prev, place_id]);

    // reload when place id changes
    if (
      previousID[previousID.length - 1] != previousID[previousID.length - 2]
    ) {
      window.location.reload();
    }
  }, [place_id]);



  return (
    (results.categoriesAutocomplete || results.placeAutocomplete) && (
      <div
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
