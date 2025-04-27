import RectanglePic from "../../components/RectanglePic";

export default function Gallery() {
  const foo = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="overflow-hidden bg-secondary w-full mt-[140px] pb-[140px]">
      <img src="/wavy-top.svg" className="absolute -translate-y-[120px] -z-10 upper-glow object-cover w-full object-top h-[200px]" />
      <div className="flex justify-center items-center mb-[60px]">
        <p className="text-center font-poppins-semibold text-[40px] z-10">Gallery</p>
        <p className="text-center font-poppins-semibold text-[40px] translate-y-[1%]  glow absolute">Gallery</p>
      </div>
      <div className="flex flex-col gap-16">
        <div class="carousel">
          <div class="group slide-left">
            {foo.map((_, i) => (
              <RectanglePic key={i} src="/rick-astley.avif" />
            ))}
          </div>

          <div aria-hidden class="group slide-left">
          {foo.map((_, i) => (
              <RectanglePic key={i} src="/rick-astley.avif" />
            ))}
          </div>
        </div>
        <div class="carousel">
          <div class="group slide-right">
            {foo.map((_, i) => (
              <RectanglePic key={i} src="/rick-astley.avif" />
            ))}
          </div>

          <div aria-hidden class="group slide-right">
          {foo.map((_, i) => (
              <RectanglePic key={i} src="/rick-astley.avif" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}