import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({ 
  title = "Your_Name_Agency | Straightforward Marketing",
  description = "Research. Analyze. Implement. A minimalist marketing agency for B2B, B2C, and IT. Strategy, branding, and digital solutions that work.",
  image = "/preview.svg",
  url = "https://www.your-name.agency",
  type = "website"
}: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    
    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    
    {/* Additional SEO tags */}
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Your_Name_Agency" />
    <meta name="keywords" content="marketing, strategy, branding, digital, B2B, B2C, IT, Ukraine" />
  </Helmet>
);

export default SEO;
