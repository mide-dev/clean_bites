
export type Place = {
    BusinessName: string;
    BusinessType: string;
    BusinessTypeID: number;
    PostCode: string;
    RatingValue: number | string;
    city: string;
    photos: { image: string }[];
    place_id: string;
    rating: number | string;
    street: string;
    user_ratings_total: number | string;
  };

export type Offers = {
    serves_vegetarian_food: boolean;
    delivery: boolean;
    reservable: boolean;
    dine_in: boolean;
    serves_beer: boolean;
    wheelchair_accessible_entrance: boolean;
    serves_breakfast: boolean;
    serves_lunch: boolean;
    serves_dinner: boolean;
    takeout: boolean;
};
