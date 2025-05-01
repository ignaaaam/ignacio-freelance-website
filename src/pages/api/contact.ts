import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, type, message } = data;

    const { data: emailData, error } = await resend.emails.send({
      from: 'Ignacio Amat <contacto@ignacioarcel.com>',
      to: ['tu@email.com'], // Replace with your email
      subject: `Nueva consulta de ${name} - ${type}`,
      html: `
        <h2>Nueva consulta desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de proyecto:</strong> ${type}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify({ success: true, data: emailData }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 