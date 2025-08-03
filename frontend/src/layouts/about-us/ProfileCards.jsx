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
      <img src="/wavy-top-2.svg" className="-z-10 sm:z-0 upper-glow-mobile absolute -translate-y-[200px] object-cover w-full object-top h-[200px]" />
      <div className="flex w-full flex-col justify-center items-center">
        <div className="w-[85vw] flex justify-around font-poppins-semibold text-[18px] sm:text-2xl md:text-3xl">
          {modes.map((mode, i) => (
            <div className={`cursor-pointer hover:brightness-90 ease-out duration-300  ${showMode !== mode && "brightness-[60%]"}`} key={i} onClick={() => setShowMode(mode)}>{mode}</div>
          ))}
        </div>
        <div className="w-[85vw] mt-4 sm:mt-6 md:mt-8 mb-10 sm:mb-15 md:mb-20">
          <hr className="bg-primary glow" />
        </div>
        <section

          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y- sm:gap-y-16 justify-items-center w-full max-w-[1100px] mx-auto px-4">

          {getStudents().map((student, i) => (
            <ProfileCard developer={student.developer} key={i} name={shortenName(student.name)} src={`/students/${student.name.split(" ").join("-")}.JPG`} />
          ))}
        </section>
      </div>
    </div >
  )
}