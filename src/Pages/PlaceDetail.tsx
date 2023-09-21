import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/Components/Header";
import Map from "@/Components/Map/Map";
import PlaceImage from "@/Components/PlaceImage";
import PlaceOffers from "@/Components/PlaceOffers";
import { UtensilsCrossed, PhoneCall } from "lucide-react";
import { useHygieneCheck, HygieneProp } from "../constants/HygieneCheck";
import HygieneIcon from "@/assets/hygieneIcon";
import Star from "@/assets/Star";
import ReviewCard from "@/Components/ReviewCard";
import { Button } from "@/Components/ui/button";
import write from '../assets/write.png'

import placesDetail from "../../mockData/PlacesDetail.json";

function PlaceDetail() {
  const [placeDetail, setPlaceDetail] = useState(null);

  useEffect(() => {
    setPlaceDetail(placesDetail[0]);
  }, []);
  // const [hygieneData, setHygieneData] = useState<HygieneProp | null>(null);

  // // process & retrieve hygiene data
  // const hygieneResult = useHygieneCheck(data.RatingValue);

  // useEffect(() => {
  //   setHygieneData(hygieneResult);
  // }, []);

  // useEffect(() => {
  //   fetch("api/placeDetail/1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPlaceDetail(data.placeDetails);
  //     });
  // }, []);
  // if (placeDetail) console.log(placeDetail[0].offers);

  if (placeDetail) {
    return (
      <>
        <Header className="hidden md:flex is-place-detail" />
        
        <main className="md:container is-place-detail text-sm">
          <div className="w-full  justify-center placeCard">
              <PlaceImage
                images={placeDetail.photos}
                className=" block object-cover"
              />
          </div>
          {/* PLACE INFO */}
          <section className="place_detail_section">
            {/*  title */}
            <div className="flex items-center">
              <h1>
                {placeDetail.BusinessName}
                <span className="px-2">&#8226;</span>
              </h1>
              <div className="text-base">$$$</div>
            </div>
            {/* google review group */}
            <div className="flex gap-x-[0.1rem]">
              <Star className="w-4 fill-black inline-block" />
              <p className="inline-block">
                4.92 <span className="px-[0.2rem]">&#8226;</span>
                <button className="underline">723 Google Reviews </button>
                <span className="px-[0.2rem]">&#8226;</span> 60 Spring Gardens
              </p>
            </div>
            {/* hygiene */}
            <div>
              <HygieneIcon className="" />
              <p>Health & Hygiene Rating - Very Poor</p>
              <div className="progress-bar w-full h-5 bg-[#ccc] rounded-full">
                <div className="grid place-content-center progress-fill h-full bg-red-500 w-[60%] rounded-full">
                  <p className="text-white font-medium">60% </p>
                </div>
              </div>
            </div>
            {/* open time */}
            <div className="flex gap-x-2 items-center">
              <UtensilsCrossed className="w-5 stroke-custom_primary_500" />
              <p>Open 11:00 AM - 11:00 PM</p>
              <span>&#8226;</span>
              <button className="underline">See hours</button>
            </div>
            {/* contact call */}
            <div className="flex gap-x-2 items-center ">
              <PhoneCall className="w-5 stroke-custom_primary_500" />
              <p>0191 260 5880</p>
            </div>
          </section>

          {/* PLACE OFFERS */}
          <section className="place_detail_section">
            <h2>What this place offers</h2>
            <PlaceOffers data={placeDetail.offers[0]} />
          </section>
          {/* Place Map */}
          <section className="place_detail_section">
            <div className="mb-2">
              <h2>Where you're going</h2>
            </div>
            <Map latitude={51.5072} longitude={0.1276} className="mx-auto w-full h-[220px] md:h-[450px]"/>
          </section>
          {/* place review */}
          <section className="place_detail_section">
            <h2>Recommended Reviews</h2>
            <div className="flex gap-x-1">
            <Star className="w-4 fill-custom_accent inline-block" />
            <h3 className="">4.93 from 207 reviews</h3>
            </div>
            <Button variant="outline" className="flex items-center gap-x-[0.125rem] cursor-pointer hover:shadow">
              <img src={write} className="pb-1"/>
              <span>Write a review</span>
            </Button>
            <ReviewCard />
            <div className="h-20"></div>
          </section>
        </main>
      </>
    );
  }
}

export default PlaceDetail;
