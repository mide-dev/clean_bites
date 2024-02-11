import { Button } from "@/Components/ui/button";
import Rating from "react-rating";
import ReviewButton from "../Components/ReviewButton";
import Star from "@/assets/Star";
import { ChevronRight } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

const ReviewPopup = ({place_id, business_name}) => {
  return (
    <Dialog>
          <DialogTrigger className="w-full">
            <ReviewButton />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="my-8">
              <DialogTitle className="font-medium flex justify-center">
                How would you rate
                <span className="text-custom_accent px-2">
                  {business_name}
                </span>
                ?
              </DialogTitle>
              <DialogDescription className="w-full flex justify-center pt-2">
                <Rating
                  emptySymbol={
                    <Star className="w-6 md:w-8 mx-2 stroke-black inline-block" />
                  }
                  fullSymbol={
                    <Star className="w-6 md:w-8 mx-2 fill-custom_accent inline-block" />
                  }
                  initialRating={0}
                  fractions={2}
                />
              </DialogDescription>
            </DialogHeader>
            <DialogHeader>
              <DialogTitle className="font-medium flex justify-center pb-2">
                Write a review of your Experience😋
              </DialogTitle>
              <DialogDescription className="w-full">
                <textarea
                  rows="10"
                  className="border-[1px] border-gray-400 rounded-md p-2 w-full focus:outline-none text-black"
                ></textarea>
              </DialogDescription>
            </DialogHeader>
            <Button
              variant="outline"
              className="flex items-center gap-x-[0.125rem] cursor-pointer hover:shadow my-4"
            >
              <span>Submit Review</span>
              <ChevronRight className="stroke-slate-700" />
            </Button>
          </DialogContent>
        </Dialog>
  )
}

export default ReviewPopup