import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="z-100 flex h-[60px] bg-background-secondary justify-between ">
      <div className="flex justify-baseline items-center">
        <Link to={"/"}>
          <img src="/rpl-logo.svg" className="size-[38px] ml-[28px] cursor-pointer" />
        </Link>
      </div>
      <div className=" flex text-primary font-semibold items-center gap-[60px] mr-[60px]">
        <div className="cursor-pointer"><Link to="/about-us">About Us</Link></div>
        <div className="cursor-pointer">Structure & Schedule</div>
        <div className="cursor-pointer">Memories</div>
        <div className="cursor-pointer">Menfess</div>
      </div>
    </div>
  )
}