import { useMemo, HTMLAttributes } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

type MapProps = HTMLAttributes<HTMLHeadElement> & {
  latitude:number; 
  longitude:number;
 }

 type MapOptions = google.maps.MapOptions

function Map({className, latitude, longitude}: MapProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_FOOD_APP_GOOGLE_MAP_API_KEY,
  });
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);
  const options = useMemo<MapOptions>(() => ({
    mapId: "acf0cee82df6cc02",
    minZoom: 14,
    maxZoom: 17,
    disableDefaultUI: true,
    clickableIcons: false
  }), [])

  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <div className={`flex ${className}`}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options ={options}
        />
      )}
    </div>
  );
}

export default Map;
