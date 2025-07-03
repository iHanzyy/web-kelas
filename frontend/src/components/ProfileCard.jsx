export default function ProfileCard({src, name}) {
  return (
    <div className="flex items-end flex-col bg-background-secondary w-fit h-fit">
      <div className="flex flex-col w-56 h-56 bg-card">
        <img src={src || "/rick-astley.avif"} className="w-full h-full object-cover object-[50%_30%]" />
      </div>
      <div className="card-glow -translate-y-[31px] w-auto max-w-52 px-4 h-[47px] bg-background flex items-center justify-center">
        <p className="uppercase">{name || "Rick Astley"}</p>
      </div>
    </div>
  )
}