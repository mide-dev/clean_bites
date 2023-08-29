import FilterTab from "@/Components/FilterTab";
import Places from "@/Components/Places";

function Restaurants() {
  return (
    <div>
      <FilterTab />
      <div className="container">
        <Places />
      </div>
    </div>
  );
}

export default Restaurants;
