import Image from "next/image";
import Link from "next/link";
import type { TutorialSection } from "@/app/types";

import { getTutorialStructure } from "@/app/lib/content";
import { getFirstLesson } from "@/app/lib/course";

import { getCourses } from "@/app/lib/courses";

export const metadata = {
  title:
    "VedicSkill Academy | Online Courses in AI, Data Science & Engineering",

  description:
    "VedicSkill Academy offers career-focused online courses in AI, Data Science, and Engineering. Learn with structured pathways, live projects, and expert guidance to build practical skills.",

  keywords: [
    "AI course",
    "Data Science course",
    "Engineering course",
    "online courses",
    "machine learning training",
    "career-ready skills",
    "VedicSkill Academy",
  ],

  openGraph: {
    title:
      "VedicSkill Academy - Master AI, Data Science & Engineering Courses",

    description:
      "Browse practical online courses in AI, Data Science, Machine Learning, and Engineering. Start your career-ready learning journey with VedicSkill Academy.",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "https://vedicskill.com/og-image-home.png",
        width: 1200,
        height: 630,
        alt: "Vedicskill Learning Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "VedicSkill Academy - Learn AI, Data Science & Engineering",

    description:
      "Master job-ready skills with practical courses, hands-on projects, and expert-led learning at VedicSkill Academy.",
  },

  alternates: {
    canonical: "https://vedicskill.com/",
  },
};

