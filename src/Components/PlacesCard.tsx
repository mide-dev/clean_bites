import { HTMLAttributes } from "react";

import Star from "@/assets/Star";
import { Place } from "@/constants/types";
import HygieneCheck from "./HygieneCheck";

type PlaceProp = Place & HTMLAttributes<HTMLDivElement>;

function PlacesCard({ className, ...props }: PlaceProp) {
  // convert to an array to allow mapping
  const placesData = [{ ...props }];

  // if placesData empty, retun empty div
  if (placesData.length > 0) {
    return <div>No data available</div>;
  }

  // else, map and render the data
  return (
    <>
      {placesData.map((place) => {
        if (place) {
          return (
            <div
              className={`w-[300px] border-[1px] rounded-lg ${className}`}
              key={place["place_id"]}
            >
              {/* work on place image */}
              {/* <PlaceImage /> */}
              <div className="px-2 pt-[0.3rem] text-[0.85rem] text-custom_primary_400">
                <div className="flex justify-between">
                  <p>{place["city"]}</p>
                  <div className="flex gap-x-[0.2rem]">
                    <Star className="w-3" />
                    {/* check if the rating value returned is valid */}
                    {typeof place["rating"] === "number" &&
                    place["rating"] > 0 ? (
                      <p>{`${place["rating"]} of ${place["user_ratings_total"]} Reviews`}</p>
                    ) : (
                      <p>No Ratings</p>
                    )}
                  </div>
                </div>
                <h3 className="text-[1rem] font-medium text-custom_primary_500 pt-2">
                  {place["BusinessName"]}
                </h3>
                <p className="pt-[0.2rem] text-[0.75rem]">{place["street"]}</p>
                <div className="flex pt-2 items-center gap-x-2 pb-2">
                  <HygieneCheck placeHygieneRating={place["RatingValue"]} />
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default PlacesCard;
