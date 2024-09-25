interface Tecnicaturas {
  nombre: string;
  descripcion: string;
  href: string;
  imagen: string;
  alt: string;
}

const tecnicaturas: Tecnicaturas[] = [
  {
    nombre: 'Tecnicatura Superior en Análisis de Sistemas',
    descripcion:
      'Desarrolla habilidades en programación, bases de datos y redes.',
    href: '/tecnicaturas/tecsistemas',
    imagen: '/Tecsistemas.webp',
    alt: 'tecnicatura analista de sistemas',
  },
  {
    nombre: 'Tecnicatura Superior en Diseño Gráfico Digital',
    descripcion: 'Aprende a crear diseños visuales impactantes y atractivos.',
    href: '/tecnicaturas/tecgrafico',
    imagen: '/tec grafico.jpeg',
    alt: 'tecnicatura diseño gráfico',
  },
  {
    nombre: 'Tecnicatura Superior en Gestión Jurídica Generalista',
    descripcion:
      'Formación especializada en gestión jurídica generalista, proporcionando habilidades fundamentales para abordar diversos aspectos legales con eficacia y precisión.',
    href: '/tecnicaturas/tecjuridica',
    imagen: '/tec gestion juridica.jpeg',
    alt: 'tecnicatura gestión jurídica',
  },
  {
    nombre: 'Tecnicatura Superior en Cosmetología, Cosmiatría y Estética',
    descripcion:
      'Especialízate en técnicas avanzadas de cosmetología, cosmiatría y estética para dominar el arte del cuidado estético y facial.',
    href: '/tecnicaturas/teccosmetica',
    imagen: '/tec cosmetologia.jpeg',
    alt: 'tecnicatura cosmetología',
  },
  {
    nombre: 'Tecnicatura Superior Gestión Impositivo, Previsional y Contable',
    descripcion:
      'Desarrolla competencias clave en el manejo integral de la Gestión impositiva, previsional y contable.',
    href: '/tecnicaturas/teccontable',
    imagen: '/tec impositivo.jpeg',
    alt: 'tecnicatura contable',
  },
];

export default tecnicaturas;
