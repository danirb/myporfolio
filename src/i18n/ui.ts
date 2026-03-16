export const languages: Record<'es' | 'en', { name: string; flag: string }> = {
  es: { name: 'Español', flag: 'es' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'es';

export type LanguageCode = keyof typeof languages;

export const ui = {
  es: {
    projectsContent: {
      sampleProject: {
        title: 'Proyecto de Ejemplo',
        description: "Este es un proyecto de ejemplo para el template.",
        imageAltText: "Imagen de marcador de posición para el proyecto de ejemplo",
        categoryText: 'Aplicación Web',
        dateText: 'Enero 2025',
        detailedDescription:
          "Una descripción más detallada de este proyecto de ejemplo, mostrando cómo estructurar el contenido para la página de detalle del proyecto.",
        keyFeatures: {
          responsiveDesign: {
            title: 'Diseño Responsivo',
            description: "El proyecto se adapta a todos los tamaños de pantalla.",
          },
          contentManagement: {
            title: 'Gestión de Contenido Fácil',
            description:
              'Permite una gestión fácil del contenido a través de archivos Markdown o un CMS.',
          },
        },
        galleryImages: {},
        challenges:
          'Descripción de los desafíos encontrados al crear este proyecto de ejemplo.',
        learnings: 'Descripción de los aprendizajes del proyecto de ejemplo.',
      },
    },
    skillsContent: {
      sfccDevelopment: {
        title: 'Salesforce Commerce Cloud (SFCC)',
        description:
          'Arquitectura SFRA, OCAPI/REST, pasarelas de pago (Adyen, PayPal), y plataformas multisite escalables.',
      },
      architectureDesign: {
        title: 'Diseño de Arquitectura',
        description:
          'Decisiones técnicas end-to-end, integraciones complejas, performance y seguridad en sistemas de e-commerce.',
      },
      cicdAutomation: {
        title: 'CI/CD y DevOps',
        description:
          'Diseño y automatización de pipelines, reducción de time-to-market, deployments seguros y monitoreo en producción.',
      },
      requirementsAnalysis: {
        title: 'Análisis de Requisitos',
        description:
          'Toma de requisitos con negocio, traducción técnico-funcional, coordinación con proveedores y equipos ágiles remotos.',
      },
    },
    site: {
      title: 'Daniel Redondo Blanco | Desarrollador SFCC Senior',
      description:
        'Desarrollador Senior de Salesforce Commerce Cloud con más de 5 años diseñando soluciones e-commerce escalables y arquitecturas robustas.',
    },
    nav: {
      home: 'Inicio',
      blog: 'Blog',
      contact: 'Contacto',
      projects: 'Proyectos',
      tips: 'Consejos',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    homePage: {
      pageTitle: 'Inicio | Daniel Redondo Blanco - Desarrollador SFCC Senior',
      pageDescription:
        'Desarrollador Senior de Salesforce Commerce Cloud con más de 5 años diseñando soluciones e-commerce escalables, arquitecturas robustas e integraciones complejas.',
      heroGreeting: 'Soy Daniel Redondo Blanco',
      heroSubtitlePart1: 'Desarrollador SFCC Senior',
      heroSubtitlePart2: 'Especializado en e-commerce',
      heroIntroduction: 'Especialista en Salesforce Commerce Cloud con más de 5 años diseñando y manteniendo plataformas e-commerce escalables. Experto en SFRA, OCAPI/REST, CI/CD y decisiones técnicas enfocadas en performance y seguridad.',
      heroViewWorkButton: 'Ver Mi Trabajo',
      heroContactButton: 'Contactar',
      heroImageAlt:
        'Ilustración representando a Daniel Redondo Blanco y concepto de desarrollo e-commerce',
      featuredProjectsTitle: 'Proyectos Destacados',
      featuredProjectsDescription:
        'Proyectos de e-commerce a gran escala con Salesforce Commerce Cloud, incluyendo arquitectura multisite, integraciones de pagos y optimizaciones de performance.',
      projectCardViewProject: 'Ver Proyecto',
      projectCardViewCode: 'Ver Código',
      imageNotAvailable: 'Imagen no disponible aún',
      mySkillsTitle: 'Mis Habilidades',
      mySkillsDescription:
        "Explora la experiencia y las capacidades que definen mi trabajo y mi pasión.",
    },
    blogPage: {
      pageTitle: 'Blog Técnico de Daniel',
      pageDescription:
        'Artículos sobre Salesforce Commerce Cloud, arquitectura de e-commerce, mejores prácticas en CI/CD y decisiones técnicas en plataformas escalables.',
      title: 'Blog Técnico',
      description:
        'Artículos sobre Salesforce Commerce Cloud, arquitectura de e-commerce, mejores prácticas en CI/CD y decisiones técnicas en plataformas escalables.',
      comingSoon:
        'Los artículos del blog aparecerán pronto. ¡Vuelve más tarde!',
      heroImageAlt: "Imagen de portada del artículo: ",
      publishedOn: 'Publicado el: ',
      readMore: 'Leer más',
      readingTimeSuffix: 'min de lectura',
      searchPlaceholder: 'Buscar artículos...',
      filterByTagButtonLabel: 'Filtrar por etiqueta',
      noTagFound: 'Ninguna etiqueta encontrada.',
      selectTagCommandPlaceholder: 'Buscar etiqueta...',
      allTagsLabel: 'Todas las etiquetas',
      noPostsFound: 'No se encontraron artículos.',
    },
    blogPost: {
      publishedOn: 'Publicado el: ',
      updatedOn: 'Actualizado el: ',
      heroImageAlt: "Imagen de portada del artículo: ",
      backToList: 'Volver a la lista de artículos',
      readingTimeSuffix: 'min de lectura',
      relatedPostsTitle: 'También te recomiendo:',
      readMore: 'Leer más',
      editOnGithub: 'Proponer una modificación en GitHub',
    },
    toc: {
      title: "Tabla de contenidos del artículo",
    },
    contactPage: {
      pageTitle: 'Contactar a Daniel',
      pageDescription:
        'Hablemos sobre tu proyecto de e-commerce, oportunidades de colaboración o simplemente para intercambiar ideas sobre tecnología y arquitectura SFCC.',
      title: 'Contacta Conmigo',
      description:
        'Disponible para discutir proyectos de Salesforce Commerce Cloud, arquitectura escalable, integraciones complejas y oportunidades de colaboración.',

      formTitle: 'Enviar un mensaje',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      emailLabel: 'Email',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Selecciona el motivo de tu mensaje',
      subjectOptionJob: 'Oportunidad laboral',
      subjectOptionCollaboration: 'Colaboración',
      subjectOptionConsulting: 'Consulta técnica',
      subjectOptionOther: 'Otro',
      messageLabel: 'Mensaje',
      sendButtonLabel: 'Enviar',
      firstNamePlaceholder: 'Tu nombre',
      lastNamePlaceholder: 'Tu apellido',
      emailPlaceholder: 'Tu correo electrónico',
      messagePlaceholder: 'Tu mensaje aquí...',
      calendarTitle: 'Agendar una cita',
      calendarDescription:
        '¿Prefieres hablar directamente? Reserva un espacio en mi calendario.',
      calendarButtonLabel: 'Ver mi disponibilidad',
      calendarLinkLabel: 'Ver mi calendario',
      calendarPlaceHolder:
        "La integración con Google Calendar estará disponible pronto...",
      orSeparatorText: 'O',
      toastSuccessMessageSent: '¡Mensaje enviado exitosamente!',
      toastErrorFailedToSend: "Error al enviar el mensaje.",
      toastErrorUnexpected: "Ocurrió un error inesperado.",
      toastErrorDetails: "Detalles del error:",
      toastErrorValidationFailed: 'La validación del formulario falló.',
    },
    projectDetailPage: {
      backToProjects: 'Volver a Proyectos',
      categoryLabel: 'Categoría:',
      dateLabel: 'Fecha:',
      aboutTitle: 'Acerca de este proyecto',
      keyFeaturesTitle: 'Características Principales',
      galleryTitle: 'Galería',
      challengesTitle: 'Desafíos Encontrados',
      learningsTitle: 'Lecciones Aprendidas',
      visitProjectButton: 'Visitar Proyecto',
      viewCodeButton: 'Ver Código',
    },
    projectsPage: {
      title: 'Mis Proyectos',
      metaTitle: 'Proyectos de Daniel | Salesforce Commerce Cloud',
      metaDescription: 'Proyectos de e-commerce con Salesforce Commerce Cloud, integraciones y arquitecturas escalables.',
      noProjects: 'No hay proyectos para mostrar en este momento.',
      noProjectsDescription:
        "Parece que aún no tienes proyectos para mostrar.",
    },
    notFoundPage: {
      pageTitle: 'Página No Encontrada',
      title: '¡Oops! Página No Encontrada',
      message:
        'La página que buscas no existe. Verifica la URL o regresa al inicio.',
      homeLink: 'Volver al Inicio',
    },
    tipsPage: {
      metaTitle: 'Consejos de Desarrollo | Daniel Redondo',
      metaDescription:
        'Consejos rápidos sobre Salesforce Commerce Cloud, desarrollo web y automatización.',
      description:
        'Consejos rápidos sobre Salesforce Commerce Cloud, desarrollo web y automatización.',
      title: 'Últimos Consejos',
      noTips: 'No hay consejos que mostrar por ahora.',
      readTip: 'Leer consejo',
      backToList: 'Volver al listado',
      featuredTips: 'Consejos destacados',
      allTips: 'Todos los consejos',
      tipsAvailable: 'consejos disponibles',
      tipAvailable: 'consejo disponible',
      editOnGithub: 'Editar en GitHub',
    },
    zodErrors: {
      invalid_type: 'Tipo inválido.',
      invalid_type_received_undefined: 'Este campo es obligatorio.',
      required_field_custom: 'El campo {fieldName} es obligatorio.',
      too_small_string_minimum: 'Debe tener al menos {minimum} caracteres.',
      too_big_string_maximum: 'No debe superar {maximum} caracteres.',
      invalid_string_email: 'Dirección de email inválida.',
      invalid_string_url: 'URL inválida.',
      invalid_string_uuid: 'UUID inválido.',
    },
  },
  en: {
    projectsContent: {
      sampleProject: {
        title: 'Sample Project',
        description: 'This is a sample project for the portfolio.',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Web Application',
        dateText: 'January 2025',
        detailedDescription:
          'A more detailed description of this sample project, showing how to structure content for the project detail page.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Responsive Design',
            description: 'The project adapts to all screen sizes.',
          },
          contentManagement: {
            title: 'Easy Content Management',
            description:
              'Allows for easy content management via Markdown files or a CMS.',
          },
        },
        galleryImages: {},
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
      },
    },
    skillsContent: {
      sfccDevelopment: {
        title: 'Salesforce Commerce Cloud (SFCC)',
        description:
          'SFRA architecture, OCAPI/REST, payment gateways (Adyen, PayPal), and scalable multisite platforms.',
      },
      architectureDesign: {
        title: 'Architecture Design',
        description:
          'End-to-end technical decisions, complex integrations, performance and security in e-commerce systems.',
      },
      cicdAutomation: {
        title: 'CI/CD & DevOps',
        description:
          'Pipeline design and automation, time-to-market reduction, secure deployments and production monitoring.',
      },
      requirementsAnalysis: {
        title: 'Requirements Analysis',
        description:
          'Requirement gathering with business teams, technical-functional translation, vendor coordination and remote agile teams.',
      },
    },
    site: {
      title: 'Daniel Redondo Blanco | Senior SFCC Developer',
      description:
        'Senior Salesforce Commerce Cloud developer with 5+ years designing scalable e-commerce solutions and robust architectures.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | Daniel Redondo Blanco - Senior SFCC Developer',
      pageDescription:
        'Senior Salesforce Commerce Cloud developer with 5+ years designing scalable e-commerce solutions, robust architectures and complex integrations.',
      heroGreeting: "Hi, I'm Daniel Redondo Blanco",
      heroSubtitlePart1: 'Senior SFCC Developer',
      heroSubtitlePart2: 'E-commerce Specialist',
      heroIntroduction: 'Specialized in Salesforce Commerce Cloud with 5+ years designing and maintaining scalable e-commerce platforms. Expert in SFRA, OCAPI/REST, CI/CD and technical decisions focused on performance and security.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing Daniel Redondo Blanco and e-commerce development concept',
      featuredProjectsTitle: 'Featured Projects',
      featuredProjectsDescription:
        'Large-scale e-commerce projects with Salesforce Commerce Cloud, including multisite architecture, payment integrations and performance optimizations.',
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image coming soon',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Over 10 years of IT experience, specialising in Salesforce Commerce Cloud, JavaScript development and native Android.',
    },
    blogPage: {
      pageTitle: "Daniel's Technical Blog",
      pageDescription:
        'Articles on Salesforce Commerce Cloud, e-commerce architecture, CI/CD best practices and technical decisions in scalable platforms.',
      title: 'Technical Blog',
      description:
        'Articles on Salesforce Commerce Cloud, e-commerce architecture, CI/CD best practices and technical decisions in scalable platforms.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
      editOnGithub: 'Suggest changes on GitHub',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Daniel',
      pageDescription:
        'Let\'s talk about your e-commerce project, SFCC architecture, collaboration opportunities or technology insights.',
      title: 'Get In Touch',
      description:
        'Available to discuss Salesforce Commerce Cloud projects, scalable architecture, complex integrations and collaboration opportunities.',
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Select the reason for your message',
      subjectOptionJob: 'Job opportunity',
      subjectOptionCollaboration: 'Collaboration',
      subjectOptionConsulting: 'Technical consulting',
      subjectOptionOther: 'Other',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Write your message here...',
      calendarTitle: 'Schedule a Call',
      calendarDescription:
        'Prefer to talk directly? Book a slot in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder: 'Google Calendar integration coming soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "Daniel's Projects | Salesforce Commerce Cloud",
      metaDescription: 'E-commerce projects with Salesforce Commerce Cloud, integrations and scalable architectures.',
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription: 'Projects will be added soon.',
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },
    tipsPage: {
      metaTitle: 'Dev Tips | Daniel Redondo',
      metaDescription:
        'Quick tips on Salesforce Commerce Cloud, web development and automation.',
      title: 'Latest Tips',
      description:
        'Quick tips on Salesforce Commerce Cloud, web development and automation.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.',
      required_field_custom: 'The {fieldName} field is required.',
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
