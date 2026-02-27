import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

const GMAIL_USER = import.meta.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = import.meta.env.GMAIL_APP_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers });
  }

  try {
    const data = await request.json();
    const {
      name = '',
      email = '',
      type = '',
      message = '',
      company = '',
      budget = '',
      website = '',
      locale = 'es'
    } = data;

    const errorMessages = {
      missingFields: locale === 'es'
        ? 'Por favor, rellena todos los campos requeridos'
        : 'Please fill in all required fields',
      sendError: locale === 'es'
        ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
        : 'Error sending the message. Please try again later.',
      success: locale === 'es'
        ? 'Mensaje enviado correctamente'
        : 'Message sent successfully'
    };

    // Honeypot anti-bot check
    if (website) {
      return new Response(JSON.stringify({ message: errorMessages.success }), { status: 200, headers });
    }

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeMessage = String(message).trim();
    const safeType = String(type).trim();
    const safeCompany = String(company).trim();
    const safeBudget = String(budget).trim();

    if (!safeName || !safeEmail || !safeMessage) {
      return new Response(
        JSON.stringify({ error: errorMessages.missingFields }),
        { status: 400, headers }
      );
    }

    const typeLabels: Record<string, string> = {
      landing: 'Landing page',
      web: 'Web completa',
      ecommerce: 'E-commerce',
      other: 'Otro',
    };

    const budgetLabels: Record<string, string> = {
      '800-1500': '800€ – 1.500€',
      '1500-3500': '1.500€ – 3.500€',
      '3500-7000': '3.500€ – 7.000€',
      '7000+': 'Más de 7.000€',
    };

    const typeLabel = typeLabels[safeType] || safeType || 'No especificado';
    const budgetLabel = budgetLabels[safeBudget] || safeBudget || 'No especificado';
    const fromEnglishSite = locale === 'en';

    const receivedAt = new Date().toLocaleDateString('es-ES', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });

    const subject = `[Lead] ${safeName} — ${typeLabel} · ${budgetLabel}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #1a1a1a;">

        <!-- Header -->
        <div style="background: #0f172a; padding: 20px 32px; border-radius: 8px 8px 0 0;">
          <p style="margin: 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">ignacioamatweb.com${fromEnglishSite ? ' · versión EN' : ''}</p>
          <h1 style="margin: 6px 0 0; color: #ffffff; font-size: 20px; font-weight: 700; line-height: 1.3;">Nuevo lead recibido</h1>
        </div>

        <!-- Summary card: who + what + how much at a glance -->
        <div style="background: #f1f5f9; padding: 20px 32px; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="width: 55%; padding-right: 16px; vertical-align: top;">
                <p style="margin: 0 0 3px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Cliente</p>
                <p style="margin: 0; font-size: 17px; font-weight: 700; color: #0f172a;">${safeName}</p>
                ${safeCompany ? `<p style="margin: 3px 0 0; color: #475569; font-size: 13px;">${safeCompany}</p>` : ''}
                <p style="margin: 4px 0 0; font-size: 13px;"><a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></p>
              </td>
              <td style="width: 45%; padding-left: 16px; border-left: 2px solid #e2e8f0; vertical-align: top;">
                <p style="margin: 0 0 6px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Proyecto</p>
                <p style="margin: 0 0 8px;"><span style="background: #0f172a; color: #ffffff; font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 4px; display: inline-block;">${typeLabel}</span></p>
                <p style="margin: 0; color: #16a34a; font-size: 15px; font-weight: 700;">${budgetLabel}</p>
              </td>
            </tr>
          </table>
        </div>

        <!-- Message block -->
        <div style="padding: 24px 32px; border: 1px solid #e2e8f0; border-top: none;">
          <p style="margin: 0 0 10px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje del cliente</p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #0f172a; padding: 16px 20px; border-radius: 0 6px 6px 0; font-size: 14px; line-height: 1.75; color: #334155;">
            ${safeMessage.replace(/\n/g, '<br>')}
          </div>

          <!-- Reply CTA -->
          <div style="margin-top: 28px; text-align: center;">
            <a href="mailto:${safeEmail}?subject=Tu proyecto web" style="display: inline-block; background: #0f172a; color: #ffffff; padding: 13px 32px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600;">Responder a ${safeName}</a>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding: 14px 32px; text-align: center; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; background: #f8fafc;">
          <p style="margin: 0; color: #94a3b8; font-size: 12px;">Recibido el ${receivedAt}</p>
        </div>

      </div>
    `;

    await transporter.sendMail({
      from: `Portfolio Contact <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: safeEmail,
      subject,
      html: htmlContent,
    });

    return new Response(
      JSON.stringify({ message: errorMessages.success }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Exception in contact API:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }

    let locale = 'es';
    try {
      const url = new URL(request.url);
      locale = url.pathname.startsWith('/en/') ? 'en' : 'es';
    } catch (_) {}

    return new Response(
      JSON.stringify({
        error: locale === 'es'
          ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
          : 'Error sending the message. Please try again later.'
      }),
      { status: 500, headers }
    );
  }
};
