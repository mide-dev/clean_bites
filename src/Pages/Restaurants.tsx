import { useState, useEffect } from "react";
import FilterTab from "@/Components/FilterTab";
import Header from "@/Components/Header";
import Places from "@/Components/Places";

function Restaurants() {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    // get id of headerSection
    const headerSection = document.getElementById("headerSection")!;

    // listen for changes in headerSection height
    const resizeObserver = new ResizeObserver(() => {
      // store previous height and re-render if it changes
      if (contentHeight !== headerSection.clientHeight)
        setContentHeight(headerSection.clientHeight);

      // set padding top of places based on current
      // header height
      const place = document.getElementById("place")!;
      place.style.paddingTop = `${headerSection.clientHeight}px`;
    });

    // listen for the event
    resizeObserver.observe(headerSection);
  }, [contentHeight]);

  return (
    <>
      <section
        id="headerSection"
        className="fixed top-0 z-20 w-full shadow-none"
      >
        <Header />
        <FilterTab />
      </section>
      <main className="container mt-6 md:mt-0" id="place">
        <Places />
      </main>
    </>
  );
}

export default Restaurants;
