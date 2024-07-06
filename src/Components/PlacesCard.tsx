import { forwardRef, useState, useEffect, HTMLAttributes } from "react";
import HygieneIcon from "@/assets/hygieneIcon";
import Star from "@/assets/Star";
import { Place } from "@/constants/types";
import { useHygieneCheck, HygieneProp } from "../constants/HygieneCheck";
import ImageSlider from "./ImageSlider";

type PlaceProp = HTMLAttributes<HTMLDivElement> &
  Place & {
    backround?: boolean;
  };

const PlacesCard = forwardRef<HTMLDivElement, PlaceProp>((props, ref) => {
  const { backround, className, ...data } = props;
  const [hygieneData, setHygieneData] = useState<HygieneProp | null>(null);

  // process & retrieve hygiene data
  const hygieneResult = useHygieneCheck(data.hygiene_score);

  useEffect(() => {
    setHygieneData(hygieneResult);
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        backround === true && "bg-red-50 p-2  rounded-lg shadow"
      } placeCard cursor-pointer btnScrollContainer ${className}`}
    >
      <div className="relative">
        <ImageSlider
          images={
            data?.photo_url
              ? data.photo_url
              : data.google_enriched_data?.photo_urls
          }
          scrollSpeed={500}
          displayScrollBtn={true}
          className="rounded-t-lg w-full h-[220px] 2xl:h-[240px]"
          leftArrowStyle="btnScroll"
          rightArrowStyle="btnScroll"
        />
      </div>
      <div className="px-2 pt-[0.3rem] text-[0.85rem] text-custom_primary_400">
        <div className="flex justify-between">
          <p>{data.city}</p>
          <div className="flex gap-x-[0.2rem]">
            <Star className="w-3 fill-[#FF385C]" />
            {/* check if the rating value returned is valid */}
            {typeof data.google_review_count === "number" &&
            data.google_review_count > 0 ? (
              <p>{`${data.google_review_score} of ${data.google_review_count} Reviews`}</p>
            ) : (
              <p>No Ratings</p>
            )}
          </div>
        </div>
        <h3 className="pt-2 font-medium text-[0.925rem]">
          {data.business_name}
        </h3>
        <p className="pt-[0.3rem] text-[0.75rem]">{data.street}</p>
        <div>
          {/* conditionally render hygiene */}
          {hygieneData === "Awaiting Inspection" ? (
            <div className={`flex pt-2 items-center gap-x-2 py-2`}>
              <p className="block font-medium">Awaiting Inspection</p>
            </div>
          ) : (
            <div className={`flex pt-2 items-center gap-x-2 py-2`}>
              <HygieneIcon className={`${hygieneData?.fill}`} />
              {
                <p className="inline-block pr-[0.4rem] font-medium">
                  {`${hygieneData?.ratingText} hygiene `}
                  <span className="px-[0.2rem]">&#8226;</span>
                  {`${hygieneData?.hygieneScore}%`}
                </p>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default PlacesCard;
