import Image from "next/image"

import Delnik from "../public/delnik1.jpg"

const ProcMy = () => {
  return(
    <div id="procmy" className="pt-2 border-t-[1px] border-b-[1px]">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    {/* Main container */}
    <div className="flex flex-col md:flex-row items-center md:space-x-8 ">
      {/* Image Container */}
      <div className="flex-1">
        <Image
          src={Delnik}
          alt="Dlaczego my?"
          width={700}
          height={700}
        />
      </div>

      {/* Text and Cards Container */}
      <div className="flex-1 mt-8 md:mt-0">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 sm:items-start text-center ">Proč do toho jít s námi?</h2>
        <p className="text-md font-medium text-gray-900 mb-8 sm:items-start text-center ">
          Potřebujete elektroinstalaci a stále váháte, koho vybrat? Naši profesionálové <b>jsou ověřeni stovkami klientů, kteří se k nám rádi vracejí.</b>  
        </p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <i className='bx bx-time text-cyan-950 text-4xl'></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-950 mb-3">Rychlost a dodržování termínů</h3>
              <p className="text-md text-gray-900">Svou práci provedeme rychle a podle předem stanoveného časového plánu, který si společně odsouhlasíme.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <i className='bx bx-user-check text-cyan-950 text-4xl'></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-950 mb-3">Léta praxe a spokojení klienti</h3>
              <p className="text-md text-gray-900">Jsme certifikovaní a díky mnohaletým zkušenostem a prací v oboru elektroinstalace máme mnoho spokojených klientů.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <i className='bx bx-edit text-cyan-950 text-4xl'></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-950 mb-3">Návrh nejvhodnějšího řešení</h3>
              <p className="text-md text-gray-900">Ať už jde o návrh rozmístění zásuvek, vypínačů a dalších komponent... Najdeme řešení, které se bude líbit a zároveň bude funkční.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <i className='bx bxs-lock-alt text-cyan-950 text-4xl'></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-950 mb-3">Za svou prací si stojíme</h3>
              <p className="text-md text-gray-900">Poskytujeme záruku na naši práci a na veškeré použité komponenty. V případě problému se můžete spolehnout na rychlý servis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ProcMy