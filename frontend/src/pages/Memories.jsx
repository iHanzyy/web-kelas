import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlowText from "../components/GlowText";
import Gallery from "../layouts/memories/Gallery";

export default function Memories() {
  return (
    <>
      <Navbar />
      <section className="border-[#14FFEC] border-t-[2rem] border-x-[2rem] h-screen relative -z-20 overflow-hidden">
        <div className="translate-y-[-2rem] flex items-center justify-center w-full h-[calc(100vh-60px)]">
          <div className="flex-1/2">
            <GlowText text="MEMORIES" font="font-poppins-semibold" size="text-7xl"/>
          </div>
          <div className="flex-1/2">
            <p className="w-[500px] font-poppins-semibold text-2xl text-center">"Sometimes you will never know the value of a moment until it becomes a memory." Dr. Seuss</p>
          </div>
        </div>
      </section>
      <Gallery />
      <Footer className="bg-background-secondary" />
    </>
  );
}