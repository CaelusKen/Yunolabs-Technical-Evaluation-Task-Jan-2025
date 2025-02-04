import Image from "next/image";
import Testomonial01 from "@/assets/images/Testomonial01.webp";
import Testomonial02 from "@/assets/images/Testomonial02.webp";

const features = [
  {
    number: "1",
    title: "Specialise in non-surgical corrective and cosmetic treatments",
    image: Testomonial01,
    alt: "Non-surgical treatment demonstration",
  },
  {
    number: "2",
    title: "Option between In-Clinic and Virtual Consultation",
    image: Testomonial02,
    alt: "Virtual consultation setup",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full bg-[#F5F5F5] py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative isolate h-[400px] overflow-hidden bg-white border ${
                index === 0 ? "border-r-0" : "border-r-0"
              } rounded-bl-[100px] border-black`}
            >
              <div className="relative h-full p-8 md:p-12">
                {/* Content Container */}
                <div className="flex h-full flex-col">
                  {/* Title and Image Container */}
                  <div className="flex flex-col space-y-8">
                    {/* Title */}
                    <h3 className="text-[28px] font-extralight leading-tight text-zinc-800 md:text-[32px] max-w-[60%]">
                      {feature.title}
                    </h3>

                    {/* Image */}
                    <div className="relative min-h-[120px] w-full self-end flex-shrink-0 overflow-hidden rounded-2xl md:h-[160px] md:w-[280px]">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Number */}
                  <span className="absolute bottom-16 z-10 mt-auto text-[40px] font-extralight leading-none text-[#585858] md:text-[48px]">
                    {feature.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
