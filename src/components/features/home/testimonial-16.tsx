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

export default function Testomonial() {
  return (
    <section className="w-full bg-[#F5F5F5] py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-0 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative border h-[400px] rounded-bl-[100px] border-zinc-200 bg-white p-12"
            >
              {/* Number */}
              <span className="absolute bottom-12 left-14 text-[48px] font-extralight leading-none text-[#585858]">
                {feature.number}
              </span>

              {/* Content Container */}
              <div className="relative flex items-start justify-between gap-8">
                {/* Title */}
                <h3 className="max-w-[300px] text-[32px] font-extralight leading-tight text-zinc-800">
                  {feature.title}
                </h3>

                {/* Image */}
                <div className="relative h-[140px] w-[140px] flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
