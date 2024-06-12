const ValueCard = () => {
  return (
    <>
      <div>
        <div className="text-[64px] text-[700]">
          01
        </div>
        <div>
          Make more value not money
        </div>
        <div>
          We focus on creative and delivering value to people across the world.
        </div>
      </div>
    </>
  );
}
const OurValues = () => {
  return (
    <>
      <div className="p-20 text-light-purple bg-orange-ash">
        <div className="text-[64px] text-[700] mb-10">
          Our values
        </div>
        <div className="flex">
          <ValueCard />
          <ValueCard />
          <ValueCard />
        </div>
      </div>
    </>
  )
}

export default OurValues;
