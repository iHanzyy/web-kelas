import AccentUnderline from "./AccentUnderline";

export default function Footer() {
  const developers = [
    "Mohammad Jonah Setiawan",
    "Zulfahmi Risky Aulia",
    "Ahmad Faris Widyawan",
    "Faiz Zaenal Muttaqin",
    "Nayaka Linggar Abimanyu"
  ]

  const links = [
    "About Us",
    "Structure & Schedule",
    "Memories",
    "Menfess"
  ]



  return (
    <footer className="w-screen h-[427px] bg-secondary ">
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
                {developers.map((developer, i) => <li key={i}>{developer}</li>)}
              </ul>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-4 h-[236px]">
              <AccentUnderline label="Links" percent="33" className="text-[20px]" />
              <ul className="flex flex-col h-full justify-between">
                {links.map((link, i) => <li key={i}>{link}</li>)}
              </ul>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-4 h-[236px]">
              <AccentUnderline label="Social Media" percent="33" className="text-[20px]" />
              <div className="flex w-full justify-between">
                <img src="/instagram.svg" />
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