export default async function HomePage() {
  const tutorials = getTutorialStructure();

  const premiumCourses = await getCourses();

  return (
    <div className="w-full bg-white dark:bg-[#0F0F0F] transition-colors duration-300">

      {/* HERO SECTION */}
      <section className="px-6 md:px-8 py-24 md:py-32 lg:py-40 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A] relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl text-[#121212] dark:text-white tracking-tight">

            Build Your Career with Practical Courses

          </h1>

          {/* Subtext */}
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-[#666666] dark:text-[#A0A0A0] max-w-2xl leading-relaxed">

            Explore curated online courses in AI, Data Science, and Engineering backed by real projects, expert guidance, and career-focused outcomes.

          </p>

          {/* CTA Buttons */}
          <div className="mt-10 md:mt-12 flex flex-wrap gap-4">

            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 bg-[#064E3B] text-white px-6 py-3.5 rounded-2xl font-semibold hover:bg-[#053D2E] active:scale-95 transition-all duration-500 ease-out dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669]"
            >

              Explore Courses

            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#064E3B] text-[#064E3B] px-6 py-3 rounded-2xl font-semibold hover:bg-[#064E3B] hover:text-white transition-all duration-500 ease-out dark:border-[#10B981] dark:text-[#10B981] dark:hover:bg-[#10B981] dark:hover:text-[#121212]"
            >

              Browse Courses

            </Link>

          </div>
        </div>
      </section>

      {/* FEATURED TUTORIALS SECTION */}
      <section className="px-6 md:px-8 py-24 md:py-32 bg-[#F5F5F5] dark:bg-[#1A1A1A]">

        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-12 md:mb-16">

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">

              Featured Courses

            </h2>

            <div className="h-1 w-16 bg-gradient-to-r from-[#064E3B] to-[#064E3B] rounded-full mb-6" />

            <p className="text-[#666666] dark:text-[#A0A0A0] text-lg leading-relaxed">

              Curated course pathways designed for practical learning and career growth.

            </p>

          </div>

          {/* Tutorials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {tutorials.courses.map((course) => (
              <Link
                key={course.slug}
                href={`/tutorials/${course.slug}/${getFirstLesson(course)}`}
                className="group"
              >

                <div className="bg-white dark:bg-[#0F0F0F] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl p-6 hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-500 ease-out h-full flex flex-col">

                  <div className="h-1 w-12 bg-[#064E3B] dark:bg-[#10B981] rounded-full mb-6 group-hover:w-20 transition-all duration-700 ease-out" />

                  <h3 className="text-xl font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors duration-500 ease-out">

                    {course.title}

                  </h3>

                  <p className="text-sm text-[#666666] dark:text-[#A0A0A0] mt-3 leading-relaxed flex-1">

                    {course.description}

                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-xs text-[#999999] dark:text-[#707070]">

                      {course.sections.reduce(
                        (total: number, section: TutorialSection) =>
                          total + section.lessons.length,
                        0,
                      )}{" "}
                      lessons

                    </span>

                    <span className="text-[#064E3B] dark:text-[#10B981] font-semibold">

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
      <section className="px-6 md:px-8 py-24 md:py-32 bg-white dark:bg-[#0F0F0F]">

        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-12 md:mb-16">

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">

              Premium Courses

            </h2>

            <div className="h-1 w-16 bg-gradient-to-r from-[#064E3B] to-[#064E3B] rounded-full mb-6" />

            <p className="text-[#666666] dark:text-[#A0A0A0] text-lg leading-relaxed">

              Advanced learning experiences with structured guidance

            </p>

          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {premiumCourses.slice(0, 6).map((course) => (
              <article
                key={course.course_id}
                className="group bg-white dark:bg-[#0F0F0F] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-500 ease-out flex flex-col"
              >

                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden bg-[#F5F5F5] dark:bg-[#1A1A1A]">
                  <Image
                    src={
                      course.course_image &&
                      course.course_image.trim() !== ""
                        ? course.course_image
                        : "https://placehold.co/600x400?text=Course"
                    }
                    alt={course.course_name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">

                  {/* Top Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">

                    <span className="px-3 py-1 text-xs font-semibold text-[#064E3B] dark:text-[#10B981] bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-full">

                      {course.course_level || "All Levels"}

                    </span>

                    <span className="px-3 py-1 text-xs font-semibold text-[#666666] dark:text-[#A0A0A0] bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-full">

                      {course.platform || "Platform"}

                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors duration-500 ease-out line-clamp-2 leading-relaxed">

                    {course.course_name}

                  </h3>

                  {/* Keywords */}
                  {course.keywords && (
                    <div className="flex flex-wrap gap-2 mt-4">

                      {typeof course.keywords === "string" &&
                        course.keywords
                          .split(",")
                          .slice(0, 3)
                          .map((keyword: string, index: number) => (
                            <span
                              key={`${keyword}-${index}`}
                              className="px-2.5 py-1 text-[11px] font-medium text-[#666666] dark:text-[#A0A0A0] bg-[#F8F8F8] dark:bg-[#252525] border border-[#E8E8E8] dark:border-[#303030] rounded-full"
                            >

                              {keyword.trim()}

                            </span>
                          ))}

                    </div>
                  )}

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-[#666666] dark:text-[#A0A0A0]">

                    {/* Duration */}
                    <div className="flex items-center gap-1.5">

                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7v5l3 3"
                        />
                      </svg>

                      <span>
                        {course.duration || 0} hrs
                      </span>

                    </div>

                    {/* Lessons */}
                    <div className="flex items-center gap-1.5">

                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.483 9.246 5 7.5 5S4.168 5.483 3 6.253v13C4.168 18.483 5.754 18 7.5 18s3.332.483 4.5 1.253m0-13C13.168 5.483 14.754 5 16.5 5c1.746 0 3.332.483 4.5 1.253v13C19.832 18.483 18.246 18 16.5 18c-1.746 0-3.332.483-4.5 1.253"
                        />
                      </svg>

                      <span>
                        {course.lessons || 0} lessons
                      </span>

                    </div>

                  </div>

                  {/* Rating */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#E8E8E8] dark:border-[#2A2A2A] pt-5">

                    <div className="flex items-center gap-2">

                      <div className="flex gap-1">

                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating || 0)
                                ? "text-[#064E3B] dark:text-[#10B981]"
                                : "text-[#E8E8E8] dark:text-[#2A2A2A]"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}

                      </div>

                      <span className="text-sm font-medium text-[#121212] dark:text-white">

                        {course.rating || 0}

                      </span>

                    </div>

                    <span className="text-sm text-[#999999] dark:text-[#707070]">

                      {course.students_rated?.toLocaleString() || 0}
                      {" "}students

                    </span>

                  </div>

                  {/* Price + CTA */}
                  <div className="mt-6">

                    {/* Price */}
                    <div className="flex items-end gap-3 mb-5">

                      <span className="text-3xl font-bold text-[#064E3B] dark:text-[#10B981]">

                        {course.currency_symbol || "$"}
                        {course.course_price || 0}

                      </span>

                      {course.course_base_price &&
                        course.course_price !== undefined &&
                        course.course_base_price > course.course_price && (
                          <span className="text-lg text-[#999999] dark:text-[#707070] line-through">

                            {course.currency_symbol || "$"}
                            {course.course_base_price}

                          </span>
                        )}

                    </div>

                    {/* CTA */}
                    <Link
                      href={course.course_url || "#"}
                      target="_blank"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#064E3B] text-white rounded-2xl font-semibold hover:bg-[#053D2E] transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669]"
                    >

                      Enroll Now

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

                  </div>

                </div>
              </article>
            ))}

          </div>

          {/* View All */}
          <div className="mt-12 text-center">

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-[#064E3B] dark:text-[#10B981] font-semibold hover:text-[#053D2E] dark:hover:text-[#059669] transition-colors duration-500 ease-out text-lg"
            >

              View All Courses →

            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}