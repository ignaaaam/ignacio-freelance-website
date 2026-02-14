import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Get API key from environment variables
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

// Log API key status (not the actual key) for debugging

// Initialize Resend
const resend = new Resend(RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight
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

    // Validation error messages based on locale
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

    // Basic anti-bot honeypot validation
    if (website) {
      return new Response(JSON.stringify({ message: errorMessages.success }), { status: 200, headers });
    }

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeMessage = String(message).trim();
    const safeType = String(type).trim();
    const safeCompany = String(company).trim();
    const safeBudget = String(budget).trim();

    // Validate required fields
    if (!safeName || !safeEmail || !safeMessage) {
      console.error('Missing required fields:', { name, email, message });
      return new Response(
        JSON.stringify({ 
          error: errorMessages.missingFields
        }), 
        { status: 400, headers }
      );
    }


    // Set subject based on locale
    const subject = locale === 'es'
      ? `Nuevo mensaje de contacto: ${safeType || 'General'}`
      : `New contact message: ${safeType || 'General'}`;

    // Set appropriate HTML content based on locale
    const htmlContent = locale === 'es'
      ? `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Empresa:</strong> ${safeCompany || 'No especificada'}</p>
        <p><strong>Tipo de proyecto:</strong> ${safeType || 'No especificado'}</p>
        <p><strong>Presupuesto:</strong> ${safeBudget || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `
      : `
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany || 'Not specified'}</p>
        <p><strong>Project type:</strong> ${safeType || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${safeBudget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `;

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: 'ignasiamat10@gmail.com',
      reply_to: safeEmail,
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      console.error('Failed to send email:', error);
      return new Response(
        JSON.stringify({ 
          error: errorMessages.sendError
        }), 
        { status: 400, headers }
      );
    }

    return new Response(
      JSON.stringify({ 
        message: errorMessages.success
      }), 
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Exception in contact API:', error);
    // Log the full error details
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    
    // Get locale from request URL or default to Spanish
    let locale = 'es';
    try {
      const url = new URL(request.url);
      locale = url.pathname.startsWith('/en/') ? 'en' : 'es';
    } catch (e) {
      console.error('Error determining locale from URL:', e);
    }
    
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
