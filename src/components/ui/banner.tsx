'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface Categoria {
  nombre: string;
}

interface BannerCategoriasAnimadoProps {
  categorias: Categoria[];
  onSelectCategoria: (categoria: string) => void;
}

export default function BannerCategoriasAnimado({
  categorias,
  onSelectCategoria,
}: BannerCategoriasAnimadoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#722F37] to-[#722F37] text-white rounded-xl shadow-2xl p-4 sm:p-8 mx-auto min-h-[24rem] relative overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-yellow-500 opacity-30 mix-blend-overlay"
      />
      <div className="relative z-10 overflow-visible">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-center relative drop-shadow-[0_2.3px_2.3px_rgba(0,0,0,0.8)]"
        >
          ¡Descubre tu próximo curso!
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-xl mb-4 sm:mb-8 text-center z-20 drop-shadow-[0_2.3px_2.3px_rgba(0,0,0,0.8)]"
        >
          Selecciona una categoría y comienza tu viaje de aprendizaje hoy mismo
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 pb-4 overflow-x-auto"
        >
          {categorias.map((categoria) => (
            <motion.div
              key={categoria.nombre}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategoria(categoria.nombre)}
              className="relative"
            >
              <Button
                variant="outline"
                className="bg-white mt-2 bg-opacity-20 hover:bg-opacity-30 text-white border-white border-opacity-40 hover:border-opacity-60 transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
              >
                {categoria.nombre}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-24 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 md:top-0 z-10"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.path
          d="M10 10 Q 50 10, 50 50 T 90 90"
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.path
          d="M90 90 L 80 82 M90 90 L 80 95"
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        />
      </motion.svg>
    </motion.div>
  );
}
