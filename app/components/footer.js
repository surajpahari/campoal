import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full pt-16 md:px-40 sm:px:10 pb-8">
      <div className="w-full  flex-col">
        <div className="w-full ">
          <div className="flex w-full mb-[75px]">
            <div className=" max-w-[600px] ">
              <div className="mb-8">
                What is campoal?
              </div>
              <div className="mb-8">
                Campoal is a completed WordPress theme used to create Petition Platform, Foundation and Non-profit website where anyone can be start a social movement, collect supporters and fundraising to change something in society.
              </div>
              <div className="flex gap-4">
                <div>
                  <div className="">
                    <img
                      src="/footers/footer1.svg"
                    />
                  </div>
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
            <div className="flex justify-evenly flex-grow">
              <div className=" ">
                <div className="">
                  <div>
                    Company
                  </div>
                  <div>
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

              </div>
              <div className="">
                <div>
                  <div>
                    Resources
                  </div>
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
              <div className="  ">
                <div>
                  Community
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
        <div className="flex  w-full">
          <div className="flex-grow h-10  flex items-center">
            <div>
              © Campoal. Powered by Conikal LLC
            </div>
          </div>
          <div className=" flex h-10 gap-4 items-center">
            <div>
              <Image
                src="/socials/X.svg"
                height={28}
                width={28}
                alt="footer 1"
              />
            </div>

            <div>
              <Image
                src="/socials/facebook.svg"
                height={28}
                width={28}
                alt="paypal"
              />
            </div>
            <div>
              <Image
                src="/socials/medium.svg"
                height={28}
                width={28}
                alt="stripe"
              />
            </div>
            <div>
              <Image
                src="/socials/youtube.svg"
                height={28}
                width={28}
                alt="stripe"
              />
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}
export default Footer;
