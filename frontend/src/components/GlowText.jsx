export default function GlowText(props) {
  return (
    <div className="flex justify-center items-center">
      <div className="text-8xl font-poppins-bold z-10">{props.text}</div>
      <div className="glow text-8xl font-poppins-bold absolute translate-y-[1%]">{props.text}</div>
    </div>
  )
}