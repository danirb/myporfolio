export const languages: Record<'es' | 'en', { name: string; flag: string }> = {
  es: { name: 'Español', flag: 'es' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'es';

export type LanguageCode = keyof typeof languages;

export const ui = {
  es: {
    projectsContent: {
      unode50: {
        title: 'UNOde50 · Plataforma eCommerce SFCC',
        description:
          'Lideré la modernización técnica del storefront SFCC de UNOde50, joyería artesanal española presente en 80+ mercados globales y 130 tiendas propias. CI/CD automatizado, SCAPI, Apple Pay, Adyen y Avatax.',
        imageAltText: 'Plataforma eCommerce SFCC de UNOde50',
        categoryText: 'SFCC / eCommerce',
        dateText: 'Ago 2024 – Ago 2025',
        detailedDescription:
          'Como SFCC Developer en UNOde50 (joyería artesanal española, 80+ mercados, 130 tiendas propias), lideré la modernización técnica e implementé soluciones de alto impacto: automaticé el pipeline CI/CD reduciendo el tiempo de release en un 40%, implementé SCAPI y mejoras de rendimiento del storefront, integré Apple Pay, Adyen multi-mercado y Avatax para cálculo fiscal automático en múltiples jurisdicciones, y desarrollé más de 10 cartridges custom en arquitectura SFRA con documentación técnica completa. Además implementé tracking avanzado con GTM y SCAPI para herramientas de analítica y marketing.',
        keyFeatures: {
          cicdAutomation: {
            title: 'CI/CD Automatizado (–40% release time)',
            description:
              'Pipeline de despliegues automatizado que redujo el tiempo de release en un 40%, mejorando la cadencia de entregas del equipo.',
          },
          scapiModernization: {
            title: 'Modernización con SCAPI',
            description:
              'Implementación de SCAPI y mejoras de performance del storefront para una experiencia de usuario más rápida y moderna.',
          },
          paymentIntegrations: {
            title: 'Pasarelas de Pago Internacionales',
            description:
              'Apple Pay, actualización de Adyen para mercados internacionales y Avatax para cálculo fiscal automático en múltiples jurisdicciones vía API REST.',
          },
          sfraCartridges: {
            title: '+10 Cartridges SFRA Custom',
            description:
              'Más de 10 cartridges custom en arquitectura SFRA con patrón MVC, estandarizando la base de integraciones del equipo y con cobertura de tests.',
          },
        },
        galleryImages: {},
        challenges:
          'Coordinar modernizaciones técnicas complejas sin interrumpir operaciones en más de 80 mercados activos, garantizando cero downtime en cada despliegue y compatibilidad con integraciones existentes.',
        learnings:
          'La automatización del CI/CD y una arquitectura SFRA bien estructurada son multiplicadores de productividad clave. Integrar pasarelas de pago internacionales exige un conocimiento profundo de las APIs de cada proveedor y los requisitos fiscales de cada jurisdicción.',
      },
      jaenaprende: {
        title: 'JaénAprende · Academia de Formación IT',
        description:
          'Web oficial de la academia de formación IT en Jaén. Cursos de 300h de desarrollo web moderno con Astro.js y 300h de automatización de procesos con Make (ex-Integromat).',
        imageAltText: 'Web de JaénAprende academia de formación IT',
        categoryText: 'Web / Educación',
        dateText: '2025 – 2026',
        detailedDescription:
          'JaénAprende es la academia IT donde imparto formación técnica avanzada: un curso de 300 horas de desarrollo web moderno con Astro.js (componentes, SSR, integración de APIs y despliegue) y un curso de 300 horas de automatización de procesos con Make (ex-Integromat), incluyendo flujos complejos, webhooks e integración con servicios SaaS. La web está diseñada para captar alumnos potenciales con información clara de los programas, testimonios y proceso de inscripción.',
        keyFeatures: {
          astroCourse: {
            title: 'Curso Astro.js · 300 horas',
            description:
              'Desarrollo web moderno: componentes, SSR, integración de APIs y despliegue en producción con Astro.js.',
          },
          makeCourse: {
            title: 'Curso Make · 300 horas',
            description:
              'Automatización de procesos: flujos avanzados, webhooks e integración con servicios SaaS usando Make (ex-Integromat).',
          },
          modernWebDesign: {
            title: 'Diseño Web Orientado a Conversión',
            description:
              'Interfaz optimizada para SEO, accesibilidad y conversión de alumnos potenciales con información clara y proceso de inscripción sencillo.',
          },
        },
        galleryImages: {},
        challenges:
          'Comunicar la propuesta de valor de cursos técnicos avanzados a perfiles no técnicos interesados en el sector IT, transmitiendo credibilidad y claridad sobre los contenidos.',
        learnings:
          'La docencia refuerza el dominio técnico propio y obliga a simplificar conceptos complejos. Diseñar una web de academia requiere equilibrar información técnica detallada con una UX accesible para todos los perfiles.',
      },
      tennisPoint: {
        title: 'Tennis-Point · SFRA Multisite 14 Idiomas',
        description:
          'El mayor retailer de tenis online del mundo (14 tiendas en 14 idiomas, 21 tiendas físicas, socio oficial ATP Tour). Arquitectura SFRA multisite escalable con ~100% cobertura de tests unitarios.',
        imageAltText: 'Plataforma eCommerce SFRA de Tennis-Point',
        categoryText: 'SFCC / eCommerce',
        dateText: 'Nov 2020 – Ago 2024',
        detailedDescription:
          'Durante casi 4 años en Tennis-Point (SIGNA Sports United, NYSE) mantuve y escalé la arquitectura SFRA multisite para 14 tiendas internacionales en 14 idiomas, con soporte a múltiples divisas y alto volumen de tráfico. Implementé una suite de tests unitarios con Mocha, Chai, Sinon y Proxyquire alcanzando ~100% de cobertura en módulos críticos de negocio. Desarrollé nuevas funcionalidades con ISML, JavaScript ES6+, HTML5 y SASS, integré servicios externos y pasarelas de pago mediante REST y OCAPI, y trabajé en equipo distribuido de 5+ desarrolladores con metodología Scrum y comunicación diaria en inglés con el cliente alemán.',
        keyFeatures: {
          multisiteArchitecture: {
            title: 'SFRA Multisite · 14 Tiendas / 14 Idiomas',
            description:
              '14 tiendas locales en 14 idiomas con soporte a múltiples divisas, alto volumen de tráfico y ATP Tour como socio oficial.',
          },
          unitTesting: {
            title: '~100% Cobertura de Tests Unitarios',
            description:
              'Suite completa con Mocha, Chai, Sinon y Proxyquire en módulos críticos de negocio, garantizando estabilidad en cada release.',
          },
          paymentGateways: {
            title: 'Integraciones de Pago',
            description:
              'Integración de pasarelas de pago vía OCAPI y REST API con estabilidad garantizada en picos de demanda durante torneos.',
          },
          internationalTeam: {
            title: 'Equipo Internacional Remoto',
            description:
              'Scrum diario con equipo distribuido de 5+ desarrolladores y cliente alemán, 100% en inglés durante casi 4 años.',
          },
        },
        galleryImages: {},
        challenges:
          'Escalar una plataforma multisite de alto tráfico con 14 tiendas y 14 idiomas garantizando ~100% de cobertura de tests en cada release sin degradar el rendimiento ni la experiencia de usuario.',
        learnings:
          'El testing exhaustivo y una arquitectura SFRA modular y bien documentada son la base de sistemas eCommerce resilientes y mantenibles a largo plazo. Trabajar con un equipo distribuido internacional fortalece la comunicación técnica y las habilidades de coordinación remota.',
      },
      aprendesk: {
        title: 'Aprendesk · SaaS de Gestión a Medida',
        description:
          'Plataforma SaaS de gestión a medida para empresas y formadores. Diseñada para optimizar procesos internos con una interfaz intuitiva y arquitectura escalable.',
        imageAltText: 'Plataforma SaaS Aprendesk de gestión',
        categoryText: 'SaaS',
        dateText: '2024',
        detailedDescription:
          'Aprendesk es una plataforma SaaS de gestión a medida orientada a empresas del sector formativo y educativo. Diseñada con un enfoque mobile-first, ofrece herramientas de gestión de procesos, seguimiento y reporting adaptadas a los flujos de trabajo específicos de cada cliente. Arquitectura escalable construida con TypeScript, Node.js y una interfaz de usuario moderna, accesible y optimizada para la adopción rápida.',
        keyFeatures: {
          customManagement: {
            title: 'Gestión a Medida',
            description:
              'Herramientas adaptadas a los flujos de trabajo específicos de empresas formativas, evitando el sobrecoste de soluciones genéricas.',
          },
          saasArchitecture: {
            title: 'Arquitectura SaaS Escalable',
            description:
              'Diseñada para soportar múltiples clientes con rendimiento, seguridad y aislamiento de datos.',
          },
          userInterface: {
            title: 'Interfaz Intuitiva',
            description:
              'UX/UI pensada para maximizar la adopción y minimizar la curva de aprendizaje, con diseño mobile-first.',
          },
        },
        galleryImages: {},
        challenges:
          'Diseñar una arquitectura SaaS flexible que se adapte a diferentes modelos de negocio manteniendo el código limpio, seguro y mantenible a largo plazo.',
        learnings:
          'Construir un producto SaaS propio obliga a pensar en escalabilidad, experiencia de usuario y modelo de negocio de forma simultánea. La simplicidad en la UX es tan importante como la robustez técnica.',
      },
      rolloDesarrollo: {
        title: 'Rollo de Desarrollo · Podcast',
        description:
          'Web del podcast "Rollo de Desarrollo", donde se habla de tecnología, desarrollo de software y carrera profesional en IT.',
        imageAltText: 'Web del podcast Rollo de Desarrollo',
        categoryText: 'Web / Media',
        dateText: '2023',
        detailedDescription:
          'Diseño y desarrollo de la web del podcast "Rollo de Desarrollo". Plataforma de contenido donde se publican episodios, notas del programa y recursos para la comunidad de desarrolladores. Interfaz ligera, optimizada para el consumo de contenido multimedia y con buenas prácticas de SEO para posicionar episodios en buscadores.',
        keyFeatures: {
          podcastWeb: {
            title: 'Plataforma de Podcast',
            description:
              'Web para publicar y consumir episodios con notas del programa, recursos y acceso directo a plataformas de streaming.',
          },
          contentDelivery: {
            title: 'Rendimiento y SEO',
            description:
              'Carga rápida, experiencia fluida y optimización SEO para posicionar episodios y atraer audiencia orgánica.',
          },
        },
        galleryImages: {},
        challenges:
          'Crear una identidad visual coherente para el podcast y una experiencia de contenido ligera, accesible y optimizada para SEO en un entorno de media.',
        learnings:
          'Un podcast tiene necesidades de contenido y SEO específicas. La consistencia de publicación, la comunidad y una buena arquitectura de contenido son clave para el crecimiento orgánico.',
      },
      hostaletacion: {
        title: 'Hostaleta & Ción · Web Hotel con Integraciones',
        description:
          'Web corporativa de hotel en Jaén con integración de sistema de reservas, galería de instalaciones y optimización SEO local para la captación de clientes directos.',
        imageAltText: 'Web del hotel Hostaleta & Ción en Jaén',
        categoryText: 'Web / Turismo',
        dateText: '2022',
        detailedDescription:
          'Desarrollo y mantenimiento de la web corporativa para un hotel en Jaén. Integración con sistema de reservas externo para consulta de disponibilidad y reserva en tiempo real, galería de instalaciones, ficha de servicios y política de precios. Diseño responsive optimizado para dispositivos móviles (principal canal de búsqueda de alojamientos) y estrategia SEO local para captar clientes directos y reducir la dependencia de OTAs.',
        keyFeatures: {
          bookingIntegration: {
            title: 'Integración de Sistema de Reservas',
            description:
              'Conexión con sistema de reservas externo para disponibilidad y reserva en tiempo real directamente desde la web.',
          },
          mobileOptimized: {
            title: 'Diseño Responsive Mobile-First',
            description:
              'Experiencia optimizada para dispositivos móviles, principal canal de búsqueda y reserva de alojamientos.',
          },
          seoLocal: {
            title: 'SEO Local',
            description:
              'Optimización para búsquedas locales de turismo en Jaén, reduciendo la dependencia de OTAs y aumentando reservas directas.',
          },
        },
        galleryImages: {},
        challenges:
          'Integrar sistemas de reservas de terceros manteniendo una UX fluida y un diseño atractivo, garantizando la consistencia de disponibilidad en tiempo real.',
        learnings:
          'Las webs hoteleras requieren un equilibrio entre diseño visual atractivo, información clara y un proceso de reserva sin fricciones. El SEO local es clave para reducir la dependencia de intermediarios.',
      },
      parfois: {
        title: 'Parfois · eCommerce SFCC Internacional',
        description:
          'Plataforma SFCC SiteGenesis de Parfois, marca de moda portuguesa con 1.000+ tiendas en 70+ países y ~750M$ de facturación. Hooks OCAPI, integraciones headless y apps Android nativas.',
        imageAltText: 'Plataforma eCommerce SFCC de Parfois',
        categoryText: 'SFCC / eCommerce',
        dateText: 'Ago 2019 – Nov 2020',
        detailedDescription:
          'En Vector ITC (parte de Softtek), trabajé como SFCC Developer para Parfois (marca portuguesa de moda, 1.000+ tiendas en 70+ países, ~750M$ de facturación). Mantuve y evoluccioné la plataforma SFCC SiteGenesis dando soporte a una cadena internacional de gran escala. Desarrollé hooks OCAPI para exponer funcionalidades a canales externos y habilitar integraciones headless con terceros. Además participé en el desarrollo y mantenimiento de las aplicaciones Android nativas con Kotlin y Java.',
        keyFeatures: {
          sitegenesisEvolution: {
            title: 'Evolución Plataforma SiteGenesis',
            description:
              'Mantenimiento y evolución de la plataforma SFCC SiteGenesis para una cadena internacional de 1.000+ tiendas en 70+ países.',
          },
          ocapiHooks: {
            title: 'Hooks OCAPI',
            description:
              'Desarrollo de hooks OCAPI para exposición de funcionalidades a canales externos y terceros.',
          },
          headlessIntegrations: {
            title: 'Integraciones Headless',
            description:
              'Habilitación de arquitecturas headless con terceros mediante la API OCAPI de SFCC.',
          },
          androidDev: {
            title: 'Apps Android Nativas (Kotlin / Java)',
            description:
              'Desarrollo y mantenimiento de aplicaciones Android nativas con Kotlin y Java para la cadena internacional Parfois.',
          },
        },
        galleryImages: {},
        challenges:
          'Dar soporte estable a una cadena de 1.000+ tiendas en 70 países exige un rigor de testing y documentación muy alto para evitar regresiones en producción con impacto global.',
        learnings:
          'Primera experiencia SFCC a gran escala: aprendí la arquitectura SiteGenesis, los patrones de integración OCAPI y la importancia del impacto global de cada cambio de código en una plataforma de esa magnitud.',
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
      unode50: {
        title: 'UNOde50 · SFCC eCommerce Platform',
        description:
          'Led the technical modernisation of the UNOde50 SFCC storefront, a Spanish handcrafted jewellery brand present in 80+ global markets and 130 own stores. Automated CI/CD, SCAPI, Apple Pay, Adyen and Avatax.',
        imageAltText: "UNOde50's SFCC eCommerce platform",
        categoryText: 'SFCC / eCommerce',
        dateText: 'Aug 2024 – Aug 2025',
        detailedDescription:
          'As SFCC Developer at UNOde50 (Spanish handcrafted jewellery brand, 80+ markets, 130 own stores), I led technical modernisation and delivered high-impact solutions: automated the CI/CD pipeline reducing release time by 40%, implemented SCAPI and storefront performance improvements, integrated Apple Pay, multi-market Adyen and Avatax for automatic tax calculation across multiple jurisdictions, and developed 10+ custom SFRA cartridges with full technical documentation. I also implemented advanced tracking with GTM and SCAPI for analytics and marketing tools.',
        keyFeatures: {
          cicdAutomation: {
            title: 'Automated CI/CD (–40% release time)',
            description:
              'Automated deployment pipeline that reduced release time by 40%, improving team delivery cadence.',
          },
          scapiModernization: {
            title: 'SCAPI Modernisation',
            description:
              'SCAPI implementation and storefront performance improvements for a faster, more modern user experience.',
          },
          paymentIntegrations: {
            title: 'International Payment Gateways',
            description:
              'Apple Pay, Adyen updates for international markets and Avatax for automatic tax calculation across multiple jurisdictions via REST API.',
          },
          sfraCartridges: {
            title: '10+ Custom SFRA Cartridges',
            description:
              '10+ custom cartridges in SFRA architecture with MVC pattern, standardising the team integration base with full test coverage.',
          },
        },
        galleryImages: {},
        challenges:
          'Coordinating complex technical modernisations without disrupting operations across 80+ active markets, guaranteeing zero downtime on every deployment and compatibility with existing integrations.',
        learnings:
          'Automating CI/CD and a well-structured SFRA architecture are key productivity multipliers. Integrating international payment gateways requires deep knowledge of each provider API and the tax requirements of each jurisdiction.',
      },
      jaenaprende: {
        title: 'JaénAprende · IT Training Academy',
        description:
          'Official website for the IT training academy in Jaén, Spain. 300h course on modern web development with Astro.js and 300h course on process automation with Make (ex-Integromat).',
        imageAltText: 'JaénAprende IT training academy website',
        categoryText: 'Web / Education',
        dateText: '2025 – 2026',
        detailedDescription:
          "JaénAprende is the IT academy where I deliver advanced technical training: a 300-hour modern web development course with Astro.js (components, SSR, API integration and deployment) and a 300-hour process automation course with Make (ex-Integromat), covering complex flows, webhooks and SaaS service integrations. The website is designed to attract prospective students with clear programme information, testimonials and a straightforward enrolment process.",
        keyFeatures: {
          astroCourse: {
            title: 'Astro.js Course · 300 hours',
            description:
              'Modern web development: components, SSR, API integration and production deployment with Astro.js.',
          },
          makeCourse: {
            title: 'Make Course · 300 hours',
            description:
              'Process automation: advanced flows, webhooks and SaaS service integration using Make (ex-Integromat).',
          },
          modernWebDesign: {
            title: 'Conversion-Optimised Design',
            description:
              'SEO, accessibility and conversion-optimised interface with clear information and a simple enrolment process.',
          },
        },
        galleryImages: {},
        challenges:
          "Communicating the value proposition of advanced technical courses to non-technical profiles interested in IT, conveying credibility and clarity about the programme content.",
        learnings:
          'Teaching reinforces your own technical mastery and forces you to simplify complex concepts. Designing an academy website requires balancing detailed technical information with a UX accessible to all profiles.',
      },
      tennisPoint: {
        title: 'Tennis-Point · SFRA Multisite 14 Languages',
        description:
          "The world's largest online tennis retailer (14 stores in 14 languages, 21 physical stores, official ATP Tour partner). Scalable SFRA multisite architecture with ~100% unit test coverage.",
        imageAltText: "Tennis-Point's SFRA eCommerce platform",
        categoryText: 'SFCC / eCommerce',
        dateText: 'Nov 2020 – Aug 2024',
        detailedDescription:
          'For nearly 4 years at Tennis-Point (SIGNA Sports United, NYSE) I maintained and scaled the SFRA multisite architecture for 14 international stores in 14 languages, with multi-currency support and high traffic volumes. I implemented a full unit test suite using Mocha, Chai, Sinon and Proxyquire achieving ~100% coverage on critical business modules. Developed new features with ISML, JavaScript ES6+, HTML5 and SASS, integrated external services and payment gateways via REST and OCAPI, and worked in a distributed team of 5+ developers with Scrum and daily communication in English with the German client.',
        keyFeatures: {
          multisiteArchitecture: {
            title: 'SFRA Multisite · 14 Stores / 14 Languages',
            description:
              '14 local storefronts in 14 languages with multi-currency support, high traffic volumes and official ATP Tour partnership.',
          },
          unitTesting: {
            title: '~100% Unit Test Coverage',
            description:
              'Full suite with Mocha, Chai, Sinon and Proxyquire on critical business modules, ensuring stability on every release.',
          },
          paymentGateways: {
            title: 'Payment Gateway Integrations',
            description:
              'Payment gateway integrations via OCAPI and REST API with guaranteed stability during tournament traffic peaks.',
          },
          internationalTeam: {
            title: 'International Remote Team',
            description:
              'Daily Scrum with a distributed team of 5+ developers and German client, 100% in English for nearly 4 years.',
          },
        },
        galleryImages: {},
        challenges:
          'Scaling a high-traffic multisite platform with 14 stores and 14 languages while guaranteeing ~100% test coverage on every release without degrading performance or user experience.',
        learnings:
          'Thorough testing and a modular, well-documented SFRA architecture are the foundation of resilient and maintainable eCommerce systems. Working with an international distributed team strengthens technical communication and remote coordination skills.',
      },
      aprendesk: {
        title: 'Aprendesk · Custom Management SaaS',
        description:
          'Custom management SaaS platform for businesses and trainers. Designed to optimise internal processes with an intuitive interface and scalable architecture.',
        imageAltText: 'Aprendesk management SaaS platform',
        categoryText: 'SaaS',
        dateText: '2024',
        detailedDescription:
          'Aprendesk is a custom management SaaS platform aimed at companies in the training and education sector. Built with a mobile-first approach, it provides process management, tracking and reporting tools tailored to each client\'s specific workflows. Scalable architecture built with TypeScript, Node.js and a modern, accessible user interface optimised for fast adoption.',
        keyFeatures: {
          customManagement: {
            title: 'Custom Management Tools',
            description:
              'Tools adapted to the specific workflows of training companies, avoiding the overhead of generic solutions.',
          },
          saasArchitecture: {
            title: 'Scalable SaaS Architecture',
            description:
              'Designed to support multiple tenants with performance, security and data isolation.',
          },
          userInterface: {
            title: 'Intuitive Interface',
            description:
              'UX/UI designed to maximise adoption and minimise the learning curve, with a mobile-first approach.',
          },
        },
        galleryImages: {},
        challenges:
          'Designing a flexible SaaS architecture that adapts to different business models while keeping the codebase clean, secure and maintainable long-term.',
        learnings:
          'Building your own SaaS product forces you to think about scalability, user experience and business model simultaneously. Simplicity in UX is as important as technical robustness.',
      },
      rolloDesarrollo: {
        title: 'Rollo de Desarrollo · Podcast',
        description:
          'Website for the "Rollo de Desarrollo" podcast, covering technology, software development and professional careers in IT.',
        imageAltText: 'Rollo de Desarrollo podcast website',
        categoryText: 'Web / Media',
        dateText: '2023',
        detailedDescription:
          'Design and development of the "Rollo de Desarrollo" podcast website. Content platform for publishing episodes, show notes and resources for the developer community. Lightweight interface optimised for multimedia content consumption and with SEO best practices to rank episodes in search engines.',
        keyFeatures: {
          podcastWeb: {
            title: 'Podcast Platform',
            description:
              'Website for publishing and consuming episodes with show notes, resources and direct links to streaming platforms.',
          },
          contentDelivery: {
            title: 'Performance & SEO',
            description:
              'Fast load times, smooth experience and SEO optimisation to rank episodes and attract organic audience.',
          },
        },
        galleryImages: {},
        challenges:
          'Creating a coherent visual identity for the podcast and a lightweight, accessible, SEO-optimised content experience in a media context.',
        learnings:
          'A podcast has specific content and SEO needs. Publishing consistency, community and a solid content architecture are key for organic growth.',
      },
      hostaletacion: {
        title: 'Hostaleta & Ción · Hotel Website with Integrations',
        description:
          'Corporate hotel website in Jaén with booking system integration, facilities gallery and local SEO optimisation to attract direct bookings.',
        imageAltText: 'Hostaleta & Ción hotel website in Jaén',
        categoryText: 'Web / Tourism',
        dateText: '2022',
        detailedDescription:
          'Development and maintenance of the corporate website for a hotel in Jaén. Integration with an external booking system for real-time availability and reservations, facilities gallery, services page and pricing policy. Responsive design optimised for mobile devices (the main channel for searching accommodation) and local SEO strategy to attract direct bookings and reduce dependence on OTAs.',
        keyFeatures: {
          bookingIntegration: {
            title: 'Booking System Integration',
            description:
              'Connection with an external booking system for real-time availability and reservations directly from the website.',
          },
          mobileOptimized: {
            title: 'Mobile-First Responsive Design',
            description:
              'Experience optimised for mobile devices, the main channel for searching and booking accommodation.',
          },
          seoLocal: {
            title: 'Local SEO',
            description:
              'Optimisation for local tourism searches in Jaén, reducing OTA dependence and increasing direct bookings.',
          },
        },
        galleryImages: {},
        challenges:
          'Integrating third-party booking systems while maintaining a smooth UX and attractive design, ensuring real-time availability consistency.',
        learnings:
          'Hotel websites require a balance between attractive visual design, clear information and a frictionless booking process. Local SEO is key to reducing intermediary dependence.',
      },
      parfois: {
        title: 'Parfois · International SFCC eCommerce',
        description:
          'SFCC SiteGenesis platform for Parfois, a Portuguese fashion brand with 1,000+ stores in 70+ countries and ~€750M revenue. OCAPI hooks, headless integrations and native Android apps.',
        imageAltText: "Parfois's SFCC eCommerce platform",
        categoryText: 'SFCC / eCommerce',
        dateText: 'Aug 2019 – Nov 2020',
        detailedDescription:
          'At Vector ITC (part of Softtek), I worked as SFCC Developer for Parfois (Portuguese fashion brand, 1,000+ stores in 70+ countries, ~€750M revenue). I maintained and evolved the SFCC SiteGenesis platform supporting a large-scale international chain. I developed OCAPI hooks to expose functionality to external channels and enable headless integrations with third parties. I also contributed to the development and maintenance of the Parfois native Android applications using Kotlin and Java.',
        keyFeatures: {
          sitegenesisEvolution: {
            title: 'SiteGenesis Platform Evolution',
            description:
              'Maintenance and evolution of the SFCC SiteGenesis platform for an international chain of 1,000+ stores in 70+ countries.',
          },
          ocapiHooks: {
            title: 'OCAPI Hooks',
            description:
              'Development of OCAPI hooks to expose functionality to external channels and third parties.',
          },
          headlessIntegrations: {
            title: 'Headless Integrations',
            description:
              "Enabling headless architectures with third parties through SFCC's OCAPI.",
          },
          androidDev: {
            title: 'Native Android Apps (Kotlin / Java)',
            description:
              'Development and maintenance of native Android applications with Kotlin and Java for the Parfois international chain.',
          },
        },
        galleryImages: {},
        challenges:
          'Providing stable support for a chain of 1,000+ stores in 70 countries demands a very high standard of testing and documentation to avoid production regressions with global impact.',
        learnings:
          'My first large-scale SFCC experience: I learned the SiteGenesis architecture, OCAPI integration patterns and the importance of the global impact of every code change on a platform of that scale.',
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
