import ImageSlider from "../Components/ImageSlider";
import { useHygieneCheck, HygieneProp } from "../constants/HygieneCheck";
import HygieneIcon from "@/assets/hygieneIcon";
import Divider from "@/Components/Divider";
import Star from "@/assets/Star";
import { UtensilsCrossed, PhoneCall } from "lucide-react";

const PlaceInfo = ({ data }) => {
  // process & retrieve hygiene data
  const hygieneResult = useHygieneCheck(data?.hygiene_score);

  const displayPriceLevel = (priceLevel) => {
    if (priceLevel == 0 || priceLevel == 1) {
      return "$";
    } else if (priceLevel == 2) {
      return "$$";
    } else if (priceLevel == 3) {
      return "$$$";
    } else if (priceLevel == 4) {
      return "$$$$";
    }
  };

  return (
    <section className="flex flex-col md:my-4">
      {/* Image */}
      <div className="placeCard md:order-3">
        <ImageSlider
          images={data.google_enriched_data.photo_urls}
          scrollSpeed={1000}
          className="block h-[300px] md:h-[400px] lg:h-[500px] w-full md:rounded-xl"
          displayScrollBtn={true}
        />
      </div>
      {/*  title */}
      <div className="flex items-center place_detail_section md:order-1">
        <h1 className="my-2">
          {data.business_name}
          <span className="px-2">&#8226;</span>
        </h1>
        <div className="text-base">
          {displayPriceLevel(
            data.google_enriched_data.place_offers.price_level
          )}
        </div>
      </div>
      {/* hygiene */}
      <div className="place_detail_section md:order-4">
        {/* conditionally render hygiene */}
        {hygieneResult === "Awaiting Inspection" ? (
          <div className={`flex pt-2 items-center gap-x-2 py-2`}>
            Health & Hygiene Result -
            <p className="block font-medium">Awaiting Inspection</p>
          </div>
        ) : (
          <> 
          {/* TODO: USE A PROGRESS ELEMENT */}
            <div className="flex gap-x-1 pb-3">
              <HygieneIcon className={`${hygieneResult.fill}`} />
              <p>
                Health & Hygiene Result -{" "}
                <span className="font-medium">{hygieneResult.ratingText}</span>
              </p>
            </div>
            <div className="progress-bar w-full h-5 bg-[#ccc] rounded-full">
              <div
                className={`grid place-content-center progress-fill h-full w-${hygieneResult.hygieneScore}% rounded-full ${hygieneResult.bg}`}
              >
                <p className="text-white font-medium">
                  {hygieneResult.hygieneScore}%
                </p>
              </div>
            </div>
            {/* mobile-divider */}
            <Divider axis="horizontal" className="bg-slate-300 md:hidden" />
          </>
        )}
      </div>

      {/* google review group */}
      <div className=" gap-x-[0.1rem] place_detail_section md:order-2">
        <div className="flex">
          <Star className="w-4 fill-black inline-block" />
          <p className="inline-block">
            {data.google_review_score}{" "}
            <span className="px-[0.2rem] inline-block">&#8226;</span>
            <button className="underline inline-block">
              {data.google_review_count} Google Reviews
            </button>
          </p>
        </div>
        <p className="pt-1">
          {data.street}
          <span className="px-[0.2rem]"></span> {data.city}
        </p>
      </div>
      {/* open time */}
      <div className="flex gap-x-2 items-center place_detail_section md:order-5">
        <UtensilsCrossed className="w-5 stroke-custom_primary_500" />
        <p>
          {data.google_enriched_data.open_now
            ? "This place is currently opened"
            : "Not Opened at the moment"}
        </p>
        <span>&#8226;</span>
        {/* TODO: CREATE THE HOURS DIALOG */}
        <button className="underline">See hours</button> 
      </div>
      {/* contact call */}
      <div className="place_detail_section md:order-6">
        <div className="flex gap-x-2 items-center">
          <PhoneCall className="w-5 stroke-custom_primary_500" />
          <p>{data.google_enriched_data.phone_number}</p>
        </div>
        {/* mobile-divider */}
        <Divider axis="horizontal" className="bg-slate-300 md:hidden" />
      </div>
    </section>
  );
};

export default PlaceInfo;
