import { useState, useEffect } from "react";
import PlacesCard from "./PlacesCard";
import { Place } from "@/constants/types";

function Places() {
  const [placesData, setPlacesData] = useState<Place[] | null>(null);
  //   const [page, setPage] = useState(1);
  //   const [error, setError] = useState(null);

  // fetch places from api
  useEffect(() => {
    (async function () {
      const response = await fetch("/api/places");
      const data = await response.json();

      setPlacesData((prevData) => (prevData ? [...prevData, ...data] : data));
    })();
  }, []);
  //   console.log(placesData);

  return (
    <>
      <PlacesCard placesData={placesData} />
    </>
  );
}

export default Places;
