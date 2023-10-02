import { useState, HTMLAttributes } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// navigate next item
function NextArrow(props) {
  const { onClick, leftArrowStyle } = props;
  return (
    <button
      className={`p-1 bg-white flex items-center justify-center btnScroll
        rounded-full absolute z-10 right-3 top-1/2 -translate-y-2/4 opacity-75
        transition-opacity ease-in-out duration-200 hover:opacity-100 ${leftArrowStyle}`}
      onClick={onClick}
    >
      <ChevronRight size={24} color="black" />
    </button>
  );
}

// navigate previous item
function PrevArrow(props) {
  const { rightArrowStyle, onClick } = props;
  return (
    <button
      className={`p-1 bg-white flex items-center justify-center btnScroll
        rounded-full absolute z-10 left-3 top-1/2 -translate-y-2/4 opacity-75 
        transition-opacity ease-in-out duration-200 hover:opacity-100 ${rightArrowStyle}`}
      onClick={onClick}
    >
      <ChevronLeft size={24} color="black" />
    </button>
  );
}

type ImageScrollProps = HTMLAttributes<HTMLDivElement> & {
  images: { image: string }[];
  leftScrollCss?: string;
  rightScrollCss?: string;
  scrollSpeed: number;
  displayScrollBtn: boolean;
};

function ImageSlider({
  images,
  scrollSpeed,
  displayScrollBtn,
  className,
}: ImageScrollProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // react slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: scrollSpeed,
    slidesToShow: 1,
    arrows: { displayScrollBtn },
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => {
      // Calculate the opacity for each dot based on whether it's the active slide
      const opacity = currentSlide === i ? 1 : 0.5;

      return (
        <div
          className={`h-2 w-2 bg-white rounded-full absolute bottom-8`}
          style={{ opacity }}
        ></div>
      );
    },
    afterChange: (index) => {
      // Update the current slide index when the slide changes
      setCurrentSlide(index);
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  // render image
  const renderImages = (imgArr) => {
    return imgArr.map((img) => (
      <div key={img.image} className="focus:outline-none">
        <img src={img.image} className={`${className} object-cover`} />
      </div>
    ));
  };

  return <Slider {...settings}>{renderImages(images || [])}</Slider>;
}

export default ImageSlider;
