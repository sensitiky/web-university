'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import CookieNotice from './componentes/cookies';
import Footer from './componentes/footer';
import Header from './componentes/header';
import Image from 'next/image';
import {
  ArrowRightIcon,
  BeakerIcon,
  BookIcon,
  MicroscopeIcon,
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <CookieNotice />
      <Header />
      <main className="flex-1">
        {/*Seccion Bienvenida*/}
        <section className="h-[80vh] text-gray-900">
          <div className="w-auto h-full">
            <Image
              src="/IESA.webp"
              alt="IESA"
              layout="fill"
              objectFit="cover"
              objectPosition="center 35%"
              quality={100}
            />
            <div className="relative container justify-center flex h-full w-full">
              <div className="flex flex-col items-center text-center rounded-lg  p-3 h-full w-full justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2.3px_2.3px_rgba(0,0,0,0.8)]">
                  Bienvenidos a IESA <br /> el instituto de <br />
                  tu futura profesión.
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white drop-shadow-[0_2.3px_2.3px_rgba(0,0,0,0.8)]">
                  Explora nuestros programas e inscríbete a una vibrante
                  comunidad de estudiantes.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-[#722F37] hover:bg-[#722F37]/80 rounded-full shadow-md">
                    <Link
                      href="/contacto"
                      className="relative group"
                      prefetch={false}
                    >
                      Contáctanos
                      <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </Link>
                  </Button>
                  <Button
                    className="text-black border border-black rounded-full shadow-md"
                    variant="outline"
                  >
                    <Link
                      href="/instituto"
                      className="relative group"
                      prefetch={false}
                    >
                      Descubre más
                      <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Seccion Oferta academica*/}
        <section
          id="programs"
          className="bg-gray-50 py-12 md:py-20 lg:py-28 z-50 relative"
        >
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Nuestras Ofertas Académicas
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                Explora nuestra variada oferta de tecnicaturas superiores,
                cursos y formaciones profesionales.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white shadow-lg rounded-3xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <BeakerIcon className="h-8 w-8 text-customColor-iesa" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">
                    Tecnicaturas Superiores
                  </h3>
                  <p className="text-gray-600">
                    Investiga nuestras innovadoras Tecnicaturas Superiores y
                    prepárate para un futuro prometedor en diferentes campos.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/carreras/tecnicaturas"
                    className="relative group text-customColor-iesa hover:text-customColor-iesa transition-colors"
                    prefetch={false}
                  >
                    Descubre más
                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#722F37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white shadow-lg rounded-3xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <MicroscopeIcon className="h-8 w-8 text-customColor-iesa" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">
                    Formaciones Profesionales
                  </h3>
                  <p className="text-gray-600">
                    Sumérgete en nuestras rigurosas formaciones profesionales y
                    haz crecer tu carrera hacia nuevas alturas en tu campo
                    elegido.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/carreras/formaciones"
                    className="relative group text-customColor-iesa hover:text-customColor-iesa transition-colors"
                    prefetch={false}
                  >
                    Descubre más
                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#722F37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white shadow-lg rounded-3xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <BookIcon className="h-8 w-8 text-customColor-iesa" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Cursos</h3>
                  <p className="text-gray-600">
                    Conoce nuestra amplia variedad de cursos especializados y
                    abre las puertas a nuevas oportunidades en tu carrera
                    profesional.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/carreras/cursos"
                    className="relative group text-customColor-iesa hover:text-customColor-iesa transition-colors"
                    prefetch={false}
                  >
                    Descubre más
                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#722F37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        {/*Seccion sobre el instituto*/}
        <section id="about" className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="w-full max-w-full">
                <Image
                  src="/iesa2.webp"
                  width="800"
                  height="800"
                  alt="Logo"
                  className="flex rounded-3xl shadow-md"
                />
              </div>

              <div className="w-full max-w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Descubre tu futura profesión.
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">
                  Un Instituto innovador enfocado en prepararte para el ámbito
                  profesional con programas prácticos, profesores dedicados y
                  conexiones laborales.
                </p>
                <Link
                  href="/instituto"
                  className="relative group inline-flex items-center gap-2 text-customColor-iesa hover:text-customColor-iesa transition-colors"
                  prefetch={false}
                >
                  Descubre más
                  <ArrowRightIcon className="h-5 w-5 text-customColor-iesa" />
                  <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#722F37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*Seccion contacto*/}
        <section id="contacto" className="py-12 md:py-20 lg:py-28 bg-gray-50">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex-col justify-center align-middle items-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex justify-center">
                  ¡Contáctanos!
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 justify-center flex text-center">
                  Infórmate sobre nuestro proceso de preinscripción y cómo
                  presentar tu solicitud.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="bg-[#722F37] hover:bg-[#722F37]/80 rounded-full shadow-md justify-center flex">
                    <Link
                      href="/contacto"
                      className="relative group"
                      prefetch={false}
                    >
                      Contactarse ahora
                      <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <Image
                  src="/iesa7.webp"
                  width="600"
                  height="400"
                  alt="inscripción"
                  className="rounded-3xl shadow-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
