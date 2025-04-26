import Navbar from "../components/Navbar";
import HeroSection from "../layouts/home/HeroSection"

export default function HomePage() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <HeroSection />
    </div>
  )
}