import { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import shortenName from "../../utils/ShortenName";

export default function Cards() {
  const students = [
    {
      name: "abdu rahman",
      gender: "male",
      developer: false,

    },
    {
      name: "ahmad faris widyawanx",
      gender: "male",
      developer: true,

    },
    {
      name: "ajeng dwi sesayanis",
      gender: "female",
      developer: false,

    },
    {
      name: "amalia rahmadani oktaviani",
      gender: "female",
      developer: false,

    },
    {
      name: "arbi masbul gesang malyaki",
      gender: "male",
      developer: false,

    },
    {
      name: "ayuni ramadhani",
      gender: "female",
      developer: false,

    },
    {
      name: "cylvia triza",
      gender: "female",
      developer: false,

    },
    {
      name: "dhika muhammad frizar",
      gender: "male",
      developer: false,

    },
    {
      name: "dini ayuandini",
      gender: "female",
      developer: false,

    },
    {
      name: "ega saputra",
      gender: "male",
      developer: false,

    },
    {
      name: "ezhar raditya putra",
      gender: "male",
      developer: false,

    },
    {
      name: "fahmi shufyan antono",
      gender: "male",
      developer: false,

    },
    {
      name: "faiz zaenal muttaqin",
      gender: "male",
      developer: true,

    },
    {
      name: "genta prawira dyputra",
      gender: "male",
      developer: false,

    },
    {
      name: "hafiz arya pratama",
      gender: "male",
      developer: false,

    },
    {
      name: "januari tadanantara rupajati",
      gender: "male",
      developer: false,

    },
    {
      name: "mohammad jonah setiawan",
      gender: "male",
      developer: true,

    },
    {
      name: "muhamad dyreztha reys hidayat",
      gender: "male",
      developer: false,

    },
    {
      name: "muhammad farhan aditya",
      gender: "male",
      developer: false,

    },
    {
      name: "muhammad daffi mursidik",
      gender: "male",
      developer: false,

    },
    {
      name: "muhammad fachri afrian",
      gender: "male",
      developer: false,

    },
    {
      name: "muhammad farel nachrawi",
      gender: "male",
      developer: false,

    },
    {
      name: "muhammad harun ikhsan",
      gender: "male",
      developer: false,

    },
    {
      name: "nabil faiq aflah",
      gender: "male",
      developer: false,

    },
    {
      name: "nayaka linggar abimanyu",
      gender: "male",
      developer: true,

    },
    {
      name: "nindia fatwa qadima",
      gender: "female",
      developer: false,

    },
    {
      name: "raden muhammad nabil fathur rahman",
      gender: "male",
      developer: false,

    },
    {
      name: "rafly atha maulana",
      gender: "male",
      developer: false,

    },
    {
      name: "rana diandra zahra",
      gender: "female",
      developer: false,

    },
    {
      name: "rian panji asmoro",
      gender: "male",
      developer: false,

    },
    {
      name: "satria adi pratama",
      gender: "male",
      developer: false,

    },
    {
      name: "sumyar",
      gender: "male",
      developer: false,

    },
    {
      name: "vita marizka",
      gender: "female",
      developer: false,

    },
    {
      name: "wardah nuril kaunain",
      gender: "female",
      developer: false,

    },
    {
      name: "zahra tusita",
      gender: "female",
      developer: false,

    },
    {
      name: "zulfahmi rizki aulia",
      gender: "male",
      developer: true,

    },

  ]

  const developers = students.filter(student => student.developer);
  const males = students.filter(student => student.gender === "male");
  const females = students.filter(student => student.gender === "female");

  const [showMode, setShowMode] = useState("ALL");
  const getStudents = () => {
    if (showMode === "ALL") {
      return students;
    } else if (showMode === "DEVELOPER") {
      return developers;
    } else if (showMode === "WOMEN") {
      return females;
    }
    else if (showMode === "MEN") {
      return males;
    }

  }

  const modes = [
    "ALL",
    "MEN",
    "WOMEN",
    "DEVELOPER"
  ]

  return (
    <div className="z-10 overflow-hidden bg-background-secondary w-full pb-[140px]">
      <img src="/wavy-top-2.svg" className="absolute -translate-y-[200px] object-cover w-full object-top h-[200px]" />
      <div className="flex w-full flex-col justify-center items-center">
        <div className="w-[1000px] flex justify-around font-poppins-semibold text-3xl">
          {modes.map((mode, i) => (
            <div className={`cursor-pointer hover:brightness-90 ease-out duration-300  ${showMode !== mode && "brightness-[60%]"}`} key={i} onClick={() => setShowMode(mode)}>{mode}</div>
          ))}
        </div>
        <div className="w-[1000px] mt-8 mb-20">
          <hr className="bg-primary glow" />
        </div>
        <section
          className=" grid grid-cols-[repeat(4,max-content)] justify-between gap-y-20 w-full max-w-[1100px] mx-auto px-4">
          {getStudents().map((student, i) => (
            <ProfileCard developer={student.developer} key={i} name={shortenName(student.name)} src={`/students/${student.name.split(" ").join("-")}.JPG`} />
          ))}
        </section>
      </div>
    </div >
  )
}