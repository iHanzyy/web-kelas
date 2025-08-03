import { useState } from "react"
import { Link } from "react-router"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="">
      {/* Mobile menu */}
      <div className={`z-100 flex sm:hidden`}>
        <div className={`fixed z-100 pb-10 transition-all duration-300 backdrop-blur-[7px] ${isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"}`}>
          <div onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? "rotate-[720deg]" : "rotate-0"} cursor-pointer transition-transform duration-[1s] text-white my-4 mx-8 size-10 flex items-center justify-center sm:hidden`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x" className={`size-6 absolute transition-transform duration-500`}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </div>
          <div className=" flex flex-col items-center w-screen">
            <Link to={"/"} className="text-primary font-semibold text-lg mb-4 block cursor-default">Home</Link>
            <Link to={"/about-us"} className="text-primary font-semibold text-lg mb-4 block cursor-default">About Us</Link>
            <Link to={"/structure"} className="text-primary font-semibold text-lg mb-4 block cursor-default">Structure & Schedule</Link>
            <Link to={"/memories"} className="text-primary font-semibold text-lg mb-4 block cursor-default">Memories</Link>
            <Link to={"/menfess"} className="text-primary font-semibold text-lg mb-4 block cursor-default">Menfess</Link>
            <div className="absolute inset-0 bg-black opacity-40 -z-10 w-screen pointer-events-none"></div>
          </div>
        </div>
        <div onClick={() => setIsMenuOpen(true)} className={`${isMenuOpen ? "translate-y-[-100vw]" : "translate-y-0"} cursor-pointer fixed z-100 transition-all duration-300 my-4 mx-8 size-10 flex items-center justify-center sm:hidden rounded-[50%] border-1 border-white shadow-[0_4px_30px_0_#0000001A] backdrop-blur-[6.9px]`}>
          <img src="/grid-menu.svg" alt="menu icon" className="size-6" />
        </div>
      </div>

      {/* Tablet to desktop menu */}
      <div className="z-100 h-[60px] bg-background-secondary justify-between hidden sm:flex">
        <div className="flex justify-baseline items-center">
          <Link to={"/"}>
            <img src="/rpl-logo.svg" className="size-[38px] ml-[28px] cursor-pointer" />
          </Link>
        </div>

        <div className="flex text-primary font-semibold items-center gap-7 md:gap-[60px] mr-[60px]">
          <div className="nav-item cursor-pointer">
            <Link to="/about-us">About Us</Link>
          </div>
          <div className="nav-item cursor-pointer">
            <Link to="/structure">Structure & Schedule</Link>
          </div>
          <div className="nav-item cursor-pointer">
            <Link to="/memories">Memories</Link>
          </div>
          <div className="nav-item cursor-pointer">
            <Link to="/menfess">Menfess</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
