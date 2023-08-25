import { HTMLAttributes } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <ChevronLeft
          color="#2d2e2f"
          strokeWidth={2}
          size={26}
          onClick={slideLeft}
          className="absolute top-1/2 left-4 -translate-y-2/4 bg-white border-[1px] border-custom_primary_100 rounded-full hover:drop-shadow-lg hover:scale-105 hover:duration-150 "
        />
      ) : null}

      {navigation == "right" && showRight ? (
        <ChevronRight
          color="#2d2e2f"
          strokeWidth={2}
          size={26}
          onClick={slideRight}
          className="absolute top-1/2 right-4 -translate-y-2/4 bg-white border-[1px] border-custom_primary_100 rounded-full hover:drop-shadow-lg hover:scale-105 hover:duration-150 "
        />
      ) : null}
    </div>
  );
};

export default Slider;
