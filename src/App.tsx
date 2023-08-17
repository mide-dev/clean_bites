import "./App.css";
import { createServer } from "miragejs";
import places from "../mockData/places.json";
import searchPrediction from "../mockData/searchPrediction.json";
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

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
