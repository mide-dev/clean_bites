import { HTMLAttributes } from "react";
import Heart from "../assets/Heart";

function Favorite({className}: HTMLAttributes<HTMLDivElement>) {
  return <Heart className={`fill-gray-500 stroke-white opacity-85 ${className}`} />;
}

export default Favorite;
