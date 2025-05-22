import React from 'react'

type CarouselItem = {
  image: string
  title: string
}

const items: CarouselItem[] = [
  {
    image: '../img/1011.webp',
    title: 'Andador Eclesiástico',
  },
  {
    image: '../img/1000.webp',
    title: 'Andador Eclesiástico',
  },
  {
    image: '../img/11.webp',
    title: 'Andador Eclesiástico',
  },
  {
    image: '../img/1010111111101.webp',
    title: 'Andador Eclesiástico',
  },
]

const Carousel: React.FC = () => {
  // Medidas para smart TV Full HD (1920x1080)
  // Carousel ocupa todo el ancho, 165px de alto, pegado abajo
  return (
    <div className="fixed left-0 bottom-0 w-full h-[165px] z-10 bg-[#232228] flex">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden"
          style={{
            width: `${100 / items.length}%`, // 4 items = 25% cada uno
            height: '100%',
            borderRadius: '8px',
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover brightness-75"
          />
          <span className="absolute left-4 bottom-4 text-white font-bold text-[15px] font-montserrat drop-shadow-md">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Carousel