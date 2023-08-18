import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./App.css";
import { createServer } from "miragejs";
import places from "../mockData/places.json";
import searchPrediction from "../mockData/searchPrediction.json";
import Layout from "./Components/Layout";
import Restaurants from "./Pages/Restaurants";
import TopPicks from "./Pages/TopPicks";
import WhyUs from "./Pages/WhyUs";

// mock-server
createServer({
  routes() {
    this.get("/api/places", () => {
      return places;
    });

    this.get("/api/searchPrediction", () => {
      return searchPrediction;
    });
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Restaurants />} />
      <Route path="top-picks" element={<TopPicks />} />
      <Route path="why-us" element={<WhyUs />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
