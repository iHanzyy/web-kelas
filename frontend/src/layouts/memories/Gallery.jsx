import RectanglePic from "../../components/RectanglePic";

export default function Gallery() {
  const foo = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="overflow-hidden bg-background-secondary w-full mt-[140px] pb-60">
      <img src="/wavy-top-3.svg" className="absolute -translate-y-[350px] -z-10 object-cover w-full object-top h-[500px]" />
      <div className="flex justify-center items-center -translate-y-[100px] mb-[10px]">
      </div>
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
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