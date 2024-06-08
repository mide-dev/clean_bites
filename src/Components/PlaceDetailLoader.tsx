import { Skeleton } from "./ui/skeleton";
import Header from "@/Components/Header";

function PlaceDetailLoader() {
  return (
    <>
      <Header className="hidden md:flex shrinked-container" />
      <section className="md:container shrinked-container flex flex-col md:my-4">
        {/* Image */}
        <div className="md:order-3">
          <Skeleton className="bg-gray-300 block h-[300px] md:h-[400px] lg:h-[500px] w-full md:rounded-xl" />
        </div>
        {/*  title */}
        <div className="flex items-center place_detail_section md:order-1">
          <div className="my-2">
            <Skeleton className="bg-gray-300 h-4 w-20" />
          </div>
          <div className="text-base">
            <Skeleton className="bg-gray-300 ml-4 h-4 w-20" />
          </div>
        </div>
        {/* hygiene */}
        <div className="place_detail_section md:order-4">
          {/* TODO: USE A PROGRESS ELEMENT */}
          <div className="flex gap-x-1 pb-3">
            <Skeleton className="bg-gray-300 h-4 w-28 rounded-full" />
            <Skeleton className="bg-gray-300 h-4 w-32" />
          </div>
          <Skeleton className="bg-gray-300 w-full h-5 rounded-full" />
          {/* mobile-divider */}
          {/* <Divider axis="horizontal" className="bg-slate-300 md:hidden" /> */}
        </div>

        {/* google review group */}
        <div className=" gap-x-[0.1rem] place_detail_section md:order-2">
          <div className="flex items-center">
            <Skeleton className="bg-gray-300 h-6 w-6 rounded-full" />
            <Skeleton className="bg-gray-300 h-4 w-32 ml-4" />
          </div>
          <Skeleton className="bg-gray-300 h-2 w-44 my-3" />
        </div>
        {/* open time */}
        <div className="flex gap-x-2 items-center place_detail_section md:order-5">
          <Skeleton className="bg-gray-300 h-3 w-16 rounded-full" />
          <Skeleton className="bg-gray-300 h-3 w-16" />
          {/* TODO: CREATE THE HOURS DIALOG */}
          <Skeleton className="bg-gray-300 h-3 w-16 rounded-full" />
        </div>
        {/* contact call */}
        <div className="place_detail_section md:order-6">
          <div className="flex gap-x-2 items-center">
            <Skeleton className="bg-gray-300 h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-28" />
          </div>
          {/* mobile-divider */}
          <Skeleton className=" mt-3 h-2 w-full rounded-full" />
          <Skeleton className="my-12 block h-[200px] w-full md:rounded-xl" />
        </div>
      </section>
    </>
  );
}

export default PlaceDetailLoader;
