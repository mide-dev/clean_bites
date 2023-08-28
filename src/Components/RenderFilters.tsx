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
            cursor-pointer text-[12px] text-[#717171] font-poppins hover:text-black 
            stroke-custom_primary_400 first:pl-4 sm:first:pl-0 last:pr-4 
            sm:last:pr-0"
          onClick={() => {
            handleItemClick(item);
          }}
        >
          <item.icon strokeWidth={1.5} size={24} className="" />
          {item.item}
        </li>
      ))}
    </>
  );
}

export default RenderFilters;
