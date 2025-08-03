export default function ProfileCard({src, name}) {
  return (
    <div className="flex items-end flex-col bg-background-secondary w-fit h-fit">
      <div className="flex flex-col size-36 sm:size-48 md:size-56 bg-none">
        <img src={src || "/rick-astley.avif"} className="rounded-[20px] sm:rounded-none w-full h-full object-cover object-[50%_30%] brightness-95 hover:brightness-100 transition-all ease-in duration-300 " />
      </div>
      <div className="card-glow -translate-y-[31px] w-auto max-w-32 sm:max-w-40 md:max-w-52 px-4 h-[47px] bg-background flex items-center justify-center">
        <p className="uppercase sm:text-sm text-xs">{name || "Rick Astley"}</p>
      </div>
    </div>
  )
}