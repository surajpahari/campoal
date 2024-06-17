"use client";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import GlobalButton from "./GlobalButton";
import Link from 'next/link'

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
const SideNav = ({ pathname }) => {
  return (
    <>
      <div className="flex h-full">
        <div className="max-w-[500px] rounded-md h-full">
          <div className=" p-4 w-full h-full rounded-lg flex flex-col items-center bg-white text-dark-blue text-[18px] font-[700]">
            <div className="mb-6">
              <input placeholder="Search" className="max-w-[500px] placeholder-dark-purple p-2 size-lg border-2 rounded-xl outline-light-purple" />
              <img
                className="inline ml-2 bg-light-purple p-2 rounded"
                src="icons/search2.svg" />
            </div>
            <div className="hover:cursor-pointer block snb:hidden px-6 pt-2.5 pb-[9px] bg-light-purple rounded-xl text-white text-[16px] mb-4">
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

              <Link
                className={`link ${pathname === '/campaigns' ? 'text-light-purple' : ''}`}
                href="/campaigns">
                Campaigns
              </Link>
            </div>
            <div className=" justify-center mb-4 border-b-1 flex w-full">

              <Link
                className={`link ${pathname === '/fundraiser' ? 'text-light-purple' : ''}`}
                href="/fundraiser">
                Fundraiser
              </Link>
            </div>
            <div className=" justify-center mb-4 border-b-1 flex w-full">

              <Link
                className={`link ${pathname === '/membership' ? 'text-light-purple' : ''}`}
                href="/membership">
                Membership
              </Link>
            </div>
            <div className=" justify-center mb-4 border-b-1 flex w-full">

              <Link
                className={`link ${pathname === '/about' ? 'text-light-purple' : ''}`}
                href="/about">
                About
              </Link>
            </div>
            <div className=" justify-center mb-4 border-b-1 flex w-full">
              <Link
                className={`link ${pathname === '/contact' ? 'text-light-purple' : ''}`}
                href="/contact">
                Contact
              </Link>
            </div>
            <div className=" justify-center mb-4 border-b-1 flex w-full">

              <Link
                className={`link ${pathname === '/blogs' ? 'text-light-purple' : ''}`}
                href="/blogs">
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
const Navbar = () => {
  const pathname = usePathname()
  const [searchInput, setSearchInput] = useState(true);
  const [view, setView] = useState(false);
  useEffect(() => {
    if (view) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [view]);
  return (
    <>
      <div className={`absolute ${view ? 'block' : 'hidden'} mnb:hidden w-full top-[70px] left-0 h-svh`}>
        <div
          onClick={() => {
            setView(false)
          }}
          className={`absolute ${view ? 'block' : 'hidden'} z-0 mnb:hidden w-full h-full bg-light-purple bg-opacity-20 left-0`}>
        </div>
        <div className="z-10 absolute h-full">
          <SideNav pathname={pathname} />
        </div>
      </div>
      <div className=" w-full flex bg-white items-center gap-[31px] pr-[4px]  py-[15px]">
        <div className="flex items-center flex-grow gap-8 pl-2">
          <div className="block mnb:hidden" onClick={() => {
            setView(!view)
          }}>
            <Hamburger />
          </div>
          <Link href="/">
            <div className="gap-8">
              <img
                src="logo.svg"
              />
            </div>
          </Link>
          <GlobalButton />
        </div>
        <div className={`${!searchInput ? "flex-grow" : ""} hidden mnb:flex`}>
          {
            searchInput ?
              <div className={`${searchInput ? "flex" : "hidden"} mnb:flex h-full text-dark-blue leading-4 text-[14px] font-[700] gap-[16px] items-center justify-center`}>
                <div onClick={() => {
                  setSearchInput(false);
                }} className="hover:cursor-pointer">
                  <img
                    className="stroke-white text-white inline mr-2 hover:cursor-pointer h-4 w-4"
                    src="icons/search.svg" />
                  <span>Search</span>
                </div>
                <div>
                  <Link
                    className={`link ${pathname === '/campaigns' ? 'text-light-purple' : ''}`}
                    href="/campaigns">
                    Campaigns
                  </Link>
                </div>
                <div>
                  <Link
                    className={`link ${pathname === '/fundraiser' ? 'text-light-purple' : ''}`}
                    href="/fundraiser">
                    Fundraiser
                  </Link>
                </div>

                <div>
                  <Link
                    className={`link ${pathname === '/membership' ? 'text-light-purple' : ''}`}
                    href="/membership">
                    Membership
                  </Link>
                </div>

                <div>
                  <Link
                    className={`link ${pathname === '/contacts' ? 'text-light-purple' : ''}`}
                    href="/contacts">
                    Contacts
                  </Link>
                </div>
                <div>
                  <Link
                    className={`link ${pathname === '/blogs' ? 'text-light-purple' : ''}`}
                    href="/blogs">
                    Blogs
                  </Link>

                </div>
              </div >
              :
              <div className="flex flex-grow  gap-2 text-dark-blue items-center justify-center">
                <div className="flex-grow w-full ">
                  <input
                    placeholder="Search ..."
                    className=" min-w-full placeholder-faint-purple px-4 py-1  border-2 rounded-xl outline-light-purple" />
                </div>
                <div className="bg-light-purple  rounded hover:cursor-pointer w-[28px] h-[28px] p-1">
                  <img
                    alt="search"
                    src="icons/search2.svg"
                  />
                </div>
                <div onClick={() => {
                  setSearchInput(true)
                }}
                  className="bg-red-500 p-1 rounded hover:cursor-pointer"
                >
                  <img
                    alt="search"
                    src="icons/close.svg"
                  />
                </div>
              </div>
          }
        </div>
        <div className="text-white hidden snb:flex h-full gap-4 items-center justify-center text-[14px] font-[700]">
          <div className="hover:cursor-pointer px-6 pt-2.5 pb-[9px] bg-light-purple rounded-xl">
            <img
              className="inline mr-2"
              src="icons/edit.svg" />
            <span>
              Start a Campaigns
            </span>
          </div>
          <div className="flex items-center">
            <div className=" hover:cursor-pointer pr-6 pl-[31px] pt-2.5 pb-[9px] bg-dark-yellow rounded-l-xl">
              <div>
                <span>Signup</span>
              </div>
            </div>
            <div className="hover:cursor-pointer pr-6 pl-[31px] pt-2.5 pb-[9px] bg-light-purple rounded-r-xl">
              Login
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
export default Navbar;
