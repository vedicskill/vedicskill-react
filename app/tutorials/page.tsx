import { getTutorialStructure } from "../lib/content";
import Link from "next/link";
import { getFirstLesson } from "@/app/lib/course";

export default function TutorialsPage() {
  const data = getTutorialStructure();

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="px-6 md:px-8 py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#161616] mb-4">
            Structured Tutorials
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl">
            Comprehensive learning paths to master real-world skills with
            hands-on projects
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.courses.map((course: any) => (
              <Link
                key={course.slug}
                href={`/tutorials/${course.slug}/${getFirstLesson(course)}`}
                className="group"
              >
                <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 hover:border-[#CCCCCC] transition-all duration-300 shadow-sm h-full flex flex-col">
                  {/* Header accent */}
                  <div className="h-2 w-full bg-[#E5E5E5] rounded-full mb-6 group-hover:h-3 transition-all" />

                  {/* Level Badge */}
                  <div className="inline-flex w-fit mb-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-[#161616] border border-[#E5E5E5] transition-colors">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-[#161616] group-hover:text-[#666666] transition-colors mb-3 flex-1">
                    {course.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-[#666666] mb-6 flex-1">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5]">
                    <div className="flex items-center gap-2 text-sm text-[#999999]">
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

      {/* LEARNING PATH */}
      <section className="px-6 md:px-8 py-16 bg-gray-50 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#161616] mb-12">
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
                  <div className="w-12 h-12 rounded-full bg-[#161616] flex items-center justify-center text-white font-bold text-lg">
                    {step.num}
                  </div>
                  {i < 3 && (
                    <div className="w-0.5 h-16 bg-[#E5E5E5] mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-bold text-[#161616] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#666666]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
