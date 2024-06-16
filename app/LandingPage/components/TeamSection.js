import Image from "next/image";
const TeamCard = (Team) => {
  return <>
    <div>
      <div>
        <Image
          className="rounded-md h-full w-full aspect-square"
          src={Team.image}
          width={235}
          height={273}
        />
      </div>
      <div className="flex justify-center items-center -translate-y-1/2 ">
        <div className="w-[190px] bg-white rounded-md pt-[17px]">
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
      image: "/images/team1.jpeg",
      name: "Greg Rosenke",
      role: "Founder & CEO"
    },
    {
      image: "/images/team2.jpeg",
      name: "Jenny Uebergerg",
      role: "Chief Marketing Officer"


    },
    {
      image: "/images/team3.jpeg",
      name: "David Bole",
      role: "Chief Technology Officer"

    }
  ]
  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <div className="min-w-[375px]">
          <div className="text-[64px] font-[700]">
            Our Team
          </div>
          <div className="text-faint-purple mb-[79px]">
            We need talented, passionate people to<br className="lg:block sm:hidden" /> change the world
          </div>
          <div className="bg-light-purple text-white max-w-[209px] text-center rounded-md lg:block hidden">
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
      <div className="flex items-center justify-center">
        <div className="bg-light-purple text-white  w-full max-w-[209px] text-center rounded-md lg:hidden sm:block">
          <button className="text-[18px] font-[700] py-3">
            See all member
          </button>
        </div>
      </div>
    </>

  );
}
export default TeamSection
