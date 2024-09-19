"use client";
import React, { useEffect, useState } from "react";
import { JSX, SVGProps } from "react";
import Footer from "@/app/componentes/footer";
import Header from "@/app/componentes/header";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

export default function Instituto() {
  const images = [
    "/iesa2.webp",
    "/iesa3.webp",
    "/iesa4.webp",
    "/iesa5.webp",
    "/iesa6.webp",
    "/iesa7.webp",
  ];

  function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 2500);
      return () => clearInterval(interval);
    }, [currentIndex]);

    return (
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={images[currentIndex]}
          width="1920"
          height="1080"
          alt="Logo instituto"
          className="rounded-xl w-full object-cover aspect-[2/1] lg:h-[500px] lg:w-[900px] transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 grid md:grid-cols-[1fr_700px] gap-8 px-4 lg:px-2 py-12 md:py-16">
        <Carousel />
        <div className="space-y-6">
          <div className="dark:bg-gray-800 p-6 rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Instituto de Estudios Superiores Argentino
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              El IESA es un establecimiento terciario de enseñanza pública de
              gestión privada, fundado en 2003 en Posadas, Misiones. Hemos
              dedicado años a brindar formación profesional exitosa a lo largo
              de nuestra historia. Nuestro compromiso es con la excelencia
              educativa y la formación integral de nuestros estudiantes,
              preparándolos para enfrentar los desafíos del mundo laboral
              actual.
            </p>
          </div>
          <div className="dark:bg-gray-800 p-6 rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Misión
            </h3>
            <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <ChevronRightIcon className="w-4 h-4 inline-block mr-2" />
                Nuestra visión es hacer que el trabajo sea inspirador y
                gratificante.
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 inline-block mr-2" />
                Formar líderes.
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 inline-block mr-2" />
                Excelencia y ética.
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 inline-block mr-2" />
                Comunidad inclusiva.
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 inline-block mr-2" />
                Vanguardia educativa.
              </li>
            </ul>
          </div>
          <div className="dark:bg-gray-800 p-6 rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ofertas Académicas
            </h3>
            <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
              <li className="hover:text-black dark:hover:text-white">
                <Link href="/carreras/tecnicaturas">
                  <ChevronRightIcon className="w-4 h-4 inline-block mr-2 hover:text-black dark:hover:text-white" />
                  Tecnicaturas Superiores
                </Link>
              </li>
              <li className="hover:text-black dark:hover:text-white">
                <Link href="/carreras/formaciones">
                  <ChevronRightIcon className="w-4 h-4 inline-block mr-2 hover:text-black dark:hover:text-white" />
                  Formaciones Profesionales
                </Link>
              </li>
              <li className="hover:text-black dark:hover:text-white">
                <Link href="/carreras/cursos">
                  <ChevronRightIcon className="w-4 h-4 inline-block mr-2 hover:text-black dark:hover:text-white" />
                  Cursos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
