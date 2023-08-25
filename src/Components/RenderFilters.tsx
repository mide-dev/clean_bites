import { filterList } from "@/constants/filterItems";

type RenderFiltersProp = {
  handleItemClick: (item: object) => void;
};

function RenderFilters({ handleItemClick }: RenderFiltersProp) {
  return (
    <>
      {filterList.map((item) => (
        <li
          key={item.id}
          className="inline-block cursor-pointer"
          onClick={() => {
            handleItemClick(item);
          }}
        >
          <item.icon color="#5b5b5b" strokeWidth={1.5} size={24} />
          {item.item}
        </li>
      ))}
    </>
  );
}

export default RenderFilters;
