import {
  Utensils,
  UtensilsCrossed,
  Coffee,
  Wine,
  Carrot,
  Pizza,
  Sandwich,
  Drumstick,
  Salad,
  Soup,
  IceCream2,
  Truck,
  Footprints,
  EggFried,
  Croissant,
  CakeSlice,
  Dessert,
  Beef,
  Fish,
} from "lucide-react";

import { IoFastFoodOutline } from "react-icons/io5";
import { TbGrill } from "react-icons/tb";
import { PiHamburger, PiBowlFood } from "react-icons/pi";
import { GiBowlOfRice } from "react-icons/gi";
import { PiCookingPot } from "react-icons/pi";
import { GiSushis } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";

export const filterList = [
  { id: "1", item: "Places", icon: UtensilsCrossed },
  { id: "2", item: "Cafe", icon: Coffee },
  { id: "3", item: "Bar", icon: Wine },
  { id: "4", item: "Restaurants", icon: Utensils },
  { id: "5", item: "Vegetarian", icon: Carrot },
  { id: "6", item: "Pizza", icon: Pizza },
  { id: "7", item: "Sandwich", icon: Sandwich },
  { id: "8", item: "Chicken", icon: Drumstick },
  { id: "9", item: "Steak", icon: Beef },
  { id: "10", item: "Sushi", icon: GiSushis },
  { id: "11", item: "Hamburger", icon: PiHamburger },
  { id: "12", item: "Taco", icon: Dessert },
  { id: "13", item: "Seafood", icon: Fish },
  { id: "14", item: "Pasta", icon: GiNoodles },
  { id: "15", item: "Kebab", icon: Croissant },
  { id: "16", item: "Noodles", icon: GiNoodles },
  { id: "17", item: "BBQ", icon: Drumstick },
  { id: "18", item: "Grill", icon: TbGrill },
  { id: "19", item: "British", icon: IoFastFoodOutline },
  { id: "20", item: "American", icon: IoFastFoodOutline },
  { id: "21", item: "African", icon: Salad },
  { id: "22", item: "Indian", icon: Soup },
  { id: "23", item: "Italian", icon: IceCream2 },
  { id: "24", item: "Chinese", icon: PiBowlFood },
  { id: "25", item: "Carribean", icon: PiCookingPot },
  { id: "26", item: "Japanese", icon: PiBowlFood },
  { id: "27", item: "Lebanese", icon: Dessert },
  { id: "28", item: "Mexican", icon: PiCookingPot },
  { id: "29", item: "Thai", icon: GiBowlOfRice },
  { id: "30", item: "Delivery", icon: Truck },
  { id: "31", item: "Take Out", icon: Footprints },
  { id: "32", item: "Breakfast", icon: EggFried },
  { id: "33", item: "Brunch", icon: Croissant },
  { id: "34", item: "Lunch", icon: CakeSlice },
  { id: "35", item: "Diner", icon: Dessert },
];
