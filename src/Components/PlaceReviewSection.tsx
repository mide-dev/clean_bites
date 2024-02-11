import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Star from "@/assets/Star";
import ReviewCard from "@/Components/ReviewCard";

import { Button } from "@/Components/ui/button";

import Divider from "@/Components/Divider";
import { getPlaceReview } from "../constants/api";
import { CustomError } from "../Components/Error";
import ReviewPopup from "./ReviewPopup";

const PlaceReviewSection = ({ placeData }) => {
  const [placeReview, setPlaceReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    statusText: "",
    status: "",
    isError: false,
  });

  // fetch place Review.
  const fetchPlaceReview = async () => {
    try {
      setLoading(true);
      const place = await getPlaceReview(placeData.id);
      setPlaceReview(place);
    } catch (error) {
      setError({
        message: "Failed to fetch reviews",
        statusText: error.statusText,
        status: error.status,
        isError: true,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // call the function to fetch place
  useEffect(() => {
    fetchPlaceReview();
  }, []);

  if (placeReview) {
    return (
      <section className="place_detail_section my-6">
        <h2 className="place-detail-spacer">Recommended Reviews</h2>
        <p className="my-4"><strong>Note:</strong> Our reviews are a mix of user ratings and Google ratings to give you a comprehensive view.</p>
        <div className="flex gap-x-1">
          <Star className="w-4 fill-custom_accent inline-block" />
          <h3 className="">
            <strong>{placeData.google_review_score}</strong> from{" "}
            {placeData.google_review_count} reviews
          </h3>
        </div>
        <ReviewPopup
          place_id={placeData.id}
          business_name={placeData.business_name}
        />

        <div>
          {/* Render content when cleanbites reviews exist */}
          {placeReview.cleanbites_reviews.length > 0
            ? placeReview.cleanbites_reviews.map((review) => (
                <>
                  <ReviewCard
                    author_name={`${review.user_first_name} ${review.user_last_name}`}
                    author_photo_url=""
                    datetime={review.last_update} // TODO: MAKE TIME RELATIVE
                    text={review.review}
                    rating={review.rating}
                    key={review.id}
                  />
                  <Divider
                    axis="horizontal"
                    className="bg-slate-300 last:hidden"
                  />
                </>
              ))
            : null}

          {/* Render content when Google reviews exist */}
          {placeReview.google_reviews?.reviews.length > 0
            ? placeReview.google_reviews.reviews.map((review) => (
                <>
                  <ReviewCard
                    author_name={review.author_name}
                    author_photo_url={review.profile_photo_url}
                    datetime={review.relative_time_description}
                    text={review.text}
                    rating={review.rating}
                    key={review.relative_time_description}
                  />
                  <Divider
                    axis="horizontal"
                    className="bg-slate-300 last:hidden"
                  />
                </>
              ))
            : null}

          {/* if no reviews */}
          {!(placeReview.cleanbites_reviews.length > 0) &&
            !(placeReview.google_reviews?.reviews.length > 0) && (
              <div>No reviews available for this place</div>
            )}
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-x-[0.125rem] cursor-pointer hover:shadow my-4"
        >
          <span>More reviews on Google</span>
          <ChevronRight className="stroke-slate-700" />
        </Button>
      </section>
    );
  }

  // display initial loading screen
  if (loading) {
    return <div>I'm Loading review...</div>;
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
};

export default PlaceReviewSection;
