import { HTMLAttributes } from "react";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

type SliderProps = HTMLAttributes<HTMLDivElement> & {
  navigation: "left" | "right";
  slideLeft?: () => void;
  slideRight?: () => void;
  showLeft?: boolean;
  showRight?: boolean;
};

const Slider = ({
  navigation,
  slideLeft,
  slideRight,
  showLeft,
  showRight,
  className,
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
    <div className={` cursor-pointer ${className}`} {...rest}>
      {navigation == "left" && showLeft ? (
        <ChevronLeftCircle
          color="#2d2e2f"
          strokeWidth={1}
          onClick={slideLeft}
          className="absolute top-1/2 left-4 -translate-y-2/4"
        />
      ) : null}

      {navigation == "right" && showRight ? (
        <ChevronRightCircle
          color="#2d2e2f"
          strokeWidth={1}
          onClick={slideRight}
          className="absolute top-1/2 right-4 -translate-y-2/4"
        />
      ) : null}
    </div>
  );
};

export default Slider;
