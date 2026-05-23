import { getTutorialStructure } from "../lib/content";
import Link from "next/link";
import { getFirstLesson } from "@/app/lib/course";

export const metadata = {
  title: "Structured Tutorials - Vedicskill",
  description:
    "Explore comprehensive learning paths for AI, Data Science, and Engineering. Start with structured tutorials covering beginner to advanced topics with hands-on projects.",
  keywords: [
    "tutorials",
    "learning paths",
    "structured courses",
    "AI tutorials",
    "Data Science",
    "Engineering",
  ],
  openGraph: {
    title: "Structured Tutorials & Learning Paths",
    description:
      "Master AI, Data Science, and Engineering with our comprehensive tutorial series.",
    type: "website",
    images: [
      {
        url: "https://vedicskill.com/og-tutorials.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://vedicskill.com/tutorials",
  },
};

export default function TutorialsPage() {
  const data = getTutorialStructure();

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="px-6 md:px-8 py-24 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">
            Structured Tutorials
          </h1>
          <p className="text-[#666666] dark:text-[#A0A0A0] text-lg max-w-2xl leading-relaxed">
            Comprehensive learning paths to master real-world skills with
            hands-on projects
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-8 py-16 bg-white dark:bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.courses.map((course: any) => (
              <Link
                key={course.slug}
                href={`/tutorials/${course.slug}/${getFirstLesson(course)}`}
                className="group"
              >
                <div className="bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl p-6 hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-300 h-full flex flex-col">
                  {/* Header accent */}
                  <div className="h-1 w-full bg-[#064E3B] dark:bg-[#10B981] rounded-full mb-6 group-hover:h-1.5 transition-all" />

                  {/* Level Badge */}
                  <div className="inline-flex w-fit mb-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#F5F5F5] dark:bg-[#2A2A2A] text-[#064E3B] dark:text-[#10B981] border border-[#E8E8E8] dark:border-[#3A3A3A] transition-colors">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors mb-3 flex-1">
                    {course.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-[#666666] dark:text-[#A0A0A0] mb-6 flex-1 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8] dark:border-[#2A2A2A]">
                    <div className="flex items-center gap-2 text-sm text-[#999999] dark:text-[#707070]">
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
                          d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z"
                        />
                      </svg>
                      {course.sections.reduce(
                        (total: number, section: any) =>
                          total + section.lessons.length,
                        0,
                      )}{" "}
                      lessons
                    </div>
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

      {/* LEARNING PATH */}
      <section className="px-6 md:px-8 py-16 bg-[#F5F5F5] dark:bg-[#1A1A1A] border-t border-[#E8E8E8] dark:border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#121212] dark:text-white mb-12 tracking-tight">
            Recommended Learning Path
          </h2>

          <div className="space-y-4">
            {[
              {
                num: 1,
                title: "Start with Fundamentals",
                desc: "Learn the basics and core concepts",
              },
              {
                num: 2,
                title: "Practice with Projects",
                desc: "Build real-world applications",
              },
              {
                num: 3,
                title: "Advanced Topics",
                desc: "Deep dive into advanced concepts",
              },
              {
                num: 4,
                title: "Master & Contribute",
                desc: "Expert level and community contribution",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 md:gap-8">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#064E3B] dark:bg-[#10B981] flex items-center justify-center text-white dark:text-[#121212] font-bold text-lg">
                    {step.num}
                  </div>
                  {i < 3 && (
                    <div className="w-0.5 h-16 bg-[#E8E8E8] dark:bg-[#2A2A2A] mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-bold text-[#121212] dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#666666] dark:text-[#A0A0A0]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
