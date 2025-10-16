import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://comra.ai',
      lastModified: new Date(),
      changeFrequency: 'weekly', 
      priority: 1, 
    },
    {
      url: 'https://comra.ai/login',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.3,
    },
    {
      url: 'https://comra.ai/signup',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.5, 
    },
    {
      url: 'https://comra.ai/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'never', 
      priority: 0.3,
    },
    {
      url: 'https://comra.ai/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.3,
    },
  ];
}
