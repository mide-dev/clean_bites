import { createContext, useContext, useState } from 'react';
import { filterList } from './constants/filterItems';

const FilterContext = createContext(null);

export const useFilterContext = () => useContext(FilterContext);

export const FilterContextProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(filterList[0].item);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <FilterContext.Provider value={{ selectedItem, onItemClicked: handleItemClick }}>
      {children}
    </FilterContext.Provider>
  );
};
