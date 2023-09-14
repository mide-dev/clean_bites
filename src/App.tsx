import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./App.css";
// import { createServer } from "miragejs";
// import places from "../mockData/places.json";
// import placesDetail from "../mockData/placesDetail.json"
// import searchPrediction from "../mockData/searchPrediction.json";
import server from '../server.js'
import Layout from "./Components/Layout";
import Places from "./Pages/Places";
import TopPicks from "./Pages/TopPicks";
import WhyUs from "./Pages/WhyUs";
import PlacesLoader from "./Components/PlacesLoader";
import Error from "./Components/Error";
import PlaceDetail from "./Pages/PlaceDetail";

server()

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<Error />}>
        <Route index element={<Places />} loader={PlacesLoader} />
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
