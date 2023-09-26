import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/Components/Header";
import Map from "@/Components/Map/Map";
import PlaceImage from "@/Components/PlaceImage";
import PlaceOffers from "@/Components/PlaceOffers";
import PlaceRecommendation from '../Components/PlaceRecommendation';
import Footer from "../Components/Footer";
import { UtensilsCrossed, PhoneCall, ChevronRight } from "lucide-react";
import { useHygieneCheck, HygieneProp } from "../constants/HygieneCheck";
import HygieneIcon from "@/assets/hygieneIcon";
import Star from "@/assets/Star";
import ReviewCard from "@/Components/ReviewCard";
import { Button } from "@/Components/ui/button";
import places from '../../mockData/places.json'
import write from "../assets/write.png";



import placesDetail from "../../mockData/PlacesDetail.json";
import Divider from "@/Components/Divider";

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
        <main className="md:container is-place-detail text-sm mb-12">
          {/* PLACE INFO */}
          <section className="flex flex-col">
            {/* Image */}
            <div className="placeCard w-full md:order-3">
              <PlaceImage
                images={placeDetail.photos}
                className=" block object-cover"
              />
            </div>
            {/*  title */}
            <div className="flex items-center place_detail_section md:order-1">
              <h1>
                {placeDetail.BusinessName}
                <span className="px-2">&#8226;</span>
              </h1>
              <div className="text-base">$$$</div>
            </div>
            {/* google review group */}
            <div className="flex gap-x-[0.1rem] place_detail_section md:order-2">
              <Star className="w-4 fill-black inline-block" />
              <p className="inline-block">
                4.92 <span className="px-[0.2rem]">&#8226;</span>
                <button className="underline">723 Google Reviews </button>
                <span className="px-[0.2rem]">&#8226;</span> 60 Spring Gardens
              </p>
            </div>
            {/* <Divider axis='horizontal' className="border-slate-300" /> */}
            {/* hygiene */}
            <div className="place_detail_section md:order-4">
              <HygieneIcon className="" />
              <p>Health & Hygiene Rating - Very Poor</p>
              <div className="progress-bar w-full h-5 bg-[#ccc] rounded-full">
                <div className="grid place-content-center progress-fill h-full bg-red-500 w-[60%] rounded-full">
                  <p className="text-white font-medium">60% </p>
                </div>
              </div>
            </div>
            {/* open time */}
            <div className="flex gap-x-2 items-center place_detail_section md:order-5">
              <UtensilsCrossed className="w-5 stroke-custom_primary_500" />
              <p>Open 11:00 AM - 11:00 PM</p>
              <span>&#8226;</span>
              <button className="underline">See hours</button>
            </div>
            {/* contact call */}
            <div className="flex gap-x-2 items-center place_detail_section md:order-6">
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
            <Map
              latitude={51.5072}
              longitude={0.1276}
              className="mx-auto w-full h-[220px] sm:h-[300px] md:h-[450px]"
            />
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
            <div className="flex gap-x-4 overflow-scroll no-scrollbar scroll-smooth">
              {placeDetail.reviews.map((review) => (
                <ReviewCard data={review} key={review.time}/>
              ))}
            </div>
            <Button
                variant="outline"
                className="flex items-center gap-x-[0.125rem] cursor-pointer hover:shadow"
              >
              <span>More reviews on Google</span>
              <ChevronRight className="stroke-slate-700" />
            </Button>
            {/* Explore */}
            <h2>Explore similar places</h2>
            <div className="flex gap-x-4 overflow-scroll no-scrollbar scroll-smooth">
              {places.map(data => <PlaceRecommendation place_id ={data.place_id} key={data.place_id}/>)}
            </div>
          </section>
        </main>
        <Footer className="is-place-detail"/>
      </>
    );
  }
}

export default PlaceDetail;
