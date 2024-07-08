import { ReactNode, createContext, useContext, useState } from "react";
import { filterList } from "./constants/filterItems";
import { FilterItem } from "./Components/RenderFilters";

interface FilterContextType {
  selectedItem: FilterItem;
  onItemClicked: (item: FilterItem) => void;
}

const FilterContext = createContext<FilterContextType | null>(null);

export const useFilterContext = () => useContext<any>(FilterContext);

interface FilterContextProviderProps {
  children: ReactNode;
}

export const FilterContextProvider = ({
  children,
}: FilterContextProviderProps) => {
  const [selectedItem, setSelectedItem] = useState<any>(filterList[0].item);

  const handleItemClick = (item: FilterItem) => {
    setSelectedItem(item);
  };

  return (
    <FilterContext.Provider
      value={{ selectedItem, onItemClicked: handleItemClick }}
    >
      {children}
    </FilterContext.Provider>
  );
};
