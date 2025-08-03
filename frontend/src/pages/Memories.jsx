import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlowText from "../components/GlowText";
import Gallery from "../layouts/memories/Gallery";

export default function Memories() {
  return (
    <>
      <Navbar />
      <section className="text-white sm:text-primary border-[#14FFEC] sm:border-t-[2rem] sm:border-x-[2rem] h-screen relative -z-20 overflow-hidden">
        <div className="px-8 flex-col sm:flex-row gap-4 flex items-center justify-center w-full h-[calc(100vh-60px)]">
          <div className="w-full sm:w-1/2">
            <GlowText text="MEMORIES" font="font-poppins-semibold" size="text-5xl sm:text-7xl" />
          </div>
          <div className="w-full sm:w-1/2">
            <p className="max-w-[500px] font-poppins-semibold text-xl sm:text-2xl text-center text-wrap">"Sometimes you will never know the value of a moment until it becomes a memory." Dr. Seuss</p>
          </div>
        </div>
      </section>
      <Gallery />
      <Footer className="bg-background-secondary" />
    </>
  );
}