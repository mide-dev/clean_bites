import PlaceRecommendation from "../Components/PlaceRecommendation";

const PlaceDetailRecommendation = ({data}) => {
  return (
    <div className="place_detail_section bg-[#FFFBFC] md:bg-white rounded-xl text-base">
      <h3>
        Places similar to{" "}
        <span className="font-medium">{data.business_name}</span>
      </h3>
      <div className="rounded-xl overflow-scroll no-scrollbar scroll-smooth">
        <PlaceRecommendation
          place_id={data.place_id}
          key={data.place_id}
          className="flex gap-x-4 overflow-scroll no-scrollbar scroll-smooth"
        />
      </div>
    </div>
  );
};

export default PlaceDetailRecommendation;
