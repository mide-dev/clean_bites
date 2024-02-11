
export type HygieneProp = "Awaiting Inspection" | {
    ratingText: string;
    fill: string;
    bg: string;
    hygieneScore: number;
}

function formatHygieneScore(hygieneRating: number) {
  if (hygieneRating === 0) {
    return {
      text: "Very Poor",
      fill: "fill-red-500",
      bg: "bg-hygiene_poor",
      hygienePercent: 0,
    };
  } else if (hygieneRating === 1) {
    return {
      text: "Very Poor",
      fill: "fill-hygiene_poor",
      bg: "bg-hygiene_poor",
      hygienePercent: 20,
    };
  } else if (hygieneRating === 2) {
    return { text: "Poor", fill: "fill-hygiene_poor",
    bg: "bg-hygiene_poor", hygienePercent: 40 };
  } else if (hygieneRating === 3) {
    return {
      text: "Satisfactory",
      fill: "fill-hygiene_average",
      bg: "bg-hygiene_average",
      hygienePercent: 60,
    };
  } else if (hygieneRating === 4) {
    return {
      text: "Good",
      fill: "fill-hygiene_excellent",
      bg: "bg-hygiene_excellent",
      hygienePercent: 80,
    };
  } else if (hygieneRating === 5) {
    return {
      text: "Excellent",
      hygienePercent: 100,
      fill: "fill-hygiene_excellent",
      bg: "bg-hygiene_excellent",
    };
  } else {
    return "Awaiting Inspection";
  }
}

export function useHygieneCheck(placeHygieneRating: number): HygieneProp {

  const result = formatHygieneScore(placeHygieneRating);

  if (result === "Awaiting Inspection") {
    return 'Awaiting Inspection'
  }

  return {
    ratingText: result.text,
    fill: result.fill,
    bg: result.bg,
    hygieneScore: result.hygienePercent,
  };

}

