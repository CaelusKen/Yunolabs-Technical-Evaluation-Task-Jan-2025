"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import FacebookLogo from "@/assets/images/facebook.png";
import InstagramLogo from "@/assets/images/instagram.png";
import TiktokLogo from "@/assets/images/tik-tok.png";
import YoutubeLogo from "@/assets/images/youtube.png";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/concerns", label: "Concerns" },
    { href: "/treatments", label: "Treatments" },
    { href: "/shop", label: "Shop" },
    { href: "/locate-us", label: "Locate Us" },
  ];

  const socialLinks = [
    { image: FacebookLogo, href: "https://www.facebook.com" },
    { image: InstagramLogo, href: "https://www.instagram.com" },
    { image: TiktokLogo, href: "https://www.x.com" },
    { image: YoutubeLogo, href: "https://www.youtube.com" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="relative bg-white">
        <div className="flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Cosmedix Logo"
              width={140}
              height={40}
              className="h-auto w-auto"
              priority
            />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="aspect-square h-10 w-10 rounded-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#8B6E5B]" />
            ) : (
              <div className="space-y-2">
                <div className="h-0.5 w-6 bg-zinc-800" />
                <div className="h-0.5 w-6 bg-zinc-800" />
                <div className="h-0.5 w-6 bg-zinc-800" />
              </div>
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>

          <Button
            asChild
            className="bg-zinc-900 rounded-full px-6 py-2 text-sm font-light text-white hover:bg-zinc-700"
          >
            <Link href="/book">Book Now</Link>
          </Button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`absolute left-0 right-0 bg-[#F5F5F5] transition-all duration-300 ease-in-out ${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div className="flex h-fit flex-col px-4 md:px-6">
            <div className="grid grid-cols-2 w-fit gap-x-32 pt-8">
              <div className="space-y-14">
                {navLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-2xl font-light text-[#8B6E5B] hover:text-[#6D574A]"
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-[40px] font-semibold">{link.label}</p>
                  </Link>
                ))}
              </div>
              <div className="space-y-14">
                {navLinks.slice(3).map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-2xl font-light text-[#8B6E5B] hover:text-[#6D574A]"
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-[40px] font-semibold">{link.label}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-10 pb-8">
              <div className="flex w-full items-center justify-end space-x-4">
                {socialLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-[#8B6E5B] hover:text-[#6D574A]"
                  >
                    <Image
                      src={link.image}
                      alt={`${link.href.split(".")[1]} Logo`}
                      className="w-5 h-5 filter brightness-0 sepia-100 hue-rotate-[300deg] saturate-[150%] contrast-[0.8] transition-all duration-300 hover:brightness-100 hover:sepia-0 hover:hue-rotate-0 hover:saturate-100 hover:contrast-100"
                    />
                    <span className="sr-only">Social media</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
