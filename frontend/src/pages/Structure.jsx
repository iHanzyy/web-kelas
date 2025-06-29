import { Link } from "react-router";
import Footer from "../components/Footer";
import GlowText from "../components/GlowText";
import Navbar from "../components/Navbar";
import StructureCard from "../components/StructureCard";

export default function Structure() {
  return (
    <div>
      <Navbar />

      <div className="w-screen overflow-hidden">
        <div className="-z-30 w-[882px] h-[480px]  bg-secondary rounded-[50%] translate-y-[310%] translate-x-[100%] absolute"></div>
        <div className="-z-30 w-[882px] h-[480px]  bg-secondary rounded-[50%] translate-y-[210%] translate-x-[-50%] absolute"></div>
        <div className="-z-30 w-[882px] h-[480px]  bg-secondary rounded-[50%] translate-y-[110%] translate-x-[100%] absolute"></div>
      </div>
      <div className="backdrop-blur-[200px]">
        <div className="w-screen h-[calc(100vh-60px)]  flex justify-center items-center">
          <div className="text-[48px] flex"><span className="underline underline-offset-8"><GlowText font="poppins" size={48} text="Structure" /></span>&nbsp;<GlowText font="poppins" size={48} text="&" />&nbsp;<span className="brightness-75"><Link to={"/schedule"}>Schedule</Link></span></div>
        </div>
        <div className="flex flex-col pb-56 w-[1000px] m-auto gap-10">
          <div className="flex flex-col gap-10">
            <StructureCard title={"Wali Kelas"} name={"Rinaldi Maulana Prawiradireja"} image={"https://ptzuhtqthpzprljmnggi.supabase.co/storage/v1/object/public/student//rinaldi-maulana.jpg"} />
            <StructureCard title={"Ketua Kelas"} name={"Mohammad Jonah Setiawan"} image={"https://ptzuhtqthpzprljmnggi.supabase.co/storage/v1/object/public/student//mohammad-jonah-setiawan.JPG"} />
            <StructureCard title={"Wakil Ketua Kelas"} name={"Zulfahmi Risky Aulia"} image={"https://ptzuhtqthpzprljmnggi.supabase.co/storage/v1/object/public/student//zulfahmi-rizki-aulia.JPG"} />
          </div>
          <div className="flex w-full justify-evenly">
            <div className="flex flex-col">
              <h1 className="text-center text-[22.4px] mb-6">Sekretaris</h1>
              <div className="flex gap-3 justify-evenly w-[450px]">
                <StructureCard name={"Muhammad Harun Ikhsan"} image={"https://ptzuhtqthpzprljmnggi.supabase.co/storage/v1/object/public/student//muhammad-harun-ikhsan.JPG"} />
                <StructureCard name={"Nindia Fatwa Qadima"} image={"https://ptzuhtqthpzprljmnggi.supabase.co/storage/v1/object/public/student//nindia-fatwa-qadima.JPG"} />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-center text-[22.4px] mb-6">Bendahara</h1>
              <div className="flex gap-3 justify-evenly w-[450px]">
                <StructureCard name={"Dini Ayuandini"} image={"https://ptzuhtqthpzprljmnggi.supabase.co/storage/v1/object/public/student//dini-ayuandini.JPG"} />
                <StructureCard name={"Sumyar"} image={"https://ptzuhtqthpzprljmnggi.supabase.co/storage/v1/object/public/student//sumyar.JPG"} />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between mt-10">
            <StructureCard title={"Seksi 1"} />
            <StructureCard title={"Seksi 2"} />
            <StructureCard title={"Seksi 3"} />
            <StructureCard title={"Seksi 4"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}