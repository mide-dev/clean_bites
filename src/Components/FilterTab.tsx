import { useRef, useState, useEffect } from "react";
import { filterList } from "../constants/filterItems";
import Slider from "./Slider";
import BlurredFilter from "./BlurredFilter";

function FilterTab() {
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
  const handleItemClick = (item: object) => {
    console.log(item);
  };

  // map and render filters on screen
  const list = filterList.map((item) => (
    <li
      key={item.id}
      className="inline-block"
      onClick={() => {
        handleItemClick(item);
      }}
    >
      <span>{item.icon}</span>
      {item.item}
    </li>
  ));

  return (
    <div className="relative flex container border-2 border-red-400 items-center">
      <BlurredFilter showLeftFilter={showLeftButton} />
      <Slider
        navigation="left"
        slideLeft={scrollLeft}
        className="hidden sm:inline-block "
        showLeft={showLeftButton}
      />
      <ul
        className="no-scrollbar flex gap-x-6 w-full h-[70px] items-center overflow-x-scroll scroll-smooth"
        ref={itemsRef}
      >
        {list}
      </ul>
      <BlurredFilter showRightFilter={showRightButton} />
      <Slider
        navigation="right"
        slideRight={scrollRight}
        className="hidden sm:inline-block z-10"
        showRight={showRightButton}
      />
    </div>
  );
}

export default FilterTab;
