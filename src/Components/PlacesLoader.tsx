import { getPlaces } from "@/constants/api";
import { defer } from "react-router-dom";

function Loader() {
  return defer({ placesPromise: getPlaces() });
}

export default Loader;
