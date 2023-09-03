import { Place } from "./types";

export async function getPlaces(): Promise<Place[]> {
    const response = await fetch("/api/places");
    // simulate slow fetch
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await response.json();
    return data;
  }