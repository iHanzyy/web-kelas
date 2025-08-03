import GlowText from "../../components/GlowText";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-[60vh] sm:h-[calc(100vh-60px)] text-white sm:text-primary">
      <p className="text-xl">Hi</p>
      <GlowText text="WELCOME" size="text-5xl sm:text-8xl"/>
      <p className="text-base">TO XI RPL 1</p>
    </div>
  )
}