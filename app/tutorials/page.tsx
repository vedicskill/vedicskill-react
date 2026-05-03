import { getTutorialStructure } from "../lib/content";
import Link from "next/link";

export default function TutorialsPage() {
  const data = getTutorialStructure();

  return (
    <div className="w-full px-8 py-12">

      {/* Header */}
      <div className="max-w-5xl mb-12">
        <h1 className="text-4xl font-semibold text-gray-900">
          Tutorials
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Structured learning paths to build real-world skills
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.courses.map((course: any) => (
          <div
            key={course.slug}
            className="group border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            {/* Title */}
            {/* <h2 className="text-xl font-semibold text-gray-900">
              {course.title}
            </h2> */}
            <h1 className="text-5xl font-semibold text-gray-900 tracking-tight">
              {course.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 mt-2 text-sm">
              {course.description}
            </p>
            
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              {course.level}
            </span>
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
  );
}