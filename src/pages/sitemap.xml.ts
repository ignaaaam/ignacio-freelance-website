export async function GET() {
  const baseUrl = 'https://ignacioamatweb.com';
  const pages = [
    '',
    '/en',
    '/proyectos',
    '/en/projects',
    '/contacto',
    '/en/contact',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === '' || page === '/en' ? '1.0' : '0.8'}</priority>
      ${page === '' || page === '/en' ? '' : `
      <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${page.replace('/en', '')}" />
      <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${page.replace('/en', '')}" />
      `}
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 