import Link from "next/link";
import { getTutorialStructure } from "@/app/lib/content";
import { getAllPosts } from "@/app/lib/blog";
import { getFirstLesson } from "@/app/lib/course";

export const metadata = {
  title: "Vedicskill",
  description:
    "Learn AI, Data Science and Engineering with structured tutorials",
};

export default function HomePage() {
  const tutorials = getTutorialStructure();
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="px-6 md:px-8 py-32 bg-white border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl text-[#161616]">
            Learn AI, Data Science & Engineering
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-[#666666] max-w-2xl">
            Structured tutorials, real-world projects, and practical learning
            paths to build industry-ready skills with hands-on experience.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 bg-[#161616] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              Explore Tutorials
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 border border-[#161616] text-[#161616] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* TUTORIALS */}
      <section className="px-6 md:px-8 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#161616] mb-4">
              Featured Tutorials
            </h2>
            <div className="h-1 w-20 bg-[#E5E5E5] rounded-full" />
            <p className="text-[#666666] mt-4 text-lg">
              Structured learning paths to master real-world skills
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tutorials.courses.map((course: any) => (
              <Link
                key={course.slug}
                href={`/tutorials/${course.slug}/${getFirstLesson(course)}`}
                className="group"
              >
                <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 hover:border-[#CCCCCC] transition-all duration-300 shadow-sm h-full">
                  {/* Accent line */}
                  <div className="h-1 w-12 bg-[#E5E5E5] rounded-full mb-5 group-hover:w-20 transition-all duration-300" />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#161616] group-hover:text-[#666666] transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#666666] mt-3">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-[#999999]">
                      {course.sections.reduce(
                        (total: number, section: any) =>
                          total + section.lessons.length,
                        0,
                      )}{" "}
                      lessons
                    </span>
                    <span className="text-[#161616] font-semibold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="px-6 md:px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#161616] mb-4">
              Premium Courses
            </h2>
            <div className="h-1 w-20 bg-[#E5E5E5] rounded-full" />
            <p className="text-[#666666] mt-4 text-lg">
              Udemy-style marketplace with curated courses
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group bg-white border border-[#E5E5E5] rounded-xl overflow-hidden hover:border-[#CCCCCC] transition-all duration-300 shadow-sm"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                  <span className="text-[#CCCCCC] font-mono text-sm">
                    Course Image
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#161616] group-hover:text-[#666666] transition-colors">
                    Premium Course {i}
                  </h3>
                  <p className="text-sm text-[#666666] mt-2">
                    Advanced concepts and hands-on projects
                  </p>

                  {/* Price & Rating */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#161616]">
                      $49.99
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#161616]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-6 px-4 py-2 bg-[#161616] text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All */}
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-[#161616] font-semibold hover:text-[#666666] transition-colors text-lg"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="px-6 md:px-8 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#161616] mb-4">
              Latest Articles
            </h2>
            <div className="h-1 w-20 bg-[#E5E5E5] rounded-full" />
            <p className="text-[#666666] mt-4 text-lg">
              Insights, tutorials, and practical knowledge
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 hover:border-[#CCCCCC] transition-all duration-300 shadow-sm h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 w-fit mb-4">
                    <span className="px-3 py-1 text-xs font-semibold text-[#161616] bg-gray-100 border border-[#E5E5E5] rounded-full">
                      Article
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#161616] group-hover:text-[#666666] transition-colors flex-1">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#666666] mt-3 flex-1">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                    <span className="text-xs text-[#999999]">{post.date}</span>
                    <span className="text-[#161616] font-semibold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 md:px-8 py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#161616] mb-4">
            Start Building Real Skills Today
          </h2>

          {/* Subtext */}
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mb-8">
            Explore structured tutorials, work on real-world projects, and grow
            your expertise step by step with our comprehensive learning
            platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 bg-[#161616] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              Start Learning
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-[#161616] text-[#161616] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
