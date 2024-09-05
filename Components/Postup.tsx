const Postup = () => {
  return (
    <div className="flex flex-col border-b pb-10 items-center justify-center my-10 px-4 md:px-20">
      {/* Nadpis */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-4">
        Jak probíhá realizace / spolupráce?
      </h2>
      <p className="text-md font-medium text-gray-900 mb-8 text-center">
        Od konzultace až po dokončení a předání...
      </p>

      {/* Kroky */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12">
        {/* Krok 1 */}
        <div className="flex items-center space-x-4">
          <div className="text-cyan-950 text-2xl border-[3px] border-cyan-950 rounded-full w-10 h-10 flex items-center justify-center">
            1
          </div>
          <p className="text-gray-800 text-base font-medium">
            Úvodní telefonát / konzultace na místě
          </p>
        </div>

        {/* Krok 2 */}
        <div className="flex items-center space-x-4">
          <div className="text-cyan-950 text-2xl border-[3px] border-cyan-950 rounded-full w-10 h-10 flex items-center justify-center">
            2
          </div>
          <p className="text-gray-800 text-base font-medium">
            Položkový rozpočet s jasnou cenou
          </p>
        </div>

        {/* Krok 3 */}
        <div className="flex items-center space-x-4">
          <div className="text-cyan-950 text-2xl border-[3px] border-cyan-950 rounded-full w-10 h-10 flex items-center justify-center">
            3
          </div>
          <p className="text-gray-800 text-base font-medium">
            Podpis smlouvy o dílo
          </p>
        </div>

        {/* Krok 4 */}
        <div className="flex items-center space-x-4">
          <div className="text-cyan-950 text-2xl border-[3px] border-cyan-950 rounded-full w-10 h-10 flex items-center justify-center">
            4
          </div>
          <p className="text-gray-800 text-base font-medium">
            Realizace dle časového plánu
          </p>
        </div>

        {/* Krok 5 */}
        <div className="flex items-center space-x-4">
          <div className="text-cyan-950 text-2xl border-[3px] border-cyan-950 rounded-full w-10 h-10 flex items-center justify-center">
            5
          </div>
          <p className="text-gray-800 text-base font-medium">
          Dodání dokumentace a revizní zprávy
          </p>
        </div>

        {/* Krok 6 */}
        <div className="flex items-center space-x-4">
          <div className="text-cyan-950 text-2xl border-[3px] border-cyan-950 rounded-full w-10 h-10 flex items-center justify-center">
            6
          </div>
          <p className="text-gray-800 text-base font-medium">
            Záruční i pozáruční servis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Postup;
