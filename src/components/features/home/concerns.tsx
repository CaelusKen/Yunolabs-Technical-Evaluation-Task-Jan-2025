"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import Concern01 from "@/assets/images/Concern01.webp";
import Concern02 from "@/assets/images/Concern02.webp";
import Concern03 from "@/assets/images/Concern03.webp";
import Concern04 from "@/assets/images/Concern04.webp";
import Concern05 from "@/assets/images/Concern05.webp";
import Concern06 from "@/assets/images/Concern06.webp";
import Concern07 from "@/assets/images/Concern07.webp";
import Concern08 from "@/assets/images/Concern08.webp";
import Concern09 from "@/assets/images/Concern09.webp";

const concerns = [
  {
    title: "Facial\nAnti-Ageing",
    image: Concern01,
    alt: "Facial anti-ageing treatment",
  },
  {
    title: "Acne Scarring &\nAcne Clearance",
    image: Concern02,
    alt: "Acne treatment",
  },
  {
    title: "Melasma,\nPigmentation &\nFreckles",
    image: Concern03,
    alt: "Pigmentation treatment",
  },
  {
    title: "Rosacea",
    image: Concern04,
    alt: "Rosacea",
  },
  {
    title: "Moles, Skin Tags & Lumps",
    image: Concern05,
    alt: "Moles, Skin Tags & Lumps",
  },
  {
    title: "Surgical & Burns Scars",
    image: Concern06,
    alt: "Surgical & Burns Scars",
  },
  {
    title: "Stretch Marks",
    image: Concern07,
    alt: "Stretch Marks",
  },
  {
    title: "Laser Tattoo Removal",
    image: Concern08,
    alt: "Laser Tattoo Removal",
  },
  {
    title: "Spider Veins",
    image: Concern09,
    alt: "Spider Veins",
  },
];

export default function Concerns() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    });
  }, [emblaApi]);

  return (
    <section className="w-full bg-[#F5F5F5] py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extralight text-zinc-800">Concerns</h2>
          <p className="mt-4 text-zinc-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {concerns.map((concern, index) => (
                <div
                  key={index}
                  className="relative mr-6 flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_33%]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                    <Image
                      src={concern.image || "/placeholder.svg"}
                      alt={concern.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl font-light leading-tight text-white whitespace-pre-line">
                        {concern.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {concerns.map((_, index) => (
                <button
                  title="."
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex ? "bg-zinc-800 w-8" : "bg-zinc-300"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="rounded-full border border-zinc-200 p-2 transition-colors hover:bg-zinc-100 disabled:opacity-50"
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className="rounded-full border border-zinc-200 p-2 transition-colors hover:bg-zinc-100 disabled:opacity-50"
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
