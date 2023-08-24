import { HTMLAttributes } from "react";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

type SliderProps = HTMLAttributes<HTMLDivElement> & {
  navigation: "left" | "right";
  slideLeft?: () => void;
  slideRight?: () => void;
};

const Slider = ({
  navigation,
  slideLeft,
  slideRight,
  ...rest
}: SliderProps) => {
  // throw error if correct nagivation function is not provided
  if (
    (navigation === "left" && !slideLeft) ||
    (navigation === "right" && !slideRight)
  ) {
    throw new Error(
      `Slider: Missing slide${navigation} function for navigation: ${navigation}`
    );
  }
  return (
    <div {...rest}>
      {navigation == "left" && slideLeft ? (
        <ChevronLeftCircle
          color="#2d2e2f"
          strokeWidth={1}
          onClick={slideLeft}
        />
      ) : null}

      {navigation == "right" && slideRight ? (
        <ChevronRightCircle
          color="#2d2e2f"
          strokeWidth={1}
          onClick={slideRight}
        />
      ) : null}
    </div>
  );
};

export default Slider;
