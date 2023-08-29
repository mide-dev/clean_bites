import { HTMLAttributes } from "react";

import Star from "@/assets/Star";
import { Place } from "@/constants/types";
import HygieneCheck from "./HygieneCheck";

type PlaceProp = Place & HTMLAttributes<HTMLDivElement>;

function PlacesCard({ className, ...placesData }: PlaceProp) {
  return (
    <>
      <div className={`w-[300px] border-[1px] rounded-lg ${className}`}>
        {/* work on place image */}
        {/* <PlaceImage /> */}
        <div className="px-2 pt-[0.3rem] text-[0.85rem] text-custom_primary_400">
          <div className="flex justify-between">
            <p>{placesData.city}</p>
            <div className="flex gap-x-[0.2rem]">
              <Star className="w-3" />
              {/* check if the rating value returned is valid */}
              {typeof placesData.rating === "number" &&
              placesData.rating > 0 ? (
                <p>{`${placesData.rating} of ${placesData.user_ratings_total} Reviews`}</p>
              ) : (
                <p>No Ratings</p>
              )}
            </div>
          </div>
          <h3 className="text-[1rem] font-medium text-custom_primary_500 pt-2">
            {placesData.BusinessName}
          </h3>
          <p className="pt-[0.2rem] text-[0.75rem]">{placesData.street}</p>
          <div className="flex pt-2 items-center gap-x-2 pb-2">
            <HygieneCheck placeHygieneRating={placesData.RatingValue} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlacesCard;
