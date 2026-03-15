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
        description: 'Este es un proyecto de ejemplo del portfolio.',
        imageAltText: 'Imagen de ejemplo del proyecto',
        categoryText: 'Aplicación Web',
        dateText: 'Enero 2025',
        detailedDescription:
          'Descripción detallada de este proyecto de ejemplo, mostrando cómo estructurar el contenido para la página de detalle.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Diseño Adaptativo',
            description: 'El proyecto se adapta a todos los tamaños de pantalla.',
          },
          contentManagement: {
            title: 'Gestión de Contenido',
            description:
              'Permite gestionar el contenido fácilmente mediante archivos Markdown o un CMS.',
          },
        },
        galleryImages: {},
        challenges:
          'Descripción de los retos encontrados durante el desarrollo de este proyecto.',
        learnings: 'Descripción de los aprendizajes obtenidos en este proyecto.',
      },
    },
    skillsContent: {
      sfccEcommerce: {
        title: 'Salesforce Commerce Cloud',
        description:
          'Arquitectura SFRA multisite, integración OCAPI/SCAPI, Page Designer, pipelines y CI/CD para eCommerce internacional.',
      },
      javascriptNode: {
        title: 'JavaScript / Node.js',
        description:
          'Desarrollo frontend y backend con JS ES6+, TypeScript, Node.js, HTML5, CSS3 y SASS aplicando patrones MVC.',
      },
      mobileAndroid: {
        title: 'Desarrollo Android',
        description:
          '5 años desarrollando apps nativas con Kotlin y Java para smartphones, tablets y Android TV, publicadas en Google Play.',
      },
      testingDevops: {
        title: 'Testing & DevOps',
        description:
          'Cobertura ~100% con Mocha, Chai, Sinon y Proxyquire. Pipelines CI/CD, Git, Scrum y JIRA en equipos distribuidos.',
      },
    },
    site: {
      title: 'Daniel Redondo | SFCC Developer',
      description:
        'Portfolio de Daniel Redondo Blanco, Salesforce Commerce Cloud Developer certificado con 10 años de experiencia en IT.',
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
      pageTitle: 'Inicio | Daniel Redondo - SFCC Developer',
      pageDescription:
        'Portfolio de Daniel Redondo Blanco, Salesforce Commerce Cloud Developer certificado con 5+ años en SFCC y 10 años en IT.',
      heroGreeting: 'Hola, soy Daniel',
      heroSubtitlePart1: 'Salesforce Commerce Cloud Developer',
      heroSubtitlePart2: 'Certificado · 10 años en IT',
      heroIntroduction:
        'Desarrollador SFCC B2C certificado especializado en arquitectura SFRA multisite, integraciones REST/OCAPI/SCAPI y CI/CD. He liderado proyectos eCommerce de alto impacto para Tennis-Point, UNOde50 y Parfois. Disponible para trabajo remoto.',
      heroViewWorkButton: 'Ver mis proyectos',
      heroContactButton: 'Contactar',
      heroImageAlt: 'Ilustración representando a Daniel Redondo, desarrollador',
      featuredProjectsTitle: 'Últimos proyectos',
      featuredProjectsDescription:
        'Algunos proyectos en los que he trabajado recientemente. ¡Explóralos!',
      projectCardViewProject: 'Ver proyecto',
      projectCardViewCode: 'Ver código',
      imageNotAvailable: 'Imagen próximamente',
      mySkillsTitle: 'Mis Habilidades',
      mySkillsDescription:
        'Más de 10 años de experiencia en IT, especializándome en Salesforce Commerce Cloud, desarrollo JavaScript y Android nativo.',
    },
    blogPage: {
      pageTitle: 'Blog Técnico | Daniel Redondo',
      pageDescription:
        'Artículos y reflexiones sobre desarrollo eCommerce, Salesforce Commerce Cloud, JavaScript y arquitectura de software.',
      title: 'Blog Técnico',
      description:
        'Artículos y reflexiones sobre desarrollo eCommerce, Salesforce Commerce Cloud, JavaScript y arquitectura de software.',
      comingSoon: 'Los artículos aparecerán aquí pronto. ¡Vuelve más tarde!',
      heroImageAlt: 'Imagen de portada del artículo: ',
      publishedOn: 'Publicado el: ',
      readMore: 'Leer más',
      readingTimeSuffix: 'min de lectura',
      searchPlaceholder: 'Buscar artículos...',
      filterByTagButtonLabel: 'Filtrar por etiqueta',
      noTagFound: 'No se encontró ninguna etiqueta.',
      selectTagCommandPlaceholder: 'Buscar etiqueta...',
      allTagsLabel: 'Todas las etiquetas',
      noPostsFound: 'No se encontraron artículos.',
    },
    blogPost: {
      publishedOn: 'Publicado el: ',
      updatedOn: 'Actualizado el: ',
      heroImageAlt: 'Imagen de portada del artículo: ',
      backToList: 'Volver al listado',
      readingTimeSuffix: 'min de lectura',
      relatedPostsTitle: 'También te recomiendo:',
      readMore: 'Leer más',
      editOnGithub: 'Proponer cambios en GitHub',
    },
    toc: {
      title: 'Índice del artículo',
    },
    contactPage: {
      pageTitle: 'Contactar | Daniel Redondo',
      pageDescription:
        '¿Tienes una oportunidad SFCC, una colaboración o una consulta técnica? Escríbeme.',
      title: 'Contactar',
      description:
        '¿Tienes una oportunidad SFCC, una colaboración o una consulta técnica? Escríbeme, respondo en menos de 24h.',

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
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Escribe tu mensaje aquí...',
      calendarTitle: 'Agendar una llamada',
      calendarDescription:
        '¿Prefieres hablar directamente? Reserva un hueco en mi calendario.',
      calendarButtonLabel: 'Ver disponibilidad',
      calendarLinkLabel: 'Ver mi agenda',
      calendarPlaceHolder: 'Integración con Google Calendar próximamente...',
      orSeparatorText: 'O',
      toastSuccessMessageSent: '¡Mensaje enviado con éxito!',
      toastErrorFailedToSend: 'Error al enviar el mensaje.',
      toastErrorUnexpected: 'Ha ocurrido un error inesperado.',
      toastErrorDetails: 'Detalles del error:',
      toastErrorValidationFailed: 'Error de validación del formulario.',
    },
    projectDetailPage: {
      backToProjects: 'Volver a Proyectos',
      categoryLabel: 'Categoría:',
      dateLabel: 'Fecha:',
      aboutTitle: 'Sobre este proyecto',
      keyFeaturesTitle: 'Funcionalidades Clave',
      galleryTitle: 'Galería',
      challengesTitle: 'Retos Encontrados',
      learningsTitle: 'Aprendizajes',
      visitProjectButton: 'Visitar Proyecto',
      viewCodeButton: 'Ver Código',
    },
    projectsPage: {
      title: 'Mis Proyectos',
      metaTitle: 'Proyectos | Daniel Redondo',
      metaDescription: 'Proyectos desarrollados por Daniel Redondo Blanco.',
      noProjects: 'No hay proyectos que mostrar por ahora.',
      noProjectsDescription: 'Próximamente se añadirán proyectos.',
    },
    notFoundPage: {
      pageTitle: 'Página No Encontrada',
      title: '¡Ups! Página No Encontrada',
      message:
        'Lo sentimos, la página que buscas no parece existir. Comprueba la URL o vuelve a la página de inicio.',
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
      sfccEcommerce: {
        title: 'Salesforce Commerce Cloud',
        description:
          'Multisite SFRA architecture, OCAPI/SCAPI integrations, Page Designer, pipelines and CI/CD for international eCommerce.',
      },
      javascriptNode: {
        title: 'JavaScript / Node.js',
        description:
          'Frontend and backend development with JS ES6+, TypeScript, Node.js, HTML5, CSS3 and SASS applying MVC patterns.',
      },
      mobileAndroid: {
        title: 'Android Development',
        description:
          '5 years building native apps with Kotlin and Java for smartphones, tablets and Android TV, published on Google Play.',
      },
      testingDevops: {
        title: 'Testing & DevOps',
        description:
          '~100% coverage with Mocha, Chai, Sinon and Proxyquire. CI/CD pipelines, Git, Scrum and JIRA in distributed teams.',
      },
    },
    site: {
      title: 'Daniel Redondo | SFCC Developer',
      description:
        'Portfolio of Daniel Redondo Blanco, certified Salesforce Commerce Cloud Developer with 10 years of IT experience.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
      tips: 'Tips',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | Daniel Redondo - SFCC Developer',
      pageDescription:
        'Portfolio of Daniel Redondo Blanco, certified Salesforce Commerce Cloud Developer with 5+ years in SFCC and 10 years in IT.',
      heroGreeting: "Hi, I'm Daniel",
      heroSubtitlePart1: 'Salesforce Commerce Cloud Developer',
      heroSubtitlePart2: 'Certified · 10 years in IT',
      heroIntroduction:
        'Certified SFCC B2C Developer specialised in multisite SFRA architecture, REST/OCAPI/SCAPI integrations and CI/CD. I have led high-impact eCommerce projects for Tennis-Point, UNOde50 and Parfois. Available for remote work.',
      heroViewWorkButton: 'View My Projects',
      heroContactButton: 'Get In Touch',
      heroImageAlt: 'Illustration representing Daniel Redondo, developer',
      featuredProjectsTitle: 'Latest Projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image coming soon',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Over 10 years of IT experience, specialising in Salesforce Commerce Cloud, JavaScript development and native Android.',
    },
    blogPage: {
      pageTitle: 'Technical Blog | Daniel Redondo',
      pageDescription:
        'Articles and thoughts on eCommerce development, Salesforce Commerce Cloud, JavaScript and software architecture.',
      title: 'Technical Blog',
      description:
        'Articles and thoughts on eCommerce development, Salesforce Commerce Cloud, JavaScript and software architecture.',
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
      pageTitle: 'Contact | Daniel Redondo',
      pageDescription:
        'Got a SFCC opportunity, a collaboration or a technical question? Write to me.',
      title: 'Contact',
      description:
        'Got a SFCC opportunity, a collaboration or a technical question? Write to me — I reply within 24h.',
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
      metaTitle: "Projects | Daniel Redondo's Portfolio",
      metaDescription: "Projects developed by Daniel Redondo Blanco.",
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
