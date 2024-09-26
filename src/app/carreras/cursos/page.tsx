'use client';
import { useState } from 'react';
import Footer from '@/app/componentes/footer';
import Header from '@/app/componentes/header';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import cursos from './cursos';
import Slider3 from '@/app/componentes/slider3';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BannerCategoriasAnimado from '@/components/ui/banner';

const categorias = {
  belleza: {
    nombre: 'Belleza y Estética',
  },
  diseno: {
    nombre: 'Diseño y Multimedia',
  },
  gestiones: {
    nombre: 'Gestiones administrativas, comerciales y ambientales',
  },
  idiomas: { nombre: 'Idiomas' },
  marketing: {
    nombre: 'Marketing y Negocios',
  },
  tecnologia: {
    nombre: 'Tecnología e Informática',
  },
};

export default function Cursos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<
    string | null
  >(null);

  const cursosFiltrados = categoriaSeleccionada
    ? cursos.filter((curso) => {
        switch (categoriaSeleccionada) {
          case 'Tecnología e Informática':
            return [
              'Autocad',
              'Desarrollo Móvil',
              'Game developer para jóvenes y niños',
              'Introducción a la programación',
              'Java',
              'Master Office',
              'PHP',
              'Project Manager',
              'Python',
              'Tecnologías de la información y la comunicación',
            ].includes(curso.nombre);
          case 'Diseño y Multimedia':
            return [
              'Diseño gráfico digital',
              'Fotografía avanzada',
              'Fotografía básica',
              'Streaming y grabación de video',
            ].includes(curso.nombre);
          case 'Marketing y Negocios':
            return [
              'Marketing digital y comercio electrónico',
              'Marketing y dirección comercial',
              'Tango Gestión',
            ].includes(curso.nombre);
          case 'Idiomas':
            return ['Inglés', 'Portugués'].includes(curso.nombre);
          case 'Belleza y Estética':
            return [
              'Aparatología',
              'Barbería y corte masculino',
              'Belleza de Manos y pies',
              'Colorimetría',
              'Depilación',
              'Drenaje linfático',
              'Maquillaje',
              'Masaje Deportivo',
              'Reflexología',
              'Técnicas de spa',
            ].includes(curso.nombre);
          case 'Gestiones administrativas, comerciales y ambientales':
            return [
              'Asistente Notarial',
              'Gestoría',
              'Liquidación de Ganancias y Bienes Personales',
              ,
              'Liquidación de sueldos',
            ].includes(curso.nombre);
          default:
            return false;
        }
      })
    : [];

  return (
    <div id="cursos">
      <Header />
      <Slider3 />
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          {categoriaSeleccionada && (
            <div className="mb-8 flex overflow-x-auto space-x-4 pb-4 justify-center">
              {Object.entries(categorias).map(([key, { nombre }]) => (
                <Button
                  key={key}
                  onClick={() =>
                    setCategoriaSeleccionada(
                      categoriaSeleccionada === nombre ? null : nombre
                    )
                  }
                  className={`whitespace-nowrap rounded-full p-4 ${
                    categoriaSeleccionada === nombre
                      ? 'bg-[#722F37] text-white hover:bg-[#722F37]/80'
                      : 'bg-gray-300 hover:bg-gray-300/80 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {nombre}
                </Button>
              ))}
            </div>
          )}
          {categoriaSeleccionada ? (
            <div className="grid gap-6 md:gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {cursosFiltrados.map((curso, index) => (
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
                    <h2 className="text-lg font-semibold mb-4">
                      {curso.nombre}
                    </h2>
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
          ) : (
            <BannerCategoriasAnimado
              categorias={Object.values(categorias)}
              onSelectCategoria={(categoria) =>
                setCategoriaSeleccionada(categoria)
              }
            />
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
