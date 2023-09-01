import { useRef, useState, useEffect, HTMLAttributes } from "react";
import RenderFilters from "./RenderFilters";
import ScrollBtnDisplay from "./ScrollBtnDisplay";
import BlurFilter from "./BlurFilter";

function FilterTab({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const itemsRef = useRef<HTMLUListElement | null>(null);

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

  // handle clicks on filtered items
  const filterClick = (item: object) => {
    console.log(item);
  };

  return (
    <div
      className={`${className} relative bg-white flex sm:container items-center pb-2 md:pb-0 md:h-[100px] 
      border-b md:border-0 shadow-md md:shadow-none `}
      {...props}
    >
      <BlurFilter showLeftBlur={showLeftButton} />
      <ScrollBtnDisplay
        navigation="left"
        handleLeftClick={scrollLeft}
        renderLeftBtn={showLeftButton}
        className="hidden sm:inline-block left-8 border-[1px] border-custom_primary_100"
      />
      <ul
        className="no-scrollbar flex gap-x-6 sm:gap-x-10 w-full h-[70px] items-center  
          overflow-x-scroll scroll-smooth "
        ref={itemsRef}
      >
        <RenderFilters handleItemClick={filterClick} />
      </ul>
      <BlurFilter showRightBlur={showRightButton} />
      <ScrollBtnDisplay
        navigation="right"
        handleRightClick={scrollRight}
        renderRightBtn={showRightButton}
        className="hidden sm:inline-block right-8 border-[1px] border-custom_primary_100"
      />
    </div>
  );
}

export default FilterTab;
