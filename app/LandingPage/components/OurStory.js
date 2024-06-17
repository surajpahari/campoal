
import Image from "next/image";

const OurStory = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-fit md:px-40 sm:px-10 p-2">
      <div className="">
        <div className="flex flex-col justify-center items-center mnb:flex-row md:justify-start flex-wrap md:items-start">
          <div className="flex-1">
            <div className="text-center md:text-start text-4xl md:text-5xl lg:text-6xl text-dark-blue mb-6 md:mb-8 lg:mb-10 font-bold">
              Our Story
            </div>
            <div className=" text-faint-purple text-sm md:text-base lg:text-lg space-y-4 md:space-y-6 lg:space-y-8 leading-relaxed pl-1">
              <p>
                April 2016 when I was working part-time at a travel agency.
                At that time, there was an environmental problem in my country that made many people angry and they created a petition on Change dot org and shared it on Facebook. I am very interested in the idea of ​​this website, it is really helpful and it has a strong life impact. I wonder why there is not such a website in my country? I think every country should have such a website and the world should have more than one in the community. So I decided to quit my part-time job and start developing a platform for social movements.
              </p>
              <p>
                Although I have some experience developing websites on WordPress at my company, I still face many challenges to develop and design. I work almost 12 hours a day, after 10 months the first version is released. I kept improving it over the next 3 years with hundreds of changes and new features added.
              </p>
              <p>
                Today, hundreds of websites powered by Campoal are running around the world, millions of people are signing to support for the problem they care about, starting social movements and making changes to make their country a better place. People have used websites to change tax laws in France, raise funds to protect animals in Germany, speak out about social problems in Turkey, Calls for an end to war in Middle Eastern countries Fundraising to help children in Africa and more.
              </p>
              <p>
                By empowering entrepreneurs and organizations to give people the opportunity to talk about their problems, I believe that anyone can make the world a better place.
              </p>
              <p>
                Long Ha – Founder
              </p>
            </div>
          </div>
          <div className="flex flex-col mnb:w-auto w-full items-center justify-center md:flex-row md:ml-10 mt-10 md:mt-0">
            <div className="flex flex-col space-y-6 md:space-y-0 md:mr-6">
              <div className="mb-6 min-w-[270px]">
                <Image
                  className="rounded-md"
                  src="/images/service1.jpeg"
                  width={270}
                  height={405}
                  alt="Service 1"
                />
              </div>
              <div className="min-w-[270px]">
                <Image
                  className="rounded-md"
                  src="/images/service3.jpeg"
                  width={270}
                  height={270}
                  alt="Service 3"
                />
              </div>

            </div>
            <div className="flex flex-col space-y-6 md:space-y-0 mnb:translate-y-1/2 min-[1735px]:translate-y-0">
              <div className="mb-6 min-w-[270px]">
                <Image
                  className="rounded-md"
                  src="/images/service2.jpeg"
                  width={270}
                  height={405}
                  alt="Service 2"
                />
              </div>
              <div className="min-w-[270px]">
                <Image
                  className="rounded-md"
                  src="/images/service4.jpeg"
                  width={270}
                  height={270}
                  alt="Service 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;

