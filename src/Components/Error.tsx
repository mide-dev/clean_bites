import { useRouteError } from "react-router-dom";

type Error = {
  message: string;
  statusText: string;
  status: number | string;
};

function Error() {
  const error = useRouteError() as Error;
  return (
    <>
      <div className="grid place-content-center w-full my-20">
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

export function CustomError({ message, statusText, status }: Error) {
  return (
    <>
      <div className="grid place-content-center w-full my-20">
        <h1 className="text-custom_primary_500 font-medium">
          An error occured: {message}
        </h1>
        <p className="text-custom_primary_400 pt-2">
          {status} - {statusText}
        </p>
      </div>
    </>
  );
}
