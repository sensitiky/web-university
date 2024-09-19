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
    nombre: "Administrativo Contable",
    descripcion:
      "Formación especializada en administración y contabilidad empresarial.",
    modalidad: "Presencial",
    duracion: "10 meses",
    resolucion: "007/15",
    imagen: "/contable.webp",
  },
  {
    nombre: "Armado y configuración de PC y notebook",
    descripcion:
      "Formación especializada en ensamblaje y configuración de computadoras y notebooks.",
    modalidad: "Presencial",
    duracion: "8 meses",
    resolucion: "010/12",
    imagen: "/reparacion.webp",
  },
  {
    nombre: "Configuración, administración e instalación de redes",
    descripcion:
      "Dominio integral en configuración, administración e instalación avanzada de redes informáticas.",
    modalidad: "Presencial",
    duracion: "10 meses",
    resolucion: "025/14",
    imagen: "/redes.webp",
  },
  {
    nombre: "Estética Profesional",
    descripcion:
      "Perfeccionamiento en técnicas avanzadas de estética para profesionales del cuidado personal.",
    modalidad: "Presencial",
    duracion: "12 meses",
    resolucion: "007/15",
    imagen: "/estetica.webp",
  },
  {
    nombre: "Estilista Profesional",
    descripcion:
      "Formación integral en técnicas de estilismo para aspirantes a profesionales.",
    modalidad: "Presencial",
    duracion: "12 meses",
    resolucion: "--",
    imagen: "/estilista.webp",
  },
  {
    nombre: "Gestoría General",
    descripcion:
      "Capacitación práctica en Gestoría General, incluyendo inmobiliaria, previsional, judicial y automotor.",
    modalidad: "Presencial",
    duracion: "6 meses",
    resolucion: "036/18",
    imagen: "/gestoria.webp",
  },
  {
    nombre: "Instalación y reparación de sistemas electrónicos y de seguridad",
    descripcion:
      "Formación avanzada en montaje y reparación de sistemas electrónicos y seguridad.",
    modalidad: "Presencial",
    duracion: "6 meses",
    resolucion: "036/18",
    imagen: "/seguridad.webp",
  },
  {
    nombre: "Masajista Profesional",
    descripcion:
      "Entrenamiento especializado en técnicas avanzadas para masajistas profesionales.",
    modalidad: "Presencial",
    duracion: "12 meses",
    resolucion: "--",
    imagen: "/masajista.webp",
  },
  {
    nombre: "Montador electricista domiciliario",
    descripcion:
      "Croquis de instalaciones, motores monofásicos, motores trífasicos, computos y presupuestos, circuitos especiales, instalaciones ed contadores y relés.",
    modalidad: "Presencial",
    duracion: "12 meses",
    resolucion: "032/18",
    imagen: "/electricidad.webp",
  },
  {
    nombre: "Operador de informática",
    descripcion:
      "Formación esencial en operación y gestión de sistemas informáticos.",
    modalidad: "Presencial",
    duracion: "10 meses",
    resolucion: "--",
    imagen: "/operador.webp",
  },
];

export default formaciones;
