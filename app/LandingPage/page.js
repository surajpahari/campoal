import PlatFormUserInfo from "./components/PlatformUserInfo";
import VoiceSection from "./components/VoiceSection";
import OurValues from "./components/OurValues";
import OurStory from "./components/OurStory";
import VisionSection from "./components/VisionSection";
import StatSection from "./components/StatSection";
import TestimonialSection from "./components/TestimonialSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
const { default: IntroSection } = require("./components/IntroSection");

const LandingPage = () => {
  return (
    <>
      <div className="bg-white">
        <IntroSection />
        <div className="flex items-center justify-center pt-[178px]">
          <PlatFormUserInfo />
        </div>
        <div className="mt-[200px]">
          <VoiceSection />
        </div>
        <div className="mt-[113px]">
          <OurValues />
        </div>
        {/* <div className="mt-[186px]"> */}
        {/*   <OurStory /> */}
        {/* </div> */}
        {/* <div className="mt-[191px]"> */}
        {/*   <VisionSection /> */}
        {/* </div> */}
        {/* <div className="mb-[180px]"> */}
        {/*   <StatSection /> */}
        {/* </div> */}
        {/* <div className="mb-[223px]"> */}
        {/*   <TestimonialSection /> */}
        {/* </div> */}
        {/* <div> */}
        {/*   <TeamSection /> */}
        {/* </div> */}
        {/* <div> */}
        {/*   <ContactSection /> */}
        {/* </div> */}
      </div >

    </>
  );
}
export default LandingPage;
