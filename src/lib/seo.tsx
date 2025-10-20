import { Helmet } from 'react-helmet-async';

const siteOrigin = 'https://itaame.github.io';
const siteBasePath = '/PortFolio';
const siteUrl = `${siteOrigin}${siteBasePath}`;
const canonicalBase = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`;
const defaultTitle = 'Ilyasse Taame — Spacecraft Operations & Real-Time Telemetry';
const defaultDescription =
  'Portfolio of Ilyasse Taame, spacecraft operations engineer specializing in XTCE/CCSDS telemetry, mission control software, and real-time monitoring.';
const defaultImagePath = 'assets/avatar.svg';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function SEO({ title, description, path = '/', image }: SeoProps) {
  const metaTitle = title ? `${title} · Ilyasse Taame` : defaultTitle;
  const metaDescription = description ?? defaultDescription;
  const url = new URL(path.replace(/^\/+/, ''), canonicalBase).toString();
  const ogImage = (() => {
    if (!image) {
      return new URL(defaultImagePath, canonicalBase).toString();
    }
    try {
      return new URL(image).toString();
    } catch {
      return new URL(image.replace(/^\/+/, ''), canonicalBase).toString();
    }
  })();

  return (
    <Helmet prioritizeSeoTags>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export const siteMeta = {
  siteUrl,
  defaultTitle,
  defaultDescription,
  defaultImage: new URL(defaultImagePath, canonicalBase).toString()
};
