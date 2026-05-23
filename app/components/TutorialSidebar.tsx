import Link from "next/link";
import { getCourse } from "@/app/lib/course";
import { getLessonMetadata } from "@/app/lib/markdown";

export default async function TutorialSidebar({
  course,
  currentLesson,
}: {
  course: string;
  currentLesson: string;
}) {
  const courseData = getCourse(course);

  // Build sidebar sections with markdown metadata
  const sidebarSections = await Promise.all(
    courseData.sections.map(async (section: any) => {
      const lessons = await Promise.all(
        section.lessons.map(async (lesson: any) => {
          const slug = typeof lesson === "string" ? lesson : lesson.slug;

          const metadata = await getLessonMetadata(course, slug);

          return {
            slug,
            title: metadata?.title || slug,
            order: metadata?.order || 999,
          };
        }),
      );

      // Sort by markdown frontmatter order
      lessons.sort((a, b) => a.order - b.order);

      return {
        ...section,
        lessons,
      };
    }),
  );

  return (
    <div className="w-full xl:w-72 flex-none border-r border-[#E8E8E8] dark:border-[#2A2A2A] pr-6 sticky top-24 self-start">
      <div className="bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl p-6">
        {/* Course Title */}
        <h2 className="font-bold text-lg text-[#121212] dark:text-white mb-6 capitalize">
          {course.replace(/-/g, " ")}
        </h2>

        {/* Sections */}
        <div className="space-y-8">
          {sidebarSections.map((section: any) => (
            <div key={section.title}>
              {/* Section Title */}
              <h3 className="text-xs uppercase tracking-wider text-[#999999] dark:text-[#707070] font-bold mb-3 px-2">
                {section.title}
              </h3>

              {/* Lessons */}
              <ul className="space-y-2">
                {section.lessons.map((lesson: any) => {
                  const isActive = lesson.slug === currentLesson;

                  return (
                    <li key={lesson.slug}>
                      <Link
                        href={`/tutorials/${course}/${lesson.slug}`}
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                          isActive
                            ? "bg-[#064E3B] text-white dark:bg-[#10B981] dark:text-[#121212] border border-[#053D2E] dark:border-[#059669]"
                            : "text-[#666666] dark:text-[#A0A0A0] hover:text-[#121212] dark:hover:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A]"
                        }`}
                      >
                        {lesson.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
