import AccentUnderline from "./AccentUnderline";
import { Link } from "react-router";

export default function Footer(props) {
  const developers = [
    {
      name: "Mohammad Jonah Setiawan",
      instagram: "jojomornov",
    },
    {
      name: "Zulfahmi Risky Aulia",
      instagram: "thefabulouspahmi",
    },
    {
      name: "Ahmad Faris Widyawan",
      instagram: "vathmos",
    },
    {
      name: "Faiz Zaenal Muttaqin",
      instagram: "cuiras_13",
    },
    {
      name: "Nayaka Linggar Abimanyu",
      instagram: "nayakaaano",
    },
  ]

  const links = [
    {
      label: "About Us",
      destination: "/about-us"
    },
    {
      label: "Structure & Schedule",
      destination: "/structure"
    },
    {
      label: "Memories",
      destination: "/memories"
    },
    {
      label: "Menfess",
      destination: "/menfess"
    },
  ]



  return (
    <footer className={`w-screen h-[427px] ${props.className || ""}`}>
      <div className="p-20 bg-background rounded-t-[100px] upper-glow">
        <div className="bg-background  flex w-full h-full justify-between">
          <div className="">
            <div className="flex flex-col gap-10 w-[270px]">
              <img src="/rpl-logo-glow.svg" width={58} height={55} className="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem eligendi cumque. Neque pariatur nostrum iusto enim illum, hic corrupti.</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-4 h-[236px]">
              <AccentUnderline label="Developer" percent="33" className="text-[20px]" />
              <ul className="list-disc flex flex-col h-full justify-between items-between">
                {developers.map((developer, i) => <li key={i}><Link to={`https://www.instagram.com/${developer.instagram}`}>{developer.name}</Link></li>)}
              </ul>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-4 h-[236px]">
              <AccentUnderline label="Links" percent="33" className="text-[20px]" />
              <ul className="flex flex-col h-full justify-between">
                {links.map((link, i) => <li key={i}><Link to={link.destination}>{link.label}</Link></li>)}
              </ul>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-4 h-[236px]">
              <AccentUnderline label="Social Media" percent="33" className="text-[20px]" />
              <div className="flex w-full justify-between">
                <Link to={"https://www.instagram.com/baskom.millenium/"}><img src="/instagram.svg" /></Link>
                <img src="discord.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <hr className="bg-primary" />
          <div className="text-center py-5 opacity-70 font-poppins-light">Class 11 RPL 1 © 2025 - ALL rights reserved.</div>
        </div>
      </div>

    </footer>
  )
} 