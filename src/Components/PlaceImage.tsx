import { useState, HTMLAttributes } from "react";
import ScrollBtnDisplay from "./ScrollBtnDisplay";
import Favorite from "./Favorite";

type PlaceImageProp = HTMLAttributes<HTMLImageElement> & {
  images: { image: string }[];
};

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    // thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    // thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    // thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class PlaceImage extends React.Component {
  render() {
    return <ImageGallery items={images} 
              showFullscreenButton={false} 
              showPlayButton={false} 
              showBullets={true} 
              showIndex={true}
              disableKeyDown={true}/>;
  }
}
export default PlaceImage

// function PlaceImage({ images, ...props }: PlaceImageProp) {
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

  // // set current image
  // const photo = images[currentImageIndex].image;

  // // display how many images are present
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

  // return (
  //   <div className="relative">
  //     <ScrollBtnDisplay
  //       navigation="left"
  //       handleLeftClick={handlePrevClick}
  //       renderLeftBtn={currentImageIndex > 0}
  //       className="imageBtnScroll left-4 opacity-90"
  //     />
  //     <img {...props} src={photo} />
  //     <div className="flex items-center gap-x-2 centered-element">
  //       {totalImageIndicator(images)}
  //     </div>
      
  //     <ScrollBtnDisplay
  //       navigation="right"
  //       handleRightClick={handleNextClick}
  //       renderRightBtn={currentImageIndex < images.length - 1}
  //       className="imageBtnScroll right-4 opacity-90 "
  //     />
  //   </div>
  // );
// }

// export default PlaceImage;
