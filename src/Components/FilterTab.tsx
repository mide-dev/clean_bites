import { useRef, useState, useEffect, HTMLAttributes } from "react";
import RenderFilters from "./RenderFilters";
import ListScroll from "./ListScroll";
import { filterList } from "@/constants/filterItems";

function FilterTab({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <ListScroll {...props} items={filterList} />;
}

export default FilterTab;
