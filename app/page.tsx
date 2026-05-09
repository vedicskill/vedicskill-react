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
      <section className="px-6 md:px-8 py-32 bg-gradient-to-b from-[#000922] via-[#0f1a3a] to-[#000922] border-b border-[#86BC25]/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#86BC25]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#86BC25]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl bg-gradient-to-r from-[#FFFFFF] via-[#86BC25] to-[#a8d63f] bg-clip-text text-transparent">
            Learn AI, Data Science & Engineering
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-[#c0c0c0] max-w-2xl">
            Structured tutorials, real-world projects, and practical learning paths to build industry-ready skills with hands-on experience.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#86BC25] to-[#a8d63f] text-[#000922] px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#86BC25]/50 transition-all duration-300 transform hover:scale-105"
            >
              Explore Tutorials
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 border border-[#86BC25]/50 text-[#86BC25] px-6 py-3 rounded-lg font-semibold hover:bg-[#86BC25]/10 transition-all duration-300"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* TUTORIALS */}
      <section className="px-6 md:px-8 py-24 bg-[#000922]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
              Featured Tutorials
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#86BC25] to-[#a8d63f] rounded-full" />
            <p className="text-[#c0c0c0] mt-4 text-lg">
              Structured learning paths to master real-world skills
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tutorials.courses.map((course: any) => (
              <Link
                key={course.slug}
                href={`/tutorials/${course.slug}/${course.lessons[0]}`}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#0f1a3a] to-[#000922] border border-[#86BC25]/30 rounded-xl p-6 hover:border-[#86BC25]/70 transition-all duration-300 hover:shadow-lg hover:shadow-[#86BC25]/20 h-full">
                  
                  {/* Accent line */}
                  <div className="h-1 w-12 bg-gradient-to-r from-[#86BC25] to-[#a8d63f] rounded-full mb-5 group-hover:w-20 transition-all duration-300" />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#FFFFFF] group-hover:text-[#86BC25] transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#c0c0c0] mt-3">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-[#808080]">
                      {course.lessons.length} lessons
                    </span>
                    <span className="text-[#86BC25] font-semibold group-hover:translate-x-1 transition-transform">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#000922] mb-4">
              Premium Courses
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#86BC25] to-[#a8d63f] rounded-full" />
            <p className="text-[#666666] mt-4 text-lg">
              Udemy-style marketplace with curated courses
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group bg-white border border-[#86BC25]/30 rounded-xl overflow-hidden hover:border-[#86BC25]/70 transition-all duration-300 hover:shadow-lg hover:shadow-[#86BC25]/20"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-[#86BC25]/20 to-[#86BC25]/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#86BC25]/10 to-transparent animate-pulse" />
                  <span className="text-[#888888] font-mono text-sm">Course Image</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#000922] group-hover:text-[#86BC25] transition-colors">
                    Premium Course {i}
                  </h3>
                  <p className="text-sm text-[#666666] mt-2">
                    Advanced concepts and hands-on projects
                  </p>

                  {/* Price & Rating */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#86BC25]">$49.99</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#86BC25]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-6 px-4 py-2 bg-[#86BC25] text-[#000922] rounded-lg font-semibold hover:bg-[#a8d63f] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#86BC25]/50">
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
              className="inline-flex items-center gap-2 text-[#86BC25] font-semibold hover:text-[#a8d63f] transition-colors text-lg"
            >
              View All Courses →
            </Link>
          </div>

        </div>
      </section>

      {/* BLOG */}
      <section className="px-6 md:px-8 py-24 bg-[#000922]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
              Latest Articles
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#86BC25] to-[#a8d63f] rounded-full" />
            <p className="text-[#c0c0c0] mt-4 text-lg">
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
                <div className="bg-gradient-to-br from-[#0f1a3a] to-[#000922] border border-[#86BC25]/30 rounded-xl p-6 hover:border-[#86BC25]/70 transition-all duration-300 hover:shadow-lg hover:shadow-[#86BC25]/20 h-full flex flex-col">
                  
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 w-fit mb-4">
                    <span className="px-3 py-1 text-xs font-semibold text-[#86BC25] bg-[#86BC25]/10 border border-[#86BC25]/30 rounded-full">
                      Article
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#86BC25] transition-colors flex-1">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#c0c0c0] mt-3 flex-1">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 pt-4 border-t border-[#86BC25]/20 flex items-center justify-between">
                    <span className="text-xs text-[#808080]">
                      {post.date}
                    </span>
                    <span className="text-[#86BC25] font-semibold group-hover:translate-x-1 transition-transform">
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#000922] mb-4">
            Start Building Real Skills Today
          </h2>

          {/* Subtext */}
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mb-8">
            Explore structured tutorials, work on real-world projects, and grow your expertise step by step with our comprehensive learning platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#86BC25] to-[#a8d63f] text-[#000922] px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#86BC25]/50 transition-all duration-300 transform hover:scale-105"
            >
              Start Learning
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-[#86BC25]/50 text-[#86BC25] px-8 py-3 rounded-lg font-semibold hover:bg-[#86BC25]/10 transition-all duration-300"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

