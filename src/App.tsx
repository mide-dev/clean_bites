import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./App.css";

import Layout from "./Components/Layout";
import Places from "./Pages/Places";
import TopPicks from "./Pages/TopPicks";
import WhyUs from "./Pages/WhyUs";
import Search from "./Pages/Search";
import PlacesLoader from "./Components/PlacesLoader";
import Error from "./Components/Error";
import PlaceDetail from "./Pages/PlaceDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<Error />}>
        <Route path="/" element={<Places />} loader={PlacesLoader} />
        <Route path="/places/:place_id" element={<PlaceDetail />} />
        <Route path="/" element={<Layout />}>
          <Route path="top-picks" element={<TopPicks />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
