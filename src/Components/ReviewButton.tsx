import { Button } from "@/Components/ui/button";
import write from "../assets/write.png";


const ReviewButton = () => {
  return (
    <div
      className="flex items-center justify-center gap-x-[0.125rem] 
      cursor-pointer hover:shadow w-full my-4 py-4 border-[1px] rounded-md border-gray-500"
    >
      <img src={write} className="pb-1" />
      <span>Review this Place</span>
    </div>
  );
};

export default ReviewButton;
