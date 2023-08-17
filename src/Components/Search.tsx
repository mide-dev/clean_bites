import { useEffect } from "react";

function Search() {
  //   useEffect(() => {
  //     fetch("/api/searchPrediction")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);
  return (
    <>
      <input className="h-10 w-full rounded-full" type="text" />
    </>
  );
}

export default Search;
