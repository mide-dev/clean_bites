import { useState, useEffect, useRef } from "react";
import { useFilterContext } from "../FilterContext";
import PlacesCard from "./PlacesCard";
import { Place as PlaceProp } from "@/constants/types";
import LoadingState from "./LoadingState";
import { getPlaces, getPlaceSearch } from "../constants/api";
import { CustomError } from "./Error";
import { Link } from "react-router-dom";
import { filterList } from "@/constants/filterItems";


function Places() {
  const { selectedItem } = useFilterContext();

  const getItems = {
    currentItem: JSON.parse(sessionStorage.getItem(selectedItem)) || [],

    currentPage: (item: string) => {
      const currentItem = sessionStorage.getItem(`${item}_page`);
      if (currentItem) {
        return JSON.parse(currentItem);
      }

      sessionStorage.setItem(`${item}_page`, JSON.stringify(0));

      return JSON.parse(sessionStorage.getItem(`${item}_page`));
    },
  };

  const [items, setItems] = useState(getItems.currentItem);
  // const [pageNum, setPageNum] = useState(getItems.currentPage(selectedItem));

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    statusText: "",
    status: "",
    isError: false,
  });
  const [lastElement, setLastElement] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // create an observer that will watch when last element is in view
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      // increase page number if last element in view and app is fetching more
      if (first.isIntersecting && !loading) {
        setIsIntersecting(true);
      }
    })
  );

  // fetch places and append to the places array.
  const fetchPlaceData = async () => {
    try {
      setLoading(true);
      let currentPage = getItems.currentPage(selectedItem);
      if (items.length > 0) {
        currentPage += 1;
      }

      let placesFetch;
      if (selectedItem == filterList[0].item) {
        placesFetch = await getPlaces(currentPage);
      } else {
        placesFetch = await getPlaceSearch(selectedItem, currentPage);
      }

      sessionStorage.setItem(
        selectedItem,
        JSON.stringify([...getItems.currentItem, ...placesFetch])
      );

      sessionStorage.setItem(
        `${selectedItem}_page`,
        JSON.stringify(currentPage)
      );
      setItems(JSON.parse(sessionStorage.getItem(selectedItem)));
      setPageNum(JSON.parse(sessionStorage.getItem(`${selectedItem}_page`)));
    } catch (error) {
      setError({
        message: error.message,
        statusText: error.statusText,
        status: error.status,
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const displaySelectedItem = (item) => {
    setItems(JSON.parse(sessionStorage.getItem(item)));
  };

  // call the function to fetch places only when pageNum changes
  useEffect(() => {
    if (isIntersecting) {
      fetchPlaceData();
      setIsIntersecting(false);
    }

    if (getItems.currentItem.length === 0) {
      fetchPlaceData();
    } else {
      displaySelectedItem(selectedItem);
    }
  }, [isIntersecting, selectedItem]);

  // set and watch last element in the array => intersection observer
  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  // return places data
  if (items.length > 0) {
    return (
      <>
        <div className="places-grid">
          {items.map((place, index) => (
            <Link
              to={`/places/${place.id}`}
              key={`${selectedItem}_${place.id}`}
            >
              <PlacesCard
                ref={index === items.length - 1 ? setLastElement : null}
                {...place}
              />
            </Link>
          ))}
        </div>
        {/* show loading when fetching more places */}
        <>{loading && <LoadingState />}</>
      </>
    );
  }

  // display initial loading screen
  if (loading) {
    return <LoadingState />;
  }

  // if error, display error to user
  if (error.isError) {
    return (
      <CustomError
        message={error.message}
        status={error.status}
        statusText={error.statusText}
      />
    );
  }

  // if nothing happens. print no places
  return <div>No places available.</div>;
}

export default Places;
