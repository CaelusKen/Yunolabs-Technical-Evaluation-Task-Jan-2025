import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/images/Hero.webp";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Cosmedix skincare treatment"
          className="w-full h-full object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative flex h-full items-end pb-32 md:pb-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl absolute bottom-8 left-10">
            <h1 className="text-3xl font-light text-white md:text-5xl lg:text-6xl mb-4">
              Unveil Your Best Self with Cosmedix Clinics&apos; Expert Care and
              Cutting-Edge Treatments
            </h1>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center rounded-full border border-white/30 bg-none px-6 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
