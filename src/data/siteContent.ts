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
      title: 'Desarrollador web freelance para webs, redisenos y MVPs | Ignacio Amat',
      description:
        'Desarrollo landing pages, webs de negocio, productos Laravel y redisenos centrados en conversion, rendimiento y confianza.',
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
      eyebrow: 'Servicio de desarrollo web · Disponible para nuevos proyectos',
      title: 'Webs y productos digitales que explican mejor tu oferta y reducen friccion al convertir.',
      subtitle:
        'Diseno y desarrollo landing pages, webs de empresa, redisenos, productos Laravel y MVPs con criterio comercial, base tecnica solida y una ejecucion directa de principio a fin.',
      primaryCta: 'Cuentame tu proyecto',
      secondaryCta: 'Ver trabajos seleccionados',
      primaryHref: '#contacto',
      secondaryHref: '#proyectos',
      proof: [
        'Landing pages y webs de empresa',
        'Entrega en semanas, no en meses',
        'Colaboracion directa, sin intermediarios',
      ],
      portraitLabel: 'Ignacio Amat',
      portraitMeta: ['Desarrollo web para negocios', 'Remoto · Espana e internacional', '5+ anos de experiencia'],
      availability: 'Webs de empresa, landing pages y MVPs',
    },
    trust: {
      label: 'Por que empresas y startups eligen este servicio',
      items: [
        'Propuesta clara y alcance definido antes de empezar',
        'Entrega remota para Espana y clientes internacionales',
        'Base tecnica orientada a SEO, rendimiento y conversion',
        'Comunicacion directa y facturacion oficial en Espana',
      ],
    },
    portfolio: {
      eyebrow: 'Trabajo seleccionado',
      title: 'Trabajo seleccionado con foco en estructura, mensaje y decision comercial.',
      description:
        'La seccion esta preparada para mostrar capturas, enlaces y casos reales sin recurrir a etiquetas vagas. Mientras tanto, ya deja claro el tipo de proyecto, el stack y el objetivo de negocio.',
      items: [
        {
          name: 'Landing de captacion para servicio B2B',
          category: 'Landing page',
          summary: 'Pagina enfocada en reducir friccion, ordenar la oferta y llevar al usuario a una consulta.',
          stack: ['Astro', 'Tailwind CSS', 'Form flow', 'SEO on-page'],
          outcome: 'Mas claridad comercial y menos friccion para pedir una reunion o una propuesta.',
          detail: 'Preparada para anadir captura final, enlace en vivo y resultado real cuando esos activos esten listos.',
          primaryLink: { label: 'Ver servicio de landing pages', href: '/crear-landing-page-profesional' },
          secondaryLink: { label: 'Ir al contacto', href: '#contacto' },
          visual: {
            eyebrow: 'Lead generation',
            headline: 'Oferta clara + CTA principal + prueba de confianza',
            caption: 'Espacio listo para screenshot real',
            metrics: ['Copy orientado a conversion', 'CTA jerarquizado', 'Diseno responsive'],
            imageSrc: '/images/portfolio/Project1.png',
            imageAlt: 'Mockup editorial de una landing page orientada a captacion',
          },
        },
        {
          name: 'Web corporativa para empresa de servicios',
          category: 'Web de negocio',
          summary: 'Arquitectura pensada para vender mejor servicios, facilitar descubrimiento y dar mas credibilidad.',
          stack: ['Astro', 'CMS-ready', 'Structured data', 'Performance'],
          outcome: 'Una presencia mas creible para explicar servicios y facilitar la evaluacion inicial.',
          detail: 'Lista para incorporar captura final, URL publica y un caso breve cuando se puedan mostrar.',
          primaryLink: { label: 'Ver redisenos y mejoras', href: '/rediseno-web-mejoras' },
          secondaryLink: { label: 'Ver servicios', href: '/servicios' },
          visual: {
            eyebrow: 'Business website',
            headline: 'Servicios visibles, mensajes mas claros y estructura modular',
            caption: 'Placeholder visual sustituible por mockup final',
            metrics: ['Navegacion ampliada', 'Capas de confianza', 'Base SEO reutilizable'],
            imageSrc: '/images/portfolio/Project2.png',
            imageAlt: 'Mockup de una web corporativa para empresa de servicios',
          },
        },
        {
          name: 'Aplicacion web / MVP con Laravel',
          category: 'Producto digital',
          summary: 'Base para paneles internos, SaaS sencillos o MVPs que necesitan logica de negocio y evolucion.',
          stack: ['Laravel', 'React', 'APIs', 'Auth'],
          outcome: 'Una primera version util con base tecnica mantenible para seguir iterando.',
          detail: 'Pensada para sumar capturas de producto, modulos clave y un caso de uso real en cuanto esten disponibles.',
          primaryLink: { label: 'Ver desarrollo SaaS y MVP', href: '/desarrollo-aplicacion-web-saas' },
          secondaryLink: { label: 'Ver desarrollo Laravel', href: '/desarrollador-laravel-freelance' },
          visual: {
            eyebrow: 'MVP build',
            headline: 'Dashboard, autenticacion y operaciones clave',
            caption: 'Area para screenshot de producto real',
            metrics: ['Arquitectura escalable', 'Panel interno', 'Integraciones'],
            imageSrc: '/images/portfolio/Project3.png',
            imageAlt: 'Mockup de dashboard para un producto web o MVP',
          },
        },
      ],
    },
    services: {
      eyebrow: 'Servicios principales',
      title: 'Servicios pensados para captar, vender mejor o arreglar una base digital que ya no acompana al negocio.',
      description:
        'La oferta se presenta de forma mas visible y directa para que un visitante entienda rapido si necesita una landing, una web de empresa, un rediseno, soporte continuo o producto a medida.',
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
      eyebrow: 'Como se traduce en valor',
      title: 'Problemas recurrentes que suelo resolver en proyectos web y producto.',
      description: 'Sin inflar cifras: el foco esta en la mejora concreta que el cliente nota en claridad, confianza o capacidad de lanzamiento.',
      items: [
        {
          client: 'Empresa de servicios con oferta dispersa',
          challenge: 'Tenia trafico y referrals, pero la web no explicaba bien que vendia ni daba confianza.',
          solution: 'Reordenar la narrativa, visibilizar servicios y simplificar el CTA principal.',
          result: 'Mas claridad comercial y menos friccion para iniciar contacto.',
        },
        {
          client: 'Startup que necesitaba validar un MVP',
          challenge: 'No hacia falta una plataforma enorme; hacia falta lanzar rapido algo util.',
          solution: 'Definir alcance minimo, construir modulos clave y dejar preparada la base para evolucion.',
          result: 'Salida al mercado mas rapida y mejor aprendizaje del producto.',
        },
        {
          client: 'Negocio con web antigua y poco convincente',
          challenge: 'La primera impresion parecia plantilla y no reflejaba el nivel real del servicio.',
          solution: 'Redisenar jerarquia visual, secciones de prueba y capa de confianza.',
          result: 'Percepcion mas premium y discurso comercial mucho mas solido.',
        },
      ],
    },
    process: {
      eyebrow: 'Proceso',
      title: 'Trabajo pensado para reducir incertidumbre y avanzar sin caos.',
      description: 'No se trata solo de disenar bien. Se trata de alinear negocio, alcance, contenido y ejecucion.',
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
      eyebrow: 'Inversion',
      title: 'Rangos orientativos para tomar decisiones sin adivinar.',
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
        'Si el proyecto aun esta verde, primero conviene definir bien el alcance. Es mejor eso que poner un precio sobre una idea todavia difusa.',
    },
    testimonials: {
      eyebrow: 'Confianza',
      title: 'Referencias presentadas con mas contexto y menos tono de plantilla.',
      description:
        'La presentacion esta preparada para incorporar enlaces, perfiles o fuentes verificables sin caer en una capa visual que parezca inventada.',
      items: [
        {
          quote:
            'Entrego el proyecto en tiempo record y la nueva web se noto mucho mas clara y profesional desde el primer dia.',
          name: 'Maria Garcia',
          role: 'Directora de Marketing',
          company: 'TechSolutions Barcelona',
          context: 'Proyecto de captacion y reposicionamiento visual',
        },
        {
          quote:
            'La comunicacion fue directa y muy clara, y el resultado final reflejo exactamente lo que necesitabamos vender.',
          name: 'Carlos Rodriguez',
          role: 'CEO',
          company: 'Consultoria Empresarial',
          context: 'Web corporativa y ajuste del mensaje comercial',
        },
        {
          quote:
            'Nos ayudo a convertir una idea dispersa en una web mucho mas creible y util para el negocio.',
          name: 'Ana Fernandez',
          role: 'Fundadora',
          company: 'Startup Tech Poblenou',
          context: 'Validacion inicial y presencia digital',
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Las dudas que mas frenan el contacto, respondidas sin rodeos.',
      description: 'La nueva version prioriza objeciones reales: tiempos, precios, mantenimiento, remoto y trabajo internacional.',
      items: [
        {
          question: 'Cuanto tarda normalmente un proyecto?',
          answer:
            'Una landing sencilla puede salir en pocos dias. Una web de empresa suele moverse entre 2 y 6 semanas. Un MVP o proyecto Laravel depende del alcance y se plantea por fases.',
        },
        {
          question: 'Trabajas solo con empresas de Espana?',
          answer:
            'No. Trabajo en remoto con clientes de Espana y con equipos internacionales. La version en ingles se ha reescrito precisamente para soportar mejor ese contexto.',
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
      title: 'Si el proyecto encaja, el siguiente paso deberia ser claro.',
      description:
        'He reducido la friccion inicial: menos campos visibles, mejor contexto y una forma mas directa de pasar de la idea a una propuesta util.',
      emailLabel: 'Email directo',
      responseLabel: 'Tiempo de respuesta',
      responseText: 'Normalmente contesto en 24h laborables con una primera orientacion.',
      formTitle: 'Cuentame lo esencial',
      optionalFields: 'Campos opcionales',
    },
    footer: {
      summary:
        'Desarrollo web freelance para webs de negocio, redisenos, Laravel y producto digital con foco en claridad comercial, rendimiento y confianza.',
      serviceLinks: [
        { label: 'Servicios', href: '/servicios' },
        { label: 'Landing pages', href: '/crear-landing-page-profesional' },
        { label: 'Laravel freelance', href: '/desarrollador-laravel-freelance' },
        { label: 'Rediseno web', href: '/rediseno-web-mejoras' },
      ],
      resourceLinks: [
        { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
        { label: 'Guia de precios', href: '/cuanto-cuesta-pagina-web' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contacto', href: '/contact' },
      ],
    },
    servicesPage: {
      eyebrow: 'Servicios',
      title: 'Servicios de desarrollo web para empresas que necesitan vender mejor, lanzar antes o corregir una web que ya no responde como deberia.',
      description:
        'Este hub reune las lineas principales de trabajo para que la oferta sea visible desde el menu, desde SEO y desde cualquier punto de entrada con intencion comercial.',
      ctaPrimary: 'Solicitar propuesta',
      ctaSecondary: 'Ver trabajos seleccionados',
    },
  },
  en: {
    meta: {
      title: 'Freelance web developer for business websites, redesigns and MVPs | Ignacio Amat',
      description:
        'I build landing pages, business websites, Laravel products and redesigns focused on trust, performance and conversion.',
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
      eyebrow: 'Web development service · Open to new projects',
      title: 'Websites and digital products that explain the offer better and make conversion easier.',
      subtitle:
        'I design and build landing pages, business websites, Laravel products, redesigns and MVPs with commercial clarity, strong technical foundations and direct execution from start to launch.',
      primaryCta: 'Tell me about your project',
      secondaryCta: 'See selected work',
      primaryHref: '#contacto',
      secondaryHref: '#proyectos',
      proof: [
        'Landing pages and business websites',
        'Delivered in weeks, not months',
        'Direct collaboration, no middlemen',
      ],
      portraitLabel: 'Ignacio Amat',
      portraitMeta: ['Web development for businesses', 'Remote · Spain and international', '5+ years experience'],
      availability: 'Business websites, landing pages and MVPs',
    },
    trust: {
      label: 'Why companies and startups choose this service',
      items: [
        'Clear proposal and defined scope before any work begins',
        'Remote delivery for Spain and international clients',
        'SEO, performance and conversion built into the baseline',
        'Direct communication and official invoicing in Spain',
      ],
    },
    portfolio: {
      eyebrow: 'Selected work',
      title: 'Selected work focused on structure, messaging and commercial decision-making.',
      description:
        'The section is ready for real screenshots, links and case studies instead of vague labels. For now, it already shows the kind of project, stack and business goal behind each build.',
      items: [
        {
          name: 'Lead generation landing page for a B2B service',
          category: 'Landing page',
          summary: 'A focused page meant to cut friction, sharpen the offer and move users toward one high-intent action.',
          stack: ['Astro', 'Tailwind CSS', 'Form flow', 'On-page SEO'],
          outcome: 'Better commercial clarity and less friction before someone asks for a proposal or call.',
          detail: 'Ready for a final screenshot, live URL and stronger proof once those assets are available.',
          primaryLink: { label: 'See landing page service', href: '/en/professional-landing-page-development' },
          secondaryLink: { label: 'Go to contact', href: '#contacto' },
          visual: {
            eyebrow: 'Lead generation',
            headline: 'Clear offer + primary CTA + trust layer',
            caption: 'Drop-in area for a real screenshot',
            metrics: ['Conversion-led copy', 'Stronger CTA hierarchy', 'Responsive layout'],
            imageSrc: '/images/portfolio/Project1.png',
            imageAlt: 'Editorial mockup of a lead generation landing page',
          },
        },
        {
          name: 'Business website for a service company',
          category: 'Business website',
          summary: 'Information architecture built to explain the offer better, surface services and increase trust fast.',
          stack: ['Astro', 'CMS-ready', 'Structured data', 'Performance'],
          outcome: 'A more credible web presence that helps prospects understand and trust the offer faster.',
          detail: 'Prepared for a real screenshot, live URL and a short case-study summary.',
          primaryLink: { label: 'See redesign service', href: '/en/website-redesign-improvements' },
          secondaryLink: { label: 'See all services', href: '/en/services' },
          visual: {
            eyebrow: 'Business website',
            headline: 'Visible services, clearer messaging and modular sections',
            caption: 'Replaceable mockup placeholder',
            metrics: ['Expanded navigation', 'Trust sections', 'Reusable SEO base'],
            imageSrc: '/images/portfolio/Project2.png',
            imageAlt: 'Mockup of a service business website',
          },
        },
        {
          name: 'Laravel-based MVP or internal product',
          category: 'Digital product',
          summary: 'A practical base for dashboards, internal tools or MVPs that need real business logic.',
          stack: ['Laravel', 'React', 'APIs', 'Auth'],
          outcome: 'A useful first release with a maintainable base for future product iterations.',
          detail: 'Ready for dashboard captures, module highlights and a proper case-study link.',
          primaryLink: { label: 'See SaaS and MVP development', href: '/en/web-application-saas-development' },
          secondaryLink: { label: 'See Laravel development', href: '/en/freelance-laravel-developer' },
          visual: {
            eyebrow: 'MVP build',
            headline: 'Dashboard, auth and core operations',
            caption: 'Area reserved for a product screenshot',
            metrics: ['Scalable foundation', 'Internal tooling', 'Integrations'],
            imageSrc: '/images/portfolio/Project3.png',
            imageAlt: 'Mockup of a product dashboard for an MVP or internal tool',
          },
        },
      ],
    },
    services: {
      eyebrow: 'Core services',
      title: 'Services designed to help companies capture demand, sell more clearly or fix a digital setup that is no longer doing its job.',
      description:
        'The offer is surfaced more directly so visitors can tell quickly whether they need a landing page, a business website, a redesign, ongoing support or product development.',
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
      title: 'Common problems this type of work is meant to solve.',
      description: 'No inflated metrics. The emphasis is on the concrete improvement clients feel in clarity, trust or launch speed.',
      items: [
        {
          client: 'Service company with a scattered offer',
          challenge: 'They had traffic and referrals, but the website did not explain the offer or build trust well.',
          solution: 'Rework the narrative, surface services and simplify the primary CTA path.',
          result: 'Stronger commercial clarity and less friction before first contact.',
        },
        {
          client: 'Startup that needed an MVP',
          challenge: 'They did not need a massive platform. They needed a useful first version quickly.',
          solution: 'Define the minimum scope, build the core modules and leave a sound base for iteration.',
          result: 'Faster launch and better product learning.',
        },
        {
          client: 'Business with an outdated website',
          challenge: 'The first impression felt templated and weaker than the actual service quality.',
          solution: 'Redesign visual hierarchy, proof sections and trust-building layers.',
          result: 'More premium perception and a much stronger sales narrative.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'A way of working built to reduce uncertainty and avoid project chaos.',
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
      title: 'Indicative ranges that help frame the work without turning it into a rigid rate card.',
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
        'If the brief is still fuzzy, the right first step is to define scope properly. That is better than pretending certainty where there is none.',
    },
    testimonials: {
      eyebrow: 'Trust',
      title: 'References presented with stronger context and less template energy.',
      description:
        'The presentation is ready for profile links, company references or external sources without leaning on fake-looking visual proof.',
      items: [
        {
          quote:
            'The project moved quickly and the new website felt sharper and more professional from day one.',
          name: 'Maria Garcia',
          role: 'Marketing Director',
          company: 'TechSolutions Barcelona',
          context: 'Lead generation website and visual repositioning',
        },
        {
          quote:
            'Communication was direct, practical and the final result reflected what we actually needed to sell.',
          name: 'Carlos Rodriguez',
          role: 'CEO',
          company: 'Business Consulting',
          context: 'Business website and messaging refinement',
        },
        {
          quote:
            'He helped us turn a scattered idea into a much more credible and useful digital presence.',
          name: 'Ana Fernandez',
          role: 'Founder',
          company: 'Startup Tech Poblenou',
          context: 'Early validation and startup web presence',
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'The questions that usually block contact, answered directly.',
      description: 'The new version prioritizes real objections: timing, pricing, redesigns, remote work and international fit.',
      items: [
        {
          question: 'How long does a project usually take?',
          answer:
            'A focused landing page can move quickly. A business website often takes 2 to 6 weeks. A Laravel project or MVP depends on scope and is normally planned in phases.',
        },
        {
          question: 'Do you only work with companies in Spain?',
          answer:
            'No. I work remotely with companies in Spain and international teams. The English version has been rewritten specifically to support that better.',
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
      title: 'If the project is a fit, the next step should be straightforward.',
      description:
        'The first contact flow is lighter now: fewer visible fields, better context and a clearer way to move from idea to practical proposal.',
      emailLabel: 'Direct email',
      responseLabel: 'Response time',
      responseText: 'I usually reply within 24 business hours with an initial direction.',
      formTitle: 'Share the essentials',
      optionalFields: 'Optional details',
    },
    footer: {
      summary:
        'Freelance developer for business websites, redesigns, Laravel and product work with a strong focus on trust, clarity and performance.',
      serviceLinks: [
        { label: 'Services', href: '/en/services' },
        { label: 'Landing pages', href: '/en/professional-landing-page-development' },
        { label: 'Laravel developer', href: '/en/freelance-laravel-developer' },
        { label: 'Website redesign', href: '/en/website-redesign-improvements' },
      ],
      resourceLinks: [
        { label: 'FAQ', href: '/en/frequently-asked-questions' },
        { label: 'Pricing guide', href: '/en/how-much-does-website-cost' },
        { label: 'Blog', href: '/en/blog' },
        { label: 'Contact', href: '/en/contact' },
      ],
    },
    servicesPage: {
      eyebrow: 'Services',
      title: 'Web development services for companies that need to sell more clearly, launch faster or fix a site that is no longer doing its job.',
      description:
        'This hub keeps the offer visible from navigation, SEO and service discovery instead of hiding the most valuable pages deep in the site.',
      ctaPrimary: 'Request a proposal',
      ctaSecondary: 'See selected work',
    },
  },
};
