// import Image from "next/image"
// const IntroSection = () => {
//   return (
//     <>
//       <div className="bg-orange-ash flex flex-col justify-center items-center pt-6">
//         <div className="px-1 text-dark-blue text-[72px] font-[700] text-center">
//           World's Petition Platfrom
//         </div>
//         <div className="text-center text-faint-purple px-20 mt-3">
//           We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement accross the world.
//         </div>
//         <div className="mt-6">
//           <Image src="/frames/intro-banner.svg" width={771} height={540} />
//         </div>
//
//       </div>
//     </>
//
//   )
// }
// export default IntroSection;
//
import Image from "next/image";

const IntroSection = () => {
  return (
    <div className="bg-orange-ash flex flex-col justify-center items-center py-6">
      <div className="px-2 sm:px-4 md:px-6 text-dark-blue text-center font-bold">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[86px]">
          World's Petition Platform
        </h1>
      </div>
      <div className="text-center text-faint-purple px-4 sm:px-10 md:px-60 mt-3 text-[18px] md:-[21px]">
        We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely start their own petition. Today, we offer a trusted and easy-to-use platform for social movements across the world.
      </div>
      <div className="mt-6">
        <Image
          src="/frames/intro-banner.svg"
          width={771}
          height={540}
          className="w-full max-w-[771px] h-auto"
          alt="Intro Banner"
        />
      </div>
    </div>
  );
};
export default IntroSection;
