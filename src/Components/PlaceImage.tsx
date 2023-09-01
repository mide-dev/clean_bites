import { useState, HTMLAttributes } from "react";
import ScrollBtnDisplay from "./ScrollBtnDisplay";

type PlaceImageProp = HTMLAttributes<HTMLImageElement> & {
  images: { image: string }[];
};

function PlaceImage({ images, ...props }: PlaceImageProp) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const photo = images[currentImageIndex].image;
  return (
    <div className="relative">
      <ScrollBtnDisplay
        navigation="left"
        handleLeftClick={handlePrevClick}
        renderLeftBtn={currentImageIndex > 0}
        className="left-4"
      />
      <img {...props} src={photo} />
      <ScrollBtnDisplay
        navigation="right"
        handleRightClick={handleNextClick}
        renderRightBtn={currentImageIndex < images.length - 1}
        className="right-4"
      />
    </div>
  );
}

export default PlaceImage;
