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
  if (navigation == "left" && renderLeftBtn) {
    return (
      <div
        className={`cursor-pointer absolute top-1/2 -translate-y-2/4 left-0  bg-white rounded-full 
        hover:drop-shadow-lg hover:scale-105 hover:duration-150 ${className} `}
        {...rest}
      >
        <ChevronLeft
          color="#2d2e2f"
          strokeWidth={2}
          size={26}
          onClick={handleLeftClick}
        />
      </div>
    );
  }

  if (navigation == "right" && renderRightBtn) {
    return (
      <div
        className={`cursor-pointer absolute top-1/2 -translate-y-2/4 right-0 bg-white rounded-full
         hover:drop-shadow-lg hover:scale-105 hover:duration-150 ${className} `}
        {...rest}
      >
        <ChevronRight
          color="#2d2e2f"
          strokeWidth={2}
          size={26}
          onClick={handleRightClick}
        />
      </div>
    );
  }
};

export default ScrollBtnDisplay;
