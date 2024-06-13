import Image from "next/image";
const TeamCard = () => {
  return <>
    <div>
      <div>
        <Image
          src="/images/team1.jpeg"
          width={200}
          height={300}
        />
      </div>
      <div className="text-center">
        Founder & CEO
      </div>
    </div>

  </>


}
const TeamSection = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <div className="text-[64px] ">
            Our Team
          </div>
          <div className="text-faint-purple">
            We need talented, passionate people <br />to changing the world
          </div>
          <div>
            <button>
              See all member
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default TeamSection
