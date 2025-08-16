import type { APIRoute } from 'astro';

// Email automation sequences for lead nurturing
// This API handles different email sequences based on lead type and source

const EMAIL_SEQUENCES = {
  'website_audit': {
    name: 'Website Audit Follow-up',
    emails: [
      {
        day: 0,
        subject: 'Tu auditoría web está lista - Resultados sorprendentes 📊',
        content: `
Hola [NOMBRE],

Tu auditoría web está completa y los resultados son muy reveladores.

He encontrado [X] problemas críticos que están impidiendo que tu web atraiga más clientes en Barcelona:

🔍 **LOS 3 PROBLEMAS MÁS URGENTES:**

1. **Velocidad móvil**: Tu web tarda [X] segundos en cargar en móviles (debería ser menos de 3)
2. **SEO local**: No apareces para "[TU_SERVICIO] Barcelona" en Google
3. **Conversión**: Tu web no está optimizada para convertir visitantes en clientes

📈 **IMPACTO EN TU NEGOCIO:**
- Estás perdiendo aproximadamente [X] clientes potenciales al mes
- Esto representa unos €[X] en ingresos perdidos anuales

¿Quieres que revisemos juntos estos resultados en una llamada de 15 minutos?

[ENLACE CALENDLY]

Un saludo,
Ignacio Amat
Desarrollador Web Barcelona
+34 XXX XXX XXX
`
      },
      {
        day: 3,
        subject: '¿Viste tu auditoría web? Estos 5 cambios duplicarían tus leads',
        content: `
Hola [NOMBRE],

Te envié tu auditoría web hace unos días. ¿Pudiste revisarla?

Si aún no has tenido tiempo, aquí tienes un resumen de los **5 cambios más importantes** que duplicarían tus leads:

✅ **CAMBIO 1: Optimización móvil**
El 73% de tus visitantes usan móviles. Tu web actual los está espantando.

✅ **CAMBIO 2: SEO local Barcelona**  
Te ayudo a aparecer primero cuando busquen tu servicio en Barcelona.

✅ **CAMBIO 3: Velocidad de carga**
Cada segundo extra pierdes el 7% de visitantes.

✅ **CAMBIO 4: Call-to-actions optimizados**
Tus botones de contacto son invisibles. Te enseño dónde ponerlos.

✅ **CAMBIO 5: Contenido que convierte**
Tu web debe vender por ti 24/7. Te muestro cómo.

💡 **CASO REAL:** Un restaurante de Barcelona aplicó estos cambios y triplicó las reservas online en 2 meses.

¿Hablamos 15 minutos sobre tu proyecto?

[ENLACE CALENDLY]

Saludos,
Ignacio
`
      },
      {
        day: 7,
        subject: '[ÚLTIMA OPORTUNIDAD] Tu competencia ya está mejorando su web',
        content: `
Hola [NOMBRE],

He estado revisando a tu competencia en Barcelona y tengo malas noticias...

**3 de tus competidores directos han mejorado sus webs en los últimos meses.**

Esto significa que:
- Están captando los clientes que antes podrían haber sido tuyos
- Aparecen antes que tú en Google
- Sus webs convierten mejor que la tuya

**LA BUENA NOTICIA:** Aún puedes adelantarlos.

Tengo **2 espacios libres este mes** para proyectos urgentes.

Si actúas ahora, podríamos tener tu nueva web funcionando en 3 semanas, antes de que más competidores se pongan las pilas.

¿Hablamos hoy mismo?

[ENLACE CALENDLY - REUNIÓN URGENTE]

Un saludo,
Ignacio Amat
Desarrollador Web Barcelona

PD: Si no es el momento, no problem. Guardo tu auditoría por si la necesitas en el futuro.
`
      }
    ]
  },

  'roi_calculator': {
    name: 'ROI Calculator Follow-up',
    emails: [
      {
        day: 0,
        subject: 'Tu ROI calculado: €[X] en oportunidades perdidas al año 💰',
        content: `
Hola [NOMBRE],

Según tus respuestas en la calculadora, tu negocio está perdiendo aproximadamente **€[ROI_AMOUNT] al año** por no tener una web optimizada.

**TU SITUACIÓN ESPECÍFICA:**
- Sector: [BUSINESS_TYPE]
- Ingresos mensuales: €[MONTHLY_REVENUE]
- Pérdida estimada mensual: €[MONTHLY_LOSS]
- ROI potencial: [ROI_PERCENTAGE]%

**¿SABÍAS QUE...?**
El 67% de empresas Barcelona que invierten en una web profesional recuperan la inversión en menos de 6 meses.

**CASO SIMILAR AL TUYO:**
[CASO_ESTUDIO_PERSONALIZADO_SEGUN_SECTOR]

¿Te interesa saber cómo puedes capturar esas oportunidades perdidas?

[ENLACE CALENDLY]

Saludos,
Ignacio Amat
Especialista Web Empresas Barcelona
`
      },
      {
        day: 2,
        subject: 'Cómo [EMPRESA_SIMILAR] aumentó sus ingresos 40% con su nueva web',
        content: `
Hola [NOMBRE],

Te quería contar el caso de [EMPRESA_SIMILAR], muy parecida a la tuya en Barcelona.

**SU SITUACIÓN INICIAL:**
- Sector: [BUSINESS_TYPE]
- Web antigua que no generaba leads
- Competencia feroz en Barcelona
- Dependían 100% del boca a boca

**LO QUE HICIMOS:**
✅ Web nueva optimizada para conversión
✅ SEO local Barcelona específico
✅ Sistema de captación de leads automatizado
✅ Integración con Google My Business

**RESULTADOS EN 6 MESES:**
📈 +40% en ingresos mensuales
📞 +200% en contactos online  
🔍 Posición #1 en Google para su sector Barcelona
⭐ +50 reseñas positivas nuevas

**INVERSIÓN TOTAL:** €[PACKAGE_PRICE]
**RETORNO:** €[ROI_AMOUNT] en nuevos ingresos

¿Te gustaría conseguir resultados similares?

[ENLACE CALENDLY]

Un saludo,
Ignacio
`
      },
      {
        day: 5,
        subject: 'Plan de acción específico para [NOMBRE_EMPRESA]',
        content: `
Hola [NOMBRE],

He preparado un plan de acción específico para [NOMBRE_EMPRESA]:

📋 **PLAN DE ACCIÓN PERSONALIZADO**

**FASE 1: Análisis y estrategia (Semana 1)**
- Auditoría completa de tu situación actual
- Análisis de competencia Barcelona  
- Definición de objetivos específicos

**FASE 2: Diseño y desarrollo (Semanas 2-3)**
- Diseño personalizado para tu sector
- Desarrollo con tecnologías modernas
- Optimización SEO local Barcelona

**FASE 3: Lanzamiento y optimización (Semana 4)**
- Lanzamiento y configuración completa
- Formación para gestionar tu web
- Seguimiento de primeros resultados

**INVERSIÓN ESTIMADA:** €[ESTIMATED_PRICE]
**TIEMPO TOTAL:** 4 semanas
**RESULTADOS ESPERADOS:** +[EXPECTED_INCREASE]% en leads

¿Revisamos este plan en una llamada de 15 minutos?

[ENLACE CALENDLY]

Saludos,
Ignacio Amat
`
      }
    ]
  },

  'contact_form': {
    name: 'Contact Form Follow-up',
    emails: [
      {
        day: 0,
        subject: 'Gracias por tu interés - Próximos pasos para tu proyecto web',
        content: `
Hola [NOMBRE],

Gracias por contactarme para tu proyecto web.

He revisado tu solicitud y creo que puedo ayudarte mucho con [PROYECTO_DESCRIPCION].

**PRÓXIMOS PASOS:**

1️⃣ **Llamada de descubrimiento (15 min)**
   Entender tus objetivos y necesidades específicas

2️⃣ **Propuesta personalizada**
   Presupuesto detallado y cronograma

3️⃣ **Ejemplos relevantes**
   Te muestro casos similares al tuyo

¿Cuándo te viene bien que hablemos? Tengo disponibilidad:

[OPCIONES_HORARIO]

O puedes elegir tú mismo:
[ENLACE CALENDLY]

Un saludo,
Ignacio Amat
Desarrollador Web Barcelona
+34 XXX XXX XXX
`
      },
      {
        day: 1,
        subject: 'Tu propuesta personalizada está lista 📋',
        content: `
Hola [NOMBRE],

He preparado una propuesta completa para tu proyecto.

**LO QUE INCLUYE:**
✅ Análisis de tus necesidades específicas
✅ Presupuesto detallado sin sorpresas
✅ Cronograma realista de entrega
✅ Ejemplos de proyectos similares
✅ Garantías y soporte incluido

**BONUS ESPECIAL:**
Si confirmas el proyecto esta semana, incluyo:
- Auditoría SEO completa (valor €200)
- 3 meses extra de soporte
- Formación personalizada

¿Cuándo podemos revisar la propuesta juntos?

[ENLACE CALENDLY]

Saludos,
Ignacio
`
      }
    ]
  }
};

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email, sequenceType, userData } = data;

    // Get the appropriate email sequence
    const sequence = EMAIL_SEQUENCES[sequenceType as keyof typeof EMAIL_SEQUENCES];
    
    if (!sequence) {
      return new Response(
        JSON.stringify({ error: 'Invalid sequence type' }),
        { status: 400 }
      );
    }

    // Here you would integrate with your email service provider
    // For example: Mailchimp, ConvertKit, SendGrid, etc.
    
    // Example integration with a hypothetical email service:
    /*
    await emailService.addToSequence({
      email: email,
      sequenceName: sequence.name,
      userData: userData,
      emails: sequence.emails
    });
    */

    // For now, we'll just log the automation trigger
    console.log(`Email automation triggered for ${email} - Sequence: ${sequenceType}`);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Email automation started',
        sequenceName: sequence.name,
        emailCount: sequence.emails.length
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error) {
    console.error('Email automation error:', error);
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  }
};

