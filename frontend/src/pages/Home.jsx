import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Gallery from "../layouts/home/Gallery";
import HeroSection from "../layouts/home/HeroSection"

export default function Home() {
  return (
    <div className=" w-screen h-auto overflow-hidden">
      <Navbar />
      <HeroSection />
      <Gallery />
      <Footer className="bg-secondary"/>
    </div>
  )
}