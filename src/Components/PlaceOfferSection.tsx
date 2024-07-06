import Map from "@/Components/Map/Map";
import PlaceOffers from "@/Components/PlaceOffers";
import Divider from "@/Components/Divider";
import { Offers } from "@/constants/types";

const PlaceOfferSection = ({ data }: Offers) => {
  return (
    <>
      {/* PLACE OFFERS */}
      <section className="place_detail_section">
        <h2 className="place-detail-spacer">What this place offers</h2>
        <PlaceOffers data={data.google_enriched_data.place_offers} />
        <Divider axis="horizontal" className="bg-slate-300" />
      </section>
      {/* Place Map */}
      <section className="place_detail_section">
        <div className="mb-2">
          <h2 className="place-detail-spacer">Where you're going</h2>
        </div>
        <Map
          latitude={data.latitude}
          longitude={data.longitude}
          title={data.business_name}
          className="mx-auto w-full h-[220px] sm:h-[300px] md:h-[450px]"
        />
        <Divider axis="horizontal" className="bg-slate-300" />
      </section>
    </>
  );
};

export default PlaceOfferSection;