// Utility functions for email personalization
export const personalizeEmail = (template: string, userData: any) => {
  let personalizedContent = template;
  
  // Replace placeholders with actual data
  const replacements = {
    '[NOMBRE]': userData.name || 'there',
    '[NOMBRE_EMPRESA]': userData.company || 'tu empresa',
    '[BUSINESS_TYPE]': userData.businessType || 'tu sector',
    '[MONTHLY_REVENUE]': userData.monthlyRevenue || 'X',
    '[ROI_AMOUNT]': userData.calculatedROI?.annualIncrease || 'X',
    '[ROI_PERCENTAGE]': userData.calculatedROI?.roiPercentage || 'X',
    '[MONTHLY_LOSS]': userData.calculatedROI?.monthlyIncrease || 'X',
    '[ESTIMATED_PRICE]': getEstimatedPrice(userData.businessType),
    '[EXPECTED_INCREASE]': getExpectedIncrease(userData.businessType)
  };

  Object.entries(replacements).forEach(([placeholder, value]) => {
    personalizedContent = personalizedContent.replace(new RegExp(placeholder, 'g'), String(value));
  });

  return personalizedContent;
};

const getEstimatedPrice = (businessType: string): string => {
  const priceMap: Record<string, string> = {
    'restaurante': '1,200',
    'retail': '1,500',
    'servicios': '1,800',
    'salud': '1,600',
    'inmobiliaria': '2,000',
    'consultoria': '1,700'
  };
  
  return priceMap[businessType] || '1,500';
};

const getExpectedIncrease = (businessType: string): string => {
  const increaseMap: Record<string, string> = {
    'restaurante': '40',
    'retail': '60',
    'servicios': '80',
    'salud': '50',
    'inmobiliaria': '100',
    'consultoria': '70'
  };
  
  return increaseMap[businessType] || '50';
};