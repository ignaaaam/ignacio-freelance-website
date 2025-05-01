import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Get API key from environment variables
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY ;

// Log API key status (not the actual key) for debugging
console.log(`Resend API Key status: ${RESEND_API_KEY ? 'Provided' : 'Missing'}`);

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
    console.log('Received data:', data);
    const { name, email, type, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Missing required fields:', { name, email, message });
      return new Response(
        JSON.stringify({ 
          error: 'Por favor, rellena todos los campos requeridos' 
        }), 
        { status: 400, headers }
      );
    }

    console.log(`Attempting to send email for ${name} (${email})`);

    const { error } = await resend.emails.send({
      from: 'ignacioamatweb - Nuevo Cliente <onboarding@resend.dev>',
      to: 'ignasiamat10@gmail.com',
      reply_to: email,
      subject: `Nuevo mensaje de contacto: ${type || 'General'}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de proyecto:</strong> ${type || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Failed to send email:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' 
        }), 
        { status: 400, headers }
      );
    }

    console.log('Email sent successfully');
    return new Response(
      JSON.stringify({ 
        message: 'Mensaje enviado correctamente' 
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
    return new Response(
      JSON.stringify({ 
        error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' 
      }), 
      { status: 500, headers }
    );
  }
};
