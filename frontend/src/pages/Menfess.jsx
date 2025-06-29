import Footer from "../components/Footer";
import GlowText from "../components/GlowText";
import MenfessCard from "../components/MenfessCard";
import Navbar from "../components/Navbar";

export default function Menfess() {
  return (
    <div>
      <Navbar />

      <div className="w-screen overflow-hidden">
        <div className="-z-30 w-[882px] h-[480px]  bg-secondary rounded-[50%] translate-y-[260%] translate-x-[-50%] absolute"></div>
        <div className="-z-30 w-[882px] h-[480px]  bg-secondary rounded-[50%] translate-y-[160%] translate-x-[100%] absolute"></div>
      </div>
      <div className="backdrop-blur-[200px]">
        <section className="backdrop-blur-[200px] h-[calc(100vh-60px)] w-screen flex justify-center items-center overflow-y-hidden">
          <div className="-z-20 w-[882px] h-[480px] blur-[200px] translate-y-[90%] bg-primary rounded-[50%] absolute"></div>
          <div className="-z-30 absolute blur-[200px] -translate-y-[50px] h-[85vh] w-screen flex justify-center items-center bg-secondary brightness-50">          </div>
          <div className="flex flex-col">
            <GlowText text="MENFESS" size="text-5xl" font="font-poppins-semibold" />
            <div className="mt-4 flex justify-between bg-background-secondary w-[753px] h-[340px] rounded-[52px] p-12 gap-10">
              <div className="flex flex-col items-center w-1/2 gap-8">
                <div className="flex flex-nowrap gap-2 bg-input rounded-[52px] w-full py-3 px-5 overflow-hidden">
                  <div className="font-poppins-semibold">FROM : </div>
                  <input type="text" className="w-9/12" />
                </div>
                <div className="flex flex-nowrap gap-2 bg-input rounded-[52px] w-full py-3 px-5">
                  <div className="font-poppins-semibold">TO : </div>
                  <input type="text" className="w-10/12" />
                </div>
                <button className="bg-input rounded-[52px] w-fit py-1 px-5 cursor-pointer font-poppins-semibold">SEND</button>
              </div>
              <div className="w-1/2 bg-input rounded-[28px] h-full resize-none flex flex-col p-4">
                <div className="font-poppins-semibold">MESSAGE : </div>
                <textarea name="" id="" className="h-full w-full resize-none "></textarea>
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-[1100px] justify-center items-center mt-10 pb-40 mx-auto gap-10 flex-wrap">
          <MenfessCard sender={"Romeo"} receiver={"Juliet"} message={"Kalau mencintaimu adalah kesalahan, maka biarkan aku salah selamanya."} />
          <MenfessCard sender={"Romeo"} receiver={"Juliet"} message={"Kalau mencintaimu adalah kesalahan, maka biarkan aku salah selamanya."} />
          <MenfessCard sender={"Romeo"} receiver={"Juliet"} message={"Kalau mencintaimu adalah kesalahan, maka biarkan aku salah selamanya."} />
          <MenfessCard sender={"Romeo"} receiver={"Juliet"} message={"Kalau mencintaimu adalah kesalahan, maka biarkan aku salah selamanya."} />
          <MenfessCard sender={"Romeo"} receiver={"Juliet"} message={"Kalau mencintaimu adalah kesalahan, maka biarkan aku salah selamanya."} />
          <MenfessCard sender={"Romeo"} receiver={"Juliet"} message={"Kalau mencintaimu adalah kesalahan, maka biarkan aku salah selamanya."} />
          <MenfessCard sender={"Romeo"} receiver={"Juliet"} message={"Kalau mencintaimu adalah kesalahan, maka biarkan aku salah selamanya."} />
          <MenfessCard sender={"Romeo"} receiver={"Juliet"} message={"Kalau mencintaimu adalah kesalahan, maka biarkan aku salah selamanya."} />
        </section>

      </div>
      <Footer />
    </div>
  );
}