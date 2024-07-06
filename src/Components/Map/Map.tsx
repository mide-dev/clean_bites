import { useMemo, HTMLAttributes } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

type MapProps = HTMLAttributes<HTMLHeadElement> & {
  latitude: number;
  longitude: number;
};

type MapOptions = google.maps.MapOptions;

function Map({ className, latitude, longitude, title }: MapProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_CLEANBITES_GOOGLE_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "acf0cee82df6cc02",
      zoomControl: false,
      minZoom: 16,
      maxZoom: 16,
      disableDefaultUI: true,
      clickableIcons: false,
      gestureHandling: "none",
    }),
    []
  );

  const containerStyle = {
    width: "100%",
    height: "100%",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  };
  return (
    <div className={`flex ${className}`}>
      {!isLoaded ? (
        <h1>Loading...</h1> //TODO: USE PROPER LOADER
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={options}
        >
          <Marker
            position={center}
            title={title}
            animation={google.maps.Animation.BOUNCE}
          />
        </GoogleMap>
      )}
    </div>
  );
}

export default Map;
