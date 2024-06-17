import Image from "next/image";

const VoiceSection = () => {
  return (
    <div className="flex flex-col px-4 sm:px-10 md:px-40">
      <div className="w-full">
        <div className="text-dark-blue text-[40px] sm:text-[23px] md:text-[64px] font-[700] mb-6 md:mb-10 text-center md:text-left">
          We Believe in Your Voice.
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-5 text-[16px] sm:text-[18px]">
          <div className="text-faint-purple mb-4 md:mb-0 md:mr-4">
            We're in here with a simple and clear mission:
            building a powerful platform for change, helping
            people around the world to raise their voices,
            collecting signatures and contributing to the world.
          </div>
          <div className="text-faint-purple ">
            At Conikal, we believe that the power to change
            the world is in all human beings. We also believe that when
            everyone speaks out about the problems of society and acts            together, the world will become a better place.
          </div>
        </div>
        <div className=" flex items-center justify-center mb-[40px] md:mb-[122px] w-full">
          <div>
            {/**/}
            {/* <div className="w-full"> */}
            {/*   <img src="/images/voice.jpeg" alt="Voice" className="object-cover h-[383px] w-[1128]" /> */}
            {/* </div> */}
            <Image
              className="rounded-lg"
              src="/images/voice.svg"
              height={383}
              width={1128}
              object-fit="cover"
              priority="true"
              alt="Voice"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default VoiceSection;
