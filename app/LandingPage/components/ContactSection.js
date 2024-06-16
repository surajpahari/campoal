const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-light-purple pt-[52px] pb-[100px]">
      <div className="text-white text-[48px] font-[800] text-center py-[13px] w-full mb-[54px]">
        Feel free to contact us.
        <br />
        We'll be glad to hear form you.
      </div>

      <div className="bg-white p-6 rounded-lg max-w-[746px]  py-[13px] w-full flex flex-col items">
        <div className="my-2 max-w-638px">
          <div className="py-[13px] w-full text-[18px] font-[700]">
            Your name
          </div>
          <div className="py-[13px] w-full">
            <input className=" text-[18px] py-[13px] w-full border border-1 rounded-lg p-1 outline-none" />
          </div>
        </div>

        <div className="my-2">
          <div className="py-[13px] w-full text-[18px] font-[700]">
            Company Name
          </div>
          <div>
            <input className="py-[13px] w-full border border-1 rounded-lg p-1 outline-none" />
          </div>
        </div>

        <div className="my-2">
          <div className="py-[13px] w-full text-[18px] font-[700]">
            Your Email
          </div>
          <div>
            <input className="py-[13px] w-full border border-1 rounded-lg p-1 outline-none" />
          </div>
        </div>

        <div className="my-2">
          <div className="py-[13px] w-full text-[18px] font-[700]">
            Subject
          </div>
          <div>
            <input className="py-[13px] w-full border border-1 rounded-lg p-1 outline-none" />
          </div>
        </div>

        <div className="my-2">
          <div className="py-[13px] w-full text-[18px] font-[600]">
            Message
          </div>
          <div>
            <input className="py-[13px] w-full border border-1 rounded-lg p-1 outline-none" />
          </div>
        </div>


        <div className="bg-light-purple flex items-center py-[13px] justify-center rounded-lg">
          <div className="text-white text-[18px]">
            <button>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactSection;
