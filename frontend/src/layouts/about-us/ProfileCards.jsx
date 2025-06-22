import ProfileCard from "../../components/ProfileCard";

export default function Cards() {
  return (
    <div className="z-10 overflow-hidden bg-background-secondary w-full pb-[140px]">
      <img src="/wavy-top-2.svg" className="absolute -translate-y-[200px] object-cover w-full object-top h-[200px]" />
      <div className="flex w-full flex-col justify-center items-center">
        <div className="w-[1000px] flex justify-around font-poppins-semibold text-3xl">
          <div className="cursor-pointer">ALL</div>
          <div className="cursor-pointer">MEN</div>
          <div className="cursor-pointer">WOMEN</div>
          <div className="cursor-pointer">DEVELOPER</div>
        </div>
        <div className="w-[1000px] mt-8 mb-20">
          <hr className="bg-primary glow" />
        </div>
        <section
          className=" grid grid-cols-[repeat(4,max-content)] justify-between gap-y-20 w-full max-w-[1100px] mx-auto px-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <ProfileCard key={i} />
          ))}
        </section>
      </div>
    </div >
  )
}