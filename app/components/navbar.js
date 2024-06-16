const Hamburger = () => {
  return (
    <>
      <div className="space-y-2">
        <span className="block w-5 h-0.5 bg-gray-600"></span>
        <span className="block w-8 h-0.5 bg-gray-600"></span>
        <span className="block w-8 h-0.5 bg-gray-600"></span>
      </div>
    </>
  );
}
const SideNav = () => {
  return (
    <>
      <div className="max-w-[500px] rounded-md">
        <div className=" w-full rounded-lg flex flex-col items-center bg-white text-dark-blue text-[18px] font-[700]">
          <div className="mb-6">
            <input palceholder="Search" className="max-w-[500px] p-2 size-lg border rounded-xl outline-light-purple" />
            <img
              className="inline ml-2"
              src="/icons/search.svg" />
          </div>
          <div className="block snb:hidden px-6 pt-2.5 pb-[9px] bg-light-purple rounded-xl text-white text-[16px] mb-4">
            <img className="inline mr-2" src="/icons/edit.svg" />
            <span>
              Start a Campaigns
            </span>
          </div>
          <div className="flex snb:hidden items-center text-white text-[16px] mb-4">
            <div className="pr-6 pl-[31px] pt-2.5 pb-[9px] bg-dark-yellow rounded-l-xl">
              <div>
                <span>Signup</span>
              </div>
            </div>

            <div className="pr-6 pl-[31px] pt-2.5 pb-[9px] bg-light-purple rounded-r-xl">
              Login
            </div>
          </div>
          <div className=" justify-center mb-4 border-b-1 flex w-full">
            <div>
              Campaigns
            </div>
          </div>
          <div className=" justify-center mb-4 border-b-1 flex w-full">
            <div>
              Fundraiser
            </div>
          </div>
          <div className=" justify-center mb-4 border-b-1 flex w-full">
            <div>
              Membership
            </div>
          </div>
          <div className=" justify-center mb-4 border-b-1 flex w-full">
            <div>
              About
            </div>
          </div>
          <div className=" justify-center mb-4 border-b-1 flex w-full">
            <div>
              Contact
            </div>
          </div>
          <div className=" justify-center mb-4 border-b-1 flex w-full">
            <div>
              Blogs
            </div>
          </div>











        </div>
      </div>
    </>
  );

}
const Navbar = () => {
  return (
    <>
      <div className="absolute mnb:hidden w-full top-[70px] left-0">
        <SideNav />
      </div>
      <div className=" w-full flex bg-white items-center gap-[31px] pr-[14px] pl-[11px] py-[15px]">
        <div className="flex items-center flex-grow gap-8">
          <div className="block mnb:hidden">
            <Hamburger />
          </div>
          <div className="gap-8">
            <img
              src="/logo.svg"
            />
          </div>
          <div className="text-dark-blue font-[700] hover:bg-blue-50 hover:cursor-pointer text-[14px] rounded-2xl pt-[9px] pb-[8px] border pr-[25px] pl-[14px]">
            <img
              className="inline mr-2"
              src="/icons/global.svg" />
            <span>Global</span>
          </div>
        </div>
        <div className="hidden mnb:flex h-full text-dark-blue leading-4 text-[14px] font-[700] gap-[16px] items-center justify-center">
          <div>
            <img
              className="inline mr-2"
              src="/icons/search.svg" />
            <span>Search</span>
          </div>

          <div>
            Campaigns
          </div>

          <div>
            Fundraiser
          </div>

          <div>
            Membership
          </div>

          <div>
            About
          </div>

          <div>
            Contact
          </div>
          <div>
            Blogs
          </div>
        </div>
        <div className="hidden snb:flex h-full gap-4 items-center justify-center text-[14px] font-[700]">
          <div className="px-6 pt-2.5 pb-[9px] bg-light-purple rounded-xl">
            <img
              className="inline mr-2"
              src="/icons/edit.svg" />
            <span clas>
              Start a Campaigns
            </span>
          </div>
          <div className="flex items-center">
            <div className="pr-6 pl-[31px] pt-2.5 pb-[9px] bg-dark-yellow rounded-l-xl">
              <div>
                <span>Signup</span>
              </div>
            </div>

            <div className="pr-6 pl-[31px] pt-2.5 pb-[9px] bg-light-purple rounded-r-xl">
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
