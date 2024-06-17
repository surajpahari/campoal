import Image from "next/image";
const TeamCard = (Team) => {
  return <>
    <div>
      <div>
        <Image
          className="rounded-xl h-full w-full aspect-square"
          src={Team.image}
          width={235}
          height={273}
          alt={Team.role}
        />
      </div>
      <div className="flex justify-center items-center -translate-y-1/2">
        <div className="w-[190px] bg-white rounded-xl py-[16px] shadow-md">
          <div className="text-center font-bold text-[18px]">
            {Team.name}
          </div>
          <div className="text-center text-[14px] text-faint-purple">
            {Team.role}
          </div>
        </div>
      </div>
    </div >

  </>


}
const TeamSection = () => {
  const teams = [
    {
      image: "/images/team1.svg",
      name: "Greg Rosenke",
      role: "Founder & CEO"
    },
    {
      image: "/images/team2.svg",
      name: "Jenny Uebergerg",
      role: "Chief Marketing Officer"


    },
    {
      image: "/images/team3.svg",
      name: "David Bole",
      role: "Chief Technology Officer"

    }
  ]
  return (
    <>
      <div className="flex justify-center items-center mnb:flex-row flex-col flex-wrap">
        <div className="mnb:min-w-[375px] text-center mnb:text-start p-2 mnb:p-0">
          <div className=" text-[48px] md:text-[64px]  font-[700] text-center mnb:text-start">
            Our Team
          </div>
          <div className="text-faint-purple mb-[40px] mnb:mb-[79px]">
            We need talented, passionate people to<br className="lg:block md:hidden sm:hidden hidden" /> change the world.
          </div>
          <div className="bg-light-purple text-white max-w-[209px] text-center rounded-md mnb:block hidden">
            <button className="text-[18px] font-[700] py-3">
              See all member
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            {teams.map((team, index) => (
              TeamCard(team)
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="bg-light-purple text-white  w-full max-w-[209px] text-center rounded-md mnb:hidden block">
          <button className="text-[18px] font-[700] py-3">
            See all member
          </button>
        </div>
      </div>
    </>

  );
}
export default TeamSection
