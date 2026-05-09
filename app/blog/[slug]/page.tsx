import { getMarkdownContent } from "@/app/lib/markdown";
import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getMarkdownContent(
    `content/blog/${slug}.md`
  );

  return (
    <div className="w-full bg-[#0F172A] min-h-screen">
      
      {/* ARTICLE HEADER */}
      <div className="px-6 md:px-8 py-16 bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-b border-[#10B981]/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#10B981] hover:text-[#34D399] transition-colors text-sm font-semibold mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-[#E8EAED] via-[#10B981] to-[#38BDF8] bg-clip-text text-transparent mb-6">
            {data.meta.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-full flex items-center justify-center text-[#0F172A] font-bold">
              V
            </div>
            <div>
              <p className="font-semibold text-[#E8EAED]">VedicSkill</p>
              <p className="text-sm text-[#94A3B8]">{data.meta.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <div className="px-6 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-invert max-w-none
              prose-headings:text-[#E8EAED]
              prose-headings:font-bold
              prose-h1:text-4xl
              prose-h2:text-3xl
              prose-h3:text-2xl
              prose-p:text-[#94A3B8]
              prose-p:leading-relaxed
              prose-a:text-[#10B981]
              prose-a:hover:text-[#34D399]
              prose-strong:text-[#E8EAED]
              prose-code:text-[#F59E0B]
              prose-code:bg-[#1E293B]
              prose-code:px-2
              prose-code:py-1
              prose-code:rounded
              prose-code:font-mono
              prose-pre:bg-[#1E293B]
              prose-pre:border
              prose-pre:border-[#10B981]/30
              prose-blockquote:border-l-4
              prose-blockquote:border-[#10B981]
              prose-blockquote:text-[#94A3B8]
              prose-li:text-[#94A3B8]
              prose-hr:border-[#10B981]/30
            "
            dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="px-6 md:px-8 py-12 bg-gradient-to-t from-[#1E293B] to-[#0F172A] border-t border-[#10B981]/30">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#10B981] text-[#0F172A] rounded-lg font-semibold hover:bg-[#34D399] transition-all duration-300"
          >
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const data = await getMarkdownContent(
    `content/blog/${slug}.md`
  );

  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}