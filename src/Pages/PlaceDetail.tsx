import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaceDetailRecommendation from "@/Components/PlaceDetailRecommendation";
import PlaceInfo from "../Components/PlaceInfo";
import { CustomError } from "../Components/Error";
import Divider from "@/Components/Divider";
import PlaceOfferSection from "../Components/PlaceOfferSection";
import PlaceReviewSection from "../Components/PlaceReviewSection";
import { getPlaceDetail } from "../constants/api";
import PlaceDetailLoader from "../Components/PlaceDetailLoader";

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
      if (params.place_id) {
        setLoading(true);
        const place = await getPlaceDetail(params.place_id);
        setPlaceDetail(place);
      }
    } catch (error: any) {
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
        <Divider axis="horizontal" className="hidden md:block" />
        <main className="md:container shrinked-container text-sm mb-10">
          <PlaceInfo data={placeDetail} />
          <section className="place-detail-body relative">
            <div>
              <PlaceOfferSection data={placeDetail} />
              <PlaceReviewSection placeData={placeDetail} />
            </div>
            <PlaceDetailRecommendation />
          </section>
        </main>
      </>
    );
  }

  // display initial loading screen
  if (loading) {
    return <PlaceDetailLoader />;
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
