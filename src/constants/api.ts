import { Place } from "./types";

// set base url
const baseURL = "http://127.0.0.1:8000/cleanbites_api/";

/**
 * Fetch places from server
 */
export async function getPlaces(page = 0): Promise<Place[]> {
  let response;

  if (page > 0) {
    response = await fetch(`${baseURL}places/?page=${page}`);
  } else {
    response = await fetch(`${baseURL}places/`);
  }
  if (!response.ok) {
    throw {
      message: "Failed to fetch Places",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.results;
}

// Fetch detailed info for a place
export async function getPlaceDetail(place_id) {
  const response = await fetch(`${baseURL}places/${place_id}`);
  if (!response.ok) {
    throw {
      message: "Failed to fetch this Place",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data;
}

// Fetch reviews for a place
export async function getPlaceReview(place_id) {
  const response = await fetch(`${baseURL}places/${place_id}/reviews`);
  if (!response.ok) {
    throw {
      message: "Failed to fetch reviews",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data;
}

// get a search result
export async function getPlaceSearch(query: string, page: number = 0) {
  let response;

  if (page === 0) {
    response = await fetch(`${baseURL}places/search/?query="${query}"`);
  } else {
    response = await fetch(
      `${baseURL}places/search/?page=${page}&query="${query}"`
    );
  }
  if (!response.ok) {
    throw {
      message: "No results available for your search",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.results;
}

// autocomplete
export async function getPlaceAutocomplete(query) {
  const response = await fetch(`${baseURL}places/autocomplete/?query=${query}`);

  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
}
