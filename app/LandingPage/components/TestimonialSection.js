import Image from "next/image";
const TestimonialUserCard = () => {
  return (
    <>
      <div className="flex">
        <div className="rounded-full">
          <Image
            className="rounded-full"
            src="/images/testimonialuser.jpeg"
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div> Jack  Burley</div>
            <div>Graphic Designer</div>
          </div>
        </div>
      </div>
    </>
  );
}
const TestimonialSection = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Image
            src="frames/testimonial-banner.svg"
            width={800}
            height={802}
          />
        </div>
        <div className="flex items-center justify-center ">
          <div>
            <div className="bg-orange-ash">
              I signed a petition about animals being left behind in BC`s recent floods. Who ever wrote and inset the picture for this narrative sure knows what pics to install to bring the response they want home. Keep up your good work, You do a lot for causes, which would go unaddressed. And forgotten, or just swept under the rug.
            </div>
            <div>
              <TestimonialUserCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialSection;
