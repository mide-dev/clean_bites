import { useState, useContext, useEffect } from "react";
import { getPlaceDetail, getUserReviews } from "@/constants/api";
import AuthContext from "@/AuthProvider";
import PlacesCard from "@/Components/PlacesCard";
import PlaceRecommendation from "@/Components/PlaceRecommendation";
import LoadingState from "@/Components/LoadingState";
import Divider from "@/Components/Divider";
import DeleteReview from "@/Components/DeleteReview";
import EditReview from "@/Components/EditReview";

const PlacesReviewed = () => {
  const { userData, isAuth } = useContext(AuthContext);
  const [placeData, setPlaceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlacesReviewed = async () => {
      try {
        setLoading(true);
        setError("");
        if (isAuth.accessToken) {
          const placesReviewed = await getUserReviews(
            userData.id,
            isAuth.accessToken
          );
          const placeDataArray = await Promise.all(
            placesReviewed.map(async (review) => {
              const placeDetails = await getPlaceDetail(review.place_id);
              return { review, place: placeDetails };
            })
          );
          setPlaceData(placeDataArray);
        } else {
          setError("Please Login to see Places you've reviewed.");
        }
      } catch (error) {
        setError("Internal server error, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlacesReviewed();
  }, [userData.id]);

  if (loading) {
    return (
      <div className="container shrinked-container pt-10 lg:pt-16">
        <LoadingState />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[90vh] container shrinked-container pt-10 lg:pt-16">
        {error}
      </div>
    );
  }

  if (placeData.length > 0) {
    return (
      <main className="min-h-[90vh] container shrinked-container pt-10 lg:pt-16">
        <h2>Places You've Reviewed</h2>
        <Divider axis={"horizontal"} />
        <div className="places-grid">
          {placeData.map((place, index) => (
            <div key={place.place.id}>
              <PlacesCard
                {...place.place}
                backround={false}
                className="shrink-0 my-8 mx-2"
              />
              <div className="flex justify-evenly mx-8">
                <DeleteReview
                  reviewId={place.review.id}
                  accessToken={isAuth.accessToken}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-[90vh] container shrinked-container pt-10 lg:pt-16">
      You haven't reviewed any place. They'll appear here when you do.
    </div>
  );
};

export default PlacesReviewed;
