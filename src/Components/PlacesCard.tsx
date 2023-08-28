import { useState, useEffect, HTMLAttributes } from "react";

import place from "../assets/place.jpg";
import Star from "@/assets/Star";
import HygieneCheck from "@/assets/hygieneCheck";

type Place = {
  BusinessName: string;
  BusinessType: string;
  BusinessTypeID: number;
  PostCode: string;
  RatingValue: number;
  city: string;
  photos: string[];
  place_id: string;
  rating: number;
  street: string;
  user_ratings_total: number;
};

function PlacesCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const [placesData, setPlacesData] = useState<Place[]>([]);
  //   const [page, setPage] = useState(1);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await fetch("/api/places");
      const data = await response.json();

      setPlacesData((prevData) => [...prevData, ...data]);
    })();
  }, []);
  //   console.log(placesData);

  return (
    <>
      {placesData.map((place) => (
        <div
          className={`w-[300px] border-[1px] rounded-lg ${className}`}
          {...props}
          key={place.place_id}
        >
          <div className="w-full h-3/5 ">
            <img
              src={place.photos[0].image}
              className="block object-cover w-full h-full rounded-t-lg"
            />
          </div>
          <div className="px-2 pt-[0.3rem] text-[14px] text-custom_primary_400">
            <div className="flex justify-between">
              <p>{place.city}</p>
              <div className="flex gap-x-[0.2rem]">
                <Star className="w-3" />
                <p>{`${place.rating} of ${place.user_ratings_total} Reviews`}</p>
              </div>
            </div>
            <h3 className="text-[1rem] font-medium text-custom_primary_500 pt-2">
              {place.BusinessName}
            </h3>
            <p className="pt-[0.2rem] text-[0.75rem]">{place.street}</p>
            <div className="flex pt-2 items-center gap-x-2 pb-2">
              <HygieneCheck className="fill-hygiene_excellent" />

              <p className="inline-block pr-[0.4rem] font-medium">
                Excellent hygiene <span className="px-[0.2rem]">&#8226;</span>{" "}
                {place.RatingValue}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PlacesCard;
