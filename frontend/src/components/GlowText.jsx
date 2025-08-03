export default function GlowText(props) {
  return (
    <div className={`flex justify-center items-center ${props.size ? props.size : "text-8xl"} ${props.font || "font-poppins-bold"}`} {...props}>
      <div className={` z-10`}>{props.text}</div>
      <div className={`glow absolute hidden sm:block`}>{props.text}</div>
    </div>
  )
}