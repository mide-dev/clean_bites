import { Card } from "./ui/card";
import places from "../../mockData/places.json";
import PlacesCard from "./PlacesCard";

function PlaceRecommendation(place_id) {
  const currentPlace = places.filter(
    (place) => place.place_id === place_id.place_id
    );
    
  // i ll use the place_id to get recommendation from backend
  
  
  return (
    <div className="no-scrollbar flex overflow-x-auto gap-x-4"> 
      {
        places.map(place => (
          <PlacesCard key={place.place_id} {...place} backround={true} className="w-[270px] shrink-0"/>
        ))
      }
      
    </div>
  );
}

export default PlaceRecommendation;

/*
<div className="flex bg-[#FFFBFC] md:bg-white py-4 gap-x-2">
        <div className="flex relative w-[150px] xs:w-[200px] h-full">
          <ImageSlider
            images={currentPlace[0].photos}
            displayScrollBtn={false}
            scrollSpeed={300}
            className="rounded-lg"
          />
          <Favorite className="absolute top-2 right-3" />
        </div>
        <div>
          <div className="flex items-start font-medium pb-1">
            <h3 className="inline-block pr-2">Six by Nico</h3>
            <Star className="w-4 fill-custom_accent inline-block" />
            <p className="inline-block">4.92</p>
          </div>
          <p className="pb-[0.125rem]">60 Spring Gardens</p>
          <p>Manchester</p>
          // {/* conditionally render hygiene }*/
      //     <div>
      //       {hygieneResult === "Awaiting Inspection" ? (
      //         <div className={`flex pt-2 items-center gap-x-2 py-2`}>
      //           <p className="block font-medium">Awaiting Inspection</p>
      //         </div>
      //       ) : (
      //         <div className={`flex pt-2 items-center gap-x-2 py-2`}>
      //           <HygieneIcon className={`${hygieneResult.color}`} />
      //           {
      //             <p className="inline-block pr-[0.4rem] font-medium">
      //               {`${hygieneResult.ratingText} hygiene `}
      //             </p>
      //           }
      //         </div>
      //       )}
      //     </div>
      //   </div>
      // </div>
