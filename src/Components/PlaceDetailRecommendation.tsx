import PlaceRecommendation from "../Components/PlaceRecommendation";
import Divider from "./Divider";

const PlaceDetailRecommendation = () => {
  return (
    <div className="place_detail_section bg-[#FFFBFC] md:bg-white rounded-xl text-base">
      <h3>More places with excellent hygiene</h3>
      <Divider axis="horizontal" />
      <div className="rounded-xl overflow-scroll no-scrollbar scroll-smooth">
        <PlaceRecommendation />
      </div>
    </div>
  );
};

export default PlaceDetailRecommendation;
