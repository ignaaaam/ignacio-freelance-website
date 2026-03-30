import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

type Locale = 'es' | 'en';

const GMAIL_USER = import.meta.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = import.meta.env.GMAIL_APP_PASSWORD;
const CONTACT_TO_EMAIL = import.meta.env.CONTACT_TO_EMAIL || GMAIL_USER;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const smtpTransporter =
  GMAIL_USER && GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_APP_PASSWORD,
        },
      })
    : null;

const typeLabels = {
  es: {
    landing: 'Landing page',
    web: 'Web de empresa',
    redesign: 'Rediseno / mejora',
    laravel: 'Proyecto Laravel',
    webapp: 'App web / SaaS / MVP',
    maintenance: 'Mantenimiento',
    bugfix: 'Fix / problema tecnico',
    other: 'Otro',
  },
  en: {
    landing: 'Landing page',
    web: 'Business website',
    redesign: 'Redesign / improvement',
    laravel: 'Laravel project',
    webapp: 'Web app / SaaS / MVP',
    maintenance: 'Maintenance',
    bugfix: 'Fix / technical issue',
    other: 'Other',
  },
} as const;

const budgetLabels = {
  es: {
    'under-1500': 'Menos de 1.500 EUR',
    '1500-3000': '1.500 a 3.000 EUR',
    '3000-6000': '3.000 a 6.000 EUR',
    '6000-10000': '6.000 a 10.000 EUR',
    'over-10000': 'Mas de 10.000 EUR',
  },
  en: {
    'under-1500': 'Under EUR 1,500',
    '1500-3000': 'EUR 1,500 to 3,000',
    '3000-6000': 'EUR 3,000 to 6,000',
    '6000-10000': 'EUR 6,000 to 10,000',
    'over-10000': 'Over EUR 10,000',
  },
} as const;

type ProjectTypeKey = keyof typeof typeLabels.es;
type BudgetKey = keyof typeof budgetLabels.es;

const copy = {
  es: {
    missingFields: 'Completa los campos requeridos antes de enviar el formulario.',
    invalidEmail: 'Introduce un email valido para que pueda responderte.',
    configError: 'El formulario no esta configurado correctamente ahora mismo.',
    sendError: 'No se pudo enviar el mensaje. Intentalo de nuevo un poco mas tarde.',
    success: 'Mensaje enviado correctamente. Revisare el contexto y te respondere por email.',
    newLead: 'Nuevo contacto desde la web',
    customer: 'Contacto',
    budget: 'Presupuesto',
    company: 'Empresa',
    projectType: 'Tipo de proyecto',
    message: 'Contexto del proyecto',
    reply: 'Responder por email',
    channel: 'Origen',
    englishSite: 'Version EN',
    spanishSite: 'Version ES',
    receivedAt: 'Recibido',
    summaryTitle: 'Resumen rapido',
    directReply: 'Responde a este email para seguir la conversacion.',
  },
  en: {
    missingFields: 'Please complete the required fields before sending the form.',
    invalidEmail: 'Please enter a valid email address so I can reply.',
    configError: 'The contact form is not configured correctly right now.',
    sendError: 'The message could not be sent. Please try again a bit later.',
    success: 'Message sent successfully. I will review the details and reply by email.',
    newLead: 'New website enquiry',
    customer: 'Contact',
    budget: 'Budget',
    company: 'Company',
    projectType: 'Project type',
    message: 'Project context',
    reply: 'Reply by email',
    channel: 'Source',
    englishSite: 'EN version',
    spanishSite: 'ES version',
    receivedAt: 'Received',
    summaryTitle: 'Quick summary',
    directReply: 'Reply to this email to continue the conversation.',
  },
} as const;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function resolveLocale(input: unknown): Locale {
  return input === 'en' ? 'en' : 'es';
}

function resolveProjectType(locale: Locale, value: string) {
  return typeLabels[locale][value as ProjectTypeKey] || value;
}

function resolveBudget(locale: Locale, value: string) {
  if (!value) {
    return locale === 'en' ? 'Not specified' : 'No especificado';
  }

  return budgetLabels[locale][value as BudgetKey] || value;
}

