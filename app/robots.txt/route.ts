export async function GET() {
  const robots = `
User-agent: *
Allow: /
Disallow: /api/

# Sitemap
Sitemap: https://your-portfolio.vercel.app/sitemap.xml
`.trim()

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}