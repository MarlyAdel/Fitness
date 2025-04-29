"use client";
import Image from "next/image";
import logoImg from "../../../../public/assets/img/logo.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Class", href: "/class" },
  { name: "Team", href: "/team" },
  { name: "Prices", href: "/prices" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {


  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-11 py-4 flex justify-between items-center">
        <Image src={logoImg} alt="logo" className="w-28" />

        {/* Hamburger */}
        <button
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 uppercase font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${
                  pathName === link.href ? "text-red-500" : "text-white"
                } hover:text-red-500 transition-colors`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden lg:flex gap-4 text-xl">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 uppercase font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${
                    pathName === link.href ? "text-red-500" : "text-white"
                  } hover:text-red-500 transition-colors`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="flex pt-2 text-xl">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </ul>
        </div>
      )}
    </nav>
    
  );
}
