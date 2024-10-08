"use client";


import { useEffect, useState } from "react";


const Hero = () => {
  // Slova, která se budou měnit

  const words = [
    <span key="elektro">Elektro - instalace🔌</span>, 
    <span key="fotovoltaika">Fotovoltaiku ☀️</span>,
    <span key="stavebni-prace">Stavební práce 🚧</span>
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true); // Stav pro animaci

  useEffect(() => {
    // Funkce pro změnu slova 
    const intervalId = setInterval(() => {
      setFade(false); // Začneme fade-out
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true); // Nastavíme fade-in
      }, 250); // Čas pro fade-out, 250ms

    }, 2000); // každé 2 sekundy

    // Vyčistíme interval při odmountování komponenty
    return () => clearInterval(intervalId);
  },);

  return (
    <div className="mt-12 relative w-full h-[600px]">
      {/* Background Image */}
      <img 
        src="/hero-el-img.jpg"
        alt="electric work" 
        className="w-full h-full object-cover opacity-25" 
      />

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex justify-center items-center text-gray-900 px-4 md:px-10 z-10">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="md:text-6xl text-[50px] font-bold my-4 text-center">
            Perfektní volba pro <br />
            <div
              className={`inline-block px-2 py-4 text-cyan-950 transition-opacity duration-550 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
              {words[currentWordIndex]}
            </div>
          </h1>
          <p className="text-xl text-gray-900 mt-5">
            Jsme <b>sehraný tým elektrikářů</b>  a zvládáme jednoduché instalace i komplexní zadání. <br />
            
          </p>
          <p className="text-xl text-gray-900 mt-5">
            Kontaktujte nás, rádi vám připravíme nabídku na míru <b>zdarma.</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
