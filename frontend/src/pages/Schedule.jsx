import { Link } from "react-router";
import Footer from "../components/Footer";
import GlowText from "../components/GlowText";
import Navbar from "../components/Navbar";
import { useState } from "react";
import schedule from "../data/schedule.json";

export default function Schedule() {
  const days = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
  ]


  const [jadwal, setJadwal] = useState(schedule[0]);

  const [subjectMode, setSubjectMode] = useState("Umum");

  const handleDayClick = (index) => {
    setJadwal(schedule[index]);
  }


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
          <div className="text-[48px] flex"><span className="brightness-75"><Link to={"/structure"}>Structure</Link></span>&nbsp;<GlowText font="poppins" size={48} text="&" />&nbsp;<span className="underline underline-offset-8"><GlowText size={48} font="poppins" text="Schedule" /></span></div>
        </div>
        <div className="z-10 overflow-hidden w-full pb-[140px]">
          <div className="flex w-full flex-col justify-center items-center mt-20">
            <div className="w-[1000px] flex justify-around font-poppins-semibold text-3xl">
              {days.map((day, index) => (
                <div key={index} className={`cursor-pointer uppercase hover:brightness-90 ease-out duration-300 ${jadwal.hari !== day ? "brightness-[0.6]" : ""}`} onClick={() => handleDayClick(index)}>{day}</div>
              ))}
            </div>
            <div className="w-[1000px] mt-8 mb-20">
              <hr className="bg-primary glow" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* {jadwal.hari && <h1 className="text-4xl">{jadwal.hari}</h1>} */}
            <div className="text-[36px] flex">Mata Pelajaran&nbsp;
              <div className={`flex ${subjectMode === "Produktif" ? "flex-row-reverse" : ""} cursor-pointer`}>
                <GlowText font="poppins" onClick={() => setSubjectMode(subjectMode)} text={subjectMode} size="text-4xl" />&nbsp;/&nbsp;<div className="brightness-75" onClick={() => subjectMode === "Umum" ? setSubjectMode("Produktif") : setSubjectMode("Umum")}>{subjectMode === "Umum" ? "Produktif" : "Umum"}</div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-[620px] mt-10">
              {jadwal.pelajaran[subjectMode].map((pelajaran, index) => (
                <div className="">
                  <div key={index} className={`h-3 rounded-full w-full bg-primary mb-4 ${pelajaran.jam === "istirahat" ? "brightness-75" : ""}`} />
                  <div className="flex w-full justify-between items-center px-3">
                    <div className="w-[160px] text-center">{pelajaran.mapel}</div>
                    <div className="w-[160px] text-center">{pelajaran.waktu}</div>
                    <div className="w-[160px] text-center">{pelajaran.guru || "ISTIRAHAT"}</div>
                  </div>
                </div>))}
            </div>
          </div>
          <div className="flex flex-col items-center mt-24">
            <h1 className="text-4xl">Jadwal Piket</h1>
            <div className="flex flex-col gap-4 w-[620px] mt-10">
              {jadwal.piket.map((siswa, index) => (
                <div className="">
                  <div key={index} className={`h-3 rounded-full w-full bg-primary mb-4`} />
                  <div className="flex w-full justify-center items-center">
                    <div className="text-center text-xl capitalize">{siswa}</div>
                  </div>
                </div>))}
            </div>
          </div>
        </div >
      </div>
      <Footer className="bg-background" />
    </div>
  );
}