import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { deleteOrEditReview } from "@/constants/api";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/Components/ui/dialog";

interface DeleteReviewProps {
  reviewId: string;
  accessToken?: string;
}

function DeleteReview({ reviewId, accessToken }: DeleteReviewProps) {
  const [error, setError] = useState<string>("");

  const deleteReview = async () => {
    try {
      setError("");
      await deleteOrEditReview(reviewId, "", "delete", accessToken);
      window.location.reload();
    } catch (error: any) {
      setError(error.message || "An error occurred");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-500 text-white hover:shadow-md hover:bg-red-500">
          Delete Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Review</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this review?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            className="cursor-pointer"
            onClick={deleteReview}
          >
            Yes, Delete it
          </Button>
        </DialogFooter>
      </DialogContent>
      {error && <p className="text-red-500">{error}</p>}
    </Dialog>
  );
}

export default DeleteReview;
