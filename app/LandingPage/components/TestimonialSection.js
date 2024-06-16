import Image from "next/image";
const TestimonialUserCard = () => {
  return (
    <>
      <div className="flex">
        <div className="rounded-full mr-[18px]">
          <Image
            className="rounded-full"
            src="/images/testimonialuser.jpeg"
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div className="text-[24px] font-[700]"> Jack  Burley</div>
            <div className="text-[18px] font-[400]">Graphic Designer</div>
          </div>
        </div>
      </div>
    </>
  );
}
const TestimonialSection = () => {
  return (
    <>
      <div className="flex items-center justify-center">


        <div className="flex flex-col md:flex-row md:px-40 sm:px-10 gap-[50px]">
          <div className="max-w-[510px] flex-grow flex justify-center items-center">
            <div className="max-w-[510px]">
              <Image
                src="frames/testimonial-banner.svg"
                width={800}
                height={802}
              />
            </div>
          </div>
          <div className="flex-grow items-center justify-center">
            <div className="max-w-[565px]">
              <div className="bg-orange-ash text-[24px] pt-[45px] pb-[31px] pl-[39px] pr-[49px] rounded-md">
                I signed a petition about animals being left behind in BC`s recent floods. Who ever wrote and inset the picture for this narrative sure knows what pics to install to bring the response they want home. Keep up your good work, You do a lot for causes, which would go unaddressed. And forgotten, or just swept under the rug.
              </div>
              <div className="mt-[31px]">
                <TestimonialUserCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialSection;
