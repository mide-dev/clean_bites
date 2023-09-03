import { useState, useEffect } from "react";
import PlacesCard from "./PlacesCard";
import { Place } from "@/constants/types";
import { getPlaces } from "@/constants/api";
// import Loading from "./Loading";

function Places() {
  const [placesData, setPlacesData] = useState<Place[] | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPlaces();
        setPlacesData((prevData) => (prevData ? [...prevData, ...data] : data));
      } catch (error) {
        console.error("Error fetching places:", error);
        // Handle the error appropriately, e.g., setPlacesData(null) or show an error message.
      }
    }

    fetchData();
  }, []);

  return (
    <div className="places-grid">
      {placesData !== null ? (
        placesData.map((place) => {
          if (place) return <PlacesCard key={place.place_id} {...place} />;
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Places;