function buildEmailHtml(params: {
  locale: Locale;
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  receivedAt: string;
}) {
  const { locale, name, email, company, projectType, budget, message, receivedAt } = params;
  const t = copy[locale];
  const siteBadge = locale === 'en' ? t.englishSite : t.spanishSite;
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const detailRows = [
    { label: t.projectType, value: projectType },
    { label: t.budget, value: budget },
    ...(company ? [{ label: t.company, value: company }] : []),
    { label: t.channel, value: siteBadge },
  ];

  const rowsHtml = detailRows
    .map(
      (row) => `
        <tr>
          <td style="padding: 13px 16px; color: #705f54; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; border-bottom: 1px solid #e7d8ca;">${escapeHtml(row.label)}</td>
          <td style="padding: 13px 16px; color: #211a15; font-size: 14px; line-height: 1.6; border-bottom: 1px solid #e7d8ca;">${escapeHtml(row.value)}</td>
        </tr>
      `,
    )
    .join('');

  return `
    <div style="margin: 0; padding: 24px 0; background: #efe6db; font-family: Arial, Helvetica, sans-serif; color: #211a15;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <tr>
          <td align="center" style="padding: 0 16px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: separate; width: 100%; max-width: 720px; overflow: hidden; border: 1px solid #decebf; border-radius: 26px; background: #fffaf4;">
              <tr>
                <td style="padding: 30px 32px; background: #21443f;">
                  <div style="display: inline-block; margin-bottom: 14px; padding: 7px 12px; border-radius: 999px; border: 1px solid rgba(255, 250, 244, 0.18); background: rgba(255, 250, 244, 0.12); color: #fff4eb; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;">${escapeHtml(siteBadge)}</div>
                  <h1 style="margin: 0 0 10px; font-size: 30px; line-height: 1.15; color: #fffaf4; font-weight: 800;">${escapeHtml(t.newLead)}</h1>
                  <p style="margin: 0; font-size: 15px; line-height: 1.75; color: #d7e5e1;">${escapeHtml(t.directReply)}</p>
                </td>
              </tr>

              <tr>
                <td style="padding: 24px 24px 10px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: separate; width: 100%; border: 1px solid #e5d8cc; border-radius: 20px; background: #ffffff;">
                    <tr>
                      <td style="padding: 20px;">
                        <div style="margin-bottom: 10px; color: #705f54; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;">${escapeHtml(t.customer)}</div>
                        <div style="font-size: 24px; line-height: 1.2; color: #211a15; font-weight: 800;">${escapeHtml(name)}</div>
                        <div style="margin-top: 8px; font-size: 15px; line-height: 1.7;">
                          <a href="mailto:${escapeHtml(email)}" style="color: #21443f; text-decoration: none; font-weight: 700;">${escapeHtml(email)}</a>
                        </div>
                        ${
                          company
                            ? `<div style="margin-top: 4px; font-size: 14px; color: #5f5147;">${escapeHtml(company)}</div>`
                            : ''
                        }
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding: 0 24px 10px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: separate; width: 100%; border: 1px solid #e5d8cc; border-radius: 20px; background: #f8f1e9;">
                    <tr>
                      <td style="padding: 16px 16px 0; color: #705f54; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;">${escapeHtml(t.summaryTitle)}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0 0;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                          ${rowsHtml}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding: 0 24px 10px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: separate; width: 100%; border: 1px solid #e5d8cc; border-radius: 20px; background: #fffdf9;">
                    <tr>
                      <td style="padding: 20px;">
                        <div style="margin-bottom: 10px; color: #705f54; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;">${escapeHtml(t.message)}</div>
                        <div style="font-size: 15px; line-height: 1.8; color: #211a15;">${safeMessage}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding: 14px 24px 28px;">
                  <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(
                    locale === 'en' ? 'About your project' : 'Sobre tu proyecto',
                  )}" style="display: inline-block; padding: 14px 22px; border-radius: 999px; background: #b86836; color: #fffaf4; text-decoration: none; font-size: 14px; font-weight: 800;">${escapeHtml(t.reply)}</a>
                  <p style="margin: 14px 0 0; font-size: 12px; line-height: 1.75; color: #8c7b6f;">${escapeHtml(t.receivedAt)}: ${escapeHtml(receivedAt)}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function buildEmailText(params: {
  locale: Locale;
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  receivedAt: string;
}) {
  const { locale, name, email, company, projectType, budget, message, receivedAt } = params;
  const t = copy[locale];

  return [
    t.newLead,
    '',
    `${t.customer}: ${name}`,
    `Email: ${email}`,
    company ? `${t.company}: ${company}` : null,
    `${t.projectType}: ${projectType}`,
    `${t.budget}: ${budget}`,
    `${t.channel}: ${locale === 'en' ? t.englishSite : t.spanishSite}`,
    `${t.receivedAt}: ${receivedAt}`,
    '',
    `${t.message}:`,
    message,
  ]
    .filter(Boolean)
    .join('\n');
}

async function sendLeadEmail(params: {
  locale: Locale;
  subject: string;
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  receivedAt: string;
}) {
  if (!CONTACT_TO_EMAIL) {
    throw new Error('Missing recipient email configuration.');
  }

  const html = buildEmailHtml(params);
  const text = buildEmailText(params);

  if (!smtpTransporter || !GMAIL_USER) {
    throw new Error('No email provider is configured.');
  }

  const result = await smtpTransporter.sendMail({
    from: `Ignacio Amat Web <${GMAIL_USER}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: params.email,
    subject: params.subject,
    html,
    text,
  });

  if (!result.accepted || result.accepted.length === 0) {
    throw new Error('Mail transport did not accept the message.');
  }
}

