import Image from "next/image"
const PlatFormUserCard = (CardData) => {
  return (
    <>
      <div className="flex flex-col bg-light-purple pb-[41px] pt-[54px] px-[21px] rounded-xl items-center justify-center text-white max-w-[310px]">
        <div className="mb-6">
          <div className="flex items-center justify-center bg-white rounded-full h-20 w-20">
            <Image
              src={CardData.icon}
              height={48}
              width={48}
              alt={CardData.group}
            />
          </div>
        </div>
        <div className="text-[24px] font-[700] pb-3">
          {CardData.group}
        </div>
        <div className="text-center w-[300px] text-[16px] px-1">
          {CardData?.role}
        </div>
      </div>
    </>
  )
}
const PlatFormUserInfo = () => {
  const platformData = [
    {
      group: "Activist",
      role: "Social activists can start a social movements and connect supporters in their communities.",
      icon: "signs/activist.svg"
    },
    {
      group: "Legislators",
      role: "Decision makers at the highest levels of government are engaging with their constituents.",
      icon: "signs/legislator.svg"

    },
    {
      group: "Organizations",
      role: "Leading organizations are advancing their causes and mobilizing new supporters.",
      icon: "signs/organization.svg"
    },
    {
      group: "Reporters",
      role: "Journalists are sourcing powerful stories and covering campaigns hundreds of times a day.",
      icon: "signs/reports.svg"
    }
  ]
  return (
    <div className="flex flex-wrap bg-white p-4 gap-6 justify-center ">
      <div className="w-full md:w-auto text-center md:text-left">
        <div className="text-faint-purple mb-4 text-lg md:text-xl lg:text-2xl">
          Who uses the platform?
        </div>
        <div className="text-dark-blue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[414px] mx-auto md:mx-0">
          We believe that when everyone speaks out about the problems in society and takes action together, the world will become a better place.
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center max-w-[700px]">
        {platformData.map((platform) => (
          PlatFormUserCard(platform)
        ))}
      </div>
    </div>
  );
  // return (
  //   <>
  //     <div className="flex  flex-wrap bg-white p-2  gap-10 justify-center items-center">
  //       <div classsName="">
  //         <div className="text-faint-purple mb-4">
  //           Who use platform?
  //         </div>
  //         <div className="text-dark-blue text-[48px] font-bold max-w-[414px]">
  //           We believe that when everyone speaks out the problem of society and action together, the world will become a better place.
  //         </div>
  //       </div>
  //       <div className="flex gap-2">
  //         <div className="flex  flex-wrap items-center justify-center gap-2 max-w-[550px]">
  //           {platformData.map((platform) => PlatFormUserCard(platform))}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )
}
export default PlatFormUserInfo
