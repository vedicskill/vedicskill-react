import Link from "next/link";
import { getAllPosts } from "@/app/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="w-full px-8 py-12 max-w-5xl">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8">
        Blog
      </h1>

      <div className="space-y-6">
        {posts.map((post: any) => (
          <div key={post.slug} className="border-b pb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-medium text-gray-900 hover:text-primary"
            >
              {post.title}
            </Link>

            <p className="text-gray-600 mt-2 text-sm">
              {post.description}
            </p>

            <p className="text-xs text-gray-400 mt-2">
              {post.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}