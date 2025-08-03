export default function StructureCard({ title, image, name }) {
  return (
    <div className="flex flex-col items-center md:min-w-[190px]">
      {title && <p className="text-base sm:text-xl md:text-[22.4px] text-center">{title}</p>}
      <img src={image || "/rick-astley.avif"} className=" size-[80px] sm:size-[100px] md:size-[120px] object-cover object-[50%_25%] rounded-full mt-2 mb-5" />
      <div className="text-xs md:text-sm rounded-full border-background-tersary border-2 px-2 md:px-8 py-2 text-center text-wrap  max-w-[150px] md:max-w-[200px]">
        {name || "Rick Astley"}
      </div>
    </div>
  )
}