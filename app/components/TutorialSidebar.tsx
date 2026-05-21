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
    <div className="w-full xl:w-72 flex-none border-r border-[#E5E5E5] pr-6 sticky top-24 self-start">
      <div className="bg-white border border-[#E5E5E5] rounded-lg p-6">
        {/* Course Title */}
        <h2 className="font-bold text-lg text-[#161616] mb-6 capitalize">
          {course.replace(/-/g, " ")}
        </h2>

        {/* Sections */}
        <div className="space-y-8">
          {sidebarSections.map((section: any) => (
            <div key={section.title}>
              {/* Section Title */}
              <h3 className="text-xs uppercase tracking-wider text-[#999999] font-bold mb-3 px-2">
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
                            ? "bg-[#E5E5E5] text-[#161616] border border-[#D9D9D9]"
                            : "text-[#666666] hover:text-[#161616] hover:bg-gray-50"
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
