const SITE = 'https://drewdevelops.com';

const routes = [
	{ path: '/', priority: '1.0', changefreq: 'monthly' },
	{ path: '/previous-work', priority: '0.8', changefreq: 'monthly' },
	{ path: '/connect', priority: '0.6', changefreq: 'yearly' }
];

export const prerender = true;

export async function GET() {
	const lastmod = new Date().toISOString().split('T')[0];

	const urls = routes
		.map(
			(r) => `	<url>
		<loc>${SITE}${r.path}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>${r.changefreq}</changefreq>
		<priority>${r.priority}</priority>
	</url>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
