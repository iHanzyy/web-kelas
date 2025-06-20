import GlowText from "../../components/GlowText";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-[calc(100vh-60px)]">
      <p className="text-2xl">Hi</p>
      <GlowText text="WELCOME"/>
      <p className="text-xl">TO XI RPL 1</p>
    </div>
  )
}