import Link from "next/link";
import { getLessons } from "@/app/lib/content";

// export default function TutorialSidebar({
//   course,
//   structure,
// }: any) {
//   const currentCourse = structure.courses.find(
//     (c: any) => c.slug === course
//   );

//   if (!currentCourse) return null;

//   return (
//     <div className="w-64 border-r pr-4">
//       <h2 className="font-bold text-lg mb-4">
//         {currentCourse.title}
//       </h2>

//       <ul className="space-y-2">
//         {currentCourse.lessons.map((lesson: string) => (
//           <li key={lesson}>
//             <Link
//               href={`/tutorials/${course}/${lesson}`}
//               className="block text-sm hover:text-accent"
//             >
//               {lesson}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function TutorialSidebar({
  course,
  currentLesson,
}: {
  course: string;
  currentLesson: string;
}) {
  const lessons = getLessons(course);

  return (
    <div className="w-full xl:w-72 flex-none border-r pr-4 sticky top-20 self-start">
      <h2 className="font-bold text-lg mb-4 capitalize">
        {course.replace("-", " ")}
      </h2>

      <ul className="space-y-2">
        {lessons.map((lesson) => {
          const isActive = lesson.slug === currentLesson;

          return (
            <li key={lesson.slug}>
              <Link
                href={`/tutorials/${course}/${lesson.slug}`}
                className={`block px-2 py-1 rounded text-sm ${
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "hover:text-accent"
                }`}
              >
                {lesson.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}