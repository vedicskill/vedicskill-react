import { getMarkdownContent } from "@/app/lib/markdown";
import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getMarkdownContent<{
    title: string;
    description?: string;
    date?: string;
  }>(`content/blog/${slug}.md`);

  return (
    <div className="w-full bg-white dark:bg-[#0F0F0F] min-h-screen">
      
      {/* ARTICLE HEADER */}
      <div className="px-6 md:px-8 py-16 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#121212] dark:text-white hover:text-[#064E3B] dark:hover:text-[#10B981] transition-colors text-sm font-semibold mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#121212] dark:text-white mb-6">
            {data.meta.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#064E3B] dark:bg-[#10B981] rounded-full flex items-center justify-center text-white dark:text-[#121212] font-bold">
              V
            </div>
            <div>
              <p className="font-semibold text-[#121212] dark:text-white">VedicSkill</p>
              <p className="text-sm text-[#666666] dark:text-[#A0A0A0]">{data.meta.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <div className="px-6 md:px-8 py-16 bg-white dark:bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto">
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
              prose-a:text-[#064E3B]
              dark:prose-a:text-[#10B981]
              prose-a:hover:text-[#053D2E]
              dark:prose-a:hover:text-[#059669]
              prose-strong:text-[#121212]
              dark:prose-strong:text-white
              prose-code:text-[#121212]
              dark:prose-code:text-white
              prose-code:bg-[#F5F5F5]
              dark:prose-code:bg-[#1A1A1A]
              prose-code:px-2
              prose-code:py-1
              prose-code:rounded
              prose-code:font-mono
              prose-pre:bg-[#F5F5F5]
              dark:prose-pre:bg-[#1A1A1A]
              prose-pre:border
              prose-pre:border-[#E8E8E8]
              dark:prose-pre:border-[#2A2A2A]
              prose-blockquote:border-l-4
              prose-blockquote:border-[#064E3B]
              dark:prose-blockquote:border-[#10B981]
              prose-blockquote:text-[#666666]
              dark:prose-blockquote:text-[#A0A0A0]
              prose-li:text-[#666666]
              dark:prose-li:text-[#A0A0A0]
              prose-li:marker:text-[#064E3B]
              dark:prose-li:marker:text-[#10B981]
              prose-hr:border-[#E8E8E8]
              dark:prose-hr:border-[#2A2A2A]
            "
            dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="px-6 md:px-8 py-12 bg-white dark:bg-[#0F0F0F] border-t border-[#E8E8E8] dark:border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#064E3B] text-white rounded-2xl font-semibold hover:bg-[#053D2E] transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669]"
          >
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const data = await getMarkdownContent<{
    title: string;
    description?: string;
  }>(`content/blog/${slug}.md`);

  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}