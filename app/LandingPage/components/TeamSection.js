import Image from "next/image";
const TeamCard = (Team) => {
  return <>
    <div>
      <div>
        <Image
          className="rounded-md"
          src={Team.image}
          width={200}
          height={300}
        />
      </div>
      <div className="flex flex-col justiy-center items-center -translate-y-1/2 bg-white rounded-md">
        <div>
          {Team.name}
        </div>
        <div>
          {Team.role}
        </div>
      </div>
    </div>

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
      <div className="flex justify-center items-center">
        <div className="min-w-[375px]">
          <div className="text-[64px] font-[700] ">
            Our Team
          </div>
          <div className="text-faint-purple mb-[79px]">
            We need talented, passionate people to<br /> changing the world
          </div>
          <div className="bg-light-purple text-white max-w-[209px] text-center rounded-md">
            <button className="text-[18px] font-[700] py-3">
              See all member
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            {teams.map((team) =>
              TeamCard(team)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default TeamSection
