import Link from "next/link";
import { getTutorialStructure } from "@/app/lib/content";
import { getAllPosts } from "@/app/lib/blog";
import { getFirstLesson } from "@/app/lib/course";

export const metadata = {
  title: "Vedicskill - Learn AI, Data Science & Engineering",
  description:
    "Learn AI, Data Science and Engineering with structured tutorials, real-world projects, and practical learning paths to build industry-ready skills.",
};

export default function HomePage() {
  const tutorials = getTutorialStructure();
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="px-6 md:px-8 py-24 md:py-32 lg:py-40 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl text-[#121212] dark:text-white tracking-tight">
            Learn AI, Data Science & Engineering
          </h1>

          {/* Subtext */}
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-[#666666] dark:text-[#A0A0A0] max-w-2xl leading-relaxed">
            Structured tutorials, real-world projects, and practical learning paths to build industry-ready skills with hands-on experience.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 md:mt-12 flex flex-wrap gap-4">
            <Link
              href="/tutorials"
              className="inline-flex items-center justify-center gap-2 bg-[#064E3B] text-white px-6 py-3.5 rounded-2xl font-semibold hover:bg-[#053D2E] active:scale-95 transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0F0F0F]"
            >
              Explore Tutorials
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
              className="inline-flex items-center justify-center gap-2 border-2 border-[#064E3B] text-[#064E3B] px-6 py-3 rounded-2xl font-semibold hover:bg-[#064E3B] hover:text-white transition-all duration-300 dark:border-[#10B981] dark:text-[#10B981] dark:hover:bg-[#10B981] dark:hover:text-[#121212] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0F0F0F]"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED TUTORIALS SECTION */}
      <section className="px-6 md:px-8 py-24 md:py-32 bg-[#F5F5F5] dark:bg-[#1A1A1A]" aria-labelledby="featured-tutorials-heading">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <h2
              id="featured-tutorials-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight"
            >
              Featured Tutorials
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#064E3B] to-[#064E3B] rounded-full mb-6" />
            <p className="text-[#666666] dark:text-[#A0A0A0] text-lg leading-relaxed">
              Structured learning paths to master real-world skills
            </p>
          </div>

          {/* Tutorials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.courses.map((course: any) => (
              <Link
                key={course.slug}
                href={`/tutorials/${course.slug}/${getFirstLesson(course)}`}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] rounded-2xl"
              >
                <div className="bg-white dark:bg-[#0F0F0F] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl p-6 hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-300 h-full flex flex-col">
                  {/* Accent line */}
                  <div className="h-1 w-12 bg-[#064E3B] dark:bg-[#10B981] rounded-full mb-6 group-hover:w-20 transition-all duration-300" />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#666666] dark:text-[#A0A0A0] mt-3 leading-relaxed flex-1">
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
                    <span className="text-[#064E3B] dark:text-[#10B981] font-semibold group-hover:translate-x-1 transition-transform" aria-hidden="true">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM COURSES SECTION */}
      <section className="px-6 md:px-8 py-24 md:py-32 bg-white dark:bg-[#0F0F0F]" aria-labelledby="premium-courses-heading">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <h2
              id="premium-courses-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight"
            >
              Premium Courses
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#064E3B] to-[#064E3B] rounded-full mb-6" />
            <p className="text-[#666666] dark:text-[#A0A0A0] text-lg leading-relaxed">
              Udemy-style marketplace with curated courses
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="group bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981]"
              >
                {/* Image Placeholder */}
                <div
                  className="w-full h-48 bg-[#F5F5F5] dark:bg-[#2A2A2A] flex items-center justify-center relative overflow-hidden"
                  role="img"
                  aria-label={`Course image for Premium Course ${i}`}
                >
                  <span className="text-[#999999] dark:text-[#707070] font-mono text-sm">
                    Course Image
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors">
                    Premium Course {i}
                  </h3>
                  <p className="text-sm text-[#666666] dark:text-[#A0A0A0] mt-3 leading-relaxed flex-1">
                    Advanced concepts and hands-on projects
                  </p>

                  {/* Price & Rating */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#121212] dark:text-white">
                      $49.99
                    </span>
                    <div className="flex gap-1" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#064E3B] dark:text-[#10B981]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-6 px-4 py-3 bg-[#064E3B] text-white rounded-2xl font-semibold hover:bg-[#053D2E] transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0F0F0F]">
                    Enroll Now
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-[#064E3B] dark:text-[#10B981] font-semibold hover:text-[#053D2E] dark:hover:text-[#059669] transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] rounded px-2 py-1"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES SECTION */}
      <section className="px-6 md:px-8 py-24 md:py-32 bg-[#F5F5F5] dark:bg-[#1A1A1A]" aria-labelledby="latest-articles-heading">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <h2
              id="latest-articles-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight"
            >
              Latest Articles
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#064E3B] to-[#064E3B] rounded-full mb-6" />
            <p className="text-[#666666] dark:text-[#A0A0A0] text-lg leading-relaxed">
              Insights, tutorials, and practical knowledge
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] rounded-2xl"
              >
                <article className="bg-white dark:bg-[#0F0F0F] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl p-6 hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-300 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 w-fit mb-4">
                    <span className="px-3 py-1 text-xs font-semibold text-[#064E3B] dark:text-[#10B981] bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-full">
                      Article
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#666666] dark:text-[#A0A0A0] mt-3 flex-1 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 pt-4 border-t border-[#E8E8E8] dark:border-[#2A2A2A] flex items-center justify-between">
                    <time className="text-xs text-[#999999] dark:text-[#707070]">{post.date}</time>
                    <span className="text-[#064E3B] dark:text-[#10B981] font-semibold group-hover:translate-x-1 transition-transform" aria-hidden="true">
                      →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section className="px-6 md:px-8 py-24 md:py-32 lg:py-40 bg-white dark:bg-[#0F0F0F] relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Heading */}
          <h2
            id="cta-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight"
          >
            Start Building Real Skills Today
          </h2>

          {/* Subtext */}
          <p className="text-[#666666] dark:text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore structured tutorials, work on real-world projects, and grow your expertise step by step with our comprehensive learning platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tutorials"
              className="inline-flex items-center justify-center gap-2 bg-[#064E3B] text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-[#053D2E] active:scale-95 transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0F0F0F]"
            >
              Start Learning
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
              className="inline-flex items-center justify-center gap-2 border-2 border-[#064E3B] text-[#064E3B] px-8 py-3 rounded-2xl font-semibold hover:bg-[#064E3B] hover:text-white transition-all duration-300 dark:border-[#10B981] dark:text-[#10B981] dark:hover:bg-[#10B981] dark:hover:text-[#121212] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0F0F0F]"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
