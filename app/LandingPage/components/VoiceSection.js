import Image from "next/image";
const VoiceSection = () => {
  return (
    <>
      <div className="p-20">
        <div className="text-dark-blue text-[64px] text-[700]">
          We Believe in Your Voice.
        </div>
        <div className="flex">
          <div className="text-light-purple">
            We're in here with a simple and clear mission
            is building a powerful platform for the change,
            helping people around the world to raise their voices,
            collecting signatures and contribute to the world.
          </div>
          <div className="text-light-purple">
            At Conikal, We believe that the power to change
            the world is in all human beings,
            we also believe that when everyone speaks
            out the problem of society and action together,
            the world will become a better place.
          </div>
        </div>
        <Image
          src="/images/voice.jpeg"
          height={637.68}
          width={1132.36}
        />

        <div>
        </div>
      </div>
    </>
  );
}
export default VoiceSection
