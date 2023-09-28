import { useState, HTMLAttributes, useEffect, useRef } from "react";
import ScrollBtnDisplay from "./ScrollBtnDisplay";
import Favorite from "./Favorite";

type PlaceImageProp = HTMLAttributes<HTMLImageElement> & {
  images: { image: string }[];
};

function PlaceImage({ images, ...props }: PlaceImageProp) {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const handlePrevClick = () => {
  //   if (currentImageIndex > 0) {
  //     setCurrentImageIndex(currentImageIndex - 1);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (currentImageIndex < images.length - 1) {
  //     setCurrentImageIndex(currentImageIndex + 1);
  //   }
  // };

  // set current image
  // const photo = images[currentImageIndex].image;
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const itemsRef = useRef<HTMLDivElement | null>(null);

  // listen for scroll event to determine scroll btn display
  useEffect(() => {
    const handleScroll = () => {
      if (itemsRef.current) {
        const currentScrollLeft = itemsRef.current.scrollLeft;
        const currentScrollWidth =
          itemsRef.current.scrollWidth - itemsRef.current.clientWidth;

        // Check if content exceeds the container's width and set true/false
        setShowLeftButton(currentScrollLeft > 0);
        setShowRightButton(currentScrollLeft < currentScrollWidth);
      }
    };

    // Attach the scroll event listener
    if (itemsRef.current) {
      itemsRef.current.addEventListener("scroll", handleScroll);
    }

    // Initial check
    handleScroll();

    // Cleanup when the component unmounts
    return () => {
      if (itemsRef.current) {
        itemsRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // define left scroll func
  const scrollLeft = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollLeft = itemsRef.current.scrollLeft - 500;
    }
  };

  // define right scoll function
  const scrollRight = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollLeft = itemsRef.current.scrollLeft + 500;
    }
  };

  // display how many images are present
  // const totalImageIndicator = (imageArray: object[]) => {
  //   const totalImageArray = [];
  //   // save image length in totalImageArray
  //   for (let i = 0; i < imageArray.length; i++) {
  //     totalImageArray.push(i);
  //   }
  //   // if image len greater than 1, display total image indicator
  //   return (
  //     totalImageArray.length > 1 &&
  //     totalImageArray.map((imageNo) => (
  //       <div
  //         key={imageNo}
  //         className={`rounded-full  h-1.5 w-1.5 ${
  //           imageNo === currentImageIndex ? "bg-white" : "bg-gray-300"
  //         }`}
  //       ></div>
  //     ))
  //   );
  // };

  const renderSlider = images.map((img) => (
    <button
      key={images.indexOf(img)}
      className="w-2 h-2 rounded-full bg-white opacity-75 transition-opacity ease-in-out 
        duration-200 hover:opacity-100"
      // onClick={}
    ></button>
  ));

  const renderImages = images.map((img) => (
    <img key={images.indexOf(img)} id="slide-2" src={img.image} />
  ));

  return (
    <div className="relative">
      <div className="slider-wrapper relative mx-auto">
        <div className="slider no-scrollbar md:rounded-xl" ref={itemsRef}>
          {renderImages}
        </div>
        <ScrollBtnDisplay
          navigation="left"
          handleLeftClick={scrollLeft}
          renderLeftBtn={showLeftButton}
          className="hidden sm:inline-block xs:left-8 md:left-[2.5rem] 2xl:left-20 
        border-[1px] border-custom_primary_100"
        />
        <div className="slider-nav flex gap-x-2 absolute bottom-[1.25rem] left-2/4 -translate-x-2/4 z-10">
          {renderSlider}
        </div>
        <ScrollBtnDisplay
          navigation="right"
          handleRightClick={scrollRight}
          renderRightBtn={showRightButton}
          className="hidden sm:inline-block xs:right-8 md:right-[2.5rem] 2xl:right-20 
        border-[1px] border-custom_primary_100"
        />
      </div>

      {/* <ScrollBtnDisplay
        navigation="left"
        handleLeftClick={handlePrevClick}
        renderLeftBtn={currentImageIndex > 0}
        className="imageBtnScroll left-4 opacity-90"
      />
      <img {...props} src={photo} />
      <div className="flex items-center gap-x-2 centered-element">
        {totalImageIndicator(images)}
      </div>

      <ScrollBtnDisplay
        navigation="right"
        handleRightClick={handleNextClick}
        renderRightBtn={currentImageIndex < images.length - 1}
        className="imageBtnScroll right-4 opacity-90 "
      /> */}
    </div>
  );
}

export default PlaceImage;