export const POST: APIRoute = async ({ request }) => {
  const headers = {
    'Content-Type': 'application/json',
    'X-Robots-Tag': 'noindex, nofollow',
    'Access-Control-Allow-Origin': 'https://www.ignacioamatweb.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers });
  }

  let locale: Locale = 'es';

  try {
    const data = await request.json();
    locale = resolveLocale(data.locale);
    const t = copy[locale];

    const website = String(data.website || '').trim();
    if (website) {
      return new Response(JSON.stringify({ message: t.success }), { status: 200, headers });
    }

    const safeName = String(data.name || '').trim().slice(0, 200);
    const safeEmail = String(data.email || '').trim().slice(0, 320);
    const safeType = String(data.type || '').trim().slice(0, 100);
    const safeMessage = String(data.message || '').trim().slice(0, 10000);
    const safeCompany = String(data.company || '').trim().slice(0, 200);
    const safeBudget = String(data.budget || '').trim().slice(0, 100);

    if (!safeName || !safeEmail || !safeType || !safeMessage) {
      return new Response(JSON.stringify({ error: t.missingFields }), { status: 400, headers });
    }

    if (!EMAIL_RE.test(safeEmail)) {
      return new Response(JSON.stringify({ error: t.invalidEmail }), { status: 400, headers });
    }

    if (!CONTACT_TO_EMAIL || !smtpTransporter) {
      return new Response(JSON.stringify({ error: t.configError }), { status: 500, headers });
    }

    const projectType = resolveProjectType(locale, safeType);
    const budget = resolveBudget(locale, safeBudget);
    const receivedAt = new Date().toLocaleString(locale === 'en' ? 'en-US' : 'es-ES', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/Madrid',
    });

    const subjectLocale = locale === 'en' ? '[Lead][EN]' : '[Lead][ES]';
    const subject = `${subjectLocale} ${safeName} - ${projectType}`;

    await sendLeadEmail({
      locale,
      subject,
      name: safeName,
      email: safeEmail,
      company: safeCompany,
      projectType,
      budget,
      message: safeMessage,
      receivedAt,
    });

    return new Response(JSON.stringify({ message: t.success }), { status: 200, headers });
  } catch (error) {
    console.error('Contact API error:', error);

    return new Response(JSON.stringify({ error: copy[locale].sendError }), {
      status: 500,
      headers,
    });
  }
};
