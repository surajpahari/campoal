import PlatFormUserInfo from "./components/PlatformUserInfo/PlatformUserInfo";
const { default: IntroSection } = require("./components/IntroSection");

const LandingPage = () => {
  return (
    <>
      <div className="bg-white">
        <IntroSection />
        <div className="p-20">
          <PlatFormUserInfo />
        </div>
      </div>
    </>
  );
}
export default LandingPage;
