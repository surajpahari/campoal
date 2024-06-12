import PlatFormUserInfo from "./components/PlatformUserInfo/PlatformUserInfo";
import VoiceSection from "./components/VoiceSection";
import OurValues from "./components/OurValues";
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
      </div>
    </>
  );
}
export default LandingPage;
