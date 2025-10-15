import type publications from '../data/publications.json';
import { siteMeta } from './seo';

export type Publication = (typeof publications)[number];

export function generateRss(items: Publication[]): string {
  const { siteUrl, defaultDescription } = siteMeta;
  const feedItems = items
    .map(
      (item) => `    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.url}</link>
      <guid>${item.url}</guid>
      <description><![CDATA[${item.abstract}]]></description>
      <pubDate>${new Date(item.year, 0, 1).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Ilyasse Taame — Publications</title>
    <link>${siteUrl}/publications</link>
    <description>${defaultDescription}</description>
${feedItems}
  </channel>
</rss>`;
}
