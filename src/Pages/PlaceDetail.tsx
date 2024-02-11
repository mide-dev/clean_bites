import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/Components/Header";
import PlaceDetailRecommendation from "@/Components/PlaceDetailRecommendation";
import Footer from "../Components/Footer";
import PlaceInfo from "../Components/PlaceInfo";
import placesDetail from "../../mockData/PlacesDetail.json";
import { CustomError } from "../Components/Error";
import Divider from "@/Components/Divider";
import PlaceOfferSection from "../Components/PlaceOfferSection";
import PlaceReviewSection from "../Components/PlaceReviewSection";
import { getPlaceDetail } from "../constants/api";

function PlaceDetail() {
  const params = useParams();
  const [placeDetail, setPlaceDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    statusText: "",
    status: "",
    isError: false,
  });

  // fetch place detail.
  const fetchPlaceDetail = async () => {
    try {
      setLoading(true);
      const place = await getPlaceDetail(params.place_id);
      setPlaceDetail(place);
    } catch (error) {
      setError({
        message: "Failed to fetch Places",
        statusText: error.statusText,
        status: error.status,
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // call the function to fetch place
  useEffect(() => {
    fetchPlaceDetail();
  }, []);

  if (placeDetail) {
    return (
      <>
        <Header className="hidden md:flex is-place-detail" />
        <Divider axis="horizontal" className="hidden md:block" />
        <main className="md:container is-place-detail text-sm mb-10">
          <PlaceInfo data={placeDetail} />
          <section className="place-detail-body relative">
            <div>
              <PlaceOfferSection data={placeDetail} />
              <PlaceReviewSection placeData={placeDetail} />
            </div>
            <PlaceDetailRecommendation data={placeDetail} />
          </section>
        </main>
        <Footer className="is-place-detail" />
      </>
    );
  }

  // display initial loading screen
  if (loading) {
    return <div>I'm Loading details...</div>;
  }

  // if error, display error to user
  if (error.isError) {
    return (
      <CustomError
        message={error.message}
        status={error.status}
        statusText={error.statusText}
      />
    );
  }
}

export default PlaceDetail;
