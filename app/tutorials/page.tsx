import { getTutorialStructure } from "../lib/content";
import Link from "next/link";

export default function TutorialsPage() {
  const data = getTutorialStructure();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Tutorials
      </h1>

      <div className="grid gap-6">
        {data.courses.map((course: any) => (
          <div
            key={course.slug}
            className="border p-4 rounded"
          >
            <h2 className="text-xl font-semibold">
              {course.title}
            </h2>

            <p className="text-sm mt-2">
              {course.description}
            </p>

            <Link
              href={`/tutorials/${course.slug}/${course.lessons[0]}`}
              className="text-primary mt-3 inline-block"
            >
              Start Course →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}