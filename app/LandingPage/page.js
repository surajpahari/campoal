import PlatFormUserInfo from "./components/PlatformUserInfo/PlatformUserInfo";
import VoiceSection from "./components/VoiceSection";
import OurValues from "./components/OurValues";
import OurStory from "./components/OurStory";
import VisionSection from "./components/VisionSection";
import StatSection from "./components/StatSection";
import TestimonialSection from "./components/TestimonialSection";
import TeamSection from "./components/TeamSection";
import TryNewSection from "./components/TryNewSection";
const { default: IntroSection } = require("./components/IntroSection");

const LandingPage = () => {
  return (
    <>
      <div className="bg-white">
        <IntroSection />
        <div className="p-20">
          <PlatFormUserInfo />
        </div>
        <div>
          <VoiceSection />
        </div>
        <div>
          <OurValues />
        </div>
        <div>
          <OurStory />
        </div>
        <div>
          <VisionSection />
        </div>
        <div>
          <StatSection />
        </div>
        <div>
          <TestimonialSection />
        </div>
        <div>
          <TeamSection />
        </div>
        <div>
          <TryNewSection />
        </div>
      </div>

    </>
  );
}
export default LandingPage;
