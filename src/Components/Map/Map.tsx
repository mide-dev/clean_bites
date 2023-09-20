import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

function Map() {
    const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_FOOD_APP_GOOGLE_MAP_API_KEY,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  console.log(import.meta.env.VITE_FOOD_APP_GOOGLE_MAP_API_KEY)
  const containerStyle = {
    width: "100%",
    height: "400px",
}
  return (
    <div className="w-[700px] h-[700px] mb-20">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
        mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
}

export default Map;