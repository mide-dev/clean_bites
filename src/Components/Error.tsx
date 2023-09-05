// import Header from "./Header";
import { useRouteError } from "react-router-dom";

type Error = {
  message: string;
  statusText: string;
  status: number;
};

function Error() {
  const error = useRouteError() as Error;
  return (
    <>
      {/* <Header /> */}
      <div className="grid place-content-center border-2 w-full h-screen">
        <h1 className="text-custom_primary_500 font-medium">
          An error occured: {error.message}
        </h1>
        <p className="text-custom_primary_400 pt-2">
          {error.status} - {error.statusText}
        </p>
      </div>
    </>
  );
}

export default Error;
