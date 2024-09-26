interface Cursos {
  nombre: string;
  descripcion: string;
  modalidad: string;
  imagen: string;
}

const cursos: Cursos[] = [
  // Tecnología e Informática
  {
    nombre: 'Autocad',
    descripcion:
      'Domina el diseño asistido por computadora para crear planos y modelos 2D y 3D con precisión.',
    modalidad: 'Presencial.',
    imagen: '/autocad.webp',
  },
  {
    nombre: 'Desarrollo Móvil',
    descripcion:
      'Aprende a crear aplicaciones móviles funcionales y atractivas para Android e iOS desde cero.',
    modalidad: 'Presencial.',
    imagen: '/aplicaciones.webp',
  },
  {
    nombre: 'Game developer para jóvenes y niños',
    descripcion:
      'Aprende a crear juegos interactivos y divertidos usando herramientas accesibles para jóvenes y niños.',
    modalidad: 'Presencial.',
    imagen: '/videojuegos.webp',
  },
  {
    nombre: 'Introducción a la programación',
    descripcion:
      'Análisis y diseño de algoritmos. Estructuras de control. Estructuras estáticas. Funciones y procedimientos.',
    modalidad: 'Presencial.',
    imagen: '/c++.webp',
  },
  {
    nombre: 'Java',
    descripcion:
      'Sumérgete en el mundo del desarrollo de software, diseñado para proporcionar la programación orientada a objetos.',
    modalidad: 'Presencial.',
    imagen: '/java.webp',
  },
  {
    nombre: 'PHP',
    descripcion:
      'Introducción, entornos virtuales. Capa de modelo, vistas, plantillas. PostgreSQL: creación de base de datos. HTML, CSS, JavaScript, Python.',
    modalidad: 'Presencial.',
    imagen: '/php.webp',
  },
  {
    nombre: 'Python',
    descripcion:
      'Aprende a programar en Python, desde conceptos básicos hasta aplicaciones avanzadas en diversos proyectos.',
    modalidad: 'Presencial.',
    imagen: '/python.webp',
  },
  {
    nombre: 'Tecnologías de la información y la comunicación',
    descripcion:
      'Introducción, entornos virtuales. Capa de modelo, vistas, plantillas.',
    modalidad: 'Presencial.',
    imagen: '/tecnologias.webp',
  },
  {
    nombre: 'Project Manager',
    descripcion:
      'Gestiona proyectos eficientemente, coordinando equipos, plazos y recursos para alcanzar objetivos definidos.',
    modalidad: 'Presencial.',
    imagen: '/project.webp',
  },
  {
    nombre: 'Master Office',
    descripcion:
      'Este curso está orientado a destacarte en tu trabajo manejando como experto Microsoft Office, el software clave para potenciar tus tareas.',
    modalidad: 'Presencial.',
    imagen: '/master office.webp',
  },

  // Diseño y Multimedia
  {
    nombre: 'Diseño gráfico digital',
    descripcion:
      'Orientado al uso especializado de software aplicado al diseño digital.',
    modalidad: 'Presencial.',
    imagen: '/diseño grafico.webp',
  },
  {
    nombre: 'Fotografía avanzada',
    descripcion:
      'Orientado a elementos de la fotografía, composición, manejo de las cámaras y edición. Requisito: Conocimientos en fotografía básica',
    modalidad: 'Presencial.',
    imagen: '/fotografia2.webp',
  },
  {
    nombre: 'Fotografía básica',
    descripcion:
      'Orientado a elementos de la fotografía, composición, manejo de las cámaras y edición sin conocimientos previos.',
    modalidad: 'Presencial.',
    imagen: '/fotografia1.webp',
  },
  {
    nombre: 'Streaming y grabación de video',
    descripcion:
      'Aprende a transmitir y grabar videos de alta calidad con técnicas y herramientas profesionales.',
    modalidad: 'Presencial.',
    imagen: '/streaming.webp',
  },

  // Marketing y Negocios
  {
    nombre: 'Marketing digital y comercio electrónico',
    descripcion:
      'Incursiona en el marketing digital y comercio electrónico adquiriendo habilidades para atraer y fidelizar clientes. Aprende sobre la interacción entre consumidores y marcas, y el uso de plataformas y herramientas online.',
    modalidad: 'Presencial.',
    imagen: '/marketing2.webp',
  },
  {
    nombre: 'Marketing y dirección comercial',
    descripcion:
      'Desarrollar estrategias comerciales, políticas de comunicación y canales de incursión.',
    modalidad: 'Presencial.',
    imagen: '/marketing1.webp',
  },
  {
    nombre: 'Tango Gestión',
    descripcion:
      'Domina el software Tango Gestión para la administración integral de empresas y negocios.',
    modalidad: 'Presencial.',
    imagen: '/tango.webp',
  },

  // Idiomas
  {
    nombre: 'Inglés',
    descripcion:
      'Aprende inglés desde nivel básico hasta avanzado, mejorando tus habilidades de conversación, lectura y escritura.',
    modalidad: 'Presencial.',
    imagen: '/ingles.webp',
  },
  {
    nombre: 'Portugués',
    descripcion:
      'Aprende portugués desde nivel básico hasta avanzado, desarrollando habilidades de conversación, lectura y escritura.',
    modalidad: 'Presencial.',
    imagen: '/portugues.webp',
  },

  // Belleza y Estética
  {
    nombre: 'Aparatología',
    descripcion:
      'Domina el uso de equipos estéticos avanzados para tratamientos de belleza y cuidado personal.',
    modalidad: 'Presencial.',
    imagen: '/aparatologia.webp',
  },
  {
    nombre: 'Barbería y corte masculino',
    descripcion:
      'Incursionaras en el mundo de la barbería, con manejo de estilo, tendencias, diseños, visajismo y freestyle.',
    modalidad: 'Presencial.',
    imagen: '/barberia.webp',
  },
  {
    nombre: 'Belleza de Manos y pies',
    descripcion:
      'Domina técnicas especializadas en belleza manos y pies sanos.',
    modalidad: 'Presencial.',
    imagen: '/manosypies copia 2.webp',
  },
  {
    nombre: 'Colorimetría',
    descripcion:
      'Aprende a aplicar y combinar colores de forma profesional en el cabello, mejorando técnicas de tintura y decoloración.',
    modalidad: 'Presencial.',
    imagen: '/colorimetria.webp',
  },
  {
    nombre: 'Depilación',
    descripcion:
      'Aprende técnicas de depilación para distintos tipos de piel y métodos, garantizando resultados seguros y eficaces.',
    modalidad: 'Presencial.',
    imagen: '/depilacion.webp',
  },
  {
    nombre: 'Drenaje linfático',
    descripcion:
      'El drenaje linfático ofrece técnicas manuales para estimular el sistema linfático, mejorando la circulación y reduciendo la retención de líquidos. Incluye teoría sobre la anatomía y fisiología del sistema linfático, así como prácticas supervisadas.',
    modalidad: 'Presencial.',
    imagen: '/drenaje.webp',
  },
  {
    nombre: 'Maquillaje',
    descripcion:
      'Aborda conceptos teóricos y prácticos para desempeñarte como un profesional en este arte. Secretos, tips y tendencias.',
    modalidad: 'Presencial.',
    imagen: '/maquillaje.webp',
  },
  {
    nombre: 'Masaje Deportivo',
    descripcion:
      'Aprende técnicas especializadas en masaje deportivo para mejorar el rendimiento, acelerar la recuperación y prevenir lesiones en deportistas.',
    modalidad: 'Presencial',
    imagen: '/masaje deportivo.webp',
  },
  {
    nombre: 'Reflexología',
    descripcion:
      'Aprenderás a tratar diferentes patologías y afecciones médicas de manera efectiva, utilizando los puntos reflejos en los pies y manos.',
    modalidad: 'Presencial.',
    imagen: '/reflexologia.webp',
  },
  {
    nombre: 'Técnicas de spa',
    descripcion:
      'Aprenderás Aromaterapia, Fitoterapia, Cromoterapia, Musicoterapia. Cómo, cuándo y cuáles aplicar. Tratamientos en gabinete y cuándo derivar.',
    modalidad: 'Presencial.',
    imagen: '/spa.webp',
  },

  // Gestiones administrativas y comerciales
  {
    nombre: 'Asistente Notarial',
    descripcion:
      'Orientado a brindar los elementos necesarios para desenvolverse con eficiencia e idoneidad en las funciones prácticas como asistente de Abogados o Escribanos.',
    modalidad: 'Presencial.',
    imagen: '/notarial.webp',
  },
  {
    nombre: 'Liquidación de Ganancias y Bienes Personales',
    descripcion:
      'Aprende a calcular y gestionar impuestos sobre ganancias y bienes personales de manera precisa y eficiente.',
    modalidad: 'Presencial.',
    imagen: '/ganancias.webp',
  },
  {
    nombre: 'Liquidación de sueldos',
    descripcion:
      'Aprende a calcular y gestionar los sueldos y salarios de los empleados, incluyendo deducciones, impuestos y beneficios.',
    modalidad: 'Presencial',
    imagen: '/liq sueldos.webp',
  },
];

export default cursos;
