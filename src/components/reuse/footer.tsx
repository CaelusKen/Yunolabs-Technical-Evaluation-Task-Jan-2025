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
    { name: "TikTok", icon: Youtube, href: "#" },
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
        <div className="flex space-x-12">
          {/* Top Section with Logo and Navigation */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src={Logo || "/placeholder.svg"}
                alt="Cosmedix Logo"
                width={180}
                height={50}
                className="h-auto w-auto brightness-0 invert"
              />
            </Link>

            <nav className="flex flex-wrap max-w-[360px] gap-x-4 gap-y-2">
              {navigation.main.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <Link
                    href={item.href}
                    className="text-2xl font-light text-white hover:text-white/80"
                  >
                    {item.name}
                  </Link>
                  {index < navigation.main.length - 1 && (
                    <span className="ml-4 text-white/50">/</span>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom Section with Three Columns */}
          <div className="flex flex-col justify-between gap-8 lg:flex-row">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <div className="text-xs font-light uppercase text-white/50">
                  CONTACT US
                </div>
                <div className="mt-1 text-xl">+02 8006 3344</div>
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

            {/* Address, Hours & Social */}
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
                <div className="mt-1 text-xl">9am—6pm</div>
              </div>
              <div className="flex items-center gap-6 pt-4">
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
            </div>

            {/* Copyright and To-Top */}
            <div className="flex flex-col items-end justify-between gap-8">
              <button
                onClick={scrollToTop}
                className="h-[24px] w-[24px] rounded-full bg-white p-1.5 text-[#2D2D2D] transition-colors hover:bg-white/90"
              >
                <ArrowUp className="h-full w-full" />
                <span className="sr-only">Scroll to top</span>
              </button>
              <div className="text-sm text-white/50">© 2024 — COPYRIGHT</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
