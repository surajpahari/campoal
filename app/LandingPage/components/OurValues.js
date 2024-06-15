const ValueCard = (CardData) => {
  return (
    <>
      <div className="">
        <div className="text-[64px] font-[700]">
          {CardData.no}
        </div>
        <div className="text-[24px] font-[800] ">
          {CardData.title}
        </div>
        <div className="max-w-[310px]">
          {CardData.subtitle}
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
      <div className="flex justify-center bg-orange-ash">
        <div className="text-light-purple max-w-[1131px]">
          {/* <div> */}
          {/*   our Values */}
          {/* </div> */}
          <div className="text-[64px] font-[700] mb-10">
            Our values
          </div>
          <div className="flex gap-[48px] flex-wrap">
            {values.map((value) => ValueCard(value))}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurValues;
