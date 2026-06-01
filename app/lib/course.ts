import { getYaml } from "./yaml";
import { getTutorialStructure } from "./content";
import type {
  TutorialCourse,
  TutorialStructure,
  TutorialLesson,
} from "@/app/types";

export function getCourses(): TutorialCourse[] {
  const data = getYaml("content/tutorials/tutorials.yaml") as TutorialStructure;

  return data.courses;
}

export function getCourseBySlug(slug: string): TutorialCourse | undefined {
  const courses = getCourses();

  return courses.find((course) => course.slug === slug);
}

export function getAllLessons(course: TutorialCourse): TutorialLesson[] {
  return course.sections.flatMap((section) =>
    section.lessons.map((lesson) =>
      typeof lesson === "string" ? { slug: lesson, title: lesson, order: 0 } : lesson,
    ),
  );
}

export function getFirstLesson(course: TutorialCourse): string {
  const firstLesson = getAllLessons(course)[0];

  return firstLesson ? firstLesson.slug : "";
}

export function getCourse(courseSlug: string): TutorialCourse | undefined {
  const data = getTutorialStructure();

  return data.courses.find((course) => course.slug === courseSlug);
}
