type FilterProps = {
  showLeftBlur?: boolean;
  showRightBlur?: boolean;
};

function BlurFilter({ showLeftBlur, showRightBlur }: FilterProps) {
  return (
    <>
      {showLeftBlur && (
        <div className="absolute w-16 blur-md h-full bg-[#ffffff] left-0"></div>
      )}

      {showRightBlur && (
        <div className="absolute w-16 blur-md h-full bg-[#ffffff] right-0"></div>
      )}
    </>
  );
}

export default BlurFilter;
