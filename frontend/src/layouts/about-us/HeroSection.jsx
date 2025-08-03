import GlowText from "../../components/GlowText";

export default function HeroSection() {
  return (
    <div className="text-white sm:text-primary translate-y-[-2rem] flex items-center justify-center flex-col w-full h-[calc(100vh-60px)]">
      <GlowText text="ABOUT US" size="text-5xl sm:text-8xl"/>
    </div>
  );
}