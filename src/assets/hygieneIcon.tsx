import { SVGProps } from "react";

function HygieneIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      // fill="white"
      className={`block ${className}`}
      {...props}
    >
      <path
        d="M11.97 23.94C18.5808 23.94 23.94 18.5808 23.94 11.97C23.94 5.35915 18.5808 0 11.97 0C5.35915 0 0 5.35915 0 11.97C0 18.5808 5.35915 23.94 11.97 23.94Z"
        // fill="#288549"
      />
      <path
        d="M17.5559 4.78801L9.17694 13.4064L6.38394 10.5336L3.59094 13.4064L9.17694 19.152L20.3489 7.66081L17.5559 4.78801Z"
        fill="white"
      />
    </svg>
  );
}

export default HygieneIcon;
