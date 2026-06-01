import type { MetadataRoute } from 'next';
import { getTutorialStructure } from '@/app/lib/content';
import { getAllPosts } from '@/app/lib/blog';
import type { BlogPost } from '@/app/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vedicskill.com';
  const tutorials = getTutorialStructure();
  const posts = getAllPosts() as BlogPost[];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Dynamic tutorial pages
  const tutorialPages: MetadataRoute.Sitemap = tutorials.courses.flatMap((course) =>
    course.sections.flatMap((section) =>
      section.lessons.map((lesson) => ({
        url: `${baseUrl}/tutorials/${course.slug}/${
          typeof lesson === "string" ? lesson : lesson.slug
        }`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    )
  );

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...tutorialPages, ...blogPages];
}