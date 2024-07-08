import { useState, useEffect, useRef, HTMLAttributes } from "react";
import BlurFilter from "./BlurFilter";
import RenderFilters, { FilterItem } from "./RenderFilters";
import ScrollBtn from "./ScrollBtn";

const SCROLL_SPEED = 500;
const BUTTON_STYLES = "border-[1px] border-gray-200";
const DISPLAY_STYLE = "hidden md:block";

type ListScrollProps = HTMLAttributes<HTMLDivElement> & {
  items: FilterItem[];
};

function ListScroll({ items }: ListScrollProps) {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const itemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (itemsRef.current) {
        const currentScrollLeft = itemsRef.current.scrollLeft;
        const currentScrollWidth =
          itemsRef.current.scrollWidth - itemsRef.current.clientWidth;

        setShowLeftButton(currentScrollLeft > 0);
        setShowRightButton(currentScrollLeft < currentScrollWidth);
      }
    };

    if (itemsRef.current) {
      itemsRef.current.addEventListener("scroll", handleScroll);
    }

    handleScroll();

    return () => {
      if (itemsRef.current) {
        itemsRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollLeft = itemsRef.current.scrollLeft - SCROLL_SPEED;
    }
  };

  const scrollRight = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollLeft = itemsRef.current.scrollLeft + SCROLL_SPEED;
    }
  };

  return (
    <div
      className={`relative flex sm:container items-center md:py-2
        border-b md:border-0 shadow-md md:shadow-none `}
    >
      <div
        className={`no-scrollbar flex gap-x-6 sm:gap-x-10 w-full h-[70px] items-center
            overflow-x-scroll scroll-smooth `}
        ref={itemsRef}
      >
        <RenderFilters list={items} />
      </div>
      <BlurFilter
        showLeftBlur={showLeftButton}
        className={`${DISPLAY_STYLE} xs:left-2 md:left-4 2xl:left-16`}
      />

      <>
        <ScrollBtn
          navigation="left"
          handleLeftClick={scrollLeft}
          visible={showLeftButton}
          className={`${DISPLAY_STYLE} ${BUTTON_STYLES} xs:left-8 md:left-[2.5rem] 2xl:left-20`}
        />
        <BlurFilter
          showRightBlur={showRightButton}
          className={`${DISPLAY_STYLE} xs:right-2 md:right-4 2xl:right-14`}
        />
        <ScrollBtn
          navigation="right"
          handleRightClick={scrollRight}
          visible={showRightButton}
          className={`${DISPLAY_STYLE} ${BUTTON_STYLES} xs:right-8 md:right-[2.5rem] 2xl:right-20`}
        />
      </>
    </div>
  );
}

export default ListScroll;
