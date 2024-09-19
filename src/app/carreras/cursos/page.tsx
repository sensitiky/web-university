'use client';
import Footer from '@/app/componentes/footer';
import Header from '@/app/componentes/header';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import cursos from './cursos';
import Slider3 from '@/app/componentes/slider3';
import Link from 'next/link';

export default function Cursos() {
  return (
    <div id="cursos">
      <Header />
      <Slider3 />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {cursos.map((curso, index) => (
                <div
                  key={index}
                  className="group flex flex-col rounded-3xl bg-white dark:bg-gray-950 border border-gray-200 shadow-md transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full"
                >
                  <Link href="/contacto">
                    <Image
                      src={curso.imagen}
                      width={500}
                      height={500}
                      alt={curso.nombre}
                      className="aspect-square object-scale-down rounded-3xl mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
                      loading="lazy"
                      quality={75}
                    />
                  </Link>
                  <h2 className="text-lg font-semibold mb-4">{curso.nombre}</h2>
                  <Tabs defaultValue="descripcion">
                    <TabsList className="flex flex-wrap justify-start mb-4 space-x-2 bg-transparent">
                      <TabsTrigger
                        value="descripcion"
                        className="rounded-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      >
                        Descripción
                      </TabsTrigger>
                      <TabsTrigger
                        value="modalidad"
                        className="rounded-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      >
                        Modalidad
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="descripcion">
                      <p>{curso.descripcion}</p>
                    </TabsContent>
                    <TabsContent value="modalidad">
                      <p>{curso.modalidad}</p>
                    </TabsContent>
                  </Tabs>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
