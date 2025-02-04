"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 2,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(max-width: 767px)": { slidesToScroll: 1 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="w-full bg-[#CDBCAB] py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-16 text-center text-[56px] font-semibold text-[#6B6356]">
          Don&apos;t just take our word for it
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] pl-4"
                >
                  <blockquote className="mx-auto max-w-xl text-center">
                    <p className="mb-8 text-lg leading-relaxed text-zinc-800/80">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <footer>
                      <cite className="not-italic">
                        <div className="text-lg font-light text-zinc-800">
                          {testimonial.name}
                        </div>
                        <div className="text-base text-zinc-800/70">
                          {testimonial.position}
                        </div>
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-full border border-zinc-800/10 bg-transparent p-4 text-zinc-800 transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-full border border-zinc-800/10 bg-transparent p-4 text-zinc-800 transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index * 2)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(selectedIndex / 2) === index
                      ? "w-8 bg-zinc-800"
                      : "w-2 bg-zinc-800/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
