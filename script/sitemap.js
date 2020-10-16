/* eslint @typescript-eslint/no-var-requires: 0 */
const fs = require('fs');
const path = require('path');
const { SitemapStream } = require('sitemap');

function getCasesFromJson() {
  const casesJsonPath = path.join(process.cwd(), 'data', 'data', 'case.json');
  return JSON.parse(fs.readFileSync(casesJsonPath, 'utf8'));
}

async function generateSitemap() {
  const links = [
    { url: '/', priority: 0.8 },
    { url: '/case/', priority: 0.6 },
    { url: '/om/', priority: 0.8 },
    { url: '/kontakt/', priority: 0.8 },
  ];

  const cases = getCasesFromJson();
  cases.forEach(c => {
    links.push({ url: `/case/${c.slug}/`, priority: 0.5 });
  });

  const sitemap = new SitemapStream({ hostname: 'https://www.itiden.se' });
  const writeStream = fs.createWriteStream('./out/sitemap.xml');
  sitemap.pipe(writeStream);

  links.forEach(link => {
    sitemap.write(link);
  });
  sitemap.end();
}

generateSitemap();
