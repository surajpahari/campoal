import PlatFormUserCard from "./PlatformUserCard"
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
    <>
      <div className="flex  flex-wrap bg-white p-2  gap-10 justify-center items-center">
        <div classsName="">
          <div className="text-faint-purple mb-4">
            Who use platform?
          </div>
          <div className="text-dark-blue text-[48px] font-bold max-w-[414px]">
            We believe that when everyone speaks out the problem of society and action together, the world will become a better place.
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex  flex-wrap items-center justify-center gap-2 max-w-[550px]">
            {platformData.map((platform) => PlatFormUserCard(platform))}
          </div>
        </div>
      </div>
    </>
  )
}
export default PlatFormUserInfo
