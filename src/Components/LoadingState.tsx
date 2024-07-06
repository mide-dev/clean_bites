import { Skeleton } from "./ui/skeleton";

function createArray(rowCount: number) {
  const arr = [];

  for (let i = 0; i < rowCount; i++) {
    arr.push(i);
  }

  return arr;
}

function LoadingState() {
  const columnCount = 16;
  const myArray = createArray(columnCount);

  return (
    <>
      <div className="places-grid">
        {myArray.map((item) => {
          return (
            <div key={item}>
              <Skeleton
                className="bg-gray-300 rounded-t-lg rounded-b-none min-w-[100%] 
                h-[200px] xs:h-[260px] md:h-[220px] lg:h-[200px]"
              />
              <div className="flex justify-between pt-2">
                <Skeleton className="bg-gray-300 rounded-md w-20 h-4" />
                <Skeleton className="bg-gray-300 rounded-md w-28 h-4" />
              </div>
              <div className="pt-3">
                <Skeleton className="bg-gray-300 rounded-md w-28 h-4 " />
              </div>
              <div className="pt-3">
                <Skeleton className="bg-gray-300 rounded-md w-16 h-3 " />
              </div>
              <div className="pt-4 flex gap-x-2 items-center">
                <Skeleton className="bg-gray-300 rounded-full w-6 h-6 " />
                <Skeleton className="bg-gray-300 rounded-md w-32 h-4 " />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LoadingState;
