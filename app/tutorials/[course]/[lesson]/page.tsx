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
    <div className="flex w-full px-4 md:px-8 py-8 gap-6 md:gap-12 bg-[#0F172A] min-h-screen">
      
      {/* Sidebar */}
      <TutorialSidebar
        course={course}
        currentLesson={lesson}
      />

      {/* Main Content */}
      <div className="flex-1 max-w-4xl">

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E8EAED] leading-tight mb-4">
            {data.meta.title}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full" />
        </div>

        {/* Content */}
        <div
          className="prose prose-invert max-w-none
            prose-headings:text-[#E8EAED]
            prose-headings:font-bold
            prose-h1:text-4xl
            prose-h2:text-3xl
            prose-h3:text-2xl
            prose-p:text-[#94A3B8]
            prose-p:leading-relaxed
            prose-p:my-4
            prose-a:text-[#10B981]
            prose-a:hover:text-[#34D399]
            prose-strong:text-[#E8EAED]
            prose-strong:font-bold
            prose-code:text-[#F59E0B]
            prose-code:bg-[#1E293B]
            prose-code:px-2
            prose-code:py-1
            prose-code:rounded
            prose-code:font-mono
            prose-code:text-sm
            prose-pre:bg-[#1E293B]
            prose-pre:border
            prose-pre:border-[#10B981]/30
            prose-pre:rounded-lg
            prose-pre:overflow-x-auto
            prose-blockquote:border-l-4
            prose-blockquote:border-[#10B981]
            prose-blockquote:text-[#94A3B8]
            prose-blockquote:pl-4
            prose-blockquote:italic
            prose-li:text-[#94A3B8]
            prose-li:marker:text-[#10B981]
            prose-hr:border-[#10B981]/30
            prose-table:text-[#94A3B8]
            prose-th:bg-[#1E293B]
            prose-th:text-[#E8EAED]
            prose-th:border-[#10B981]/30
            prose-td:border-[#10B981]/30
          "
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-[#10B981]/30 flex justify-between items-center">
          {prevLesson ? (
            <Link
              href={`/tutorials/${course}/${prevLesson.slug}`}
              className="flex items-center gap-2 text-[#10B981] hover:text-[#34D399] transition-colors font-semibold group"
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
              className="flex items-center gap-2 text-[#10B981] hover:text-[#34D399] transition-colors font-semibold group"
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