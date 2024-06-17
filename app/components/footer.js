import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full pt-32 md:px-40 sm:px:10 pb-8 px-2 bg-light-brown text-white">
      <div className="w-full  flex-col">
        <div className="w-full ">
          <div className="flex flex-wrap mb-[75px]">
            <div className="flex items-center justify-center flex-grow">
              <div className="flex-col items-center max-w-[500px] mft:mb-0 mb-10">
                <div className="mb-8 text-center mft:text-start text-[16px] font-[700]">
                  What is campoal?
                </div>
                <div className="mb-8">
                  Campoal is a completed WordPress theme used to create Petition Platform, Foundation and Non-profit website where anyone can be start a social movement, collect supporters and fundraising to change something in society.
                </div>
                <div className="flex items-center justify-center mft:items-start mft:justify-start gap-4">
                  <div>
                    <img
                      src="/footers/footer1.svg"
                    />
                  </div>
                  <div>
                    <img
                      src="/footers/stripe.svg"
                    />
                  </div>
                  <div>
                    <img
                      src="/footers/paypal.svg"
                    />
                  </div>
                  <div>
                    <img
                      src="/footers/norton.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div className="flex  flex-col items-center justify-center sft:flex-wrap  sft:flex-row sft:justify-evenly flex-grow">

              <div className="mb-8 sft:mb-0">
                <div className="text-[16px] font-[700] mb-2 sft:mb-8 text-center sft:text-start">
                  Company
                </div>
                <div className="flex flex-col items-center justify-center sft:block">
                  <div>
                    About
                  </div>
                  <div>
                    Contact
                  </div>
                  <div>
                    Careers
                  </div>
                  <div>
                    Impact
                  </div>
                  <div>
                    Testimonials
                  </div>
                  <div>
                    Team members
                  </div>
                </div>
              </div>

              <div className="mb-8 sft:mb-0">
                <div className="text-[16px] font-[700] mb-2 sft:mb-8 text-center sft:text-start">
                  Resources
                </div>
                <div className="flex flex-col items-center justify-center sft:block">
                  <div>
                    Guide
                  </div>
                  <div>
                    FAQs
                  </div>
                  <div>
                    Press kets
                  </div>
                  <div>
                    Compliance
                  </div>
                  <div>
                    Privacy Policy
                  </div>
                  <div>
                    Terms of service
                  </div>
                </div>
              </div>

              <div className="mt-8 sft:mt-0">
                <div className="text-[16px] font-[700] mb-2 sft:mb-8">
                  Community
                </div>
                <div className="flex flex-col items-center justify-center sft:block">
                  <div>
                    Shop
                  </div>
                  <div>
                    Blog
                  </div>
                  <div>
                    Forum
                  </div>
                  <div>
                    Membership
                  </div>
                  <div>
                    Help center
                  </div>
                  <div>
                    Support desk
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex-col flex  w-full items-center justify-center mft:flex-row mft:items-start mft:justify-start">
          <div className="flex-grow items-center justify-center mb-4 mft:mb-0 mft:justify-start">
            <div>
              © Campoal. Powered by Conikal LLC
            </div>
          </div>
          <div className=" flex gap-4 items-center">
            <div>

              <a className="cursor-pointer" href="https://www.facebook.com/" target="_blank">
                <Image
                  src="/socials/facebook.svg"
                  height={28}
                  width={28}
                  alt="facebook"
                />
              </a>
            </div>
            <div>

              <a className="cursor-pointer" href="https://www.x.com/" target="_blank">
                <Image
                  src="/socials/X.svg"
                  height={28}
                  width={28}
                  alt="X"
                />
              </a>
            </div>
            <div>

              <a className="cursor-pointer" href="https://www.medium.com/" target="_blank">
                <Image
                  src="/socials/medium.svg"
                  height={28}
                  width={28}
                  alt="medium"
                />
              </a>
            </div>
            <div>

              <a className="cursor-pointer" href="https://www.youtube.com/" target="_blank">
                <Image
                  src="/socials/youtube.svg"
                  height={28}
                  width={28}
                  alt="youtbue"
                />
              </a>
            </div>
          </div>
        </div>
      </div>


    </div >
  );
}
export default Footer;
