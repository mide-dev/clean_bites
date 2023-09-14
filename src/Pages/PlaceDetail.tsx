import { useState, useEffect } from "react";
import Header from "@/Components/Header";
import PlaceImage from "@/Components/PlaceImage";
import PlaceInfo from "@/Components/placeInfo";
import OfferVerify from "@/Components/OfferVerify";

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

  return (
    <>
      <Header className="hidden md:flex" />
      <div className="placeCard">
        {placeDetail && <PlaceImage images={placeDetail.photos} />}
      </div>
      <main className="container text-sm">
        {/* PLACE INFO */}
        <PlaceInfo />

        {/* PLACE OFFERS */}
      </main>
    </>
  );
}

export default PlaceDetail;
