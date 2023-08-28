import FilterTab from "@/Components/FilterTab";
import PlacesCard from "@/Components/PlacesCard";

function Restaurants() {
  return (
    <div>
      <FilterTab />
      <div className="container">
        <PlacesCard />
      </div>
    </div>
  );
}

export default Restaurants;
