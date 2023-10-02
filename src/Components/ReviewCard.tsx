import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import profileImage from "../assets/profileImage.png";
import Rating from "react-rating";
import Star from "@/assets/Star";

// type ReviewCardProp = {object[]};

function ReviewCard({ data }) {
  return (
    <Card className="p-3 md:border-none">
      <div className="flex gap-x-2 items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src={data.profile_photo_url} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium pb-1">{data.author_name}</h4>
          <p>{data.relative_time_description}</p>
        </div>
      </div>
      <Rating
        emptySymbol={<Star className="w-5 stroke-black inline-block" />}
        fullSymbol={<Star className="w-5 fill-black inline-block" />}
        initialRating={data.rating}
        fractions={10}
        readonly
      />
      <p className="min-w-[250px] xs:min-w-[300px]">{data.text}</p>
    </Card>
  );
}

export default ReviewCard;
