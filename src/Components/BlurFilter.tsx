type FilterProps = {
  showLeftFilter?: boolean;
  showRightFilter?: boolean;
};

function BlurFilter({ showLeftFilter, showRightFilter }: FilterProps) {
  return (
    <>
      {showLeftFilter && (
        <div className="absolute w-16 blur-md h-full bg-[#ffffff] left-0"></div>
      )}

      {showRightFilter && (
        <div className="absolute w-16 blur-md h-full bg-[#ffffff] right-0"></div>
      )}
    </>
  );
}

export default BlurFilter;
