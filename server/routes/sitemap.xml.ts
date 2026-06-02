import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

interface Post {
  slug: string
  date: string
}

const SITE_URL = 'https://tiagobernardes.com.br'

function isoDate(ddmmyyyy: string): string {
  const [d, m, y] = ddmmyyyy.split('/')
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`
}

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  let posts: Post[] = []
  try {
    const raw = readFileSync(resolve(process.cwd(), 'public/data/posts.json'), 'utf-8')
    posts = JSON.parse(raw)
  } catch {
    posts = []
  }

  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/posts', changefreq: 'weekly', priority: '0.9' },
    { url: '/portfolio', changefreq: 'monthly', priority: '0.8' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
${posts.map(p => `  <url>
    <loc>${SITE_URL}/blog/${p.slug}</loc>
    <lastmod>${isoDate(p.date)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`

  return xml
})
