import { HTMLAttributes } from "react";
import ListScroll from "./ListScroll";
import { filterList } from "@/constants/filterItems";

function FilterTab({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <ListScroll {...props} items={filterList} />;
}

export default FilterTab;
