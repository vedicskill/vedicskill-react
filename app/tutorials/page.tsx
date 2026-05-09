import { getTutorialStructure } from "../lib/content";
import Link from "next/link";

export default function TutorialsPage() {
  const data = getTutorialStructure();

  return (
    <div className="w-full">
      
      {/* HERO */}
      <section className="px-6 md:px-8 py-24 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0EA5E9]/10 border-b border-[#10B981]/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#E8EAED] via-[#10B981] to-[#38BDF8] bg-clip-text text-transparent mb-4">
            Structured Tutorials
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl">
            Comprehensive learning paths to master real-world skills with hands-on projects
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-8 py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.courses.map((course: any) => (
              <Link
                key={course.slug}
                href={`/tutorials/${course.slug}/${course.lessons[0]}`}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#10B981]/30 rounded-xl p-6 hover:border-[#10B981]/70 transition-all duration-300 hover:shadow-lg hover:shadow-[#10B981]/20 h-full flex flex-col">
                  
                  {/* Header accent */}
                  <div className="h-2 w-full bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full mb-6 group-hover:h-3 transition-all" />

                  {/* Level Badge */}
                  <div className="inline-flex w-fit mb-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
                      course.level === 'Beginner' ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/50' :
                      course.level === 'Intermediate' ? 'bg-[#0EA5E9]/20 text-[#0EA5E9] border border-[#0EA5E9]/50' :
                      'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/50'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-[#E8EAED] group-hover:text-[#10B981] transition-colors mb-3 flex-1">
                    {course.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-[#94A3B8] mb-6 flex-1">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#10B981]/20">
                    <div className="flex items-center gap-2 text-sm text-[#64748B]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                      </svg>
                      {course.lessons.length} lessons
                    </div>
                    <span className="text-[#10B981] font-semibold group-hover:translate-x-1 transition-transform">
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
      <section className="px-6 md:px-8 py-16 bg-gradient-to-b from-[#0F172A] to-[#1E293B] border-t border-[#10B981]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#E8EAED] mb-12">Recommended Learning Path</h2>

          <div className="space-y-4">
            {[
              { num: 1, title: 'Start with Fundamentals', desc: 'Learn the basics and core concepts' },
              { num: 2, title: 'Practice with Projects', desc: 'Build real-world applications' },
              { num: 3, title: 'Advanced Topics', desc: 'Deep dive into advanced concepts' },
              { num: 4, title: 'Master & Contribute', desc: 'Expert level and community contribution' }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 md:gap-8">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#10B981] to-[#34D399] flex items-center justify-center text-[#0F172A] font-bold text-lg">
                    {step.num}
                  </div>
                  {i < 3 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-[#10B981] to-[#10B981]/30 mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-bold text-[#E8EAED] mb-1">{step.title}</h3>
                  <p className="text-[#94A3B8]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}