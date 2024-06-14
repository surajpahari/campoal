import Image from "next/image";
const VoiceSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[1128px]">
          <div className="text-dark-blue text-[64px] font-[700] mb-10">
            We Believe in Your Voice.
          </div>
          <div className="flex max-w-[1128px] mb-5">
            <div className="text-light-purple flex-grow text-[18px] font-[400]">
              We're in here with a simple and clear mission is<br /> building a powerful platform for the change,
              helping<br /> people around the world to raise their voices,<br />
              collecting signatures and contribute to the world.
            </div>
            <div className="text-light-purple flex-grow flex justify-end text-[18px] font-[400]">
              <div>
                At Conikal, We believe that the power to change
                the <br />world is in all human beings,
                we also believe that when <br />everyone speaks
                out the problem of society and action<br /> together,
                the world will become a better place.
              </div>
            </div>
          </div>
          <div className="mb-[122px]">
            <Image
              src="/images/voice.jpeg"
              height={383}
              width={1128}
            />
          </div>
        </div>

        <div>
        </div>
      </div>
    </>
  );
}
export default VoiceSection
