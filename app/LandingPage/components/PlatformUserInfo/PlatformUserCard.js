import Image from "next/image"
const PlatFormUserCard = (CardData) => {
  return (
    <>
      <div className="flex flex-col bg-light-purple pb-[41px] pt-[54px] px-[21px] rounded-lg items-center justify-center max-w-fit text-white">
        <div className="mb-6">
          <div className="flex items-center justify-center bg-white rounded-full h-20 w-20">
            <Image
              src={CardData.icon}
              height={48}
              width={48} // Adjusted width to make it a square, ensuring it fits well inside the circle
            />
          </div>
        </div>
        <div className="text-[24px] text-[700] pb-3">
          {CardData.group}
        </div>
        <div className="text-center max-w-[227px] text-[14px]">
          {CardData?.role}
        </div>
      </div>
    </>
  )
}
export default PlatFormUserCard
