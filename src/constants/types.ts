interface OpeningHours {
  open_now: boolean;
  periods: unknown[];
  weekday_text: string[];
}

interface PlaceOffers {
  delivery: boolean;
  dine_in: boolean;
  formatted_phone_number: string;
  opening_hours: OpeningHours;
  price_level: number;
  reservable: boolean;
  serves_beer: boolean;
  serves_breakfast: boolean;
  serves_brunch: boolean;
  serves_dinner: boolean;
  serves_lunch: boolean;
  serves_vegetarian_food: boolean;
  takeout: boolean;
  wheelchair_accessible_entrance: boolean;
}

interface GoogleEnrichedData {
  open_now: boolean;
  opening_times: string[];
  phone_number: string;
  photo_urls: string[];
  place_offers: PlaceOffers;
}

interface CleanbitesReview {
  id: number;
  rating: number;
  review: string;
  last_update: string;
  place_id: number;
  user_first_name: string;
  user_last_name: string;
}

interface GoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

interface GoogleReviews {
  reviews: GoogleReview[];
}

export interface BusinessData {
  business_name: string;
  category_desc: string;
  city: string;
  google_enriched_data: GoogleEnrichedData;
  photo_url: unknown;
  google_place_id: string;
  google_review_count: number;
  google_review_score: number;
  hygiene_score: number;
  id: string;
  latitude: number;
  longitude: number;
  post_code: string;
  street: string;
  cleanbites_reviews: CleanbitesReview[];
  google_reviews: GoogleReviews;
}
