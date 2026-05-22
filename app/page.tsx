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
      <section className="px-6 md:px-8 py-32 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl text-[#121212] dark:text-white tracking-tight">
            Learn AI, Data Science & Engineering
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-[#666666] dark:text-[#A0A0A0] max-w-2xl leading-relaxed">
            Structured tutorials, real-world projects, and practical learning
            paths to build industry-ready skills with hands-on experience.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 bg-[#064E3B] text-white px-6 py-3.5 rounded-2xl font-semibold hover:bg-[#053D2E] active:scale-95 transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669]"
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
              className="inline-flex items-center gap-2 border-2 border-[#064E3B] text-[#064E3B] px-6 py-3 rounded-2xl font-semibold hover:bg-[#064E3B] hover:text-white transition-all duration-300 dark:border-[#10B981] dark:text-[#10B981] dark:hover:bg-[#10B981] dark:hover:text-[#121212]"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* TUTORIALS */}
      <section className="px-6 md:px-8 py-24 bg-[#F5F5F5] dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">
              Featured Tutorials
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#064E3B] to-[#064E3B] rounded-full mb-6" />
            <p className="text-[#666666] dark:text-[#A0A0A0] text-lg leading-relaxed">
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
                <div className="bg-white dark:bg-[#0F0F0F] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl p-6 hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-300 h-full">
                  {/* Accent line */}
                  <div className="h-1 w-12 bg-[#064E3B] dark:bg-[#10B981] rounded-full mb-6 group-hover:w-20 transition-all duration-300" />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#666666] dark:text-[#A0A0A0] mt-3 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-[#999999] dark:text-[#707070]">
                      {course.sections.reduce(
                        (total: number, section: any) =>
                          total + section.lessons.length,
                        0,
                      )}{" "}
                      lessons
                    </span>
                    <span className="text-[#064E3B] dark:text-[#10B981] font-semibold group-hover:translate-x-1 transition-transform">
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
      <section className="px-6 md:px-8 py-24 bg-white dark:bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">
              Premium Courses
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#064E3B] to-[#064E3B] rounded-full mb-6" />
            <p className="text-[#666666] dark:text-[#A0A0A0] text-lg leading-relaxed">
              Udemy-style marketplace with curated courses
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-[#F5F5F5] dark:bg-[#2A2A2A] flex items-center justify-center relative overflow-hidden">
                  <span className="text-[#999999] dark:text-[#707070] font-mono text-sm">
                    Course Image
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors">
                    Premium Course {i}
                  </h3>
                  <p className="text-sm text-[#666666] dark:text-[#A0A0A0] mt-2 leading-relaxed">
                    Advanced concepts and hands-on projects
                  </p>

                  {/* Price & Rating */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#121212] dark:text-white">
                      $49.99
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#064E3B] dark:text-[#10B981]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-6 px-4 py-3 bg-[#064E3B] text-white rounded-2xl font-semibold hover:bg-[#053D2E] transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669]">
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
              className="inline-flex items-center gap-2 text-[#064E3B] dark:text-[#10B981] font-semibold hover:text-[#053D2E] dark:hover:text-[#059669] transition-colors text-lg"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="px-6 md:px-8 py-24 bg-[#F5F5F5] dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">
              Latest Articles
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#064E3B] to-[#064E3B] rounded-full mb-6" />
            <p className="text-[#666666] dark:text-[#A0A0A0] text-lg leading-relaxed">
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
                <div className="bg-white dark:bg-[#0F0F0F] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl p-6 hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-300 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 w-fit mb-4">
                    <span className="px-3 py-1 text-xs font-semibold text-[#064E3B] dark:text-[#10B981] bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-full">
                      Article
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors flex-1">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#666666] dark:text-[#A0A0A0] mt-3 flex-1 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 pt-4 border-t border-[#E8E8E8] dark:border-[#2A2A2A] flex items-center justify-between">
                    <span className="text-xs text-[#999999] dark:text-[#707070]">{post.date}</span>
                    <span className="text-[#064E3B] dark:text-[#10B981] font-semibold group-hover:translate-x-1 transition-transform">
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
      <section className="px-6 md:px-8 py-32 bg-white dark:bg-[#0F0F0F] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">
            Start Building Real Skills Today
          </h2>

          {/* Subtext */}
          <p className="text-[#666666] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore structured tutorials, work on real-world projects, and grow
            your expertise step by step with our comprehensive learning
            platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 bg-[#064E3B] text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-[#053D2E] active:scale-95 transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669]"
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
              className="inline-flex items-center gap-2 border-2 border-[#064E3B] text-[#064E3B] px-8 py-3 rounded-2xl font-semibold hover:bg-[#064E3B] hover:text-white transition-all duration-300 dark:border-[#10B981] dark:text-[#10B981] dark:hover:bg-[#10B981] dark:hover:text-[#121212]"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
