
export default function RectanglePic({ src, alt = "Gallery image" }) {
  return (
    <div className="shrink-0">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="bg-foreground rounded-[20px] md:rounded-[30px] lg:rounded-[40px] aspect-[324\165]  w-[240px] sm:w-[280px] md:w-[324px] object-cover shadow-[5px_5px_20px_0_rgba(0,0,0,0.1)]"
      />
    </div>
  )
}
