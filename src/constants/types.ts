
export type Data = {
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
  
  // Define a type that includes the possibility of null
  export type Place = Data | null;