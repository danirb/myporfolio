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
        title: 'Aprendesk · SaaS multi-tenant para academias',
        description:
          'SaaS que he diseñado, construido y lanzado en solitario para gestionar academias de enseñanza: alumnos, matrícula, asistencia, cobros, facturación VeriFactu, portal de familias y apps móviles.',
        imageAltText: 'Logo de Aprendesk',
        categoryText: 'SaaS · Producto propio',
        dateText: 'Jun 2025 – Presente',
        detailedDescription:
          'Aprendesk (aprendesk.app) nació como la herramienta interna de Jaén Aprende y la convertí en un producto SaaS para cualquier academia. Cada academia tiene su propio subdominio (academia.aprendesk.app) o dominio personalizado, con tres portales: profesores/administración, familias y un superadmin desde el que gestiono el negocio. Lo he llevado de principio a fin: producto, diseño, arquitectura, desarrollo full-stack, pagos, cumplimiento fiscal, apps móviles, SEO, marketing y soporte a clientes reales. Está construido con Next.js 16 (App Router), React 19, TypeScript y Supabase, desplegado en Vercel con más de 20 tareas programadas, y el repositorio supera las 1.500 issues y pull requests.',
        keyFeatures: {
          multiTenant: {
            title: 'Arquitectura multi-tenant segura',
            description:
              'Un proxy resuelve la academia por subdominio o dominio propio. El aislamiento de datos se apoya en Postgres con políticas RLS restrictivas por academy_id, tests automáticos de RLS y revisión de permisos de funciones SECURITY DEFINER.',
          },
          portals: {
            title: 'Tres portales por rol',
            description:
              'Panel de profesores y administración, portal de familias (multidioma con next-intl: español y euskera) y panel de superadmin con métricas de crecimiento, leads, soporte, retargeting y cuadro de inversores.',
          },
          payments: {
            title: 'Cobros, facturación y VeriFactu',
            description:
              'Suscripciones SaaS con Stripe, Stripe Connect para que cada academia cobre a sus familias, Redsys, bonos, recordatorios de pago, gastos, historial de cobros y facturación electrónica conforme a VeriFactu, con reintentos automáticos.',
          },
          academicOps: {
            title: 'Gestión académica diaria',
            description:
              'Alumnos, grupos, horarios, sedes y aulas, matrícula online con autorizaciones y lista de espera, pase de lista con extras y recuperaciones, incidencias de clase, festivos, fichaje de profesores, contratos e informes.',
          },
          lms: {
            title: 'LMS y simulacros',
            description:
              'Cursos online, tareas, tests, certificados en PDF y simulacros de Selectividad (PAU) para captar y fidelizar alumnos.',
          },
          communication: {
            title: 'Comunicación con familias',
            description:
              'Mensajería, anuncios editables, avisos por email (Resend/SMTP), notificaciones push y anuncios por WhatsApp con consentimiento explícito.',
          },
          mobileApps: {
            title: 'Apps móviles',
            description:
              'Apps nativas para iOS y Android con Capacitor y notificaciones push con Firebase, además de PWA.',
          },
          ai: {
            title: 'IA integrada con Claude',
            description:
              'Generación de preguntas de test, asistente de chat, ayuda en la resolución de tickets de soporte, redacción de emails y resúmenes periódicos con la API de Claude.',
          },
          growth: {
            title: 'Marketing y crecimiento',
            description:
              'Web de marketing, blog y landings SEO, onboarding y periodo de prueba, nurturing por email, recuperación de registros abandonados, conversiones de Google Ads y planes con límites (free, starter, pro, enterprise).',
          },
          quality: {
            title: 'Calidad y flujo de trabajo',
            description:
              'Tests unitarios con Vitest, e2e con Playwright contra un Supabase local desechable, CI en GitHub Actions (typecheck, RLS, detección de drift de esquema), gitflow con releases automáticas y un pipeline de agentes de IA (selección de tareas, revisión de specs, implementación y revisión de PR) con specs y criterios de aceptación.',
          },
        },
        technicalSkills: [
          'Arquitectura SaaS multi-tenant',
          'Next.js App Router, Server Components y Server Actions',
          'React y TypeScript',
          'Postgres, modelado de datos y migraciones',
          'Seguridad: RLS, autenticación y control de permisos',
          'Integración de pagos (Stripe, Stripe Connect, Redsys)',
          'Facturación electrónica y cumplimiento fiscal (VeriFactu)',
          'Apps híbridas con Capacitor y notificaciones push',
          'Integración de LLMs (API de Claude)',
          'Testing unitario, de políticas y e2e',
          'CI/CD con GitHub Actions y despliegue en Vercel',
          'Internacionalización (i18n)',
          'SEO técnico y analítica',
          'Desarrollo asistido por agentes de IA',
        ],
        softSkills: [
          'Visión de producto y priorización',
          'Emprendimiento y autonomía de principio a fin',
          'Escucha activa y trato directo con clientes',
          'Traducir necesidades reales de academias en funcionalidades',
          'Soporte y resolución de incidencias en producción',
          'Comunicación clara con usuarios no técnicos',
          'Gestión del tiempo y constancia',
          'Toma de decisiones con información incompleta',
          'Documentación y procesos para escalar el trabajo',
          'Aprendizaje continuo',
        ],
        galleryImages: {
          workspace: {
            alt: 'Espacio de trabajo de una academia que usa Aprendesk',
            caption: 'Aprendesk nació en el día a día de una academia real.',
          },
        },
        challenges:
          'Pasar de una herramienta interna a un producto que usan varias academias exige mucho más que código: aislar los datos de cada cliente con garantías, cumplir la normativa fiscal española, integrar varios proveedores de pago, mantener la app estable mientras se publican cambios casi a diario y, a la vez, encargarme del marketing, las ventas y el soporte.',
        learnings:
          'He aprendido que la seguridad en un SaaS se demuestra con tests, no se presupone: una sola política RLS mal escrita puede abrir datos de otra academia. También que escuchar a las academias guía mejor el producto que cualquier hoja de ruta, que automatizar calidad y releases es lo que permite avanzar rápido en solitario y que la IA multiplica la productividad cuando trabaja con specs claras y revisión.',
      },
      rolloDesarrollo: {
        title: 'Rollodesarrollo · Podcast',
        description:
          'Web del podcast "Rollodesarrollo", donde se habla de tecnología, desarrollo de software y carrera profesional en IT.',
        imageAltText: 'Web del podcast Rollodesarrollo',
        categoryText: 'Web / Media',
        dateText: '2023',
        detailedDescription:
          'Diseño y desarrollo de la web del podcast "Rollodesarrollo". Plataforma de contenido donde se publican episodios, notas del programa y recursos para la comunidad de desarrolladores. Interfaz ligera, optimizada para el consumo de contenido multimedia y con buenas prácticas de SEO para posicionar episodios en buscadores.',
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
        title: 'Hostal EstaciÓN · Web Hotel con Integraciones',
        description:
          'Web corporativa de hotel en Jaén con integración de sistema de reservas, galería de instalaciones y optimización SEO local para la captación de clientes directos.',
        imageAltText: 'Web del hotel Hostal EstaciÓN en Jaén',
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
      sfccEcommerce: {
        title: 'Salesforce Commerce Cloud',
        description:
          'Desarrollo en SFRA y SiteGenesis, OCAPI/SCAPI, Page Designer, Einstein, pipelines CI/CD y cartridges custom para plataformas eCommerce escalables.',
      },
      javascriptNode: {
        title: 'JavaScript & Web',
        description:
          'JavaScript ES6+, TypeScript, Node.js, HTML5, CSS3 y SASS. Desarrollo full-stack orientado a rendimiento y mantenibilidad.',
      },
      mobileAndroid: {
        title: 'Desarrollo Mobile (Android)',
        description:
          'Apps nativas en Kotlin y Java, incluyendo Android TV y publicación en Google Play.',
      },
      testingDevops: {
        title: 'Testing & DevOps',
        description:
          'Testing unitario con Mocha, Chai, Sinon y Proxyquire. Control de versiones con Git, metodologías ágiles con Scrum y gestión con JIRA.',
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
      techStackTitle: 'Stack tecnológico',
      technicalSkillsTitle: 'Skills técnicas',
      softSkillsTitle: 'Soft skills',
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
        title: 'Aprendesk · Multi-tenant SaaS for academies',
        description:
          'A SaaS I designed, built and launched on my own to run tutoring and training academies: students, enrolment, attendance, payments, VeriFactu invoicing, a family portal and mobile apps.',
        imageAltText: 'Aprendesk logo',
        categoryText: 'SaaS · Own product',
        dateText: 'Jun 2025 – Present',
        detailedDescription:
          'Aprendesk (aprendesk.app) started as the internal tool for Jaén Aprende and I turned it into a SaaS product for any academy. Each academy gets its own subdomain (academy.aprendesk.app) or custom domain, with three portals: teachers/administration, families, and a superadmin area where I run the business. I own it end to end: product, design, architecture, full-stack development, payments, tax compliance, mobile apps, SEO, marketing and support for real customers. It is built with Next.js 16 (App Router), React 19, TypeScript and Supabase, deployed on Vercel with more than 20 scheduled jobs, and the repository has passed 1,500 issues and pull requests.',
        keyFeatures: {
          multiTenant: {
            title: 'Secure multi-tenant architecture',
            description:
              'A proxy resolves the academy from its subdomain or custom domain. Data isolation relies on Postgres with restrictive RLS policies per academy_id, automated RLS tests and permission checks on SECURITY DEFINER functions.',
          },
          portals: {
            title: 'Three role-based portals',
            description:
              'Teacher and admin panel, family portal (multilingual with next-intl: Spanish and Basque) and a superadmin panel with growth metrics, leads, support, retargeting and an investor board.',
          },
          payments: {
            title: 'Payments, invoicing and VeriFactu',
            description:
              'SaaS subscriptions with Stripe, Stripe Connect so each academy can charge its families, Redsys, class packs, payment reminders, expenses, payment history and electronic invoicing compliant with Spain’s VeriFactu, with automatic retries.',
          },
          academicOps: {
            title: 'Day-to-day academy management',
            description:
              'Students, groups, timetables, sites and classrooms, online enrolment with consents and waiting lists, attendance with extra and make-up classes, class incidents, holidays, teacher time tracking, contracts and reports.',
          },
          lms: {
            title: 'LMS and mock exams',
            description:
              'Online courses, homework, tests, PDF certificates and university entrance (PAU) mock exams to attract and retain students.',
          },
          communication: {
            title: 'Family communication',
            description:
              'Messaging, editable announcements, email notifications (Resend/SMTP), push notifications and WhatsApp announcements with explicit consent.',
          },
          mobileApps: {
            title: 'Mobile apps',
            description:
              'Native iOS and Android apps built with Capacitor and Firebase push notifications, plus a PWA.',
          },
          ai: {
            title: 'AI built in with Claude',
            description:
              'Test question generation, a chat assistant, help resolving support tickets, email drafting and periodic digests using the Claude API.',
          },
          growth: {
            title: 'Marketing and growth',
            description:
              'Marketing site, blog and SEO landing pages, onboarding and free trial, email nurturing, abandoned sign-up recovery, Google Ads conversions and tiered plans with limits (free, starter, pro, enterprise).',
          },
          quality: {
            title: 'Quality and workflow',
            description:
              'Unit tests with Vitest, e2e tests with Playwright against a disposable local Supabase, CI on GitHub Actions (typecheck, RLS, schema drift detection), gitflow with automated releases and an AI agent pipeline (task picking, spec review, implementation and PR review) driven by specs and acceptance criteria.',
          },
        },
        technicalSkills: [
          'Multi-tenant SaaS architecture',
          'Next.js App Router, Server Components and Server Actions',
          'React and TypeScript',
          'Postgres, data modelling and migrations',
          'Security: RLS, authentication and access control',
          'Payment integrations (Stripe, Stripe Connect, Redsys)',
          'E-invoicing and tax compliance (VeriFactu)',
          'Hybrid apps with Capacitor and push notifications',
          'LLM integration (Claude API)',
          'Unit, policy and e2e testing',
          'CI/CD with GitHub Actions and Vercel deployments',
          'Internationalisation (i18n)',
          'Technical SEO and analytics',
          'AI agent-assisted development',
        ],
        softSkills: [
          'Product vision and prioritisation',
          'Entrepreneurship and end-to-end ownership',
          'Active listening and direct customer contact',
          'Turning real academy needs into features',
          'Production support and incident handling',
          'Clear communication with non-technical users',
          'Time management and consistency',
          'Decision-making with incomplete information',
          'Documentation and processes to scale the work',
          'Continuous learning',
        ],
        galleryImages: {
          workspace: {
            alt: 'Workspace of an academy using Aprendesk',
            caption: 'Aprendesk was born in the daily life of a real academy.',
          },
        },
        challenges:
          'Going from an internal tool to a product used by several academies takes far more than code: isolating each customer’s data with real guarantees, complying with Spanish tax regulations, integrating several payment providers, keeping the app stable while shipping changes almost daily, and handling marketing, sales and support at the same time.',
        learnings:
          'Security in a SaaS has to be proven with tests, not assumed: a single badly written RLS policy can expose another academy’s data. Listening to academies guides the product better than any roadmap, automating quality and releases is what lets you move fast on your own, and AI multiplies productivity when it works from clear specs with review.',
      },
      rolloDesarrollo: {
        title: 'Rollodesarrollo · Podcast',
        description:
          'Website for the "Rollodesarrollo" podcast, covering technology, software development and professional careers in IT.',
        imageAltText: 'Rollodesarrollo podcast website',
        categoryText: 'Web / Media',
        dateText: '2023',
        detailedDescription:
          'Design and development of the "Rollodesarrollo" podcast website. Content platform for publishing episodes, show notes and resources for the developer community. Lightweight interface optimised for multimedia content consumption and with SEO best practices to rank episodes in search engines.',
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
        title: 'Hostal EstaciÓN · Hotel Website with Integrations',
        description:
          'Corporate hotel website in Jaén with booking system integration, facilities gallery and local SEO optimisation to attract direct bookings.',
        imageAltText: 'Hostal EstaciÓN hotel website in Jaén',
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
      sfccEcommerce: {
        title: 'Salesforce Commerce Cloud',
        description:
          'Development with SFRA and SiteGenesis, OCAPI/SCAPI, Page Designer, Einstein, CI/CD pipelines, and custom cartridges for scalable eCommerce platforms.',
      },
      javascriptNode: {
        title: 'JavaScript & Web',
        description:
          'JavaScript ES6+, TypeScript, Node.js, HTML5, CSS3, and SASS. Full-stack development focused on performance and maintainability.',
      },
      mobileAndroid: {
        title: 'Mobile Development (Android)',
        description:
          'Native apps with Kotlin and Java, including Android TV and Google Play publishing.',
      },
      testingDevops: {
        title: 'Testing & DevOps',
        description:
          'Unit testing with Mocha, Chai, Sinon, and Proxyquire. Version control with Git, agile methodologies with Scrum, and project management with JIRA.',
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
      techStackTitle: 'Tech stack',
      technicalSkillsTitle: 'Technical skills',
      softSkillsTitle: 'Soft skills',
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
