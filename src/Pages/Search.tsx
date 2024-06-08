import { useState, useEffect, useRef } from "react";
import { getPlaceSearch } from "../constants/api";
import { CustomError } from "../Components/Error";
import { Link } from "react-router-dom";
import PlacesCard from "../Components/PlacesCard";

function Search() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    statusText: "",
    status: "",
    isError: false,
  });

  // const fetchPlaceSearch = async () {
  //   const placesFetch = await getPlaceSearch(selectedItem, currentPage);
  // }

  return (
    <main className="md:container shrinked-container text-sm mb-10">
      <div className="places-grid">
        {items.map((place, index) => (
          <Link to={`/places/${place.id}`} key={`${selectedItem}_${place.id}`}>
            <PlacesCard
              ref={index === items.length - 1 ? setLastElement : null}
              {...place}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Search;
