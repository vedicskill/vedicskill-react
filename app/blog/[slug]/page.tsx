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
    <div className="w-full bg-white min-h-screen">
      
      {/* ARTICLE HEADER */}
      <div className="px-6 md:px-8 py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#161616] hover:text-[#666666] transition-colors text-sm font-semibold mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#161616] mb-6">
            {data.meta.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#161616] rounded-full flex items-center justify-center text-white font-bold">
              V
            </div>
            <div>
              <p className="font-semibold text-[#161616]">VedicSkill</p>
              <p className="text-sm text-[#666666]">{data.meta.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <div className="px-6 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose max-w-none
              prose-headings:text-[#161616]
              prose-headings:font-bold
              prose-h1:text-4xl
              prose-h2:text-3xl
              prose-h3:text-2xl
              prose-p:text-[#333333]
              prose-p:leading-relaxed
              prose-a:text-[#161616]
              prose-a:hover:text-[#666666]
              prose-strong:text-[#161616]
              prose-code:text-[#161616]
              prose-code:bg-gray-100
              prose-code:px-2
              prose-code:py-1
              prose-code:rounded
              prose-code:font-mono
              prose-pre:bg-gray-50
              prose-pre:border
              prose-pre:border-[#E5E5E5]
              prose-blockquote:border-l-4
              prose-blockquote:border-[#E5E5E5]
              prose-blockquote:text-[#666666]
              prose-li:text-[#333333]
              prose-hr:border-[#E5E5E5]
            "
            dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="px-6 md:px-8 py-12 bg-white border-t border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#161616] text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
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