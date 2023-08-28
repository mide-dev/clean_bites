import { HTMLAttributes } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type conditionProps =
  | {
      navigation: "left";
      handleLeftClick?: () => void;
      renderLeftBtn?: boolean;
      handleRightClick?: never;
      renderRightBtn?: never;
    }
  | {
      navigation: "right";
      handleRightClick?: () => void;
      renderRightBtn?: boolean;
      handleLeftClick?: never;
      renderLeftBtn?: never;
    };

type SliderProps = HTMLAttributes<HTMLDivElement> & conditionProps;

const ScrollBtnDisplay = ({
  navigation,
  handleLeftClick,
  handleRightClick,
  renderLeftBtn,
  renderRightBtn,
  className,
  ...rest
}: SliderProps) => {
  return (
    <div className={`cursor-pointer ${className}`} {...rest}>
      {navigation == "left" && renderLeftBtn ? (
        <ChevronLeft
          color="#2d2e2f"
          strokeWidth={2}
          size={26}
          onClick={handleLeftClick}
          className="absolute top-1/2 left-8 -translate-y-2/4 bg-white border-[1px] border-custom_primary_100 rounded-full hover:drop-shadow-lg hover:scale-105 hover:duration-150 "
        />
      ) : null}

      {navigation == "right" && renderRightBtn ? (
        <ChevronRight
          color="#2d2e2f"
          strokeWidth={2}
          size={26}
          onClick={handleRightClick}
          className="absolute top-1/2 right-8 -translate-y-2/4 bg-white border-[1px] border-custom_primary_100 rounded-full hover:drop-shadow-lg hover:scale-105 hover:duration-150 "
        />
      ) : null}
    </div>
  );
};

export default ScrollBtnDisplay;
