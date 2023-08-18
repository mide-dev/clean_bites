import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import { createServer } from "miragejs";
import places from "../mockData/places.json";
import searchPrediction from "../mockData/searchPrediction.json";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";

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
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
