type FilterProps = {
  showLeftBlur?: boolean;
  showRightBlur?: boolean;
};

function BlurFilter({ showLeftBlur, showRightBlur }: FilterProps) {
  return (
    <>
      {showLeftBlur && (
        <div className="hidden sm:block absolute w-16 blur-md h-full bg-white left-0"></div>
      )}

      {showRightBlur && (
        <div className="hidden sm:block absolute w-16 blur-md h-full bg-white right-0"></div>
      )}
    </>
  );
}

export default BlurFilter;
