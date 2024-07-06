import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./AuthProvider";

import "./App.css";

import Layout from "./Components/Layout";
import Places from "./Pages/Places";
import Search from "./Pages/Search";
import PlacesLoader from "./Components/PlacesLoader";
import Error from "./Components/Error";
import PlaceDetail from "./Pages/PlaceDetail";
import Profile from "./Pages/Profile";
import PlacesReviewed from "./Pages/PlacesReviewed";
import Favorites from "./Pages/Favorites";
import LoginSignup from "./Pages/auth/LoginSignup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        element={<Places />}
        loader={PlacesLoader}
        errorElement={<Error />}
      />
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route path="places/:place_id" element={<PlaceDetail />} />
        <Route path="search" element={<Search />} />
        <Route path="login" element={<LoginSignup />} />
        <Route path="signup" element={<LoginSignup />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="placesreviewed" element={<PlacesReviewed />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
