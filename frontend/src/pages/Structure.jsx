import { Link } from "react-router";
import Footer from "../components/Footer";
import GlowText from "../components/GlowText";
import Navbar from "../components/Navbar";
import StructureCard from "../components/StructureCard";
import structureData from "../data/structure.json";
import shortenName from "../utils/ShortenName";

export default function Structure() {


  const StructureCards = ({ members }) => {
    return members.map((member, index) => (
      <StructureCard
        key={index}
        name={shortenName(member.name, 18)}
        title={member.title}
        image={`/students/${member.name.toLowerCase().replace(/ /g, "-")}.JPG`}
      />
    ));
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
        <div className="backdrop-blur-[200px] overflow-hidden">
          <div className="w-screen h-[calc(100vh-60px)]  flex justify-center items-center">
            <div className="text-4xl  sm:text-5xl flex-col flex sm:flex-row"><span className="underline underline-offset-8"><GlowText font="poppins" size={48} text="Structure" /></span>&nbsp;<GlowText font="poppins" size={48} text="&" />&nbsp;<span className="brightness-75"><Link to={"/schedule"}>Schedule</Link></span></div>
          </div>
          <div className="flex flex-col pb-56 w-screen m-auto gap-10">
            <div className="flex flex-col gap-10">
              <StructureCards members={structureData.wali} />
              <StructureCards members={structureData.ketua} />
              <StructureCards members={structureData.waketu} />
            </div>
            <div className="flex w-full justify-evenly md:justify-around items-center">
              <div className="flex flex-col">
                <div className="flex gap-3 justify-evenly items-center">
                  <StructureCards members={structureData.sekretaris} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-3 justify-evenly items-center">
                  <StructureCards members={structureData.bendahara} />
                </div>
              </div>
            </div>
            <div className="flex-col md:flex-row flex w-full justify-evenly items-center md:mt-10">
              <div className="flex w-full justify-evenly items-center md:mt-10">
                <StructureCards members={structureData.kordAgama} />
              </div>

              <div className="flex w-full justify-evenly items-center mt-10">
                <StructureCards members={structureData.kordOlahraga} />
              </div>
            </div>
            <div className="flex-col md:flex-row flex w-full justify-evenly items-center md:mt-10">

              <div className="flex w-full justify-evenly items-center md:mt-10">
                <StructureCards members={structureData.kordKebersihan} />
              </div>

              <div className="flex w-full justify-evenly items-center mt-10">
                <StructureCards members={structureData.kordPrestasi} />
              </div>
            </div>
            <div className="flex w-full justify-evenly items-center md:mt-10">

              <div className="flex-col md:flex-row flex w-full justify-evenly items-center md:mt-10 gap-10">
                <StructureCards members={structureData.kordKetertibanKeamanan} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}