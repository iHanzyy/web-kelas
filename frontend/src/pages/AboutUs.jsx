import Navbar from "../components/Navbar";
import ProfileCards from "../layouts/about-us/ProfileCards";
import HeroSection from "../layouts/about-us/HeroSection";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="border-[#14FFEC] border-t-[2rem] border-x-[2rem] h-screen">
        <HeroSection />
      </section>
      <ProfileCards />
      <Footer className="bg-background-secondary"/>
    </>
  );
}