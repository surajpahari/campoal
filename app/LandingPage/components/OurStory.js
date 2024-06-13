import Image from "next/image";
const OurStory = () => {
  return (
    <>
      <div className="flex p-20 gap-10">
        <div>
          <div
            className="text-[64px] text-dark-blue"
          >Our Story</div>
          <div className="text-light-purple">
            April 2016 when I was working part-time at a travel agency.
            At that time, there was an environmental problem in my country that made many people angry and they created a petition on Change dot org and shared it on Facebook. I am very interested in the idea of ​​this website, it is really helpful and it has a strong life impact. I wonder why there is not such a website in my country? I think every country should have such a website and the world should have more than one in the community. So I decided to quit my part-time job and start developing a platform for social movements.

            Although I have some experience developing websites on WordPress at my company, I still face many challenges to develop and design. I work almost 12 hours a day, after 10 months the first version is released. I kept improving it over the next 3 years with hundreds of changes and new features added.

            Today, hundreds of websites powered by Campoal are running around the world, millions of people are signing to support for the problem they care about, starting social movements and making changes to make their country a better place. People have used websites to change tax laws in France, raise funds to protect animals in Germany, speak out about social problems in Turkey, Calls for an end to war in Middle Eastern countries Fundraising to help children in Africa and more.

            By empowering entrepreneurs and organizations to give people the opportunity to talk about their problems, I believe that anyone can make the world a better place.

            Long Ha – Founder
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex">
            <div>
              <Image
                src="/images/service1.jpeg"
                width={800}
                height={800}
              />
            </div>
            <div>
              <Image
                width={800}
                height={800}
                src="/images/service2.jpeg" />
            </div>
          </div>
          <div>
            <Image
              width={800}
              height={800}
              src="/images/service3.jpeg" />
            <Image
              width={800}
              height={800}
              src="/images/service4.jpeg" />
            {/* <Image */}
            {/*   src="images/service1.jpeg" /> */}
            {/* <Image */}
            {/*   src="images/service1.jpeg" /> */}
          </div>
        </div>
      </div>
    </>

  );
}
export default OurStory;
