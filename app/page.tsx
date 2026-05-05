import Link from "next/link";
import { getTutorialStructure } from "@/app/lib/content";
import { getAllPosts } from "@/app/lib/blog";

export const metadata = {
  title: "Vedicskill",
  description: "Learn AI, Data Science and Engineering with structured tutorials",
};

export default function HomePage() {
  const tutorials = getTutorialStructure();
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="px-8 py-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-6xl">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl">
          Learn AI, Data Science & Engineering
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-white/90 max-w-2xl">
          Structured tutorials, real-world projects, and practical learning paths to build industry-ready skills.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/tutorials"
            className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Explore Tutorials
          </Link>

          <Link
            href="/blog"
            className="border border-white/40 px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Read Blog
          </Link>
        </div>

      </div>
    </section>

      {/* TUTORIALS */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl">

          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900">
              Tutorials
            </h2>
            <p className="text-gray-600 mt-2">
              Structured learning paths to master real-world skills
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {tutorials.courses.map((course: any) => (
              <div
                key={course.slug}
                className="group bg-white border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 ease-out"
              >
                
                {/* Accent line */}
                <div className="h-1 w-12 bg-primary mb-5 rounded" />

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="mt-4 text-xs text-gray-500">
                  {course.lessons.length} lessons
                </div>

                {/* CTA */}
                <Link
                  href={`/tutorials/${course.slug}/${course.lessons[0]}`}
                  className="inline-block mt-6 text-primary font-medium group-hover:underline"
                >
                  Start Learning →
                </Link>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BLOG */}
      <section className="px-8 py-20">
        <div className="max-w-6xl">

          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900">
              Latest Articles
            </h2>
            <p className="text-gray-600 mt-2">
              Insights, tutorials, and practical knowledge
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <div
                key={post.slug}
                className="group border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] transition-all duration-200"
              >
                {/* Title */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-semibold text-gray-900 group-hover:text-primary"
                >
                  {post.title}
                </Link>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-3">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="mt-4 text-xs text-gray-400">
                  {post.date}
                </div>

                {/* CTA */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-6 text-primary text-sm font-medium group-hover:underline"
                >
                  Read Article →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl">

          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-tight">
            Start Building Real Skills Today
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-white/90 text-lg max-w-2xl">
            Explore structured tutorials, work on real-world projects, and grow your expertise step by step.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tutorials"
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Start Learning
            </Link>

            <Link
              href="/blog"
              className="border border-white/40 px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Explore Articles
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

