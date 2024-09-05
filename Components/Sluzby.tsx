

const Sluzby = () => {
  return (
    <div id="sluzby" className="flex flex-col items-center justify-center mt-14 mb-14">
      <div className="mx-4">
        <h2 className="text-5xl font-bold text-gray-900 text-center">
          Naše služby
        </h2>
        <p className="text-lg font-medium text-gray-900 text-center mt-6">
          Provádíme kompletní dodávku elektroinstalace jak silnoproudé tak i slaboproudé, včetně zajištění všech materiálu.
        </p>
        <p className="text-lg font-medium text-gray-900 text-center mt-3">
          Zabýváme se i kompletní rekonstrukcí a oprav v bytech, rodinných domů, obchodů, kanceláří, výrobních prostorů, skladů, chatách, atd.
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col md:flex-row gap-8 mt-12">

        {/* Silnoproud Card */}
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white w-96">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-cyan-950">
                <img src="/silnoproud1.jpg" alt="card-image"/>
            </div>
            <div className="p-6 text-left">
                <h5 className="mb-4 text-4xl font-semibold text-cyan-950 text-center">
                    Silnoproud <i className='bx bxs-zap text-cyan-950 text-3xl mb-3'></i> <i className='bx bxs-zap text-cyan-950 text-3xl mb-3'></i>
                </h5>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Návrh kompletní elektroinstalace
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Přípojky rodinných domů
                </p>                
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Vysekávání drážek pro kabeláž
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Elektroměrové rozvaděče
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Montáž zásuvek, vypínačů a světel
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl'></i>
                Návrh LED osvětlení
                </p>
            </div>
        </div>

        {/* Slaboproud Card */}
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white w-96">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-cyan-950">
                <img src="/slaboproud2.jpg" alt="card-image"/>
            </div>
            <div className="p-6 text-left">
                <h5 className="mb-4 text-4xl font-semibold text-cyan-950 text-center">
                    Slaboproud <i className='bx bxs-bolt-circle pr-1 text-cyan-950 text-3xl mb-3'></i>
                </h5>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Zabezpečovací technika
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Kamerové systémy
                </p>                
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Datové rozvody
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Domovní telefony
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Zvonkový systém
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl'></i>
                Chytrá domácnost
                </p>
            </div>
        </div>

        {/* Stavební práce Card */}
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white w-96">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-cyan-950">
                <img src="/staveb-prace.jpg" alt="card-image"/>
            </div>
            <div className="p-6 text-left">
                <h5 className="mb-4 text-4xl font-semibold text-cyan-950 text-center">
                    Stavební Práce <i className='bx bxs-hard-hat pr-1 text-cyan-950 text-3xl mb-3'></i>
                </h5>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Zednické práce
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Sádrokartony
                </p>                
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Zámková dlažba a obrubníky
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Armování betonu
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl mb-3'></i>
                Oprava střech
                </p>
                <p className="text-lg text-gray-900">
                <i className='bx bxs-badge-check pr-1 text-cyan-950 text-xl'></i>
                Bourací práce
                </p>
            </div>
        </div>

      </div>
      <div className="mx-4">
        <p className="text-lg font-medium text-gray-900 text-center mt-6 mb-5">
          Potřebujete něco, co jste u nás nenašli? Kontaktujte nás! Máme zkušený tým připravený zvládnout jakoukoliv práci a společně určitě najdeme řešení.
        </p>
      </div>
    </div>
  );
};

export default Sluzby;
