
export default function RectanglePic({ src, alt = "Gallery image" }) {
  return (
    <div className="shrink-0 w-[324px]">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="bg-foreground rounded-[40px] w-full h-[165px] object-cover shadow-[5px_5px_20px_0_rgba(0,0,0,0.1)]"
      />
    </div>
  )
}
