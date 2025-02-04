import Concerns from "@/components/features/home/concerns";
import Hero from "@/components/features/home/hero";
import Testomonial from "@/components/features/home/testimonial-16";
import Testimonials from "@/components/features/home/testomonial-16-2";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testomonial />
      <Concerns />
      <Testimonials />
    </div>
  );
}
