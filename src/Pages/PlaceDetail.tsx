import { Link } from "react-router-dom";
import Header from "@/Components/Header";
import Star from "@/assets/Star";
import { UtensilsCrossed, PhoneCall } from "lucide-react";
import HygieneCheck from "@/Components/HygieneCheck";

function PlaceDetail() {
  return (
    <>
      <Header className="hidden md:flex" />
      <div className="container text-sm">
        {/*  title */}
        <div className="flex items-center">
          <h1 className="text-[26px]">
            Six by Nico<span className="px-2">&#8226;</span>
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
          <HygieneCheck placeHygieneRating={5} />
        </div>
        {/* open time */}
        <div className="flex gap-x-2 items-center">
          <UtensilsCrossed className="w-5 stroke-custom_primary_500" />
          <p>Open 11:00 AM - 11:00 PM</p>
          <span>&#8226;</span>
          <button className="underline">See hours</button>
        </div>
        {/* contact call */}
        <div className="flex gap-x-2 items-center">
          <PhoneCall className="w-5 stroke-custom_primary_500" />
          <p>0191 260 5880</p>
        </div>
      </div>
    </>
  );
}

export default PlaceDetail;
