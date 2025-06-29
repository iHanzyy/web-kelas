export default function GlowText(props) {
  return (
    <div className="flex justify-center items-center" {...props}>
      <div className={`${props.size ? props.size : "text-8xl"} ${props.font || "font-poppins-bold"} z-10`}>{props.text}</div>
      <div className={`${props.size ? props.size : "text-8xl"} glow ${props.font || "font-poppins-bold"} absolute`}>{props.text}</div>
    </div>
  )
}