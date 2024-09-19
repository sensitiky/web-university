'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const images = [
  '/sistemas.webp',
  '/contador2.webp',
  '/estetica1.webp',
  '/abogacia.webp',
  '/disenio.webp',
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    setActiveIndex((newIndex + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <div
      {...handlers}
      className="relative w-full overflow-hidden rounded-lg shadow-lg"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-[500px] relative flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="fit"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 rounded-lg bg-black bg-opacity-30">
        <div className=" text-white p-4 md:p-8 lg:p-12">
          <h2 className="drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.8)] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fadeIn">
            Tecnicaturas Superiores
          </h2>
          <p className="drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.8)] text-lg md:text-xl lg:text-2xl mb-8 animate-fadeIn">
            Explora nuestras diversas opciones de tecnicaturas
            <br /> y encuentra la que mejor se adapte a tus intereses y
            objetivos.
          </p>
          <Link href="/contacto">
            <Button className="ml-10 hover:bg-[#722F37]/80 rounded-full bg-[#722F37] hover:border-white hover:border animate-fadeIn">
              Descubre más
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
