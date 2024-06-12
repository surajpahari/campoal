import PlatFormUserCard from "./PlatformUserCard"
const PlatFormUserInfo = () => {
  return (
    <>
      <div className="flex bg-white p-2  gap-10 justify-center">
        <div>
          <div className="text-faint-purple">
            Who use platform?
          </div>
          <div className="text-dark-blue text-[48px] text-[800]">
            We believe that when everyone speaks out the problem of society and action together, the world will become a better place.
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <PlatFormUserCard CardData={{
              group: "activist",
              role: "Activist does something here which benefits them."
            }} />
            <PlatFormUserCard CardData={{
              group: "activist",
              role: "Activist does something here which benefits them."
            }} />
          </div>
          <div className="flex flex-col gap-2">
            <PlatFormUserCard CardData={{
              group: "activist",
              role: "Activist does something here which benefits them."
            }} />
            <PlatFormUserCard CardData={{
              group: "activist",
              role: "Activist does something here which benefits them."
            }} />
          </div>
        </div>
      </div>
    </>
  )
}
export default PlatFormUserInfo
