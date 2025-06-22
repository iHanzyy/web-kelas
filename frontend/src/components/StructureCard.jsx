export default function StructureCard({ title, image, name }) {
  return (
    <div className="flex flex-col items-center">
      {title && <p className="text-[22.4px]">{title}</p>}
      <img src={image || "/rick-astley.avif"} className="size-[120px] object-cover object-[50%_30%] rounded-full mt-2 mb-5" />
      <div className="rounded-full border-background-tersary border-2 px-8 py-2 text-center text-wrap max-w-[200px]">
        {name || "Rick Astley"}
      </div>
    </div>
  )
}