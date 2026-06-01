export type TutorialLesson = {
  slug: string;
  title: string;
  order: number;
};

export type TutorialSection = {
  title?: string;
  lessons: Array<TutorialLesson | string>;
};

export type TutorialCourse = {
  slug: string;
  title: string;
  description: string;
  level?: string;
  keywords?: string;
  sections: TutorialSection[];
};

export type TutorialStructure = {
  courses: TutorialCourse[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  [key: string]: unknown;
};

export type CourseRecord = {
  course_id: number;
  course_name: string;
  course_image?: string;
  course_url?: string;
  course_price?: number;
  course_base_price?: number;
  course_level?: string;
  currency_symbol?: string;
  platform?: string;
  keywords?: string;
  rating?: number;
  students_rated?: number;
  duration?: number;
  lessons?: number;
};

export type MarkdownContent<TMeta = Record<string, unknown>> = {
  meta: TMeta;
  contentHtml: string;
};
