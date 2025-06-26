export async function GET() {
  const baseUrl = 'https://ignacioamatweb.com';
  const pages = [
    {
      path: '',
      priority: '1.0',
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      path: '/en',
      priority: '0.9',
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      path: '/contacto',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      path: '/en/contact',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      path: '/privacidad',
      priority: '0.3',
      changefreq: 'yearly',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      path: '/en/privacy',
      priority: '0.3',
      changefreq: 'yearly',
      lastmod: new Date().toISOString().split('T')[0]
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page.path}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      ${page.path === '' || page.path === '/en' ? '' : `
      <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${page.path.replace('/en', '')}" />
      <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${page.path.replace('/en', '')}" />
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