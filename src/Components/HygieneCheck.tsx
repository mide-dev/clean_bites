import { HTMLAttributes } from "react";
import HygieneIcon from "@/assets/hygieneIcon";

type Hygiene = {
  placeHygieneRating: number | string;
};

type HygieneProp = Hygiene & HTMLAttributes<HTMLDivElement>;

// change method when real data comes
function formatHygieneScore(hygieneRating: number | string) {
  if (hygieneRating === 1) {
    return {
      text: "Very Poor",
      color: "fill-hygiene_poor",
      hygienePercent: "20%",
    };
  } else if (hygieneRating === 2) {
    return { text: "Poor", color: "fill-hygiene_poor", hygienePercent: "40%" };
  } else if (hygieneRating === 3) {
    return {
      text: "Average",
      color: "fill-hygiene_average",
      hygienePercent: "60%",
    };
  } else if (hygieneRating === 4) {
    return {
      text: "Good",
      color: "fill-hygiene_excellent",
      hygienePercent: "80%",
    };
  } else if (hygieneRating === 5) {
    return {
      text: "Excellent",
      color: "fill-hygiene_excellent",
      hygienePercent: "100%",
    };
  } else {
    return "Awaiting Inspection";
  }
}

function HygieneCheck({
  placeHygieneRating,
  className,
  ...props
}: HygieneProp) {
  const result = formatHygieneScore(placeHygieneRating);

  return typeof result === "string" && result === "Awaiting Inspection" ? (
    <div
      className={`flex pt-2 items-center gap-x-2 pb-2 ${className}`}
      {...props}
    >
      <p className="block font-medium">Awaiting Inspection</p>
    </div>
  ) : (
    <div
      className={`flex pt-2 items-center gap-x-2 pb-2 ${className}`}
      {...props}
    >
      <HygieneIcon className={`${result.color}`} />
      <p className="inline-block pr-[0.4rem] font-medium">
        {result.text} hygiene <span className="px-[0.2rem]">&#8226;</span>
        {result.hygienePercent}
      </p>
    </div>
  );
}

export default HygieneCheck;
