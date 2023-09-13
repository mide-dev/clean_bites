import {HTMLAttributes } from "react";

type FilterProps = HTMLAttributes<HTMLDivElement> & {
  showLeftBlur?: boolean;
  showRightBlur?: boolean;
};

function BlurFilter({ showLeftBlur, showRightBlur, className }: FilterProps) {
  return (
    <>
      {showLeftBlur && (
        <div className={`hidden sm:block absolute w-16 blur-md h-full bg-white left-0 ${className}`}></div>
      )}

      {showRightBlur && (
        <div className={`hidden sm:block absolute w-16 blur-md h-full bg-white right-0 ${className}`}></div>
      )}
    </>
  );
}

export default BlurFilter;
