import { useState, useEffect, useRef } from "react";
import { useFilterContext } from "../FilterContext";
import PlacesCard from "./PlacesCard";
import LoadingState from "./LoadingState";
import { getPlaces, getPlaceSearch } from "../constants/api";
import { CustomError } from "./Error";
import { Link } from "react-router-dom";
import { filterList } from "@/constants/filterItems";

function Places() {
  const { selectedItem } = useFilterContext();

  const getItems = {
    currentItem:
      JSON.parse(sessionStorage.getItem(selectedItem) as string) || [],

    currentPage: (item: string) => {
      const currentItem = sessionStorage.getItem(`${item}_page`);
      if (currentItem) {
        return JSON.parse(currentItem);
      }

      sessionStorage.setItem(`${item}_page`, JSON.stringify(0));

      return JSON.parse(sessionStorage.getItem(`${item}_page`) as string);
    },
  };

  const [items, setItems] = useState(getItems.currentItem);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    statusText: "",
    status: "",
    isError: false,
  });
  const [lastElement, setLastElement] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [initialLoadState, setInitialLoadState] = useState<any>({});

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
        const placeSearch = await getPlaceSearch(selectedItem, currentPage);
        placesFetch = placeSearch.results;
      }

      sessionStorage.setItem(
        selectedItem,
        JSON.stringify([...getItems.currentItem, ...placesFetch])
      );

      sessionStorage.setItem(
        `${selectedItem}_page`,
        JSON.stringify(currentPage)
      );
      setItems(JSON.parse(sessionStorage.getItem(selectedItem) as string));
    } catch (error: any) {
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

  const displaySelectedItem = (item: any) => {
    setItems(JSON.parse(sessionStorage.getItem(item) as string));
  };

  // call the function to fetch places only when pageNum changes
  useEffect(() => {
    if (getItems.currentPage(selectedItem) === 0) {
      setInitialLoadState((prevState: any) => ({
        ...prevState,
        [selectedItem]: true,
      }));
    } else {
      setInitialLoadState((prevState: any) => ({
        ...prevState,
        [selectedItem]: false,
      }));
    }

    if (isIntersecting) {
      fetchPlaceData();
      setIsIntersecting(false);
    }

    if (getItems.currentItem.length === 0) {
      fetchPlaceData();
    } else {
      // setLoading(true);
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

  if (loading && initialLoadState[selectedItem]) {
    return <LoadingState />;
  }

  // return places data
  if (items.length > 0) {
    return (
      <>
        <div className="places-grid">
          {items.map((place: any, index: number) => (
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
