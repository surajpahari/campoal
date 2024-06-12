import PlatFormUserInfo from "./components/PlatformUserInfo/PlatformUserInfo";
import VoiceSection from "./components/VoiceSection";
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
      </div>
    </>
  );
}
export default LandingPage;
