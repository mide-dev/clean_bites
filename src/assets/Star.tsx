import { SVGProps } from "react";

function Star({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      className={`block ${className}`}
      {...props}
    >
      <path d="M9.405 14.4202L3.762 18.81L5.643 11.9138L0 7.524L6.89622 6.89622L9.405 0L11.9138 6.89622L18.81 7.524L13.167 11.9138L15.048 18.81L9.405 14.4202Z" />
    </svg>
  );
}

export default Star;
