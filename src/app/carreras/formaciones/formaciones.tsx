interface Formacion {
  nombre: string;
  descripcion: string;
  modalidad: string;
  duracion: string;
  resolucion: string;
  imagen: string;
}

const formaciones: Formacion[] = [
  {
    nombre: 'Administrativo Contable',
    descripcion:
      'Formación especializada en administración y contabilidad empresarial.',
    modalidad: 'Presencial',
    duracion: '10 meses',
    resolucion: '007/15',
    imagen: '/contable.webp',
  },
  {
    nombre: 'Armado y configuración de PC y notebook',
    descripcion:
      'Formación especializada en ensamblaje y configuración de computadoras y notebooks.',
    modalidad: 'Presencial',
    duracion: '8 meses',
    resolucion: '010/12',
    imagen: '/reparacion.webp',
  },
  {
    nombre: 'Configuración, administración e instalación de redes',
    descripcion:
      'Dominio integral en configuración, administración e instalación avanzada de redes informáticas.',
    modalidad: 'Presencial',
    duracion: '10 meses',
    resolucion: '025/14',
    imagen: '/redes.webp',
  },
  {
    nombre: 'Estética Profesional',
    descripcion:
      'Formación integral en técnicas avanzadas de estética y cuidado personal.',
    modalidad: 'Presencial',
    duracion: '12 meses',
    resolucion: '007/15',
    imagen: '/estetica.webp',
  },
  {
    nombre: 'Estilista Profesional',
    descripcion:
      'Formación integral en técnicas de estilismo para aspirantes a profesionales.',
    modalidad: 'Presencial',
    duracion: '12 meses',
    resolucion: '236/21',
    imagen: '/estilista.webp',
  },
  {
    nombre: 'Gestoría General',
    descripcion: 'Capacitación práctica en Gestoría General.',
    modalidad: 'Presencial',
    duracion: '6 meses',
    resolucion: 'E/T',
    imagen: '/gestoria.webp',
  },
  {
    nombre: 'Gestión y control ambiental',
    descripcion:
      'Formación orientada a la seguridad del medio ambiente, identificación de riesgos ambientales.',
    modalidad: 'Presencial',
    duracion: '10 meses',
    resolucion: 'E/T',
    imagen: '/gestion ambiental.webp',
  },
  {
    nombre: 'Instalación y reparación de sistemas electrónicos y de seguridad',
    descripcion:
      'Formación avanzada en montaje y reparación de cámaras de seguridad y alarmas.',
    modalidad: 'Presencial',
    duracion: '6 meses',
    resolucion: '030/18',
    imagen: '/seguridad.webp',
  },
  {
    nombre: 'Masajista Profesional',
    descripcion:
      'Formación especializada en técnicas avanzadas para aspirantes a masajistas profesionales.',
    modalidad: 'Presencial',
    duracion: '12 meses',
    resolucion: 'E/T',
    imagen: '/masajista.webp',
  },
  {
    nombre: 'Montador electricista domiciliario',
    descripcion:
      'Formación integral en montaje eléctrico con enfoque domiciliario.',
    modalidad: 'Presencial',
    duracion: '12 meses',
    resolucion: '032/18',
    imagen: '/electricidad.webp',
  },
  {
    nombre: 'Operador de informática',
    descripcion:
      'Formación esencial en operación y gestión de sistemas informáticos.',
    modalidad: 'Presencial',
    duracion: '10 meses',
    resolucion: '010/12',
    imagen: '/operador.webp',
  },
];

export default formaciones;
