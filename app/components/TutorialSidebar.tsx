import Link from "next/link";
import { getLessons } from "@/app/lib/content";

export default function TutorialSidebar({
  course,
  currentLesson,
}: {
  course: string;
  currentLesson: string;
}) {
  const lessons = getLessons(course);

  return (
    <div className="w-full xl:w-72 flex-none border-r border-[#86BC25]/40 pr-6 sticky top-24 self-start">
      <div className="bg-white border border-[#86BC25]/40 rounded-lg p-6">
        <h2 className="font-bold text-lg text-[#000922] mb-6 capitalize">
          {course.replace("-", " ")}
        </h2>

        <ul className="space-y-2">
          {lessons.map((lesson) => {
            const isActive = lesson.slug === currentLesson;

            return (
              <li key={lesson.slug}>
                <Link
                  href={`/tutorials/${course}/${lesson.slug}`}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                    isActive
                      ? "bg-[#86BC25]/30 text-[#86BC25] border border-[#86BC25]/60"
                      : "text-[#666666] hover:text-[#86BC25] hover:bg-[#86BC25]/10"
                  }`}
                >
                  {lesson.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}