import { createServer, Model } from "miragejs"
// import places from './mockData/places.json'

export default function () {
  createServer({
    models: {
      places: Model,
      placeDetails: Model,
    },

    seeds(server) {
        server.create("place", { id: "1", "BusinessName": "Albero Lounge",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "MK40 1AY",
        "RatingValue": 5,
        "street": "1 Macquarie St",
        "city": "Manchester",
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/984888/pexels-photo-984888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          },{
            "height": 4032,
            "image": "https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          },{
            "height": 4032,
            "image": "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "1",
        "rating": 4.5,
        "user_ratings_total": 1681 })

        server.create("place", { id: "2", "BusinessName": "1903 Lounge",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "MK40 1AY",
        "RatingValue": 5,
        "street": "Terminal 3, Manchester Airport",
        "city": "Manchester",
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "2",
        "rating": 4.1,
        "user_ratings_total": 968 })

        server.create("place", { id: "3", "BusinessName": "2Nakhon",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "MK40 1AY",
        "RatingValue": 2,
        "street": "745 Wilmslow Road",
        "city": "Manchester",
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "3",
        "rating": 4.1,
        "user_ratings_total": 968 })

        server.create("place", { id: "4", "BusinessName": "63 Degrees",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "MK40 1AY",
        "RatingValue": 4,
        "street": "104 High Street",
        "city": "Manchester",
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/1861785/pexels-photo-1861785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "4",
        "rating": 4.1,
        "user_ratings_total": 968})

        server.create("place", { id: "5", "BusinessName": "99 Reasons",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "MK40 1AY",
        "RatingValue": 3,
        "street": "99 Manchester Road",
        "city": "Manchester",
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "5",
        "rating": 4.1,
        "user_ratings_total": 968})

        server.create("place", { id: "6", "BusinessName": "A Plus Oriental Restaurant",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "MK40 1AY",
        "RatingValue": 5,
        "street": "52 George Street",
        "city": "Manchester",
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "6",
        "rating": 4.1,
        "user_ratings_total": 968})

        server.create("place", { id: "7", "BusinessName": "A Star Shawarma",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "M19 1AY",
        "RatingValue": 2,
        "street": "920 Stockport Road",
        "city": "Manchester",
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/2899737/pexels-photo-2899737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "7",
        "rating": 4.1,
        "user_ratings_total": 968})

        server.create("place", { id: "8", "BusinessName": "A Taste of Honey Deli",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "M19 1AY",
        "RatingValue": 1,
        "street": "138 Burton Road",
        "city": "Manchester",
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "8",
        "rating": 4.1,
        "user_ratings_total": 968})

        server.create("place", { id: "9", "BusinessName": "Asap Coffee",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "M19 1AY",
        "RatingValue": "Awaiting Inspection",
        "street": "103 Oxford Road",
        "city": "Manchester",
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "9",
        "rating": 4.1,
        "user_ratings_total": 968})

        server.create("place", { id: "10", "BusinessName": "Get Stuffed",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "M19 1AY",
        "RatingValue": "3",
        "street": "103 Oxford Road",
        "city": "Manchester",
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "10",
        "rating": 4.1,
        "user_ratings_total": 968})

        server.create("placeDetail", { id: "1", "BusinessName": "Albero Lounge",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "MK40 1AY",
        "RatingValue": 5,
        "street": "1 Macquarie St",
        "city": "Manchester",
        "phone_number": "(02) 9374 4000",
        "offers": [
          {"serves_vegetarian_food": true, "delivery": true, 
          "reservable": false, "takeout": true, "dine_in": true,
          "serves_beer": true, "wheelchair_accessible_entrance": false,
          "serves_breakfast": false, 'serves_lunch': true, 'serves_dinner': true}
        ],
        "price_level": "2",
        "opening_hours":
          {
            "open_now": false,
            "today_hours": "Open  11:00 AM - 11:00 PM",
            "periods":
              [
                {
                  "close": { "day": 1, "time": "1700" },
                  "open": { "day": 1, "time": "0900" }
                }
              ],
            "weekday_text":
              [
                "Monday: 9:00 AM – 5:00 PM",
                "Tuesday: 9:00 AM – 5:00 PM",
                "Wednesday: 9:00 AM – 5:00 PM",
                "Thursday: 9:00 AM – 5:00 PM",
                "Friday: 9:00 AM – 5:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
              ]
          },
        "photos": [
          {
            "height": 4032,
            "image": "https://images.pexels.com/photos/984888/pexels-photo-984888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          },{
            "height": 4032,
            "image": "https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          },{
            "height": 4032,
            "image": "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "width": 3024
          }
        ],
        "place_id": "1",
        "rating": 4.5,
        "user_ratings_total": 1681,
        "reviews":
          [
            {
              "author_name": "Luke Archibald",
              "author_url": "https://www.google.com/maps/contrib/113389359827989670652/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo",
              "rating": 2,
              "relative_time_description": "a week ago",
              "text": "Called regarding paid advertising google pages to the top of its site of a scam furniture website misleading and taking peoples money without ever sending a product - explained the situation,  explained I'd spoken to an ombudsman regarding it.  Listed ticket numbers etc.\n\nThey left the advertisement running.",
              "time": 1652286798
            },
            {
              "author_name": "Tevita Taufoou",
              "author_url": "https://www.google.com/maps/contrib/105937236918123663309/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo",
              "rating": 3,
              "relative_time_description": "6 months ago",
              "text": "I need help.  Google Australia is taking my money. Money I don't have any I am having trouble sorting this issue out",
              "time": 1637215605
            },
            {
              "author_name": "Jordy Baker",
              "author_url": "https://www.google.com/maps/contrib/102582237417399865640/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
              "rating": 1,
              "relative_time_description": "4 months ago",
              "text": "I have literally never been here in my life, I am 17 and they are taking money I don't have for no reason.\n\nThis is not ok. I have rent to pay and my own expenses to deal with and now this.",
              "time": 1641389490
            },
            {
              "author_name": "Prem Rathod",
              "author_url": "https://www.google.com/maps/contrib/115981614018592114142/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJyEQpqs4YvPPzMPG2dnnRTFPC4jxJfn8YXnm2gz=s128-c0x00000000-cc-rp-mo",
              "rating": 1,
              "relative_time_description": "4 months ago",
              "text": "Terrible service. all reviews are fake and irrelevant. This is about reviewing google as business not the building/staff etc.",
              "time": 1640159655
            },
            {
              "author_name": "Husuni Hamza",
              "author_url": "https://www.google.com/maps/contrib/102167316656574288776/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo",
              "rating": 5,
              "relative_time_description": "7 months ago",
              "text": "Nice site. Please I want to work with you. Am Alhassan Haruna, from Ghana. Contact me +233553851616",
              "time": 1633197305
            }
          ]
        })

        server.create("placeDetail", { id: "2", "BusinessName": "1903 Lounge",
        "BusinessType": "Restaurant/Cafe/Canteen",
        "BusinessTypeID": 1,
        "PostCode": "MK40 1AY",
        "RatingValue": 5,
        "street": "Terminal 3, Manchester Airport",
        "city": "Manchester",
        "phone_number": "(02) 9374 4000",
        "offers": [
          {"serves_vegetarian_food": true, "delivery": true, 
          "reservable": false, "takeout": true, "dine_in": true,
          "serves_beer": true, "wheelchair_accessible_entrance": false,
          "serves_breakfast": false, 'serves_lunch': true, 'serves_dinner': true}
        ],
        "price_level": "2",
        "opening_hours":
          {
            "open_now": true,
            "today_hours": "Open  11:00 AM - 11:00 PM",
            "periods":
              [
                {
                  "close": { "day": 1, "time": "1700" },
                  "open": { "day": 1, "time": "0900" }
                }
              ],
            "weekday_text":
              [
                "Monday: 9:00 AM – 5:00 PM",
                "Tuesday: 9:00 AM – 5:00 PM",
                "Wednesday: 9:00 AM – 5:00 PM",
                "Thursday: 9:00 AM – 5:00 PM",
                "Friday: 9:00 AM – 5:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
              ]
          },
          "photos": [
            {
              "height": 4032,
              "image": "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "width": 3024
            }
          ],
        "place_id": "2",
        "rating": 4.5,
        "user_ratings_total": 1681,
        "reviews":
          [
            {
              "author_name": "Luke Archibald",
              "author_url": "https://www.google.com/maps/contrib/113389359827989670652/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo",
              "rating": 2,
              "relative_time_description": "a week ago",
              "text": "Called regarding paid advertising google pages to the top of its site of a scam furniture website misleading and taking peoples money without ever sending a product - explained the situation,  explained I'd spoken to an ombudsman regarding it.  Listed ticket numbers etc.\n\nThey left the advertisement running.",
              "time": 1652286798
            },
            {
              "author_name": "Tevita Taufoou",
              "author_url": "https://www.google.com/maps/contrib/105937236918123663309/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo",
              "rating": 3,
              "relative_time_description": "6 months ago",
              "text": "I need help.  Google Australia is taking my money. Money I don't have any I am having trouble sorting this issue out",
              "time": 1637215605
            },
            {
              "author_name": "Jordy Baker",
              "author_url": "https://www.google.com/maps/contrib/102582237417399865640/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
              "rating": 1,
              "relative_time_description": "4 months ago",
              "text": "I have literally never been here in my life, I am 17 and they are taking money I don't have for no reason.\n\nThis is not ok. I have rent to pay and my own expenses to deal with and now this.",
              "time": 1641389490
            },
            {
              "author_name": "Prem Rathod",
              "author_url": "https://www.google.com/maps/contrib/115981614018592114142/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJyEQpqs4YvPPzMPG2dnnRTFPC4jxJfn8YXnm2gz=s128-c0x00000000-cc-rp-mo",
              "rating": 1,
              "relative_time_description": "4 months ago",
              "text": "Terrible service. all reviews are fake and irrelevant. This is about reviewing google as business not the building/staff etc.",
              "time": 1640159655
            },
            {
              "author_name": "Husuni Hamza",
              "author_url": "https://www.google.com/maps/contrib/102167316656574288776/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo",
              "rating": 5,
              "relative_time_description": "7 months ago",
              "text": "Nice site. Please I want to work with you. Am Alhassan Haruna, from Ghana. Contact me +233553851616",
              "time": 1633197305
            }
          ]
        })
    },

    routes() {
      this.get("/api/places", (schema) => {
        return schema.places.all()
      })

      this.get("api/placeDetail/:id", (schema, request) => {
        const id = request.params.id
        return schema.placeDetails.find(id)
    })

    // this.get("/api/places/id", (schema, request) => {
    //   const id = request.params.id
    //     return schema.places.find(id)
    // })
    
    },
  })
}

// createServer({
//     routes() {
//       this.get("/api/places", () => {
//         return places;
//       });
//     },
//   });