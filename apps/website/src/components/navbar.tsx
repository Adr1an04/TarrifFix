"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

const routes: { title: string; href: string }[] = [
  { title: "GUIDE", href: "/guide" },
  { title: "WATCH", href: "/watch" },
  { title: "DOWNLOAD", href: "/download"}
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="relative flex items-center justify-between h-32 w-full bg-gradient-to-t from-transparent lg:pr-14 md:pr-10 sm:pr-2 lg:pl-8 py-5">
      <div className="flex w-full justify-between m-6">
        <div className="flex justify-start items-center space-x-4">
          <Link href={"/"} className="shrink-0">
            <Image className="object-contain" src="/" alt="My Icon" width={150} height={150} />
          </Link>
        </div>

        <div className="justify-end justify-items-end sm:flex hidden">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className={route.title === "DOWNLOAD" ? "font-bold transition items-center inline-flex lg:px-5 md:px-3 sm:px-1.5 lg:text-base md:text-sm sm:text-xs text-white bg-[#8D6B94] h-fit py-2 my-18 w-fit hover:bg-[#d096dc]" : "font-bold transition items-center inline-flex lg:px-5 md:px-3 sm:px-1.5 lg:text-base md:text-sm sm:text-xs hover:text-[#8D6B94] text-black"}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>

      

      {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}

      <button onClick={toggleMenu} className="sm:hidden bg-[#8D6B94] mr-5 z-50">
        {menuOpen ? (
          <XMarkIcon className="h-7 w-7 fixed bg-[#8D6B94] -translate-x-7 -translate-y-3.5 z-50" />
        ) : (
          <Bars3Icon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
};

const MobileMenu: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  return (
    <div className="fixed inset-0 flex flex-col z-40 bg-[#A5BE00] h-fit">
      <div className="flex w-full grow flex-col gap-1 px-4 pb-2 py-12">
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.href}
            onClick={toggleMenu}
            className={route.title === "DOWNLOAD" ? "hover:bg-[#d096dc] font-bold text-white justify-center inline-flex align-middle text-center h-10 w-full items-center text-sm transition-colors bg-[#8D6B94] p-5" : "hover:text-[#679436] font-bold text-white inline-flex h-10 w-full items-center text-sm transition-colors"}
            
            
          >
            {route.title}
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export { Navbar };
