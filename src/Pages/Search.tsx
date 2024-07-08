import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getPlaceSearch } from "../constants/api";
import { CustomError } from "../Components/Error";
import { Link } from "react-router-dom";
import PlacesCard from "../Components/PlacesCard";
import Divider from "@/Components/Divider";
import LoadingState from "@/Components/LoadingState";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
} from "@/Components/ui/pagination";
import { BusinessData } from "@/constants/types";

interface FetchResult {
  results: BusinessData[];
  next: string | null;
  previous: string | null;
}

interface ErrorState {
  message: string;
  statusText: string;
  status: string;
  isError: boolean;
}

function Search() {
  const [items, setItems] = useState<BusinessData[]>([]);
  const [nextResult, setNextResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorState>({
    message: "",
    statusText: "",
    status: "",
    isError: false,
  });

  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("query");

  const fetchPlaceSearch = async () => {
    setLoading(true);
    try {
      if (queryParam) {
        const resultsFetch: FetchResult = await getPlaceSearch(queryParam);
        setItems(resultsFetch.results);
        setNextResult(resultsFetch.next);
      }
    } catch (error: any) {
      setError({
        message: error.message,
        statusText: error.statusText || "Error",
        status: error.status || "500",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaceSearch();
  }, [queryParam]);

  const getMoreResults = async (url: string) => {
    if (!nextResult) return;
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Internal Server Error");
      }
      const data: FetchResult = await response.json();
      setItems((prev) => [...prev, ...data.results]);
      setNextResult(data.next);
    } catch (error: any) {
      setError({
        message: error.message,
        statusText: error.statusText || "Error",
        status: error.status || "500",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container shrinked-container text-sm mb-10 min-h-[90vh]">
      <div className="text-2xl pt-10 pb-6 lg:pt-20 lg:pb-10">
        Your search result for "
        <span className="text-custom_accent">{queryParam}</span>"
        <Divider axis="horizontal" />
      </div>

      {error.isError && (
        <CustomError
          message={error.message}
          status={error.status}
          statusText={error.statusText}
        />
      )}

      <div className="places-grid">
        {items.map((place) => (
          <Link to={`/places/${place.id}`} key={place.id}>
            <PlacesCard {...place} />
          </Link>
        ))}
      </div>
      {loading && <LoadingState />}

      {items.length > 0 && nextResult && (
        <Pagination className="mb-8 mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationNext
                onClick={() => getMoreResults(nextResult)}
                className={`cursor-pointer ${!nextResult ? "is-disabled" : ""}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {items.length === 0 && !loading && (
        <div className="flex justify-center items-center pt-14 text-xl">
          No results available for the search term.
        </div>
      )}
    </main>
  );
}

export default Search;
