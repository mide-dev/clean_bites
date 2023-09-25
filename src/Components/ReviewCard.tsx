import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import profileImage from "../assets/profileImage.png";
import Rating from "react-rating";
import Star from "@/assets/Star";

// type ReviewCardProp = {object[]};

function ReviewCard({ data }) {
  return (
    <Card className="p-3 md:border-none">
      <div className="flex gap-x-2 items-center ">
        <Avatar className="w-16 h-16">
          <AvatarImage src={profileImage} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium pb-1">Ayomide Chubby</h4>
          <p>July 2021</p>
        </div>
      </div>
      <Rating
        emptySymbol={<Star className="w-5 stroke-black inline-block" />}
        fullSymbol={<Star className="w-5 fill-black inline-block" />}
        initialRating={2.8}
        fractions={10}
        readonly
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        ducimus rerum enim voluptatibus eveniet officiis facilis excepturi,
        saepe vel odio maxime pariatur perferendis impedit perspiciatis, dolorum
        iure nobis facere magnam?
      </p>
    </Card>
  );
}

export default ReviewCard;
