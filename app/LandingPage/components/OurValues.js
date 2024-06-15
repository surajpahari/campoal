const ValueCard = (CardData) => {
  return (
    <>
      <div className="flex-grow">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <div className="text-[32px] sm:text-[48px] md:text-[64px] font-[700]">
            {CardData.no}
          </div>
          <div className="text-[16px] sm:text-[20px] md:text-[24px] font-[800]">
            {CardData.title}
          </div>
          <div className="max-w-[310px] text-center md:text-left">
            {CardData.subtitle}
          </div>
        </div>
      </div>
    </>
  );
}
const OurValues = () => {
  const values = [
    {
      no: "01",
      title: "Make more value, not money.",
      subtitle: "We focus on creative and delivering value to people across the world."
    },
    {
      no: "02",
      title: "Make it simple, not stressful.",
      subtitle: "We make everything simple, clearly and accessible to everyone."
    },
    {
      no: "03",
      title: "Be human, not devil.",
      subtitle: "We do the right things with love and sincerity to create sustainability."
    },



  ]
  return (
    <>
      <div className="bg-orange-ash py-10">
        <div className="text-light-purple px-4 sm:px-10 md:px-40">
          <div className="text-[32px] sm:text-[48px] md:text-[64px] font-[700] mb-5 sm:mb-8 md:mb-10 md:text-start text-center">
            Our values
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-[48px]">
            {values.map((value) => (
              ValueCard(value)

            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurValues;
