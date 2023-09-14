import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/Components/Header";
import PlaceImage from "@/Components/PlaceImage";
import PlaceOffers from "@/Components/PlaceOffers";
import { UtensilsCrossed, PhoneCall } from "lucide-react";
import { useHygieneCheck, HygieneProp } from "../constants/HygieneCheck";
import HygieneIcon from "@/assets/hygieneIcon";
import Star from "@/assets/Star";


function PlaceDetail() {
  const [placeDetail, setPlaceDetail] = useState(null);
  // const [hygieneData, setHygieneData] = useState<HygieneProp | null>(null);

  // // process & retrieve hygiene data
  // const hygieneResult = useHygieneCheck(data.RatingValue);

  // useEffect(() => {
  //   setHygieneData(hygieneResult);
  // }, []);

  useEffect(() => {
    fetch("api/placeDetail/1")
      .then((res) => res.json())
      .then((data) => {
        setPlaceDetail(data.placeDetails);
      });
  }, []);
  console.log(placeDetail)

  if (placeDetail) {
    return (
      <>
        <Header className="hidden md:flex" />
        <div className="placeCard">
          {<PlaceImage images={placeDetail.photos} />}
        </div>
        <main className="container text-sm">
          {/* PLACE INFO */}
          <section>
            {/*  title */}
            <div className="flex items-center">
              <h1>
                {placeDetail.BusinessName}<span className="px-2">&#8226;</span>
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
          {<PlaceOffers data ={placeDetail.offers[0]} />}
          <div className="h-20 w-4 " ></div>
        </main>
      </>
    );
  }
}

export default PlaceDetail;
