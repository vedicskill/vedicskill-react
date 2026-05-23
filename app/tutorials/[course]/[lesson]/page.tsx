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
    <div className="flex w-full px-4 md:px-8 py-8 gap-6 md:gap-12 bg-white dark:bg-[#0F0F0F] min-h-screen">
      
      {/* Sidebar */}
      <TutorialSidebar
        course={course}
        currentLesson={lesson}
      />

      {/* Main Content */}
      <div className="flex-1 max-w-4xl">

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white leading-tight mb-4">
            {data.meta.title}
          </h1>
          <div className="h-1 w-20 bg-[#064E3B] dark:bg-[#10B981] rounded-full" />
        </div>

        {/* Content */}
        <div
          className="prose max-w-none
            prose-headings:text-[#121212]
            dark:prose-headings:text-white
            prose-headings:font-bold
            prose-h1:text-4xl
            prose-h2:text-3xl
            prose-h3:text-2xl
            prose-p:text-[#666666]
            dark:prose-p:text-[#A0A0A0]
            prose-p:leading-relaxed
            prose-p:my-4
            prose-a:text-[#064E3B]
            dark:prose-a:text-[#10B981]
            prose-a:hover:text-[#053D2E]
            dark:prose-a:hover:text-[#059669]
            prose-strong:text-[#121212]
            dark:prose-strong:text-white
            prose-strong:font-bold
            prose-code:text-[#121212]
            dark:prose-code:text-white
            prose-code:bg-[#F5F5F5]
            dark:prose-code:bg-[#1A1A1A]
            prose-code:px-2
            prose-code:py-1
            prose-code:rounded
            prose-code:font-mono
            prose-code:text-sm
            prose-pre:bg-[#F5F5F5]
            dark:prose-pre:bg-[#1A1A1A]
            prose-pre:border
            prose-pre:border-[#E8E8E8]
            dark:prose-pre:border-[#2A2A2A]
            prose-pre:rounded-lg
            prose-pre:overflow-x-auto
            prose-blockquote:border-l-4
            prose-blockquote:border-[#064E3B]
            dark:prose-blockquote:border-[#10B981]
            prose-blockquote:text-[#666666]
            dark:prose-blockquote:text-[#A0A0A0]
            prose-blockquote:pl-4
            prose-blockquote:italic
            prose-li:text-[#666666]
            dark:prose-li:text-[#A0A0A0]
            prose-li:marker:text-[#064E3B]
            dark:prose-li:marker:text-[#10B981]
            prose-hr:border-[#E8E8E8]
            dark:prose-hr:border-[#2A2A2A]
            prose-table:text-[#666666]
            dark:prose-table:text-[#A0A0A0]
            prose-th:bg-[#F5F5F5]
            dark:prose-th:bg-[#1A1A1A]
            prose-th:text-[#121212]
            dark:prose-th:text-white
            prose-th:border-[#E8E8E8]
            dark:prose-th:border-[#2A2A2A]
            prose-td:border-[#E8E8E8]
            dark:prose-td:border-[#2A2A2A]
          "
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-[#E8E8E8] dark:border-[#2A2A2A] flex justify-between items-center">
          {prevLesson ? (
            <Link
              href={`/tutorials/${course}/${prevLesson.slug}`}
              className="flex items-center gap-2 text-[#121212] dark:text-white hover:text-[#064E3B] dark:hover:text-[#10B981] transition-colors font-semibold group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {prevLesson.title}
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/tutorials/${course}/${nextLesson.slug}`}
              className="flex items-center gap-2 text-[#121212] dark:text-white hover:text-[#064E3B] dark:hover:text-[#10B981] transition-colors font-semibold group"
            >
              {nextLesson.title}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : null}
        </div>

      </div>
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const { course, lesson } = await params;

  const data = await getMarkdownContent(
    `content/tutorials/${course}/${lesson}.md`
  );

  return {
    title: data.meta.title,
    description: data.meta.description || "Tutorial lesson",
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
    },
  };
}