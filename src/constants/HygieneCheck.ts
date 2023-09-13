
export type HygieneProp = "Awaiting Inspection" | {
    ratingText: string;
    color: string;
    hygieneScore: number;
}

// change method when real data comes
function formatHygieneScore(hygieneRating: number | string) {
  if (hygieneRating === 1) {
    return {
      text: "Very Poor",
      color: "fill-hygiene_poor",
      hygienePercent: 20,
    };
  } else if (hygieneRating === 2) {
    return { text: "Poor", color: "fill-hygiene_poor", hygienePercent: 40 };
  } else if (hygieneRating === 3) {
    return {
      text: "Average",
      color: "fill-hygiene_average",
      hygienePercent: 60,
    };
  } else if (hygieneRating === 4) {
    return {
      text: "Good",
      color: "fill-hygiene_excellent",
      hygienePercent: 80,
    };
  } else if (hygieneRating === 5) {
    return {
      text: "Excellent",
      color: "fill-hygiene_excellent",
      hygienePercent: 100,
    };
  } else {
    return "Awaiting Inspection";
  }
}

export function useHygieneCheck(placeHygieneRating: string | number): HygieneProp {

  const result = formatHygieneScore(placeHygieneRating);

  if (result === 'Awaiting Inspection') {
    return 'Awaiting Inspection'
  }

  return {
    ratingText: result.text,
    color: result.color,
    hygieneScore: result.hygienePercent,
  };

}

