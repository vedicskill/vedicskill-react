// import { getYaml } from "./yaml";
// import { getTutorialStructure } from "./content";
// export function getCourses() {
//   const data: any = getYaml("content/tutorials/tutorials.yaml");

//   return data.courses;
// }

// export function getCourseBySlug(slug: string) {
//   const courses = getCourses();

//   return courses.find((course: any) => course.slug === slug);
// }

// export function getAllLessons(course: any) {
//   return course.sections.flatMap((section: any) => section.lessons);
// }

// export function getFirstLesson(course: any) {
//   const firstLesson = getAllLessons(course)[0];

//   return typeof firstLesson === "string" ? firstLesson : firstLesson.slug;
// }

// export function getCourse(courseSlug: string) {
//   const data: any = getTutorialStructure();

//   return data.courses.find((course: any) => course.slug === courseSlug);
// }


import { supabase } from "@/app/lib/supabase"

export async function getCourses() {
  const { data, error } = await supabase
    .from("courses_with_active_coupons")
    .select("*")
    .order("rating", { ascending: false });

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }

  return data || [];
}