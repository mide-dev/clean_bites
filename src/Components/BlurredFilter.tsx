function BlurredFilter({ showFilter }: { showFilter: boolean }) {
  return (
    showFilter && (
      <div className="absolute w-16 blur-md h-full bg-[#ffffff] inset-0"></div>
    )
  );
}

export default BlurredFilter;
