import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/Components/Header";
import Map from "@/Components/Map/Map";
import PlaceOffers from "@/Components/PlaceOffers";
import PlaceRecommendation from "../Components/PlaceRecommendation";
import Footer from "../Components/Footer";
import ImageSlider from "../Components/ImageSlider";
import { UtensilsCrossed, PhoneCall, ChevronRight } from "lucide-react";
import { useHygieneCheck, HygieneProp } from "../constants/HygieneCheck";
import HygieneIcon from "@/assets/hygieneIcon";
import Star from "@/assets/Star";
import ReviewCard from "@/Components/ReviewCard";
import { Button } from "@/Components/ui/button";
import places from "../../mockData/places.json";
import write from "../assets/write.png";

import placesDetail from "../../mockData/PlacesDetail.json";
import Divider from "@/Components/Divider";

function PlaceDetail() {
  const [placeDetail, setPlaceDetail] = useState(null);

  // process & retrieve hygiene data
  const hygieneResult = useHygieneCheck(placeDetail?.RatingValue);

  useEffect(() => {
    setPlaceDetail(placesDetail[0]);
  }, []);

  if (placeDetail) {
    return (
      <>
        <Header className="hidden md:flex is-place-detail" />
        <Divider axis="horizontal" className="hidden md:block" />
        <main className="md:container is-place-detail text-sm mb-10">
          {/* PLACE INFO */}
          <section className="flex flex-col">
            {/* Image */}
            <div className="placeCard md:order-3">
              <ImageSlider
                images={placeDetail.photos}
                scrollSpeed={1000}
                className="block max-h-[400px] lg:max-h-[500px] w-full md:rounded-xl"
                displayScrollBtn={true}
              />
            </div>
            {/*  title */}
            <div className="flex items-center place_detail_section md:order-1">
              <h1 className="my-2">
                {placeDetail.BusinessName}
                <span className="px-2">&#8226;</span>
              </h1>
              <div className="text-base">$$$</div>
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
                  <div className="flex gap-x-1 pb-3">
                    <HygieneIcon className={`${hygieneResult.fill}`} />
                    <p>
                      Health & Hygiene Result -{" "}
                      <span className="font-medium">
                        {hygieneResult.ratingText}
                      </span>
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
                  <Divider
                    axis="horizontal"
                    className="bg-slate-300 md:hidden"
                  />
                </>
              )}
            </div>

            {/* google review group */}
            <div className=" gap-x-[0.1rem] place_detail_section md:order-2">
              <div className="flex">
                <Star className="w-4 fill-black inline-block" />
                <p className="inline-block">
                  4.92 <span className="px-[0.2rem] inline-block">&#8226;</span>
                  <button className="underline inline-block">
                    723 Google Reviews
                  </button>
                </p>
              </div>
              <p className="pt-1">
                60 Spring Gardens,<span className="px-[0.2rem]"></span> London
              </p>
            </div>
            {/* open time */}
            <div className="flex gap-x-2 items-center place_detail_section md:order-5">
              <UtensilsCrossed className="w-5 stroke-custom_primary_500" />
              <p>Open 11:00 AM - 11:00 PM</p>
              <span>&#8226;</span>
              <button className="underline">See hours</button>
            </div>
            {/* contact call */}
            <div className="place_detail_section md:order-6">
              <div className="flex gap-x-2 items-center">
                <PhoneCall className="w-5 stroke-custom_primary_500" />
                <p>0191 260 5880</p>
              </div>
              {/* mobile-divider */}
              <Divider axis="horizontal" className="bg-slate-300 md:hidden" />
            </div>
          </section>

          {/* PLACE OFFERS */}
          <section className="place_detail_section">
            <h2>What this place offers</h2>
            <PlaceOffers data={placeDetail.offers[0]} />
            <Divider axis="horizontal" className="bg-slate-300" />
          </section>
          {/* Place Map */}
          <section className="place_detail_section">
            <div className="mb-2">
              <h2>Where you're going</h2>
            </div>
            <Map
              latitude={51.5072}
              longitude={0.1276}
              className="mx-auto w-full h-[220px] sm:h-[300px] md:h-[450px]"
            />
            <Divider axis="horizontal" className="bg-slate-300" />
          </section>
          {/* place review */}
          <section className="place_detail_section">
            <h2>Recommended Reviews</h2>
            <div className="flex gap-x-1">
              <Star className="w-4 fill-custom_accent inline-block" />
              <h3 className="">4.93 from 207 reviews</h3>
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-x-[0.125rem] cursor-pointer hover:shadow"
            >
              <img src={write} className="pb-1" />
              <span>Write a review</span>
            </Button>
            <div>
              {placeDetail.reviews.map((review) => (
                <>
                  <ReviewCard data={review} key={review.time} />
                  <Divider
                    axis="horizontal"
                    className="bg-slate-300 last:hidden"
                  />
                </>
              ))}
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-x-[0.125rem] cursor-pointer hover:shadow"
            >
              <span>More reviews on Google</span>
              <ChevronRight className="stroke-slate-700" />
            </Button>
            <Divider axis="horizontal" className="bg-slate-300" />
            {/* Explore */}
            <div className="bg-[#FFFBFC] md:bg-white rounded-xl ">
              <h2>
                Explore places similar to{" "}
                <span className="font-medium">{placeDetail.BusinessName}</span>
              </h2>
              <div className="rounded-xl overflow-scroll no-scrollbar scroll-smooth">
                <PlaceRecommendation
                  place_id={placeDetail.place_id}
                  key={placeDetail.place_id}
                  className="flex gap-x-4 overflow-scroll no-scrollbar scroll-smooth"
                />
              </div>
            </div>
          </section>
        </main>
        <Footer className="is-place-detail" />
      </>
    );
  }
}

export default PlaceDetail;
