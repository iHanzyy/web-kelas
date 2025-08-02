import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Gallery from "../layouts/home/Gallery";
import HeroSection from "../layouts/home/HeroSection"

export default function Home() {
  return (
    <div className=" w-screen h-auto overflow-hidden">
      <Navbar />
      <div className="relative overflow-hidden">
        <HeroSection />
        <Gallery />
      </div>
      <Footer className="bg-secondary" />
    </div>
  )
}