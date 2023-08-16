import "./App.css";
import { createServer } from "miragejs";
import places from "../mockData/places.json";

// mock-server
createServer({
  routes() {
    this.get("/api/places", () => {
      return places;
    });
  },
});

function App() {
  return (
    <>
      <h1>Hello, World!</h1>
    </>
  );
}

export default App;
