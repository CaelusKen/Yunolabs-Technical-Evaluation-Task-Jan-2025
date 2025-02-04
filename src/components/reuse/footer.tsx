"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import Logo from "@/assets/images/Logo.png";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Concerns", href: "/concerns" },
    { name: "Treatments", href: "/treatments" },
    { name: "Shop", href: "/shop" },
    { name: "Locate Us", href: "/locate-us" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "TikTok", icon: Youtube, href: "#" }, // Replace with TikTok icon if available
    { name: "YouTube", icon: Youtube, href: "#" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src={Logo || "/placeholder.svg"}
                alt="Cosmedix Logo"
                width={180}
                height={50}
                className="h-auto w-auto brightness-0 invert"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex flex-wrap max-w-[520px] gap-x-4 gap-y-2">
              {navigation.main.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <Link
                    href={item.href}
                    className="text-lg text-white hover:text-white/80"
                  >
                    <p className="text-4xl">{item.name}</p>
                  </Link>
                  {index < navigation.main.length - 1 && (
                    <span className="ml-4 text-white/50">/</span>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="mt-8 flex justify-between gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <div className="text-xs font-light uppercase text-white/50">
                  CONTACT US
                </div>
                <div className="mt-1 text-xl font-semibold">+02 8006 3344</div>
              </div>
              <div>
                <div className="text-xs font-light uppercase text-white/50">
                  EMAIL
                </div>
                <div className="mt-1 text-xl font-light">
                  robert@cosmedixclinics.com.au
                </div>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="space-y-6">
              <div>
                <div className="text-xs font-light uppercase text-white/50">
                  ADDRESS
                </div>
                <div className="mt-1 text-xl font-light">
                  169 William Street - Darlinghurst
                  <br />
                  Sydney, NSW
                </div>
              </div>
              <div>
                <div className="text-xs font-light uppercase text-white/50">
                  OPENING HOURS
                </div>
                <div className="mt-1 text-xl font-semibold">9am—6pm</div>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="w-[48px] h-[48px] rounded-full bg-white p-2 text-[#2D2D2D] transition-colors hover:bg-white/90"
              >
                <div className="flex justify-center items-center">
                  <ArrowUp size={24} />
                  <span className="sr-only">Scroll to top</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 lg:flex-row">
          <div className="flex items-center gap-6">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/70 transition-colors hover:text-white"
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-white/50">© 2024 — COPYRIGHT</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
