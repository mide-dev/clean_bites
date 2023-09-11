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
import Places from "./Pages/Places";
import TopPicks from "./Pages/TopPicks";
import WhyUs from "./Pages/WhyUs";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import PlaceDetail from "./Pages/PlaceDetail";

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
    <>
      <Route path="/" errorElement={<Error />}>
        <Route index element={<Places />} loader={Loader} />
        <Route path="place-detail" element={<PlaceDetail />} />
        <Route path="/" element={<Layout />}>
          <Route path="top-picks" element={<TopPicks />} />
          <Route path="why-us" element={<WhyUs />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
