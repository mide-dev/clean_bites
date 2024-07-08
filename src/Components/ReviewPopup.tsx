import { useState, useContext, SetStateAction } from "react";
import { Button } from "@/Components/ui/button";
import Rating from "./Rating";
import ReviewButton from "../Components/ReviewButton";
import Star from "@/assets/Star";
import { ChevronRight } from "lucide-react";
import { createReview, verifyReview } from "@/constants/api";
import AuthContext from "@/AuthProvider";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";

type ReviewPopupType = {
  place_id: string;
  business_name: string;
};

const ReviewPopup = ({ place_id, business_name }: ReviewPopupType) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

  const { isAuth, userData } = useContext(AuthContext);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleReviewChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setReviewText(event.target.value);
  };

  const handleReviewSubmit = async () => {
    try {
      setLoading(true);
      if (!rating) {
        setIsError("Please provide a rating!");
        return;
      }

      if (!reviewText) {
        setIsError("Please provide a review!");
        return;
      }

      const isPlaceAlreadyReviewed = await verifyReview(
        userData!.id!,
        place_id,
        isAuth!.accessToken!
      );
      if (isPlaceAlreadyReviewed === "review found") {
        setIsError(
          "You've reviewed this place before. Please visit Places Reviewed to edit your previous review."
        );
        return;
      }

      const reviewData = {
        place_id: place_id,
        review_text: reviewText,
        rating: rating,
      };

      const submitreview = await createReview(reviewData, isAuth!.accessToken!);

      if (submitreview.error) {
        setIsError(submitreview.error);
        return;
      }
    } catch (error: any) {
      setIsError(error);
    } finally {
      setLoading(false);
    }
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <ReviewButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="my-8">
          <DialogTitle className="font-medium text-center leading-6 pb-3">
            <span>How would you rate </span>
            <span className="text-custom_accent px-1">{business_name}</span>?
          </DialogTitle>
          <DialogDescription className="w-full flex justify-center pt-2">
            <Rating
              emptySymbol={
                <Star className="w-6 md:w-8 mx-2 stroke-black inline-block" />
              }
              fullSymbol={
                <Star className="w-6 md:w-8 mx-2 fill-custom_accent inline-block" />
              }
              initialRating={rating}
              fractions={2}
              onChange={handleRatingChange}
            />
          </DialogDescription>
        </DialogHeader>
        <DialogHeader>
          <DialogTitle className="font-medium flex justify-center pb-2">
            Write a review of your Experience😋
          </DialogTitle>
          <DialogDescription className="w-full">
            <textarea
              rows={10}
              className="border-[1px] border-gray-400 rounded-md p-2 w-full focus:outline-none text-black"
              value={reviewText}
              onChange={handleReviewChange}
            ></textarea>
          </DialogDescription>
        </DialogHeader>
        <Button
          variant="outline"
          className="flex items-center gap-x-[0.125rem] cursor-pointer hover:shadow my-4"
          onClick={handleReviewSubmit}
        >
          <span>Submit Review</span>
          {loading && <span>...</span>}
          <ChevronRight className="stroke-slate-700" />
        </Button>
        {isError && <span className="text-red-500 text-center">{isError}</span>}
      </DialogContent>
    </Dialog>
  );
};

export default ReviewPopup;
