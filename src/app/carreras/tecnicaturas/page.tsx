'use client';
import Link from 'next/link';
import Carousel from '@/app/componentes/Slider';
import Footer from '@/app/componentes/footer';
import Header from '@/app/componentes/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import tecnicaturas from './tecnicaturas';

export default function Tecnicaturas() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="bg-gray-100 w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            {tecnicaturas.map((tecnicatura, index) => (
              <div key={index} className="group justify-start flex items-start">
                <div className="grid gap-4 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full flex-col">
                  <Link href={tecnicatura.href}>
                    <Image
                      src={tecnicatura.imagen}
                      width={500}
                      height={500}
                      alt={tecnicatura.alt}
                      className="aspect-square object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                  </Link>
                  <Link href={tecnicatura.href} prefetch={false}>
                    <h3 className="mb-2 text-lg font-semibold group-hover:text-primary-500 dark:group-hover:text-primary-400">
                      {tecnicatura.nombre}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {tecnicatura.descripcion}
                    </p>
                    <Button className="bg-[#722F37] rounded-full mt-4 hover:bg-[#722F37]/80">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
