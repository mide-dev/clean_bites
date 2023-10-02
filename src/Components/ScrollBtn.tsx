import { ChevronLeft, ChevronRight } from "lucide-react";

type SliderProps = {
  navigation: "left" | "right";
  visible: boolean;
  handleLeftClick?: () => void;
  handleRightClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

const ScrollBtn = ({
  navigation,
  handleLeftClick,
  handleRightClick,
  visible,
  className,
  ...rest
}: SliderProps) => {
  // Return null when the button should not be visible
  if (!visible) {
    return null;
  }

  return (
    <button
      className={`cursor-pointer absolute top-1/2 transform -translate-y-2/4 ${
        navigation === "left" ? "left-3" : "right-3"
      } bg-white p-[0.2rem] rounded-full hover:drop-shadow-lg hover:scale-105 hover:duration-150 ${className}`}
      onClick={navigation === "left" ? handleLeftClick : handleRightClick}
      {...rest}
    >
      {navigation === "left" ? (
        <ChevronLeft color="#2d2e2f" strokeWidth={2} size={23} />
      ) : (
        <ChevronRight color="#2d2e2f" strokeWidth={2} size={23} />
      )}
    </button>
  );
};

export default ScrollBtn;
