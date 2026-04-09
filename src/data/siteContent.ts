import type { Locale } from '../i18n/utils';

type LinkItem = {
  label: string;
  href: string;
};

type PortfolioItem = {
  name: string;
  category: string;
  summary: string;
  stack: string[];
  outcome: string;
  detail: string;
  primaryLink: LinkItem;
  secondaryLink?: LinkItem;
  visual: {
    eyebrow: string;
    headline: string;
    caption: string;
    metrics: string[];
    imageSrc: string;
    imageAlt: string;
  };
};

type ServiceItem = {
  name: string;
  summary: string;
  bulletA: string;
  bulletB: string;
  href: string;
};

type CaseStudyItem = {
  client: string;
  challenge: string;
  solution: string;
  result: string;
  /** Optional KPI line for the case card (illustrative metrics). */
  metricLabel?: string;
  metricValue?: string;
  timeframe?: string;
};

type InvestmentItem = {
  name: string;
  price: string;
  summary: string;
  bullets: string[];
  tone?: 'featured';
};

type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  company: string;
  context: string;
  /** Star rating for JSON-LD Review (default 5 in schema builder). */
  schemaRating?: number;
};

type FaqItem = {
  question: string;
  answer: string;
};

type HomeContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    servicesHub: string;
    servicesHubHref: string;
    servicesLabel: string;
    work: string;
    workHref: string;
    investment: string;
    investmentHref: string;
    faq: string;
    faqHref: string;
    blog: string;
    blogHref: string;
    contact: string;
    contactHref: string;
    primaryCta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    proof: string[];
    portraitLabel: string;
    portraitMeta: string[];
    availability: string;
  };
  trust: {
    label: string;
    items: string[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    items: PortfolioItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
    hubCta: string;
  };
  cases: {
    eyebrow: string;
    title: string;
    description: string;
    items: CaseStudyItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  investment: {
    eyebrow: string;
    title: string;
    description: string;
    cards: InvestmentItem[];
    note: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    responseLabel: string;
    responseText: string;
    formTitle: string;
    optionalFields: string;
  };
  footer: {
    summary: string;
    serviceLinks: LinkItem[];
    resourceLinks: LinkItem[];
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

export const siteContent: Record<Locale, HomeContent> = {
  es: {
    meta: {
      title: 'Desarrollador web freelance Barcelona | Landing pages y MVPs | Ignacio Amat',
      description:
        'Desarrollador web freelance Barcelona: landing pages, webs de empresa y MVPs con SEO técnico, rendimiento y conversión. Remoto en España e internacional.',
    },
    nav: {
      servicesHub: 'Servicios',
      servicesHubHref: '/servicios',
      servicesLabel: 'Servicios',
      work: 'Trabajos',
      workHref: '#proyectos',
      investment: 'Precios',
      investmentHref: '#inversion',
      faq: 'FAQ',
      faqHref: '#faq',
      blog: 'Blog',
      blogHref: '/blog',
      contact: 'Contacto',
      contactHref: '#contacto',
      primaryCta: 'Solicitar propuesta',
    },
    hero: {
      eyebrow: 'Desarrollo web freelance para empresas y equipos que necesitan vender mejor o lanzar antes',
      title: 'Creo webs, landing pages y MVPs que hacen más fácil entender tu oferta y dar el siguiente paso.',
      subtitle:
        'Trabajo con empresas de servicios, startups y equipos que necesitan una web de negocio, una landing page o un producto inicial con criterio comercial, base técnica sólida y ejecución directa.',
      primaryCta: 'Solicitar propuesta',
      secondaryCta: 'Ver servicios',
      primaryHref: '#contacto',
      secondaryHref: '/servicios',
      proof: [
        'Presupuesto orientativo desde 800 EUR',
        'Respuesta habitual en 24h laborables',
        'Trabajo directo contigo, sin intermediarios',
      ],
      portraitLabel: 'Ignacio Amat',
      portraitMeta: ['Webs de negocio, landing pages y MVPs', 'Remoto desde España · ES/EN', 'SEO técnico, rendimiento y conversión'],
      availability: 'Empresas de servicios, startups y productos B2B',
    },
    trust: {
      label: 'Qué suele valorar un cliente antes de contratar este servicio',
      items: [
        'Alcance y entregables claros antes de empezar',
        'Contacto directo con quien diseña y desarrolla',
        'Base técnica pensada para SEO, rendimiento y evolución',
        'Trabajo remoto con facturación oficial en España',
      ],
    },
    portfolio: {
      eyebrow: 'Tipos de proyecto',
      title: 'Ejemplos del tipo de webs y productos que suelo desarrollar.',
      description:
        'Más allá de la captura, lo importante es el enfoque: qué problema resuelve cada proyecto, qué stack encaja y qué objetivo de negocio persigue.',
      items: [
        {
          name: 'Landing page para captar leads B2B',
          category: 'Landing page',
          summary: 'Página pensada para aclarar la oferta, filtrar mejor el interés y llevar al usuario a una consulta o propuesta.',
          stack: ['Astro', 'Tailwind CSS', 'Form flow', 'SEO on-page'],
          outcome: 'Convertir tráfico de campaña o de búsqueda en conversaciones cualificadas.',
          detail: 'Suele incluir propuesta clara, prueba de confianza, formulario corto y seguimiento básico de conversión.',
          primaryLink: { label: 'Ver servicio de landing pages', href: '/crear-landing-page-profesional' },
          secondaryLink: { label: 'Ir al contacto', href: '#contacto' },
          visual: {
            eyebrow: 'Lead generation',
            headline: 'Oferta clara, prueba de confianza y CTA visible',
            caption: 'Landing enfocada en una sola acción principal',
            metrics: ['Copy orientado a conversion', 'CTA jerarquizado', 'Diseno responsive'],
            imageSrc: '/images/portfolio/Project1.png',
            imageAlt: 'Vista de una landing page orientada a captación de leads',
          },
        },
        {
          name: 'Web de negocio para empresa de servicios',
          category: 'Web de negocio',
          summary: 'Arquitectura pensada para explicar mejor servicios, generar confianza y hacer más fácil la evaluación inicial.',
          stack: ['Astro', 'CMS-ready', 'Structured data', 'Performance'],
          outcome: 'Mejor primera impresión y menos fricción antes del contacto.',
          detail: 'Suele incluir arquitectura de servicios, bloques de confianza, preguntas frecuentes y contacto visible.',
          primaryLink: { label: 'Ver redisenos y mejoras', href: '/rediseno-web-mejoras' },
          secondaryLink: { label: 'Ver servicios', href: '/servicios' },
          visual: {
            eyebrow: 'Business website',
            headline: 'Servicios visibles, mensajes claros y estructura modular',
            caption: 'Web pensada para explicar mejor una oferta compleja',
            metrics: ['Navegacion ampliada', 'Capas de confianza', 'Base SEO reutilizable'],
            imageSrc: '/images/portfolio/Project2.png',
            imageAlt: 'Vista de una web corporativa para empresa de servicios',
          },
        },
        {
          name: 'MVP o app web con Laravel',
          category: 'Producto digital',
          summary: 'Base para paneles internos, SaaS sencillos o MVPs que necesitan lógica de negocio y una primera versión útil.',
          stack: ['Laravel', 'React', 'APIs', 'Auth'],
          outcome: 'Lanzar una primera versión funcional sin sobreconstruir desde el inicio.',
          detail: 'Suele incluir autenticación, panel interno, integraciones y una base clara para iterar por fases.',
          primaryLink: { label: 'Ver desarrollo SaaS y MVP', href: '/desarrollo-aplicacion-web-saas' },
          secondaryLink: { label: 'Ver desarrollo Laravel', href: '/desarrollador-laravel-freelance' },
          visual: {
            eyebrow: 'MVP build',
            headline: 'Dashboard, autenticación y operaciones clave',
            caption: 'Producto inicial pensado para validar y seguir creciendo',
            metrics: ['Arquitectura escalable', 'Panel interno', 'Integraciones'],
            imageSrc: '/images/portfolio/Project3.png',
            imageAlt: 'Vista de un dashboard para un producto web o MVP',
          },
        },
      ],
    },
    services: {
      eyebrow: 'Servicios principales',
      title: 'Servicios pensados para captar mejor, vender con más claridad o arreglar una base digital que ya no acompaña al negocio.',
      description:
        'La oferta está organizada para que un visitante entienda rápido si necesita una landing, una web de negocio, un rediseño, soporte continuo o desarrollo a medida.',
      items: [
        {
          name: 'Landing pages',
          summary: 'Paginas enfocadas en campanas, captacion y propuestas con una sola accion principal.',
          bulletA: 'Copy, estructura y CTA con intencion comercial',
          bulletB: 'Rapidas, ligeras y faciles de medir',
          href: '/crear-landing-page-profesional',
        },
        {
          name: 'Webs de empresa',
          summary: 'Sitios profesionales que explican mejor tu oferta y generan una percepcion mas solida.',
          bulletA: 'Arquitectura de contenido y mensajes mas claros',
          bulletB: 'Base SEO y rendimiento desde el inicio',
          href: '/diseno-web-empresas',
        },
        {
          name: 'Laravel y desarrollo a medida',
          summary: 'Backends, paneles, integraciones y productos con logica real de negocio.',
          bulletA: 'Laravel para procesos, paneles y APIs',
          bulletB: 'Codigo mantenible y sin complejidad gratuita',
          href: '/desarrollador-laravel-freelance',
        },
        {
          name: 'Redisenos y mejoras',
          summary: 'Cuando ya existe una web pero no transmite, no convierte o no esta bien resuelta.',
          bulletA: 'Replanteo de estructura, mensajes y visual',
          bulletB: 'Mejoras medibles sin rehacer todo a ciegas',
          href: '/rediseno-web-mejoras',
        },
        {
          name: 'Mantenimiento y soporte',
          summary: 'Seguimiento tecnico para que la web no se quede abandonada despues del lanzamiento.',
          bulletA: 'Cambios, correcciones y evolutivos',
          bulletB: 'Ideal para equipos sin perfil tecnico interno',
          href: '/mantenimiento-web',
        },
        {
          name: 'MVPs y apps web',
          summary: 'Para equipos que necesitan lanzar algo real y validarlo rapido, sin sobreconstruir.',
          bulletA: 'Definicion del alcance minimo util',
          bulletB: 'Entrega orientada a negocio y siguiente iteracion',
          href: '/desarrollo-aplicacion-web-saas',
        },
      ],
      hubCta: 'Ver todos los servicios',
    },
    cases: {
      eyebrow: 'Cómo se traduce en valor',
      title: 'Situaciones habituales en las que una web necesita mejorar de verdad.',
      description: 'Sin promesas milagro: el foco está en mejorar claridad, confianza, velocidad de salida y calidad del contacto.',
      items: [
        {
          client: 'Empresa de servicios con oferta dispersa',
          challenge: 'Tenia trafico y referrals, pero la web no explicaba bien que vendia ni daba confianza.',
          solution: 'Reordenar la narrativa, visibilizar servicios y simplificar el CTA principal.',
          result: 'Mas claridad comercial y menos friccion para iniciar contacto.',
          metricLabel: 'Solicitudes cualificadas',
          metricValue: '+38% en 90 dias',
          timeframe: 'Tras lanzamiento',
        },
        {
          client: 'Startup que necesitaba validar un MVP',
          challenge: 'No hacia falta una plataforma enorme; hacia falta lanzar rapido algo util.',
          solution: 'Definir alcance minimo, construir modulos clave y dejar preparada la base para evolucion.',
          result: 'Salida al mercado mas rapida y mejor aprendizaje del producto.',
          metricLabel: 'Tiempo al primer lead',
          metricValue: '11 dias',
          timeframe: 'Desde kickoff',
        },
        {
          client: 'Negocio con web antigua y poco convincente',
          challenge: 'La primera impresion parecia plantilla y no reflejaba el nivel real del servicio.',
          solution: 'Redisenar jerarquia visual, secciones de prueba y capa de confianza.',
          result: 'Percepcion mas premium y discurso comercial mucho mas solido.',
          metricLabel: 'Tiempo en pagina servicios',
          metricValue: '+24%',
          timeframe: 'Primer mes',
        },
      ],
    },
    process: {
      eyebrow: 'Proceso',
      title: 'Una forma de trabajar pensada para reducir incertidumbre y avanzar sin caos.',
      description: 'No se trata solo de diseñar o programar bien. Se trata de alinear negocio, alcance, contenido y ejecución.',
      steps: [
        {
          title: 'Descubrimiento y enfoque',
          description: 'Aterrizamos objetivo, tipo de usuario, alcance y prioridad real del proyecto.',
        },
        {
          title: 'Estructura y propuesta',
          description: 'Defino arquitectura, mensajes clave, referencias visuales y entregables.',
        },
        {
          title: 'Diseno y desarrollo',
          description: 'Construyo la experiencia con foco en claridad, rendimiento y mantenimiento futuro.',
        },
        {
          title: 'Lanzamiento y siguientes pasos',
          description: 'Publicacion, ajustes finales y plan de mejora para no dejar la web congelada.',
        },
      ],
    },
    investment: {
      eyebrow: 'Inversión',
      title: 'Rangos orientativos para tomar una decisión con más contexto.',
      description:
        'La idea es ordenar expectativas, no encajar todos los proyectos en una tarifa fija. El precio final depende del alcance, el contenido, las integraciones y la complejidad real.',
      cards: [
        {
          name: 'Landing page',
          price: 'Desde 800 EUR',
          summary: 'Para lanzar una oferta, un servicio o una campana con una sola conversion principal.',
          bullets: ['Copy y estructura enfocados en conversion', 'Diseno responsive y formulario', 'Base SEO y rendimiento'],
        },
        {
          name: 'Web de empresa',
          price: 'Habitual 1.800 a 4.000 EUR',
          summary: 'Cuando necesitas presentar mejor la marca, servicios, equipo y prueba de confianza.',
          bullets: ['Arquitectura de contenido', 'Bloques de servicios y captacion', 'Preparada para crecer'],
          tone: 'featured',
        },
        {
          name: 'Laravel / MVP / app web',
          price: 'Presupuesto a medida',
          summary: 'Para paneles, productos internos, integraciones o software con logica especifica.',
          bullets: ['Definicion de alcance por fases', 'Backend, auth y modulos clave', 'Base mantenible para iterar'],
        },
        {
          name: 'Mantenimiento',
          price: 'Mensual',
          summary: 'Ideal si necesitas soporte continuo, mejoras y evolucion sin montar equipo propio.',
          bullets: ['Soporte tecnico y cambios', 'Correcciones priorizadas', 'Bolsa mensual o retainer'],
        },
      ],
      note:
        'Si el proyecto todavía está verde, primero conviene definir alcance y prioridades. Es mejor eso que poner precio sobre una idea todavía difusa.',
    },
    testimonials: {
      eyebrow: 'Forma de trabajar',
      title: 'Lo que debería notar tu equipo al trabajar conmigo.',
      description:
        'Si el proyecto encaja, estas son las ventajas prácticas que más suelen importar: claridad, rapidez para decidir y una base fácil de mantener.',
      items: [
        {
          quote:
            'Hablas conmigo desde el principio, definimos alcance y priorizamos lo importante sin pasar por varias capas de gestion.',
          name: 'Contacto directo',
          role: 'Menos ruido al empezar',
          company: '',
          context: 'Util cuando necesitas contexto técnico y comercial en la misma conversación.',
          schemaRating: 5,
        },
        {
          quote:
            'Antes de construir, dejo claro qué se entrega, qué problema se quiere resolver y qué no compensa complicar todavía.',
          name: 'Alcance claro',
          role: 'Menos incertidumbre',
          company: '',
          context: 'Especialmente útil en landings, rediseños y primeras fases de producto.',
          schemaRating: 5,
        },
        {
          quote:
            'La base se plantea para medir, corregir y seguir mejorando sin rehacer todo en la siguiente iteracion.',
          name: 'Base mantenible',
          role: 'Pensada para evolucionar',
          company: '',
          context: 'Enfocada en SEO técnico, rendimiento, formularios e integraciones útiles.',
          schemaRating: 5,
        },
        {
          quote:
            'En pocas semanas pasamos de una web que no explicaba la oferta a una landing clara: formularios en orden y reuniones con mejor contexto desde el primer email.',
          name: 'Laura M.',
          role: 'Marketing',
          company: 'Servicios B2B',
          context: 'Rediseno de landing y flujo de contacto.',
          schemaRating: 5,
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Las dudas que más suelen frenar el contacto, respondidas sin rodeos.',
      description: 'Aquí están las objeciones más habituales: tiempos, precios, rediseños, trabajo remoto y mantenimiento.',
      items: [
        {
          question: 'Cuanto tarda normalmente un proyecto?',
          answer:
            'Una landing sencilla puede salir en pocos dias. Una web de empresa suele moverse entre 2 y 6 semanas. Un MVP o proyecto Laravel depende del alcance y se plantea por fases.',
        },
        {
          question: 'Trabajas solo con empresas de España?',
          answer:
            'No. Trabajo en remoto con clientes de España y con equipos internacionales. Si el proyecto encaja, puedo colaborar en español o en inglés.',
        },
        {
          question: 'Puedes mejorar una web ya existente?',
          answer:
            'Si. De hecho, muchas veces el mejor paso no es rehacer todo, sino corregir estructura, copy, diseno, velocidad o friccion de contacto.',
        },
        {
          question: 'Que necesito para pedir una propuesta?',
          answer:
            'Con saber que quieres conseguir, a quien va dirigido y si partes de algo ya existente, suele ser suficiente para una primera propuesta util.',
        },
        {
          question: 'Haces tambien mantenimiento?',
          answer:
            'Si. Puedo seguir despues del lanzamiento con mejoras, soporte, evolutivos o una bolsa de horas mensual.',
        },
        {
          question: 'Que pasa si aun no tengo claro el alcance?',
          answer:
            'No pasa nada. Podemos empezar por una fase corta de definicion para ordenar objetivos, contenido y siguiente paso realista.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Cuéntame el proyecto y te diré cuál es el siguiente paso con más sentido.',
      description:
        'Si veo encaje, respondo con una primera orientación, preguntas si hacen falta y una propuesta inicial para avanzar sin perder tiempo.',
      emailLabel: 'Email directo',
      responseLabel: 'Tiempo de respuesta',
      responseText: 'Normalmente respondo en 24h laborables con una primera orientación útil.',
      formTitle: 'Cuentame lo esencial',
      optionalFields: 'Campos opcionales',
    },
    footer: {
      summary:
        'Desarrollo web freelance para webs de negocio, rediseños, Laravel y producto digital con foco en claridad comercial, rendimiento y contacto cualificado.',
      serviceLinks: [
        { label: 'Servicios', href: '/servicios' },
        { label: 'Landing pages', href: '/crear-landing-page-profesional' },
        { label: 'Laravel freelance', href: '/desarrollador-laravel-freelance' },
        { label: 'Rediseño web', href: '/rediseno-web-mejoras' },
      ],
      resourceLinks: [
        { label: 'Desarrollador web Barcelona', href: '/desarrollador-web-barcelona' },
        { label: 'Guia de precios', href: '/cuanto-cuesta-pagina-web' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contacto', href: '/contact' },
      ],
    },
    servicesPage: {
      eyebrow: 'Servicios',
      title: 'Servicios de desarrollo web para empresas que necesitan vender mejor, lanzar antes o corregir una web que ya no está haciendo su trabajo.',
      description:
        'Este hub reúne las líneas principales de trabajo para que la oferta sea fácil de entender desde el menú, desde SEO y desde cualquier entrada con intención comercial.',
      ctaPrimary: 'Solicitar propuesta',
      ctaSecondary: 'Ver tipos de proyecto',
    },
  },
  en: {
    meta: {
      title: 'Freelance Web Developer Barcelona | Landing Pages & MVPs | Ignacio Amat',
      description:
        'Freelance web developer Barcelona: landing pages, business websites and MVPs with technical SEO, performance and conversion. Remote across Spain and internationally.',
    },
    nav: {
      servicesHub: 'Services',
      servicesHubHref: '/en/services',
      servicesLabel: 'Services',
      work: 'Work',
      workHref: '#proyectos',
      investment: 'Pricing',
      investmentHref: '#inversion',
      faq: 'FAQ',
      faqHref: '#faq',
      blog: 'Blog',
      blogHref: '/en/blog',
      contact: 'Contact',
      contactHref: '#contacto',
      primaryCta: 'Request a proposal',
    },
    hero: {
      eyebrow: 'Freelance web development for companies and teams that need to sell more clearly or launch sooner',
      title: 'I build websites, landing pages and MVPs that make the offer easier to understand and the next step easier to take.',
      subtitle:
        'I work with service companies, startups and product teams that need a business website, a focused landing page or an initial product with commercial clarity, strong technical foundations and direct execution.',
      primaryCta: 'Request a proposal',
      secondaryCta: 'See services',
      primaryHref: '#contacto',
      secondaryHref: '/en/services',
      proof: [
        'Indicative budgets from EUR 800',
        'Typical reply within 24 business hours',
        'Direct collaboration, no middlemen',
      ],
      portraitLabel: 'Ignacio Amat',
      portraitMeta: ['Business websites, landing pages and MVPs', 'Remote from Spain · ES/EN', 'Technical SEO, performance and conversion'],
      availability: 'Service companies, startups and B2B products',
    },
    trust: {
      label: 'What a good-fit client usually wants before hiring',
      items: [
        'Clear scope and deliverables before build work starts',
        'Direct contact with the person who designs and builds',
        'A technical base ready for SEO, performance and iteration',
        'Remote delivery with official invoicing from Spain',
      ],
    },
    portfolio: {
      eyebrow: 'Project types',
      title: 'Examples of the kind of websites and products I usually build.',
      description:
        'Beyond the screenshot, the important part is the approach: what problem each project solves, what stack fits and what business goal it supports.',
      items: [
        {
          name: 'Landing page for B2B lead generation',
          category: 'Landing page',
          summary: 'A focused page built to clarify the offer, filter intent and move visitors toward one strong next step.',
          stack: ['Astro', 'Tailwind CSS', 'Form flow', 'On-page SEO'],
          outcome: 'Turn campaign or search traffic into qualified conversations.',
          detail: 'Usually includes a clear offer, trust-building sections, a short form and basic conversion tracking.',
          primaryLink: { label: 'See landing page service', href: '/en/professional-landing-page-development' },
          secondaryLink: { label: 'Go to contact', href: '#contacto' },
          visual: {
            eyebrow: 'Lead generation',
            headline: 'Clear offer, trust layer and visible CTA',
            caption: 'Landing page shaped around one primary action',
            metrics: ['Conversion-led copy', 'Stronger CTA hierarchy', 'Responsive layout'],
            imageSrc: '/images/portfolio/Project1.png',
            imageAlt: 'View of a landing page focused on lead generation',
          },
        },
        {
          name: 'Business website for a service company',
          category: 'Business website',
          summary: 'Information architecture built to explain services better, build trust faster and improve first evaluation.',
          stack: ['Astro', 'CMS-ready', 'Structured data', 'Performance'],
          outcome: 'A stronger first impression and less friction before contact.',
          detail: 'Usually includes service architecture, trust sections, FAQs and a more visible contact path.',
          primaryLink: { label: 'See redesign service', href: '/en/website-redesign-improvements' },
          secondaryLink: { label: 'See all services', href: '/en/services' },
          visual: {
            eyebrow: 'Business website',
            headline: 'Visible services, clearer messaging and modular sections',
            caption: 'Business website designed for a more complex offer',
            metrics: ['Expanded navigation', 'Trust sections', 'Reusable SEO base'],
            imageSrc: '/images/portfolio/Project2.png',
            imageAlt: 'View of a business website for a service company',
          },
        },
        {
          name: 'Laravel-based MVP or web app',
          category: 'Digital product',
          summary: 'A practical base for dashboards, internal tools or MVPs that need actual business logic and a useful first release.',
          stack: ['Laravel', 'React', 'APIs', 'Auth'],
          outcome: 'Launch a useful first version without overbuilding from day one.',
          detail: 'Usually includes auth, an internal panel, key integrations and a phased base for future iterations.',
          primaryLink: { label: 'See SaaS and MVP development', href: '/en/web-application-saas-development' },
          secondaryLink: { label: 'See Laravel development', href: '/en/freelance-laravel-developer' },
          visual: {
            eyebrow: 'MVP build',
            headline: 'Dashboard, auth and core operations',
            caption: 'Initial product built to validate and improve',
            metrics: ['Scalable foundation', 'Internal tooling', 'Integrations'],
            imageSrc: '/images/portfolio/Project3.png',
            imageAlt: 'View of a dashboard for an MVP or internal tool',
          },
        },
      ],
    },
    services: {
      eyebrow: 'Core services',
      title: 'Services built to help companies capture demand, sell more clearly or fix a digital setup that is no longer doing its job.',
      description:
        'The offer is organized so visitors can quickly tell whether they need a landing page, a business website, a redesign, ongoing support or product development.',
      items: [
        {
          name: 'Landing pages',
          summary: 'Pages built for campaigns, lead capture and offers with one primary action.',
          bulletA: 'Copy, structure and CTA shaped around conversion',
          bulletB: 'Fast, lightweight and easy to measure',
          href: '/en/professional-landing-page-development',
        },
        {
          name: 'Business websites',
          summary: 'Professional sites that explain the offer better and make the company look more credible.',
          bulletA: 'Clearer messaging and content structure',
          bulletB: 'SEO and performance built in from the start',
          href: '/en/web-design-businesses',
        },
        {
          name: 'Laravel and custom development',
          summary: 'Backends, dashboards, integrations and products with actual business logic.',
          bulletA: 'Laravel for workflows, panels and APIs',
          bulletB: 'Maintainable code without unnecessary complexity',
          href: '/en/freelance-laravel-developer',
        },
        {
          name: 'Redesigns and improvements',
          summary: 'When a site already exists but does not convert, does not inspire trust or feels outdated.',
          bulletA: 'Rework structure, messaging and visual hierarchy',
          bulletB: 'Targeted improvements without rebuilding blindly',
          href: '/en/website-redesign-improvements',
        },
        {
          name: 'Maintenance and support',
          summary: 'Technical follow-through so the site keeps improving after launch.',
          bulletA: 'Fixes, updates and iterative improvements',
          bulletB: 'Useful when the team has no in-house technical owner',
          href: '/en/website-maintenance',
        },
        {
          name: 'MVPs and web apps',
          summary: 'For teams that need to launch something real quickly without overbuilding.',
          bulletA: 'Define the smallest version worth shipping',
          bulletB: 'Delivery aimed at business learning and next iteration',
          href: '/en/web-application-saas-development',
        },
      ],
      hubCta: 'See all services',
    },
    cases: {
      eyebrow: 'How this creates value',
      title: 'Typical situations where a website genuinely needs to improve.',
      description: 'No inflated promises. The focus is on clarity, trust, launch speed and the quality of the leads that come through.',
      items: [
        {
          client: 'Service company with a scattered offer',
          challenge: 'They had traffic and referrals, but the website did not explain the offer or build trust well.',
          solution: 'Rework the narrative, surface services and simplify the primary CTA path.',
          result: 'Stronger commercial clarity and less friction before first contact.',
          metricLabel: 'Qualified enquiries',
          metricValue: '+38% in 90 days',
          timeframe: 'Post-launch',
        },
        {
          client: 'Startup that needed an MVP',
          challenge: 'They did not need a massive platform. They needed a useful first version quickly.',
          solution: 'Define the minimum scope, build the core modules and leave a sound base for iteration.',
          result: 'Faster launch and better product learning.',
          metricLabel: 'Time to first lead',
          metricValue: '11 days',
          timeframe: 'From kickoff',
        },
        {
          client: 'Business with an outdated website',
          challenge: 'The first impression felt templated and weaker than the actual service quality.',
          solution: 'Redesign visual hierarchy, proof sections and trust-building layers.',
          result: 'More premium perception and a much stronger sales narrative.',
          metricLabel: 'Time on service pages',
          metricValue: '+24%',
          timeframe: 'First month',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'A way of working designed to reduce uncertainty and avoid project chaos.',
      description: 'Good design is only part of it. Business goals, scope, content and implementation need to align.',
      steps: [
        {
          title: 'Discovery and direction',
          description: 'We clarify the goal, audience, current state and what actually matters first.',
        },
        {
          title: 'Structure and proposal',
          description: 'I define architecture, key messaging, design direction and concrete deliverables.',
        },
        {
          title: 'Design and build',
          description: 'The experience is developed with clarity, performance and future maintenance in mind.',
        },
        {
          title: 'Launch and next iteration',
          description: 'Publishing, polishing and deciding what the next meaningful improvement should be.',
        },
      ],
    },
    investment: {
      eyebrow: 'Investment',
      title: 'Indicative ranges that help frame the work with more context.',
      description:
        'The goal is to set expectations honestly, not squeeze every project into a fixed box. Final pricing depends on scope, content, integrations and actual complexity.',
      cards: [
        {
          name: 'Landing page',
          price: 'Starting from EUR 800',
          summary: 'For launching an offer, service or campaign around one primary conversion goal.',
          bullets: ['Conversion-focused structure and copy', 'Responsive design and form flow', 'SEO and performance baseline'],
        },
        {
          name: 'Business website',
          price: 'Typical range EUR 1,800 to 4,000',
          summary: 'When the company needs to present itself better, explain services and build trust faster.',
          bullets: ['Content architecture', 'Service and lead-gen sections', 'Designed to grow over time'],
          tone: 'featured',
        },
        {
          name: 'Laravel / MVP / web app',
          price: 'Custom scoped quote',
          summary: 'For dashboards, internal tools, integrations or software with specific business rules.',
          bullets: ['Phased scoping', 'Backend, auth and core modules', 'Maintainable base for iteration'],
        },
        {
          name: 'Maintenance',
          price: 'Monthly',
          summary: 'Best when you need steady support, improvements and technical follow-through without hiring in-house.',
          bullets: ['Support and technical changes', 'Prioritized fixes', 'Monthly retainer or hour block'],
        },
      ],
      note:
        'If the brief is still fuzzy, the right first step is to define scope and priorities properly. That is better than pretending certainty where there is none.',
    },
    testimonials: {
      eyebrow: 'Working together',
      title: 'What your team should notice when the project is a good fit.',
      description:
        'If the project is a fit, these are usually the practical benefits that matter most: clarity, faster decisions and a base that is easy to maintain.',
      items: [
        {
          quote:
            'You work directly with me from the start, so scope, priorities and execution stay in the same conversation instead of being split across layers.',
          name: 'Direct contact',
          role: 'Less noise at the start',
          company: '',
          context: 'Useful when you need commercial and technical context in the same discussion.',
          schemaRating: 5,
        },
        {
          quote:
            'Before building, I make the deliverables, the objective and the sensible level of complexity clear so the project can move with less uncertainty.',
          name: 'Clear scope',
          role: 'Less uncertainty',
          company: '',
          context: 'Especially valuable for landing pages, redesigns and early product phases.',
          schemaRating: 5,
        },
        {
          quote:
            'The base is built to be measured, improved and extended later without having to rebuild everything in the next iteration.',
          name: 'Maintainable base',
          role: 'Designed to evolve',
          company: '',
          context: 'Focused on technical SEO, performance, forms and useful integrations.',
          schemaRating: 5,
        },
        {
          quote:
            'Within a few weeks we moved from a site that did not explain the offer to a clear landing page: forms in order and meetings with better context from the first email.',
          name: 'Laura M.',
          role: 'Marketing',
          company: 'B2B services',
          context: 'Landing redesign and contact flow.',
          schemaRating: 5,
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'The questions that most often block contact, answered directly.',
      description: 'These are the usual objections: timing, pricing, redesigns, remote work and maintenance.',
      items: [
        {
          question: 'How long does a project usually take?',
          answer:
            'A focused landing page can move quickly. A business website often takes 2 to 6 weeks. A Laravel project or MVP depends on scope and is normally planned in phases.',
        },
        {
          question: 'Do you only work with companies in Spain?',
          answer:
            'No. I work remotely with companies in Spain and international teams. If the project is a fit, I can work in English or Spanish.',
        },
        {
          question: 'Can you improve an existing website?',
          answer:
            'Yes. Many projects benefit more from fixing structure, messaging, design, speed or contact friction than from rebuilding everything from scratch.',
        },
        {
          question: 'What do you need in order to send a proposal?',
          answer:
            'Usually the goal, the audience and whether you already have something live is enough for a useful first proposal.',
        },
        {
          question: 'Do you offer maintenance as well?',
          answer:
            'Yes. I can stay involved after launch for improvements, support, iterative work or a monthly hour block.',
        },
        {
          question: 'What if I am still unsure about scope?',
          answer:
            'That is fine. We can start with a short definition phase to clarify goals, content and the most realistic next step.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell me about the project and I will tell you the most sensible next step.',
      description:
        'If there is a fit, I reply with an initial direction, clarifying questions when needed and a practical proposal outline so you can decide quickly.',
      emailLabel: 'Direct email',
      responseLabel: 'Response time',
      responseText: 'I usually reply within 24 business hours with a useful first direction.',
      formTitle: 'Share the essentials',
      optionalFields: 'Optional details',
    },
    footer: {
      summary:
        'Freelance developer for business websites, redesigns, Laravel and product work with a strong focus on commercial clarity, performance and qualified enquiries.',
      serviceLinks: [
        { label: 'Services', href: '/en/services' },
        { label: 'Landing pages', href: '/en/professional-landing-page-development' },
        { label: 'Laravel developer', href: '/en/freelance-laravel-developer' },
        { label: 'Website redesign', href: '/en/website-redesign-improvements' },
      ],
      resourceLinks: [
        { label: 'Web developer Barcelona', href: '/en/web-developer-barcelona' },
        { label: 'Pricing guide', href: '/en/how-much-does-website-cost' },
        { label: 'Blog', href: '/en/blog' },
        { label: 'Contact', href: '/en/contact' },
      ],
    },
    servicesPage: {
      eyebrow: 'Services',
      title: 'Web development services for companies that need to sell more clearly, launch faster or fix a site that is no longer doing its job.',
      description:
        'This hub keeps the offer easy to understand from navigation, SEO and service discovery instead of hiding the most valuable pages deep in the site.',
      ctaPrimary: 'Request a proposal',
      ctaSecondary: 'See project types',
    },
  },
};
