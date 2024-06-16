import Image from "next/image";
const VisionSection = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center bg-orange-ash">
        <div className="text-[64px] font-[700] text-dark-blue mb-5">
          Our Vision
        </div>
        <div className="text-faint-purple mb-[113px] text-center">
          Our vision is to be the best petition platform in the world.
        </div>
        <div>
          <Image
            src="frames/vision-banner.svg"
            width={771}
            height={540}
          />
        </div>
      </div>
    </>
  );
}
export default VisionSection
