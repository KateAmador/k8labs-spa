/**
 * Generador de sitemap dinámico para K8Labs
 * Incluye todas las rutas del sitio con metadatos SEO
 */

const siteConfig = {
  baseUrl: 'https://k8labs.com',
  lastmod: new Date().toISOString().split('T')[0],
  defaultChangefreq: 'weekly',
  defaultPriority: '0.8'
}

const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: siteConfig.lastmod
  },
  {
    path: '/soporte',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: siteConfig.lastmod
  },
  {
    path: '/gracias',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: siteConfig.lastmod
  },
  {
    path: '/terminos-y-condiciones',
    priority: '0.4',
    changefreq: 'yearly',
    lastmod: siteConfig.lastmod
  },
  {
    path: '/politica-de-privacidad',
    priority: '0.4',
    changefreq: 'yearly',
    lastmod: siteConfig.lastmod
  }
]

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${routes.map(route => `  <url>
    <loc>${siteConfig.baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return sitemap
}

export { generateSitemap, routes, siteConfig } 