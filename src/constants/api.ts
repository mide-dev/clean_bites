import { BusinessData } from "./types";

// set base url
const baseURL = "https://cleanbites-backend.onrender.com/cleanbites_api/";

/**
 * Fetch BusinessDatas from server
 */
export async function getPlaces(page = 0): Promise<BusinessData[]> {
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

export async function getRecommendedPlaces(): Promise<BusinessData[]> {
  const response = await fetch(`${baseURL}places/top/`);

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
export async function getPlaceDetail(place_id: string) {
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
  return data;
}

// autocomplete
export async function getPlaceAutocomplete(query: string) {
  const response = await fetch(`${baseURL}places/autocomplete/?query=${query}`);

  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
}

// Fetch reviews for a place
export async function getPlaceReview(place_id: string) {
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

// add reviews for a place
export async function createReview(reviewData: any, accessToken: string) {
  try {
    const response = await fetch(`${baseURL}reviews/add/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${accessToken}`,
      },
      body: JSON.stringify(reviewData),
    });

    if (response.status === 401) {
      return { error: "Please sign in to create a review." }; // invalid/expired token
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: "Network error: Please try again later" };
  }
}

// verify if user already created a review
export async function verifyReview(
  user_id: string,
  place_id: string,
  accessToken: string
) {
  try {
    const response = await fetch(
      `${baseURL}users/verifyreview/${user_id}/?place_id=${place_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`,
        },
      }
    );

    if (response.status === 404 || response.status === 400) {
      return "No review found";
    } else if (response.status === 200) {
      return "review found";
    } else {
      return "Unexpected response";
    }
  } catch (error) {
    return "Network error: Please try again later";
  }
}

// add reviews for a place
export async function getUserReviews(user_id: string, accessToken: string) {
  try {
    const response = await fetch(`${baseURL}users/${user_id}/reviews/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${accessToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error };
  }
}

// delete review for a place
export async function deleteOrEditReview(
  reviewId: any,
  reviewData: any,
  operation: any,
  accessToken: any
) {
  try {
    const method = operation === "delete" ? "DELETE" : "PUT";
    const response = await fetch(`${baseURL}reviews/edit-delete/${reviewId}/`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${accessToken}`,
      },
      body: JSON.stringify(reviewData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error };
  }
}

// USER AUTH
export async function getUserToken(email: string, password: string) {
  try {
    const response = await fetch(`${baseURL}token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.status === 401) {
      return { error: "Unauthorized: Invalid email or password" };
    }

    if (!response.ok) {
      return { error: `Error: ${response.statusText}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle network or other errors
    return { error: "Network error: Please try again later" };
  }
}

export async function getNewAccessToken(refreshToken: string) {
  try {
    const response = await fetch(`${baseURL}token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: refreshToken,
      }),
    });

    if (response.status === 401) {
      return { error: "Unauthorized" }; // invalid/expired token
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: "Network error: Please try again later" };
  }
}

export async function getCurrentUser(accessToken: string) {
  try {
    const response = await fetch(
      `https://cleanbites-backend.onrender.com/auth/users/me/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`,
        },
      }
    );

    if (response.status === 401) {
      return { error: "Unauthorized" }; // invalid/expired token
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: "Network error: Please try again later" };
  }
}

export async function createUser(userInfo: any) {
  try {
    const response = await fetch(
      `https://cleanbites-backend.onrender.com/auth/users/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error };
  }
}
