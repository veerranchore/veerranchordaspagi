import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, url }) {
  const siteTitle = "Veer Ranchhod Pagi | India's Legendary Desert Scout";
  const defaultDescription = "Official archive of Veer Ranchhod Pagi, the legendary Indian Army scout who played a pivotal role in the 1965 and 1971 Indo-Pak wars. Discover his story, awards, and gallery.";
  const defaultKeywords = "Ranchordas Pagi, Veer Ranchhod Pagi, Indian Army Scout, 1965 War Hero, 1971 War Hero, Indo-Pak War, Banaskantha, Border Security Force, Pagi, Indian War Heroes";
  const siteUrl = "https://ranchordaspagi.org"; // Replace with actual domain if available
  const defaultImage = "/assets/images.webp";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta property="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Ranchordas Pagi Legacy Foundation" />
      <meta name="language" content="English" />
    </Helmet>
  );
}