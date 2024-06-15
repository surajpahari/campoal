const StatSection = () => {
  return (
    <>
      <div className="flex flex-wrap bg-light-purple text-white justify-center items-center gap-20 p-[63px]">
        <div>
          <div className="text-[72px] pb-1 pt-2">
            20,000
          </div>
          <div className="text-center text-[24px] font-[400]">
            Signatures
          </div>
        </div>
        <div>
          <div className="text-[72px] pb-1 pt-2">
            500,000
          </div>
          <div className="text-center text-[24px] font-[400]">
            Campagain
          </div>
        </div>
        <div className="max-w-[375px]">
          <div className="text-[72px] pb-1 pt-2">
            10,000
          </div>
          <div className="text-center text-[24px] font-[400]">
            Donations
          </div>
        </div>
      </div>
    </>
  );
}
export default StatSection;
