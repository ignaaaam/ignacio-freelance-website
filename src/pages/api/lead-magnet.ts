import { Resend } from 'resend';
import type { APIRoute } from '../../types/api';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const emailTemplates = {
  es: {
    subject: 'Nuevo lead de análisis web gratuito',
    html: (name: string, email: string, website: string) => `
      <h2>Nuevo lead</h2>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Web:</b> <a href="${website}">${website}</a></p>`
  },
  en: {
    subject: 'New free website audit lead',
    html: (name: string, email: string, website: string) => `
      <h2>New Lead</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Website:</b> <a href="${website}">${website}</a></p>`
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, website, lang = 'es' } = await request.json();
    const template = emailTemplates[lang as keyof typeof emailTemplates] || emailTemplates.es;

    await resend.emails.send({
      from: 'Lead Magnet <leads@ignacioamatweb.com>',
      to: ['ignasiamat10@gmail.com'], // Replace with your email
      subject: template.subject,
      html: template.html(name, email, website)
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
} 