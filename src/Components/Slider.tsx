import { HTMLAttributes } from "react";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

type conditionProps =
  | {
      navigation: "left";
      slideLeft?: () => void;
      showLeft?: boolean;
      slideRight?: never;
      showRight?: never;
    }
  | {
      navigation: "right";
      slideRight?: () => void;
      showRight?: boolean;
      slideLeft?: never;
      showLeft?: never;
    };

type SliderProps = HTMLAttributes<HTMLDivElement> & conditionProps;

const Slider = ({
  navigation,
  slideLeft,
  slideRight,
  showLeft,
  showRight,
  className,
  ...rest
}: SliderProps) => {
  return (
    <div className={`cursor-pointer ${className}`} {...rest}>
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
