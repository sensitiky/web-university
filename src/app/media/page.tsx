"use client";

import Header from "@/app/componentes/header";
import Footer from "@/app/componentes/footer";
import InstagramEmbed from "@/components/embedInstagram";
import Link from "next/link";

export default function MediaPage() {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Header />
      <main className="flex-grow">
        {/* Sección de Test vocacional */}
        <section className="py-12 md:py-20 lg:py-28 bg-white text-center h-[60dvh]">
          <div className="container px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Test de Habilidades e Intereses
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6">
              Responde el siguiente test para conocer las áreas que más se
              ajustan a tus intereses.
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScYJHRcc9jwNorP6S3v-yHz2awmGj0uV9bUvC2Cw8btIy5B_A/viewform"
              target="_blank"
            >
              <button className="px-6 py-3 bg-[#722F37] text-white rounded-full hover:bg-[#722F37]/90 transition-colors">
                Comenzar Test
              </button>
            </Link>
          </div>
        </section>
        {/* Sección de Videos */}
        <section className="py-12 md:py-20 lg:py-28 bg-gray-100">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Nuestro Contenido Multimedia
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                Explora videos que muestran nuestra institución en acción.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative pb-[56.25%] overflow-hidden rounded-3xl shadow-md">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_1"
                  title="Video 1"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative pb-[56.25%] overflow-hidden rounded-3xl shadow-md">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_2"
                  title="Video 2"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Posts de Instagram */}
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Síguenos en Instagram
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                Mantente al día con nuestras actividades y eventos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InstagramEmbed permalink="https://www.instagram.com/reel/DB912OePErL/?utm_source=ig_embed&amp;utm_campaign=loading" />
              <InstagramEmbed permalink="https://www.instagram.com/reel/DCUziCMvs1e/?utm_source=ig_embed&amp;utm_campaign=loading" />
              <InstagramEmbed permalink="https://www.instagram.com/reel/DCRlfPIOiA8/?utm_source=ig_embed&amp;utm_campaign=loading" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
