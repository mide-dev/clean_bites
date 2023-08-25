import { filterList } from "@/constants/filterItems";

type RenderFiltersProp = {
  handleItemClick?: () => void;
};

function RenderFilters({ handleItemClick }: RenderFiltersProp) {
  return (
    <>
      {filterList.map((item) => (
        <li
          key={item.id}
          className="inline-block "
          onClick={() => {
            handleItemClick();
          }}
        >
          <span>{item.icon}</span>
          {item.item}
        </li>
      ))}
    </>
  );
}

export default RenderFilters;
