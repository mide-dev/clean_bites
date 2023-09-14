import { Place } from "./types";

// type ApiProp = {
//   id?: number
// }

export async function getPlaces(): Promise<Place[]> {
 
    const response = await fetch("/api/places");
    if (!response.ok) {
      throw {
        message: "Failed to fetch Places",
        statusText: response.statusText,
        status: response.status
      }
    }
    // simulate slow fetch
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await response.json();
    return data.places;
  

  // 
  // const response = await fetch("/api/placesDetail"); 
  //   if (!response.ok) {
  //     throw {
  //       message: "Failed to fetch Places",
  //       statusText: response.statusText,
  //       status: response.status
  //     }
  //   }
  //   // simulate slow fetch
  //   // await new Promise((resolve) => setTimeout(resolve, 3000));
  //   const data = await response.json();
  //   return data;
  }
  