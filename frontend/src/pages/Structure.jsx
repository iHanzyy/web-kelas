import { Link } from "react-router";
import Footer from "../components/Footer";
import GlowText from "../components/GlowText";
import Navbar from "../components/Navbar";
import StructureCard from "../components/StructureCard";
import structureData from "../data/structure.json";

export default function Structure() {


  const StructureCards = ({ members }) => {
    return members.map((member, index) => (
      <StructureCard
        key={index}
        name={member.name}
        title={member.title}
        image={`/students/${member.name.toLowerCase().replace(/ /g, "-")}.JPG`}
      />
    ));
  }
  return (
    <div>
      <Navbar />
      <div className="relative w-full overflow-hidden">
        <div className="-z-30 w-[882px] h-[480px]  bg-secondary rounded-[50%] translate-y-[310%] translate-x-[100%] absolute"></div>
        <div className="-z-30 w-[882px] h-[480px]  bg-secondary rounded-[50%] translate-y-[210%] translate-x-[-50%] absolute"></div>
        <div className="-z-30 w-[882px] h-[480px]  bg-secondary rounded-[50%] translate-y-[110%] translate-x-[100%] absolute"></div>
        <div className="backdrop-blur-[200px] overflow-hidden">
          <div className="w-screen h-[calc(100vh-60px)]  flex justify-center items-center">
            <div className="text-[48px] flex"><span className="underline underline-offset-8"><GlowText font="poppins" size={48} text="Structure" /></span>&nbsp;<GlowText font="poppins" size={48} text="&" />&nbsp;<span className="brightness-75"><Link to={"/schedule"}>Schedule</Link></span></div>
          </div>
          <div className="flex flex-col pb-56 w-[1000px] m-auto gap-10">
            <div className="flex flex-col gap-10">
              <StructureCards members={structureData.wali} />
              <StructureCards members={structureData.ketua} />
              <StructureCards members={structureData.waketu} />
            </div>
            <div className="flex w-full justify-evenly">
              <div className="flex flex-col">
                <div className="flex gap-3 justify-evenly w-[450px]">
                  <StructureCards members={structureData.sekretaris} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-3 justify-evenly w-[450px]">
                  <StructureCards members={structureData.bendahara} />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-evenly mt-10">
              <StructureCards members={structureData.kordAgama} />
              <StructureCards members={structureData.kordOlahraga} />
            </div>
            <div className="flex w-full justify-evenly mt-10">
              <StructureCards members={structureData.kordKebersihan} />
              <StructureCards members={structureData.kordPrestasi} />
            </div>
            <div className="flex w-full justify-evenly mt-10">
              <StructureCards members={structureData.kordKetertibanKeamanan} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}