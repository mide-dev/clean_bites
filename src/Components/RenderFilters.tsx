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
          className="flex flex-col justify-center items-center whitespace-nowrap gap-y-2 
            cursor-pointer text-[12px] text-[#717171] hover:"
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
