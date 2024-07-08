import PlacesCard from "./PlacesCard";
import { useEffect, useState } from "react";
import { getRecommendedPlaces } from "@/constants/api";
import { useNavigate } from "react-router-dom";
import LoadingState from "./LoadingState";
import { BusinessData } from "@/constants/types";

function PlaceRecommendation() {
  const [placeData, setPlaceData] = useState<BusinessData[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const recommendedPlaces = await getRecommendedPlaces();
        setPlaceData([...recommendedPlaces]);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleNavigation = (id: string) => {
    navigate(`/places/${id}`);
    window.location.reload();
  };

  return (
    <div className="no-scrollbar flex lg:flex-col overflow-x-auto gap-x-4 scroll-smooth">
      {loading && <LoadingState />}
      {placeData.map((place) => (
        <div onClick={() => handleNavigation(place.id)}>
          <PlacesCard
            key={place.id}
            {...place}
            backround={true}
            className=" w-[270px] md:w-[300px] shrink-0 my-4 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

export default PlaceRecommendation;
