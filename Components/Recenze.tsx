"use client";

import 'swiper/css';
import 'swiper/css/pagination'; 



// import Swiper komponent
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 

const reviews = [
  {
    text: "Spolupráce na dvou projektech bez problémů. Obnova staré elektriky ve staré budově nebo elektroinstalace v novostavbě nebyl pro tuto firmu žádný problém. Díky jejich preciznosti, flexibilitě a přátelskému přístupu věřím, že to nebyla poslední spolupráce.",
    author: "@adam.posivac",
    verified: true,
    rating: 5,
    image: "/recenze1.jpg",
  },
  {
    text: "Kokoti, válej se špachtle všude po stavbě a někdo se vysral do michacky.",
    author: "@Cigoszestavby",
    verified: true,
    rating: 1,
    image: "/cigos.jpeg",
  },
  {
    text: "Spolupráce s p. Tvrdíkem probíhala dle domluvených požadavků a vše bylo vždy dodáno včas a dle domluvených podmínek. V průběhu spolupráce nám pan Tvrdík byl vždy k dispozici i mimo pracovní dobu pro řešení nenadálých událostí. Budeme se těšit na další spolupráci.",
    author: "@Snadnostav s.r.o.",
    verified: true,
    rating: 5,
    image: "/recenze3.jpeg",
  },
  {
    text: "Moc děkuji za spolupráci. Potřebovala jsem zapojit zásuvky, vypínače i rozvaděč v černém designu s kabeláží na povrchu, což není standard a vše bylo v pořádku včetně komunikace a termínů. 🙂",
    author: "@klara.vavrova",
    verified: true,
    rating: 5,
    image: "/recenze4.jpg",
  },
  {
    text: "Pro realizaci elektroinstalace sklepních prostor jsme ve výběrovém řízení vybrali p. Tvrdíka. Nabídku dodal rychle a rozpočet byl dodržen, dopočítal pouze nad rámec realizované práce a to vždy po předchozí domluvě a nacenění. V případě dalších elektroinstalačních prací se na p. Tvrdíka rádi opět obrátíme.",
    author: "@SVJPalackeho33",
    verified: true,
    rating: 5,
  }
];

const Recenze = () => {
  return (
    <div id='recenze' className="max-w-7xl  mx-auto py-2 px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Recenze klientů</h2>

    <Swiper
      modules={[Pagination]} 
      spaceBetween={30}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: '.custom-pagination', //  Vlastni kontainer a classa pro tecky 
        renderBullet: (index, className) =>
          `<span class="${className} w-1 h-1 bg-cyan-950 rounded-full inline-block mx-1"></span>`, 
      }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="relative bg-slate-50 p-6 rounded-lg  text-center h-full flex flex-col justify-between">
            
            {/* Hvezdy */}
            <div className="flex justify-center mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <i key={i} className='bx bxs-star text-orange-500 text-2xl'></i>
              ))}
            </div>

            {/* Uvozovky a text */}
            <div className="flex items-center justify-center mb-4">
              <i className="bx bxs-quote-alt-left text-4xl text-gray-300 mr-2"></i>
              <p className="text-base text-slate-800">{review.text}</p>
              <i className="bx bxs-quote-alt-right text-4xl text-gray-300 ml-2"></i>
            </div>

            <p className="text-slate-600">
              {review.author}
              {review.verified && <span className="text-blue-500 ml-1"><i className='bx bxs-badge-check'></i></span>}
            </p>
            <div>
              {review.image && <img src={review.image} alt="img recenze" width={400} height={400} className="mt-3"/>}
            </div>
          </div>

        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom container na ty zasrany tečky pod tim */}
    <div className="custom-pagination flex justify-center mt-2"></div>


  </div>
  );
};

export default Recenze;
