import Image from "next/image";
const OurStory = () => {
  return (
    <>
      <div className="flex flex-col  justify-center items-center gap-10 min-h-fit">

        <div className="max-w-[1128px]">
          <div className="flex flex-wrap">
            <div>
              <div
                className="text-[64px] text-dark-blue mb-[34px]"
              >Our Story</div>
              <div className="text-faint-purple max-w-[499px] text-[18px] mr-[65px]">
                <pr>
                  April 2016 when I was working part-time at a travel agency.
                  At that time, there was an environmental problem in my country that made many people angry and they created a petition on Change dot org and shared it on Facebook. I am very interested in the idea of ​​this website, it is really helpful and it has a strong life impact. I wonder why there is not such a website in my country? I think every country should have such a website and the world should have more than one in the community. So I decided to quit my part-time job and start developing a platform for social movements.
                </pr>
                <br />
                <br />

                <pr>
                  Although I have some experience developing websites on WordPress at my company, I still face many challenges to develop and design. I work almost 12 hours a day, after 10 months the first version is released. I kept improving it over the next 3 years with hundreds of changes and new features added.

                </pr>
                <br />
                <br />


                <pr>
                  Today, hundreds of websites powered by Campoal are running around the world, millions of people are signing to support for the problem they care about, starting social movements and making changes to make their country a better place. People have used websites to change tax laws in France, raise funds to protect animals in Germany, speak out about social problems in Turkey, Calls for an end to war in Middle Eastern countries Fundraising to help children in Africa and more.
                </pr>
                <br />
                <br />



                <pr>
                  By empowering entrepreneurs and organizations to give people the opportunity to talk about their problems, I believe that anyone can make the world a better place.
                </pr>
                <br />
                <br />
                Long Ha – Founder
              </div>
            </div>
            <div className="flex">
              <div className="mr-6">
                <div className="mb-6">
                  <Image
                    className="rounded-md"
                    src="/images/service1.jpeg"
                    width={270}
                    height={405}
                  />
                </div>
                <div>
                  <Image
                    className="rounded-md"
                    src="/images/service3.jpeg"
                    width={270}
                    height={270}
                  />
                </div>
              </div>
              <div className="translate-y-1/4">
                <div className="mb-6">
                  <Image
                    className="rounded-md"
                    src="/images/service2.jpeg"
                    width={270}
                    height={405}
                  />
                </div>
                <div>
                  <Image
                    className="rounded-md"
                    src="/images/service4.jpeg"
                    width={270}
                    height={270}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow">
        </div>
      </div>
    </>

  );
}
export default OurStory;
