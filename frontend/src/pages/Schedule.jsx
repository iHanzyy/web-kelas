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
      <div className="relative w-full overflow-hidden bg-background">
        <div className="w-screen overflow-hidden">
          <div className="w-[85vw] h-[40vw] bg-secondary rounded-[50%] md:translate-y-[310%] sm:hidden translate-y-[1010%] md:translate-x-[75%] translate-x-[75%] absolute"></div>
          <div className="w-[85vw] h-[40vw] bg-secondary rounded-[50%] md:translate-y-[210%] md:hidden translate-y-[810%] md:translate-x-[-50%] translate-x-[-50%] absolute"></div>
          <div className="w-[85vw] h-[40vw] bg-secondary rounded-[50%] md:translate-y-[310%] translate-y-[610%] md:translate-x-[75%] translate-x-[75%] absolute"></div>
          <div className="w-[85vw] h-[40vw] bg-secondary rounded-[50%] md:translate-y-[210%] translate-y-[410%] md:translate-x-[-50%] translate-x-[-50%] absolute"></div>
          <div className="w-[85vw] h-[40vw] bg-secondary rounded-[50%] md:translate-y-[110%] translate-y-[210%] md:translate-x-[75%] translate-x-[75%] absolute"></div>
        </div>
        <div className="backdrop-blur-[200px]">
          <div className="w-screen h-[calc(100vh-60px)]  flex justify-center items-center">
            <div className="text-4xl  sm:text-5xl flex-col flex sm:flex-row"><span className="brightness-75"><Link to={"/structure"}>Structure</Link></span>&nbsp;<GlowText font="poppins" size={48} text="&" />&nbsp;<span className="underline underline-offset-8"><GlowText size={48} font="poppins" text="Schedule" /></span></div>
          </div>
          <div className="z-10 overflow-hidden w-full pb-[140px]">
            <div className="flex w-full flex-col justify-center items-center mt-20">
              <div className="w-[85vw] flex justify-around font-poppins-semibold text-base sm:text-2xl md:text-3xl">
                {days.map((day, index) => (
                  <div key={index} className={`cursor-pointer uppercase hover:brightness-90 ease-out duration-300 ${jadwal.hari !== day ? "brightness-[0.6]" : ""}`} onClick={() => handleDayClick(index)}>{day}</div>
                ))}
              </div>
              <div className="w-[85vw] mt-4 sm:mt-6 md:mt-8 mb-10 sm:mb-15 md:mb-20">
                <hr className="bg-primary glow" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-1xl sm:text-3xl md:text-4xl flex">Mata Pelajaran&nbsp;
                <div className={`flex ${subjectMode === "Produktif" ? "flex-row-reverse" : ""} cursor-pointer`}>
                  <GlowText font="poppins" onClick={() => setSubjectMode(subjectMode)} text={subjectMode} size="text-1xl sm:text-3xl md:text-4xl" />&nbsp;/&nbsp;<div className="brightness-75" onClick={() => subjectMode === "Umum" ? setSubjectMode("Produktif") : setSubjectMode("Umum")}>{subjectMode === "Umum" ? "Produktif" : "Umum"}</div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-[85vw] max-w-[620px] mt-10">
                {jadwal.pelajaran[subjectMode].map((pelajaran, index) => (
                  <div className="">
                    <div key={index} className={`h-3 rounded-full w-full bg-primary mb-4 ${pelajaran.jam === "istirahat" ? "brightness-75" : ""}`} />
                    <div className="flex w-full justify-between items-center px-1 sm:px-2 md:px-3  text-xs sm:text-base">
                      <div className="w-[160px] overflow-hidden text-center">{pelajaran.mapel}</div>
                      <div className="w-[160px] overflow-hidden text-center">{pelajaran.waktu}</div>
                      <div className="w-[160px] overflow-hidden text-ellipsis text-center">{pelajaran.guru || "ISTIRAHAT"}</div>
                    </div>
                  </div>))}
              </div>
            </div>
            <div className="flex flex-col items-center mt-24">
              <h1 className="text-4xl">Jadwal Piket</h1>
              <div className="flex flex-col gap-4 w-[85vw] max-w-[620px] mt-10">
                {jadwal.piket.map((siswa, index) => (
                  <div className="">
                    <div key={index} className={`h-3 rounded-full w-full bg-primary mb-4`} />
                    <div className="flex w-full justify-center items-center">
                      <div className="text-center text-base sm:text-xl capitalize">{siswa}</div>
                    </div>
                  </div>))}
              </div>
            </div>
          </div >
        </div>
      </div>
      <Footer className="bg-background" />
    </div>
  );
}