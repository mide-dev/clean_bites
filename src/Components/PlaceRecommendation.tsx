import { Card } from "./ui/card";
import places from "../../mockData/places.json";
import PlacesCard from "./PlacesCard";

function PlaceRecommendation(place_id) {
  const currentPlace = places.filter(
    (place) => place.place_id === place_id.place_id
    );
    
  // i ll use the place_id to get recommendation from backend
  
  
  return (
    <div className="no-scrollbar flex lg:flex-col overflow-x-auto gap-x-4"> 
      {
        places.map(place => (
          <PlacesCard key={place.place_id} {...place} backround={true} className=" w-[270px] md:w-[300px] shrink-0 my-4"/>
        ))
      }
      
    </div>
  );
}

export default PlaceRecommendation;