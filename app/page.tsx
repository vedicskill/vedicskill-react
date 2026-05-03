import Link from "next/link";
import { getTutorialStructure } from "@/app/lib/content";
import { getAllPosts } from "@/app/lib/blog";

export default function HomePage() {
  const tutorials = getTutorialStructure();
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="px-8 py-20">
        <div className="max-w-6xl">
          <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
            Learn AI, Data Science & Engineering
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            Practical tutorials, real-world projects, and structured learning paths.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/tutorials"
              className="bg-primary text-white px-6 py-3 rounded-lg"
            >
              Explore Tutorials
            </Link>

            <Link
              href="/blog"
              className="border border-gray-300 px-6 py-3 rounded-lg"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* TUTORIALS */}
      <section className="px-8 py-16 border-t">
        <div className="max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Tutorials
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tutorials.courses.map((course: any) => (
              <div
                key={course.slug}
                className="border rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {course.description}
                </p>

                <Link
                  href={`/tutorials/${course.slug}/${course.lessons[0]}`}
                  className="inline-block mt-4 text-primary"
                >
                  Start →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="px-8 py-16 border-t">
        <div className="max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <div key={post.slug} className="border p-5 rounded-xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-medium text-gray-900 hover:text-primary"
                >
                  {post.title}
                </Link>

                <p className="text-sm text-gray-600 mt-2">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 border-t">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-900">
            Start your learning journey today
          </h2>

          <p className="text-gray-600 mt-4">
            Explore tutorials, build projects, and grow your skills.
          </p>

          <Link
            href="/tutorials"
            className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

    </div>
  );
}