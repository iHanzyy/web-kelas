export default function Navbar() {
  return (
    <div className="flex h-[60px] bg-background-secondary justify-between ">
      <div className="flex justify-baseline items-center">
        <img src="/rpl-logo.svg" className="size-[38px] ml-[28px] cursor-pointer"/>
      </div>
      <div className=" flex text-primary font-semibold items-center gap-[60px] mr-[60px]">
        <div className="cursor-pointer">About Us</div>
        <div className="cursor-pointer">Structure & Schedule</div>
        <div className="cursor-pointer">Memories</div>
        <div className="cursor-pointer">Menfess</div>
      </div>
    </div>
  )
}