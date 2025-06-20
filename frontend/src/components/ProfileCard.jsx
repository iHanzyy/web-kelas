export default function ProfileCard(props) {
  return (
    <div className="flex items-end flex-col bg-background-secondary w-fit h-fit">
      <div className="flex flex-col w-56 h-56 bg-card ">
        <img src={props.src || "/rick-astley.avif"} className="w-full h-full object-cover" />
      </div>
      <div className="card-glow -translate-y-[31px] w-auto px-4 h-[47px] bg-background flex items-center justify-center">
        <p className="uppercase">{props.name || "Rick Astley"}</p>
      </div>
    </div>
  )
}