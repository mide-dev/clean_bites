import { useRef, useEffect } from "react";
import { FilterContextProvider } from "../FilterContext";
import FilterTab from "@/Components/FilterTab";
import Header from "@/Components/Header";
import PlacesRender from "@/Components/PlacesRender";
import Footer from "@/Components/Footer";
import Divider from "@/Components/Divider";
import { Helmet } from "react-helmet";

function Places() {
  const headerRef = useRef<HTMLUListElement | null>(null);

  // reveal header shadow on scoll
  useEffect(() => {
    function toggleShadow() {
      if (headerRef.current != null) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add("shadow-visible");
        } else {
          headerRef.current.classList.remove("shadow-visible");
        }
      }
    }

    // Attach a scroll event listener to the window
    window.addEventListener("scroll", toggleShadow);

    // Initial call to set the shadow state based on initial scroll position
    toggleShadow();
  });

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <FilterContextProvider>
        {/* used fixed on sm screens to avoid header jittering on scroll*/}
        {/* used sticky on lg screens to avoid header width glitch */}
        <section
          className="fixed lg:sticky top-0 z-20 w-full bg-white shadow-none transition-shadow"
          ref={headerRef}
        >
          <Header />
          <Divider axis="horizontal" />
          <FilterTab />
        </section>
        <main className="container pt-[150px] sm:pt-[195px] lg:pt-0 mt-6 md:mt-4">
          <PlacesRender />
        </main>
        <Footer />
      </FilterContextProvider>
    </>
  );
}

export default Places;
