import { getMarkdownContent } from "@/app/lib/markdown";
import TutorialSidebar from "@/app/components/TutorialSidebar";
import { getLessons } from "@/app/lib/content";
import Link from "next/link";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>;
}) {
  const { course, lesson } = await params;

  // Load markdown content
  const data = await getMarkdownContent(
    `content/tutorials/${course}/${lesson}.md`
  );

  // Load all lessons for navigation
  const lessons = getLessons(course);

  const currentIndex = lessons.findIndex(
    (l) => l.slug === lesson
  );

  const prevLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  return (
    <div className="flex w-full px-8 py-8 gap-12">
      
      {/* Sidebar */}
      <TutorialSidebar
        course={course}
        currentLesson={lesson}
      />

      {/* Main Content */}
      <div className="flex-1 border-l pl-10">

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-gray-900 leading-tight max-w-3xl">
            {data.meta.title}
          </h1>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-4xl"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />

        {/* Navigation */}
        <div className="mt-14 pt-6 border-t flex justify-between items-center max-w-4xl">
          {prevLesson ? (
            <Link
              href={`/tutorials/${course}/${prevLesson.slug}`}
              className="text-sm text-gray-600 hover:text-primary transition"
            >
              ← {prevLesson.title}
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/tutorials/${course}/${nextLesson.slug}`}
              className="text-sm text-gray-600 hover:text-primary transition"
            >
              {nextLesson.title} →
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}