const TryNewSection = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-light-purple py-10 gap-20">
        <div className="text-white">
          Try something new and<br /> fresh right now
        </div>
        <div>
          <div className="rounded-full">
            <input className="rounded-full" />
          </div>
          <div className="text-white">
            Get latest update from us. You can cancel any time.
          </div>
        </div>
        <div className="bg-orange-400 text-white p-2 rounded-lg">
          Subscribe
        </div>
      </div>
    </>
  )
}
export default TryNewSection;
