export default function RectanglePic(props) {
  return (
    <div className="shrink-0 w-[324px]">
      <img 
        src={props.src} 
        className="bg-foreground rounded-[40px] w-full h-[165px] object-cover shadow-[5px_5px_20px_0_rgba(0,0,0,0.1)]"
      />
    </div>
  )
}