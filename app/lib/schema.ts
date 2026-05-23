/**
 * JSON-LD Schema Markup Utilities
 * Provides structured data for better SEO and search engine understanding
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VedicSkill",
  url: "https://vedicskill.com",
  logo: "https://vedicskill.com/logo.png",
  description:
    "VedicSkill is an online learning platform providing comprehensive tutorials and courses in AI, Data Science, and Engineering.",
  sameAs: [
    "https://twitter.com/vedicskill",
    "https://linkedin.com/company/vedicskill",
    "https://github.com/vedicskill",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "support@vedicskill.com",
  },
  founder: {
    "@type": "Person",
    name: "VedicSkill Team",
  },
  foundingDate: "2024",
  areaServed: "Worldwide",
  knowsAbout: [
    "Artificial Intelligence",
    "Data Science",
    "Engineering",
    "Machine Learning",
    "Python Programming",
  ],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://vedicskill.com",
  name: "VedicSkill - AI, Data Science & Engineering Learning",
  description:
    "Comprehensive online platform for learning AI, Data Science, and Engineering with structured tutorials and real-world projects.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://vedicskill.com/search?q={search_term_string}",
    },
    query_input: "required name=search_term_string",
  },
};

export const courseCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tutorial Courses",
  description:
    "Comprehensive collection of AI, Data Science, and Engineering tutorials",
  url: "https://vedicskill.com/tutorials",
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const articleSchema = (article: {
  title: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.title,
  description: article.description,
  image: article.image || "https://vedicskill.com/default-article.png",
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    "@type": "Organization",
    name: article.author || "VedicSkill",
  },
  publisher: {
    "@type": "Organization",
    name: "VedicSkill",
    logo: {
      "@type": "ImageObject",
      url: "https://vedicskill.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": article.url,
  },
});

export const courseSchema = (course: {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  instructor?: string;
  duration?: string;
  level?: string;
  rating?: number;
  reviewCount?: number;
  price?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: course.name,
  description: course.description,
  url: course.url,
  image: course.image || "https://vedicskill.com/default-course.png",
  provider: {
    "@type": "Organization",
    name: course.provider || "VedicSkill",
    url: "https://vedicskill.com",
  },
  instructor: {
    "@type": "Person",
    name: course.instructor || "VedicSkill Team",
  },
  ...(course.duration && { duration: course.duration }),
  ...(course.level && { educationalLevel: course.level }),
  ...(course.rating && {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating,
      ratingCount: course.reviewCount || 0,
    },
  }),
  ...(course.price && {
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  }),
});

export const faqPageSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
