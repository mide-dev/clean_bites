import { CheckCircle, XCircle } from "lucide-react";
import { Offers as OfferProp } from "../constants/types";

type OfferPropData = {
  data: OfferProp;
};

function PlaceOffers({ data }: OfferPropData) {
      // save offer variables in arr
      const offersArr = [
        "serves_vegetarian_food",
        "delivery",
        "reservable",
        "dine_in",
        "serves_beer",
        "wheelchair_accessible_entrance",
        "serves_breakfast",
        "serves_lunch",
        "serves_dinner",
        "takeout",
      ];
    
      // captialize a word
      const capitalizeString = (str: string) =>
        str.charAt(0).toUpperCase() + str.substring(1);
    
      // handle how offers display on screen
      const formatOfferString = (str: string) => {
        // only capitalize & return string if its a single word
        if (!str.includes("_")) return capitalizeString(str);
        // format multiple words
        const splittedString = str.split("_");
        return capitalizeString(splittedString.join(" "));
      };

  return (
    <section>
      <h2>What this place offers</h2>
    <div className="grid xs:grid-cols-2 w-full md:w-[600px] gap-2">
      {offersArr.map((offer) => (
        <div
          key={offersArr.indexOf(offer)}
          className="flex items-center gap-x-2"
        >
          {/* check if offer is true */}
          {data[offer as keyof OfferProp] === true ? (
            <CheckCircle className="w-4 stroke-green-600 shrink-0" />
          ) : (
            <XCircle className="w-4 stroke-red-600 shrink-0" />
          )}
          <span>{formatOfferString(offer)}</span>
        </div>
      ))}
    </div>
    </section>
  );
}

export default PlaceOffers;
