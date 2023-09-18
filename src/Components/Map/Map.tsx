import {useState, useMemo, useCallback, useRef} from "react";
import {GoogleMap, Marker, MarkerClusterer } from "react-google-maps";
import { useLoadScript } from "@react-google-maps/api";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

function Map() {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_FOOD_APP_GOOGLE_MAP_API_KEY,
    });

    // loading state
    if (!isLoaded) return <div>Loading...</div>

    return ( <div>map</div> );
}

export default Map;