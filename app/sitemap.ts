import type { MetadataRoute } from 'next';
import { getTutorialStructure } from '@/app/lib/content';
import { getAllPosts } from '@/app/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vedicskill.com';
  const tutorials = getTutorialStructure();
  const posts = getAllPosts();

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
  const tutorialPages: MetadataRoute.Sitemap = tutorials.courses.flatMap((course: any) =>
    course.sections.flatMap((section: any) =>
      section.lessons.map((lesson: any) => ({
        url: `${baseUrl}/tutorials/${course.slug}/${lesson.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    )
  );

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...tutorialPages, ...blogPages];
}