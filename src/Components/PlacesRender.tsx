import { useState, Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import PlacesCard from "./PlacesCard";
import { Place as PlaceProp } from "@/constants/types";
import LoadingState from "./LoadingState";

type LoaderData = PlaceProp[] | null;

function Places() {
  // const [placesData, setPlacesData] = useState<LoaderData>(null);

  const { placesPromise } = useLoaderData();

  return (
    <div className="places-grid">
      <Suspense fallback={<LoadingState />}>
        <Await resolve={placesPromise}>
          {(places) => {
            return places.map((place: PlaceProp) => (
              <PlacesCard key={place.place_id} data={place} />
            ));
          }}
        </Await>
      </Suspense>
    </div>
  );
}

export default Places;
