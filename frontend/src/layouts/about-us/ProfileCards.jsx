import { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import shortenName from "../../utils/ShortenName";
import students from "../../data/students.json";

export default function Cards() {


  const developers = students.filter(student => student.developer);
  const males = students.filter(student => student.gender === "male");
  const females = students.filter(student => student.gender === "female");

  const [showMode, setShowMode] = useState("ALL");
  const getStudents = () => {
    if (showMode === "ALL") {
      return students;
    } else if (showMode === "DEVELOPERS") {
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
    "DEVELOPERS"
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