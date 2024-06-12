import Image from "next/image"
const PlatFormUserCard = ({ CardData }) => {
  return (
    <>
      <div className="flex flex-col bg-light-purple py-4 px-2 rounded-lg items-center justify-center min-w-[270px]">
        <div>
          <div className="flex items-center justify-center bg-white rounded-full h-20 w-20">
            <Image
              src="signs/activist.svg"
              height={48}
              width={48} // Adjusted width to make it a square, ensuring it fits well inside the circle
            />
          </div>
        </div>
        <div className="text-[24px] text-[700]">
          {CardData.group}
        </div>
        <div>
          {CardData?.role}
        </div>
      </div>
    </>
  )
}
export default PlatFormUserCard
