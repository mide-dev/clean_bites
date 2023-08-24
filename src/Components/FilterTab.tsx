import { useRef } from "react";
import { filterList } from "../constants/filterItems";
// import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import Slider from "./Slider";

function FilterTab() {
  const itemsRef = useRef<HTMLUListElement | null>(null);

  const scrollLeft = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollLeft = itemsRef.current.scrollLeft - 500;
    }
  };

  const scrollRight = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollLeft = itemsRef.current.scrollLeft + 500;
    }
  };

  const handleItemClick = (item: object) => {
    console.log(item);
  };

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
    <div className="flex container border-2 border-red-400 items-center">
      <Slider navigation="left" slideLeft={scrollLeft} />
      <ul
        className="flex gap-x-6 w-full h-[70px] items-center overflow-x-auto scroll-smooth"
        ref={itemsRef}
      >
        {list}
      </ul>
      <Slider navigation="right" slideRight={scrollRight} />
    </div>
  );
}

export default FilterTab;
