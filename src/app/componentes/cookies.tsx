"use client";
import React, { useState, useEffect, useRef } from 'react';

const CookieNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenCookieNotice = localStorage.getItem('hasSeenCookieNotice');
    if (!hasSeenCookieNotice) {
      setIsVisible(true);
    }
  }, []);

  const handleOutsideClick = (event: MouseEvent) => {
    if (!sectionRef.current?.contains(event.target as Node)) {
      setIsVisible(false);
      localStorage.setItem('hasSeenCookieNotice', 'true');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [sectionRef]);

  return (
    isVisible && (
      <section
        ref={sectionRef}
        className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl -z-50"
        onClick={() => {
          setIsVisible(false);
          localStorage.setItem('hasSeenCookieNotice', 'true');
        }}
      >
        <h2 className="font-semibold text-gray-800 dark:text-white">
          🍪 Aviso sobre cookies
        </h2>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          Utilizamos cookies para garantizar que le ofrecemos la mejor experiencia en nuestro
          sitio web.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Leer la política de cookies
          </a>
          .{" "}
        </p>
        <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
          <button className="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
            Gestione sus preferencias
          </button>
          <button className="text-xs bg-[#722F37] font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Aceptar
          </button>
        </div>
      </section>
    )
  );
};

export default CookieNotice;