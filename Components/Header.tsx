"use client";

import { useState } from "react";



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
          <a href="" className="flex items-center">
            <img src="/prdik-logo.png" width={60} height={40} alt="logo" />
            <span className="text-lg font-bold">InnoSolEnergy</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 flex-1 justify-end px-20">
          <div className="mr-10">
          <p className="border-cyan-950 animate-pulse-red p-2 rounded-md">
            <a href="tel:+420919585" className="text-inherit">
              <span>Hotline 📞 +420 919585</span>
            </a>
          </p>
          </div>
          <a onClick={handleScrollToSluzby}  className="hover:bg-slate-100 p-2 rounded-md active:bg-slate-300 duration-200 cursor-pointer font-medium">Služby</a>
          <a onClick={handleScrollToProcMy}  className="hover:bg-slate-100 p-2 rounded-md active:bg-slate-300 duration-200 cursor-pointer font-medium">Proč my?</a>
          <a onClick={handleScrollToRecenze} className="hover:bg-slate-100 p-2 rounded-md active:bg-slate-300 duration-200 cursor-pointer font-medium">Recenze</a>
          <a onClick={handleScrollToKontakt} className="hover:bg-slate-100 p-2 rounded-md active:bg-slate-300 duration-200 cursor-pointer font-medium">Kontakt</a>
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
            <a href="#sluzba1" className="block py-2 hover:text-gray-700 border-t font-medium" onClick={() => {setIsMenuOpen(false); handleScrollToSluzby()}}>Služby</a>
            <a href="#sluzba2" className="block py-2 hover:text-gray-700 border-t font-medium" onClick={() => {setIsMenuOpen(false); handleScrollToProcMy()}}>Proč my?</a>
            <a href="#sluzba3" className="block py-2 hover:text-gray-700 border-t font-medium" onClick={() => {setIsMenuOpen(false); handleScrollToRecenze()}}>Recenze</a>
            <a href="#sluzba3" className="block py-2 hover:text-gray-700 border-t border-b font-medium" onClick={() => {setIsMenuOpen(false); handleScrollToKontakt()}}>Kontakt</a>
          </nav>
          <p className="border-cyan-950 animate-pulse-red p-2 rounded-md mx-5 text-center mb-2">
            <a href="tel:+420919585" className="text-inherit">
              <span>Hotline 📞 +420 919585</span>
            </a>
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
