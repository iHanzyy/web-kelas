import { Link } from "react-router";
import Footer from "../components/Footer";
import GlowText from "../components/GlowText";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Schedule() {
  const days = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
  ]

  const Jadwal = [
    {
      hari: "Senin",
      pelajaran: [
        { jam: 1, waktu: "08:00-08:40", mapel: "SEJARAH", guru: "SUTRIYANTA" },
        { jam: 2, waktu: "08:40-09:20", mapel: "SEJARAH", guru: "SUTRIYANTA" },
        { jam: 3, waktu: "09:20-10:00", mapel: "SEJARAH", guru: "SUTRIYANTA" },
        { jam: "istirahat", waktu: "10:00-10:20", mapel: "ISTIRAHAT" },
        { jam: 4, waktu: "10:20-11:00", mapel: "B. ING", guru: "DONA" },
        { jam: 5, waktu: "11:00-11:40", mapel: "B. ING", guru: "DONA" },
        { jam: 6, waktu: "11:40-12:20", mapel: "MTK", guru: "EFRI" },
        { jam: "istirahat", waktu: "12:20-13:00", mapel: "ISTIRAHAT" },
        { jam: 7, waktu: "13:00-13:40", mapel: "MTK", guru: "EFRI" },
        { jam: 8, waktu: "13:40-14:20", mapel: "B. INDO", guru: "ANNE" },
        { jam: 9, waktu: "15:00-15:40", mapel: "B. INDO", guru: "ANNE" }
      ],
      piket: [
        "zahra tusita",
        "nindia fatwa qadima",
        "hafiz arya pratama",
        "nayaka linggar abimanyu",
        "abdu rahman",
        "mohammad jonah setiawan",
        "satria adi pratama"
      ]
    },
    {
      hari: "Selasa",
      pelajaran: [
        { jam: 1, waktu: "07:00-07:40", mapel: "B. INDO", guru: "ANNE" },
        { jam: 2, waktu: "07:40-08:20", mapel: "B. INDO", guru: "ANNE" },
        { jam: 3, waktu: "08:20-09:00", mapel: "B. INDO", guru: "ANNE" },
        { jam: "istirahat", waktu: "09:00-09:20", mapel: "ISTIRAHAT" },
        { jam: 4, waktu: "09:20-10:00", mapel: "P. Pancasila", guru: "RATNA" },
        { jam: 5, waktu: "10:00-10:40", mapel: "P. Pancasila", guru: "RATNA" },
        { jam: 6, waktu: "11:20-12:00", mapel: "P. Pancasila", guru: "RATNA" },
        { jam: "istirahat", waktu: "12:00-12:40", mapel: "ISTIRAHAT" },
        { jam: 7, waktu: "12:40-13:20", mapel: "P5", guru: "MEIRIA" },
        { jam: 8, waktu: "13:20-14:00", mapel: "P5", guru: "MEIRIA" },
        { jam: 9, waktu: "14:00-14:40", mapel: "P5", guru: "MEIRIA" },
        { jam: 10, waktu: "14:40-15:20", mapel: "P5", guru: "MEIRIA" },
        { jam: 11, waktu: "15:20-16:00", mapel: "P5", guru: "MEIRIA" }
      ],
      piket: [
        "vita marizka",
        "cylvia triza",
        "muhammad fachri afrian",
        "dhika muhammad frizar",
        "faiz zaenal muttaqin",
        "muhammad daffi mursidik",
        "zulfahmi riski aulia"
      ]
    },
    {
      hari: "Rabu",

      pelajaran: [
        { jam: 1, waktu: "07:40-08:20", mapel: "PKK", guru: "IYUS" },
        { jam: 2, waktu: "08:20-09:00", mapel: "PKK", guru: "IYUS" },
        { jam: 3, waktu: "09:00-09:40", mapel: "PKK", guru: "IYUS" },
        { jam: "istirahat", waktu: "09:40-10:00", mapel: "ISTIRAHAT" },
        { jam: 4, waktu: "10:00-10:40", mapel: "PKK", guru: "IYUS" },
        { jam: 5, waktu: "11:20-12:00", mapel: "P5", guru: "RAHMI" },
        { jam: "istirahat", waktu: "12:00-12:40", mapel: "ISTIRAHAT" },
        { jam: 6, waktu: "12:40-13:20", mapel: "P5", guru: "RAHMI" },
        { jam: 7, waktu: "13:20-14:00", mapel: "P5", guru: "RAHMI" },
        { jam: 8, waktu: "14:00-14:40", mapel: "MTK", guru: "EFRI" },
        { jam: 9, waktu: "14:40-15:20", mapel: "MTK", guru: "EFRI" },
        { jam: 10, waktu: "15:20-16:00", mapel: "MTK", guru: "EFRI" }
      ],
      piket: [
        "ajeng dwi sesayanis",
        "rana diandra zahra",
        "arbi masbul gesang malyaki",
        "muhamad dyreztha reys hidayat",
        "muhammad farrel nachrawi",
        "raden muhammad nabil fathur rahman",
        "muhammad harun ikhsan"
      ]
    },
    {
      hari: "Kamis",
      pelajaran: [
        { jam: 1, waktu: "07:40-08:20", mapel: "B. ING", guru: "DONA" },
        { jam: 2, waktu: "08:20-09:00", mapel: "B. ING", guru: "DONA" },
        { jam: 3, waktu: "09:00-09:40", mapel: "B. ING", guru: "DONA" },
        { jam: "istirahat", waktu: "09:40-10:00", mapel: "ISTIRAHAT" },
        { jam: 4, waktu: "10:00-10:40", mapel: "B. ING", guru: "DONA" },
        { jam: 5, waktu: "10:40-11:20", mapel: "PJOK", guru: "ALDI" },
        { jam: 6, waktu: "11:20-12:00", mapel: "PJOK", guru: "ALDI" },
        { jam: "istirahat", waktu: "12:00-12:40", mapel: "ISTIRAHAT" },
        { jam: 7, waktu: "12:40-13:20", mapel: "PJOK", guru: "ALDI" },
        { jam: 8, waktu: "13:20-14:00", mapel: "PABP", guru: "YANDRI" },
        { jam: 9, waktu: "14:00-14:40", mapel: "PABP", guru: "YANDRI" },
        { jam: 10, waktu: "14:40-15:20", mapel: "PABP", guru: "YANDRI" }
      ],
      piket: [
        "amalia ramadhani oktaviani",
        "ayuni ramadhani",
        "ezhar raditya putra",
        "rian panji asmoro",
        "genta prawira dyputra",
        "nabil faiq aflah",
        "fahmi shufyan antono"
      ]
    },
    {
      hari: "Jumat",
      pelajaran: [
        { jam: 1, waktu: "07:00-08:00", mapel: "PABP", guru: "YANDRI" },
        { jam: 2, waktu: "08:00-09:00", mapel: "PABP", guru: "YANDRI" },
        { jam: 3, waktu: "09:00-10:00", mapel: "PKK", guru: "IYUS" },
        { jam: "istirahat", waktu: "10:00-10:20", mapel: "ISTIRAHAT" },
        { jam: 4, waktu: "10:20-11:00", mapel: "PKK", guru: "IYUS" },
        { jam: 5, waktu: "11:00-11:40", mapel: "PKK", guru: "IYUS" },
        { jam: "istirahat", waktu: "11:40-13:00", mapel: "ISTIRAHAT" },
        { jam: 6, waktu: "13:00-13:40", mapel: "PKK", guru: "IYUS" },
        { jam: 7, waktu: "13:40-14:20", mapel: "PKK", guru: "IYUS" },
        { jam: 8, waktu: "14:20-15:00", mapel: "PKK", guru: "IYUS" },
        { jam: 9, waktu: "15:00-15:40", mapel: "PKK", guru: "IYUS" },
        { jam: 10, waktu: "15:40-16:20", mapel: "PKK", guru: "IYUS" }
      ],
      piket: [
        "wardah nuril kaunain",
        "dini ayuandini",
        "ega saputra",
        "ahmad faris widyawan",
        "muhamad farhan aditya",
        "januari tadanantara rupajati",
        "rafly atha maulana",
        "sumyar"
      ]
    }
  ];

  const [jadwal, setJadwal] = useState(Jadwal[0]);

  const handleDayClick = (index) => {
    setJadwal(Jadwal[index]);
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
          <div className="text-[48px] flex"><span className="brightness-75"><Link to={"/structure"}>Structure</Link></span>&nbsp;<GlowText size={48} text="&" />&nbsp;<span className="underline underline-offset-8"><GlowText size={48} text="Schedule" /></span></div>
        </div>
        <div className="z-10 overflow-hidden w-full pb-[140px]">
          <div className="flex w-full flex-col justify-center items-center mt-20">
            <div className="w-[1000px] flex justify-around font-poppins-semibold text-3xl">
              {days.map((day, index) => (
                <div key={index} className="cursor-pointer uppercase" onClick={() => handleDayClick(index)}>{day}</div>
              ))}
            </div>
            <div className="w-[1000px] mt-8 mb-20">
              <hr className="bg-primary glow" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            {jadwal.hari && <h1 className="text-4xl">{jadwal.hari}</h1>}
            <div className="flex flex-col gap-4 w-[620px] mt-10">
              {jadwal.pelajaran.map((pelajaran, index) => (
                <div className="">
                  <div key={index} className={`h-3 rounded-full w-full bg-primary mb-4 ${pelajaran.jam === "istirahat" ? "brightness-75" : ""}`} />
                  <div className="flex w-full justify-between items-center">
                    <div className="w-[160px] text-center">{pelajaran.mapel}</div>
                    <div className="w-[160px] text-center">{pelajaran.waktu}</div>
                    <div className="w-[160px] text-center">{pelajaran.guru || "ISTIRAHAT"}</div>
                  </div>
                </div>))}
            </div>
          </div>
          <div className="flex flex-col items-center mt-24">
            <h1 className="text-4xl">Piket</h1>
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