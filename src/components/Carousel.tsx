import { useEffect, useState } from "react";

const images = [
  { url: "../img/1.webp", title: "Andador Eclesiástico" },
  { url: "../img/10.webp", title: "Andador Eclesiástico" },
  { url: "../img/11.webp", title: "Andador Eclesiástico" },
  { url: "../img/100.webp", title: "Andador Eclesiástico" },
  { url: "../img/101.webp", title: "Andador Eclesiástico" },
  { url: "../img/110.webp", title: "Andador Eclesiástico" },
  { url: "../img/111.webp", title: "Andador Eclesiástico" },
  { url: "../img/1000.webp", title: "Andador Eclesiástico" },
  { url: "../img/1011.webp", title: "Andador Eclesiástico" },
  { url: "../img/1100.webp", title: "Andador Eclesiástico" },
  { url: "../img/1110.webp", title: "Andador Eclesiástico" },
  { url: "../img/1111.webp", title: "Andador Eclesiástico" },
  { url: "../img/101.webp", title: "Andador Eclesiástico" },
  { url: "../img/110.webp", title: "Andador Eclesiástico" },
  { url: "../img/111.webp", title: "Andador Eclesiástico" },
  { url: "../img/1000.webp", title: "Andador Eclesiástico" },
];

const Carousel: React.FC = () => {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpieza del intervalo
  }, [totalPages]);

  const currentImages = images.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="relative w-full h-full px-4 sm:px-6 lg:px-14 py-8 flex flex-col justify-between">
      {/* Indicadores */}
      <div className="flex justify-end mb-4">
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`w-5 h-1 rounded-full ${
                index === currentPage ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Imágenes */}
<div className="flex w-full h-full gap-0 transition-all duration-700">
  {currentImages.map((item, index) => (
    <div key={index} className="relative w-1/4 h-full">
      <img
        src={item.url}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 text-white text-base lg:text-lg 2xl:text-3xl mb-6 font-bold drop-shadow-md">
        {item.title}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Carousel;
