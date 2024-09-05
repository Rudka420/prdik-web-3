

import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Levá část - Logo a text copyrightu */}
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            {/* Logo */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="#" className="flex items-center">
                <Image src="/prdik-logo.png" width={60} height={40} alt="logo" />
                <span className="text-lg font-bold">InnoSolEnergy</span>
              </a>
            </div>
            {/* Copyright text */}
            <p className="text-gray-500 text-sm text-center">
              © 2024 InnoSolEnergy.eu - Všechna práva vyhrazena. <b>By @Rudka420</b>
            </p>
          </div>

          {/* Střední část - Odkazy */}
          <div className="flex flex-col lg:flex-row text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-16">
            
            <div>
              <h4 className="text-gray-800 font-semibold mb-2">INNOSOLENERGY.S.R.O</h4>
              <ul className="font-light">
                <li><p><span className="font-medium">Sídlo:</span> Korunní 2569/ 108,Vinohrady,10100 praha 10</p></li>
                <li><p><span className="font-medium">IČO:</span> 21936366</p></li>
                <li><p><span className="font-medium">Spisová značka:</span> C 408787 vedená u Městského soudu v Praze</p></li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 mt-6 lg:mt-0 list-none">
                <li><a href="#"><Image src="facebook-color-svgrepo-com.svg" width={28} height={28} alt="facebok" className="mb-2"/></a></li>
                <li><a href="#"><Image src="instagram-1-svgrepo-com.svg" width={30} height={30} alt="instagram" className="mb-2"/></a></li>
                <li><a href="#"><Image src="whatsapp-svgrepo-com.svg" width={30} height={30} alt="whatasap"/></a></li>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
