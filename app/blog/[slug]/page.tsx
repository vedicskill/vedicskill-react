import { getMarkdownContent } from "@/app/lib/markdown";

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
    <div className="w-full px-8 py-12 max-w-4xl">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">
        {data.meta.title}
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        {data.meta.date}
      </p>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: data.contentHtml }}
      />
    </div>
  );
}