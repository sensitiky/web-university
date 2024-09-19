interface Cursos {
  nombre: string;
  descripcion: string;
  modalidad: string;
  imagen: string;
}

const cursos: Cursos[] = [
  // Tecnología e Informática
  {
    nombre: "Autocad",
    descripcion:
      "Domina el diseño asistido por computadora para crear planos y modelos 2D y 3D con precisión.",
    modalidad: "Presencial.",
    imagen: "/autocad.webp",
  },
  {
    nombre: "Introducción a la programación",
    descripcion:
      "Análisis y diseño de algoritmos. Estructuras de control. Estructuras estáticas. Funciones y procedimientos.",
    modalidad: "Presencial.",
    imagen: "/c++.webp",
  },
  {
    nombre: "Java",
    descripcion:
      "Sumérgete en el mundo del desarrollo de software con nuestro curso de Java, diseñado para proporcionar una comprensión profunda de la programación orientada a objetos, aplicaciones prácticas en el desarrollo de software y habilidades esenciales para construir aplicaciones robustas y escalables.",
    modalidad: "Presencial.",
    imagen: "/java.webp",
  },
  {
    nombre: "Master Office",
    descripcion:
      "Este curso está orientado a destacarte en tu trabajo manejando como experto Microsoft Office, el software clave para potenciar tus tareas.",
    modalidad: "Presencial.",
    imagen: "/master office.webp",
  },
  {
    nombre: "PHP",
    descripcion:
      "Introducción, entornos virtuales. Capa de modelo, vistas, plantillas. PostgreSQL: creación de base de datos. HTML, CSS, JavaScript, Python.",
    modalidad: "Presencial.",
    imagen: "/php.webp",
  },
  {
    nombre: "Project Manager",
    descripcion:
      "Gestiona proyectos eficientemente, coordinando equipos, plazos y recursos para alcanzar objetivos definidos.",
    modalidad: "Presencial.",
    imagen: "/project.webp",
  },
  {
    nombre: "Python",
    descripcion:
      "Aprende a programar en Python, desde conceptos básicos hasta aplicaciones avanzadas en diversos proyectos.",
    modalidad: "Presencial.",
    imagen: "/python.webp",
  },
  {
    nombre: "Tecnologías de la información y la comunicación",
    descripcion:
      "Introducción, entornos virtuales. Capa de modelo, vistas, plantillas.",
    modalidad: "Presencial.",
    imagen: "/tecnologias.webp",
  },

  // Diseño y Multimedia
  {
    nombre: "Diseño gráfico digital",
    descripcion: "CorelDRAW, Photoshop, SketchUp.",
    modalidad: "Presencial.",
    imagen: "/diseño grafico.webp",
  },
  {
    nombre: "Fotografía avanzada",
    descripcion:
      "Elementos de la Fotografía, Composición, Manejo de las cámaras, Edición, Salidas fotográficas.",
    modalidad: "Presencial.",
    imagen: "/fotografia2.webp",
  },
  {
    nombre: "Fotografía básica",
    descripcion:
      "Elementos de la Fotografía, Composición, Manejo de las cámaras, Edición, Salidas fotográficas.",
    modalidad: "Presencial.",
    imagen: "/fotografia1.webp",
  },
  {
    nombre: "Game developer para jóvenes y niños",
    descripcion:
      "Aprende a crear juegos interactivos y divertidos usando herramientas accesibles para jóvenes y niños.",
    modalidad: "Presencial.",
    imagen: "/videojuegos.webp",
  },
  {
    nombre: "Streaming y grabación de video",
    descripcion:
      "Aprende a transmitir y grabar videos de alta calidad con técnicas y herramientas profesionales.",
    modalidad: "Presencial.",
    imagen: "/streaming.webp",
  },

  // Marketing y Negocios
  {
    nombre: "Marketing digital y comercio electrónico",
    descripcion:
      "Prepárate para iniciar una nueva carrera en marketing digital y comercio electrónico, y adquiere las habilidades necesarias para atraer y fidelizar a los clientes. Aprende cómo los consumidores interactúan con las marcas y cómo los especialistas utilizan las plataformas y herramientas online para comprar y vender productos y servicios.",
    modalidad: "Presencial.",
    imagen: "/marketing2.webp",
  },
  {
    nombre: "Marketing y dirección comercial",
    descripcion:
      "Desarrollar con precisión una estrategia comercial, implica tener en cuenta múltiples variables. A través de este curso, podrás abordar cada una de ellas con visión estratégica, desde las políticas de comunicación hasta los canales de distribución, pasando por innovación, precio, administración de la fuerza de ventas y satisfacción del cliente.",
    modalidad: "Presencial.",
    imagen: "/marketing1.webp",
  },
  {
    nombre: "Tango Gestión",
    descripcion:
      "Domina el software Tango Gestión para la administración integral de empresas y negocios.",
    modalidad: "Presencial.",
    imagen: "/tango.webp",
  },

  // Idiomas
  {
    nombre: "Inglés",
    descripcion:
      "Aprende inglés desde nivel básico hasta avanzado, mejorando tus habilidades de conversación, lectura y escritura.",
    modalidad: "Presencial.",
    imagen: "/ingles.webp",
  },
  {
    nombre: "Portugués",
    descripcion:
      "Aprende portugués desde nivel básico hasta avanzado, desarrollando habilidades de conversación, lectura y escritura.",
    modalidad: "Presencial.",
    imagen: "/portugues.webp",
  },

  // Belleza y Estética
  {
    nombre: "Aparatología",
    descripcion:
      "Domina el uso de equipos estéticos avanzados para tratamientos de belleza y cuidado personal.",
    modalidad: "Presencial.",
    imagen: "/aparatologia.webp",
  },
  {
    nombre: "Barbería y corte masculino",
    descripcion:
      "Degradados y tipos, Estilos y tendencias. Visagismo. Diseños y freestyle.",
    modalidad: "Presencial.",
    imagen: "/barberia.webp",
  },
  {
    nombre: "Belleza de Manos y pies",
    descripcion:
      "Domina técnicas especializadas en belleza manos y pies con nuestro curso, enfocado en brindar habilidades prácticas y conocimientos fundamentales para el cuidado profesional de manos, uñas y pies.",
    modalidad: "Presencial.",
    imagen: "/manosypies copia 2.webp",
  },
  {
    nombre: "Colorimetría",
    descripcion:
      "Aprende a aplicar y combinar colores de forma profesional en diseño, moda y belleza.",
    modalidad: "Presencial.",
    imagen: "/colorimetria.webp",
  },
  {
    nombre: "Depilación",
    descripcion:
      "Aprende técnicas profesionales de depilación para distintos tipos de piel y métodos, garantizando resultados seguros y eficaces.",
    modalidad: "Presencial.",
    imagen: "/depilacion.webp",
  },
  {
    nombre: "Drenaje linfático",
    descripcion:
      "El curso de drenaje linfático ofrece formación especializada en técnicas manuales para estimular el sistema linfático, mejorando la circulación y reduciendo la retención de líquidos. Incluye teoría sobre la anatomía y fisiología del sistema linfático, así como prácticas supervisadas.",
    modalidad: "Presencial.",
    imagen: "/drenaje.webp",
  },
  {
    nombre: "Maquillaje",
    descripcion:
      "Maquillaje social, Maquillaje de fotografía y video, Maquillaje de moda, Maquillaje artístico.",
    modalidad: "Presencial.",
    imagen: "/maquillaje.webp",
  },
  {
    nombre: "Masaje Deportivo",
    descripcion:
      "Aprende técnicas especializadas en masaje deportivo para mejorar el rendimiento, acelerar la recuperación y prevenir lesiones en deportistas.",
    modalidad: "Presencial",
    imagen: "/masaje deportivo.webp",
  },
  {
    nombre: "Reflexología",
    descripcion:
      "En este curso de reflexología aprenderás a tratar diferentes patologías y afecciones médicas de manera efectiva, utilizando los puntos reflejos en los pies.",
    modalidad: "Presencial.",
    imagen: "/reflexologia.webp",
  },
  {
    nombre: "Técnicas de spa",
    descripcion:
      "Aromaterapia, Fitoterapia, Cromoterapia, Musicoterapia. Cómo, cuándo y cuáles aplicar. Tratamientos en gabinete. Cuándo derivar.",
    modalidad: "Presencial.",
    imagen: "/spa.webp",
  },

  // Otros
  {
    nombre: "Asistente Notarial",
    descripcion:
      "Este curso está orientado a brindar a los alumnos los elementos necesarios para desenvolverse con eficiencia e idoneidad en las funciones prácticas de una Escribanía, como asistente de Abogados o Escribanos.",
    modalidad: "Presencial.",
    imagen: "/notarial.webp",
  },
  {
    nombre: "Desarrollo Móvil",
    descripcion:
      "Aprende a crear aplicaciones móviles funcionales y atractivas para Android e iOS desde cero.",
    modalidad: "Presencial.",
    imagen: "/aplicaciones.webp",
  },
  {
    nombre: "Gestoría",
    descripcion:
      "Capacítate en la gestión de trámites administrativos y legales para empresas y particulares.",
    modalidad: "Presencial.",
    imagen: "/gestoria.webp",
  },
  {
    nombre: "Liquidación de Ganancias y Bienes Personales",
    descripcion:
      "Aprende a calcular y gestionar impuestos sobre ganancias y bienes personales de manera precisa y eficiente.",
    modalidad: "Presencial.",
    imagen: "/ganancias.webp",
  },
];

export default cursos;
