import type { APIRoute } from '../../types/api';
import { Resend } from 'resend';

// Get API key from environment variables
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY || "re_dsNJAXMh_ziZ1683gFMgjVUHocV61jmZt";

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
    const { name, email, type, message, locale = 'es' } = data;

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

    // Validate required fields
    if (!name || !email || !message) {
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
      ? `Nueva solicitud de trabajo freelance: ${type || 'General'}`
      : `New freelance work submission: ${type || 'General'}`;

    // Set appropriate HTML content based on locale
    const htmlContent = locale === 'es'
      ? `
        <h2>Nueva solicitud de trabajo freelance</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de proyecto:</strong> ${type || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
      : `
        <h2>New freelance work submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project type:</strong> ${type || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;

    const { error } = await resend.emails.send({
      from: 'Freelance Work Submission <onboarding@resend.dev>', 
      to: 'ignasiamat10@gmail.com',
      reply_to: email,
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

    // Trigger email automation based on form type
    try {
      let sequenceType = 'contact_form'; // default
      
      if (type?.includes('Auditoría') || type?.includes('audit')) {
        sequenceType = 'website_audit';
      } else if (type?.includes('ROI') || type?.includes('calculadora')) {
        sequenceType = 'roi_calculator';
      }
      
      // Send to email automation system
      await fetch(`${new URL(request.url).origin}/api/email-automation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          sequenceType: sequenceType,
          userData: {
            name: name,
            email: email,
            company: data.company || data.businessName,
            businessType: data.businessType,
            message: message,
            type: type,
            source: data.source,
            calculatedROI: data.calculatedROI,
            monthlyRevenue: data.monthlyRevenue
          }
        })
      }).catch(error => console.error('Email automation error:', error));
      
    } catch (automationError) {
      console.error('Email automation failed:', automationError);
      // Don't fail the main request if automation fails
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
