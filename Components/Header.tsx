"use client";

import { useState } from "react";
import Image from "next/image";
import PrdikLogo from "../public/prdik-logo.png";

const handleScrollToSluzby = () => {
  const heroElement = document.getElementById('sluzby');
  if (heroElement) {
    heroElement.scrollIntoView({ behavior: 'smooth' });
  }
}
const handleScrollToProcMy = () => {
  const heroElement = document.getElementById('procmy');
  if (heroElement) {
    heroElement.scrollIntoView({ behavior: 'smooth' });
  }
}
const handleScrollToRecenze = () => {
  const heroElement = document.getElementById('recenze');
  if (heroElement) {
    heroElement.scrollIntoView({ behavior: 'smooth' });
  }
}
const handleScrollToKontakt = () => {
  const heroElement = document.getElementById('kontakt');
  if (heroElement) {
    heroElement.scrollIntoView({ behavior: 'smooth' });
  }
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full z-50 fixed top-0 left-0"> {/* Přidáno fixed pro header */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-20">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <a href="#" className="flex items-center">
            <Image src={PrdikLogo} width={60} height={40} alt="logo" />
            <span className="text-lg font-bold">InnoSolEnergy</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 flex-1 justify-end px-20">
          <div className="mr-10">
            <p className="border-cyan-950 animate-pulse-red p-[3px] rounded-md">
              <span>Hotline 📞 +420 919585</span>
            </p>
          </div>
          <a onClick={handleScrollToSluzby} href="#sluzba1" className="hover:text-gray-700">Služby</a>
          <a onClick={handleScrollToProcMy} href="#sluzba2" className="hover:text-gray-700">Proč my?</a>
          <a onClick={handleScrollToRecenze} href="#sluzba3" className="hover:text-gray-700">Recenze</a>
          <a onClick={handleScrollToKontakt} href="#sluzba3" className="hover:text-gray-700">Kontakt</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none hover:bg-slate-200 rounded-md p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 mt-12 bg-white shadow-md z-40 md:hidden"> {/* Změněno na fixed pro overlay a mt-12 pro odsazení */}
          <nav className="px-6 py-4 ">
            <a href="#sluzba1" className="block py-2 hover:text-gray-700 border-t" onClick={() => {setIsMenuOpen(false); handleScrollToSluzby()}}>Služby</a>
            <a href="#sluzba2" className="block py-2 hover:text-gray-700 border-t" onClick={() => {setIsMenuOpen(false); handleScrollToProcMy()}}>Proč my?</a>
            <a href="#sluzba3" className="block py-2 hover:text-gray-700 border-t" onClick={() => {setIsMenuOpen(false); handleScrollToRecenze()}}>Recenze</a>
            <a href="#sluzba3" className="block py-2 hover:text-gray-700 border-t" onClick={() => {setIsMenuOpen(false); handleScrollToKontakt()}}>Kontakt</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
