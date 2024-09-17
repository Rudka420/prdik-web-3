"use client"

import { useState } from 'react';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    antiSpam: ''
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]*$/; // Pouze číslice
    return re.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === "phone" && !validatePhone(e.target.value)) {
      return; // Neaktualizujeme, pokud nejsou zadané číslice
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validace formátu e-mailu
    if (!validateEmail(formData.email)) {
      alert('Zadejte platný formát e-mailu.');
      return;
    }

    if (formData.antiSpam !== '7') {
      alert('Nesprávná odpověď na antispamovou otázku.');
      return;
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Email byl úspěšně odeslán.');
        setFormData({ name: '', email: '', phone: '', message: '', antiSpam: '' }); // Resetuje formulář
      } else {
        alert('Došlo k chybě při odesílání e-mailu.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Došlo k chybě při odesílání e-mailu.');
    }
  };

  return (
    <div id='kontakt' className="flex flex-col mt-10 border-t items-center justify-center bg-white text-black py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Levá část - Obrázek a kontaktní informace */}
        <div className="flex flex-col items-center mb-10 md:mb-0 md:mr-10">
          {/* Obrázek */}
          <div className="w-48 h-48 mb-4">
            <img
              src="/tvrdik_michal.jpg"
              alt="Kontakt osoba"
              className="rounded-full object-cover w-full h-full"
              width={192}
              height={192}
            />
          </div>
          {/* Jméno a kontaktní údaje */}
          <h3 className="text-2xl font-bold">Michal Tvrdík</h3>
          <p className="flex items-center mt-2 font-medium">
            <span className="mr-2"><i className='bx bx-envelope text-cyan-950 text-lg align-middle' ></i></span>info@innosolenergy.eu
          </p>
          <p className="flex items-center mt-2 font-medium">
          <a href="tel:+420919585" className="text-inherit">
            <span className="mr-2 text-lg"><i className='bx bxs-phone text-cyan-950 text-lg align-middle' ></i></span>+420 919585
          </a>  
          </p>
          <p className="flex items-center mt-2 font-medium">
          <a href="https://wa.me/42072919585?text=Dobrý den, mám zájem o vaše služby." target="_blank" rel="noopener noreferrer">
            <span className="mr-2 text-lg"><i className='bx bxl-whatsapp text-cyan-950 text-lg align-middle' ></i></span>+420 72919585
          </a>
          </p>
        </div>

        {/* Pravá část - Kontaktní formulář */}
        <div className="w-full pt-10 md:w-1/2 bg-white p-6 rounded-lg shadow-lg shadow-cyan-950 text-black">
          <h2 className="text-2xl font-bold mb-4 text-center">Kontaktujte nás</h2>
          <p className="text-center mb-6">Můžete nám napsat skrze kontaktní formulář a my se ozveme.</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Jméno, Email, Telefon */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jméno a příjmení"
                className="flex-1 p-2 border border-gray-300 rounded-md mb-1"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="flex-1 p-2 border border-gray-300 rounded-md mb-1"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon"
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Zpráva */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Text zprávy..."
                className="w-full p-2 border border-gray-300 rounded-md h-32 resize-none"
              />
            </div>

            {/* Antispamová otázka */}
            <div>
              <label className="block mb-2">Kolik je <b>pět</b> plus <b>dvě?</b> (Ověření že nejste robot)</label>
              <input
                type="text"
                name="antiSpam"
                value={formData.antiSpam}
                onChange={handleChange}
                placeholder="Zadejte číslici"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Tlačítko odeslání */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center justify-center px-6 py-2 bg-cyan-950 text-white font-semibold rounded-md shadow-md hover:bg-cyan-700 transition duration-300"
              >
                <i className='bx bx-envelope text-white text-lg mr-2' ></i> Odeslat zprávu
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Nová část - Kde působíme */}
      <div className="w-full mt-10 bg-slate-100 text-black py-10 px-4 md:px-20 text-center rounded-lg shadow-lg shadow-cyan-950">
        <h2 className="text-4xl font-bold mb-6">Kde působíme?</h2>
        <p className="mb-6">Výpis měst a jejich okolí, které máme pod palcem.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* První sloupec */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liberecký kraj</h3>
            <ul>
              <li>Jablonec nad Nisou</li>
              <li>Liberec</li>
              <li>Frýdlant</li>
              <li>Turnov</li>
              <li>Železný Brod</li>
              <li>Česká Lípa</li>
            </ul>
          </div>

          {/* Druhý sloupec */}
          <div>
            <h3 className="text-xl font-bold mb-4">Středočeský kraj</h3>
            <ul>
              <li>Mladá Boleslav</li>
              <li>Mnichovo Hradiště</li>
              <li>Brandýs nad Labem</li>
              <li>Lysá nad Labem</li>
              <li>Mělník</li>
            </ul>
          </div>

          {/* Třetí sloupec */}
          <div>
            <h3 className="text-xl font-bold mb-4">Královehradecký kraj</h3>
            <ul>
              <li>Jičín</li>
              <li>Nová Paka</li>
            </ul>
          </div>
        </div>

        <p className="mt-6">Rádi zajedeme i do okolních měst a vesniček. Vše záleží na domluvě.</p>
      </div>
    </div>
  );
};

export default Kontakt;
