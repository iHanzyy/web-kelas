import AccentUnderline from "./AccentUnderline"
import { Link } from "react-router"

export default function Footer(props) {
  const developers = [
    {
      name: "Mohammad Jonah Setiawan",
      instagram: "mojostwn",
    },
    {
      name: "Zulfahmi Rizki Aulia",
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
      label: "Home",
      destination: "/",
    },
    {
      label: "About Us",
      destination: "/about-us",
    },
    {
      label: "Structure & Schedule",
      destination: "/structure",
    },
    {
      label: "Memories",
      destination: "/memories",
    },
    {
      label: "Menfess",
      destination: "/menfess",
    },
  ]

  return (
    <footer className={`w-screen h-auto min-h-[427px] ${props.className || ""}`}>
      <div className="p-6 md:p-12 lg:p-20 bg-background rounded-t-[30px] md:rounded-t-[60px] lg:rounded-t-[100px] upper-glow">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="flex flex-col gap-8">
            {/* Logo and description */}
            <div className="text-center">
              <img src="/rpl-logo-glow.svg" width={58} height={55} className="mx-auto mb-4" />
              <p className=" px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem eligendi cumque.
              </p>
            </div>

            {/* Links */}
            <div>
              <AccentUnderline label="Links" percent="33" className="text-lg mb-3" />
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i} className="">
                    <Link to={link.destination}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div>
              <AccentUnderline label="Developers" percent="33" className="text-lg mb-3" />
              <div className="grid grid-cols-1 gap-1 ">
                {developers.map((developer, i) => (
                  <Link key={i} to={`https://www.instagram.com/${developer.instagram}`} className="hover:text-primary">
                    {developer.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <AccentUnderline label="Social Media" percent="33" className="text-lg mb-3" />
              <div className="flex gap-4">
                <Link to={"https://www.instagram.com/baskom.millenium/"}>
                  <img src="/instagram.svg"/>
                </Link>
                <img src="discord.svg"/>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Logo and description */}
            <div className="col-span-2 text-center mb-4">
              <img src="/rpl-logo-glow.svg" width={58} height={55} className="mx-auto mb-4" />
              <p className="max-w-md mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem eligendi cumque. Neque
                pariatur nostrum iusto enim illum, hic corrupti.
              </p>
            </div>

            {/* Left column */}
            <div className="space-y-6">
              <div>
                <AccentUnderline label="Links" percent="33" className="text-[20px] mb-4" />
                <ul className="space-y-2">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link to={link.destination}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <AccentUnderline label="Social Media" percent="33" className="text-[20px] mb-4" />
                <div className="flex gap-4">
                  <Link to={"https://www.instagram.com/baskom.millenium/"}>
                    <img src="/instagram.svg" />
                  </Link>
                  <img src="discord.svg" />
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              <AccentUnderline label="Developer" percent="33" className="text-[20px] mb-4" />
              <ul className="list-disc space-y-2">
                {developers.map((developer, i) => (
                  <li key={i}>
                    <Link to={`https://www.instagram.com/${developer.instagram}`}>{developer.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden lg:block">
          <div className="bg-background flex w-full h-full justify-between">
            <div className="">
              <div className="flex flex-col gap-10 w-[270px]">
                <img src="/rpl-logo-glow.svg" width={58} height={55} className="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem eligendi cumque. Neque
                  pariatur nostrum iusto enim illum, hic corrupti.
                </p>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col gap-4 h-[236px]">
                <AccentUnderline label="Developer" percent="33" className="text-[20px]" />
                <ul className="list-disc flex flex-col h-full justify-between items-between">
                  {developers.map((developer, i) => (
                    <li key={i}>
                      <Link to={`https://www.instagram.com/${developer.instagram}`}>{developer.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col gap-4 h-[236px]">
                <AccentUnderline label="Links" percent="33" className="text-[20px]" />
                <ul className="flex flex-col h-full justify-between">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link to={link.destination}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col gap-4 h-[236px]">
                <AccentUnderline label="Social Media" percent="33" className="text-[20px]" />
                <div className="flex w-full justify-between">
                  <Link to={"https://www.instagram.com/baskom.millenium/"}>
                    <img src="/instagram.svg" />
                  </Link>
                  <img src="discord.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-10">
          <hr className="bg-primary" />
          <div className="text-center py-5 opacity-70 font-poppins-light">
            Class 11 RPL 1 © 2025 - ALL rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
