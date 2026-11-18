export const profile = {
  name: 'Cruz Yael Pérez González',
  role: 'Ingeniero Full-Stack & Mobile',
  location: 'Monterrey, Nuevo León, México',
  relocation: 'Disponibilidad para reubicación',
  email: 'yagope211@gmail.com',
  github: 'https://github.com/Cruzypp',
  linkedin: 'https://www.linkedin.com/in/cruz-yael-p%C3%A9rez-gonz%C3%A1lez-32a131311/',
};

export const education = {
  school: 'Tecnológico de Monterrey',
  degree: 'Ingeniería en Tecnologías Computacionales',
  gpa: '91.59/100',
  location: 'Monterrey, Nuevo León, México',
  period: 'Ago 2023 – Jun 2027 (previsto)',
};

export const experience = [
  {
    company: 'Accenture',
    role: 'Practicante de Ingeniería Full-Stack',
    location: 'Monterrey, Nuevo León, México',
    period: 'Jun 2026 – Actualidad',
    isCurrent: true,
    bullets: [
      'Colaboré en el análisis de datos de marketing para iniciativas relacionadas con Meta, utilizando SQL para consultar conjuntos de datos y Python (pandas) para limpiar, transformar y validar datos de campañas.',
      'Preparé conjuntos de datos estructurados para analizar el rendimiento de campañas y elaborar reportes, mejorando la consistencia de la información.',
      'Recibí capacitación en React, Angular, Node.js y Python como parte del programa de ingeniería de Accenture.',
      'Obtuve las certificaciones AWS Certified Cloud Practitioner y Associate Python Programmer durante el programa.',
    ],
  },
  {
    company: 'Mokkinbado Solutions',
    role: 'Desarrollador Full-Stack y Móvil',
    location: 'Monterrey, Nuevo León, México',
    period: 'Dic 2025 – Jun 2026',
    isCurrent: false,
    bullets: [
      'Participé en el desarrollo integral de aplicaciones móviles y soluciones web, desde el diseño de arquitectura hasta el despliegue.',
      'Desarrollé interfaces responsivas con React y Next.js, enfocadas en rendimiento y compatibilidad entre dispositivos.',
      'Creé y mantuve endpoints de API REST con Node.js para la comunicación entre clientes y servidores de aplicaciones móviles.',
      'Administré bases de datos relacionales en MySQL, cuidando la integridad y escalabilidad de la información.',
      'Desarrollé TeamDesk, una aplicación de gestión para pequeños negocios, prevista para Expo PYME Monterrey 2026.',
      'Colaboré con equipos multidisciplinarios bajo metodologías ágiles (Scrum), cumpliendo objetivos de cada sprint.',
    ],
  },
];

export const projects = [
  {
    name: 'The On3 P3rcent',
    kind: 'App para iOS',
    date: 'Feb 2026',
    stack: ['React Native', 'Expo', 'AWS'],
    links: [
      {label: 'Sitio web', href: 'https://www.on3p3rcent.com/'},
      {label: 'App Store', href: 'https://apps.apple.com/mx/app/the-on3-p3rcent/id6780306639?l=en-GB'},
    ],
    bullets: [
      'Fundé y desarrollé una aplicación móvil de entrenamiento que conecta a coaches y alumnos, actualmente en uso.',
      'Integré modelos de inteligencia artificial para generar rutinas de entrenamiento personalizadas de forma automática.',
      'Utilicé Claude Code como asistente de programación durante el desarrollo, para apoyar la revisión y mejora del código.',
      'Desplegué el backend en AWS App Runner; utilicé AWS Lambda para procesamiento de análisis de postura y S3 para almacenar videos.',
    ],
  },
  {
    name: 'Cáritas MTY',
    kind: 'App para iOS',
    date: 'Dic 2025',
    stack: ['Swift', 'SwiftUI', 'Firebase', 'UIKit', 'MapKit'],
    links: [],
    bullets: [
      'Desarrollé un proyecto social con Cáritas Monterrey e integré Firebase Firestore para almacenar datos, autenticar usuarios y sincronizar información.',
      'Implementé un módulo de cámara con UIKit y SwiftUI para registrar donaciones, además de geolocalización con MapKit y llamadas desde la app.',
      'La plataforma permite registrar donaciones, actualizar estados, consultar categorías y administrar registros mediante una interfaz intuitiva.',
    ],
  },
];

export const skills = [
  {label: 'Lenguajes', items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Swift', 'PHP', 'C#', 'SQL']},
  {label: 'Datos y analítica', items: ['pandas', 'Limpieza y transformación de datos', 'Análisis de marketing']},
  {
    label: 'Frameworks y tecnologías',
    items: ['React', 'Next.js', 'Node.js', 'React Native', 'Vite', '.NET Framework', 'SwiftUI', 'UIKit', 'TailwindCSS', 'Stripe', 'n8n', 'Docker (básico)', 'Firebase'],
  },
  {label: 'Nube e IA', items: ['AWS App Runner', 'AWS Lambda', 'AWS S3', 'Integración de IA/LLM', 'Supabase']},
  {label: 'Bases de datos', items: ['MySQL', 'PostgreSQL', 'Firebase Firestore']},
  {label: 'Herramientas', items: ['Git', 'GitHub', 'Claude Code', 'Figma', 'MapKit']},
  {label: 'Metodologías', items: ['Agile', 'Scrum', 'REST APIs', 'MVVM', 'MVC', 'Event-Driven Architecture']},
] as const;

export const certifications = ['AWS Certified Cloud Practitioner', 'Associate Python Programmer'];

export const languages = ['Español (nativo)', 'Inglés (avanzado – C1, TOEFL)'];
