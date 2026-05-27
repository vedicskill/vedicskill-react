"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { getCourses } from "@/app/lib/courses";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourses();
  }, []);

  async function loadCourses() {
    setLoading(true);

    const data = await getCourses();

    setCourses(data);

    setLoading(false);
  }

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        courses
          .map((course) => course.platform)
          .filter(Boolean)
      )
    );

    return ["All", ...uniqueCategories];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    let filtered =
      selectedCategory === "all"
        ? [...courses]
        : courses.filter(
            (course) =>
              course.platform?.toLowerCase() ===
              selectedCategory.toLowerCase()
          );

    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      case "price-low":
        filtered.sort(
          (a, b) => a.course_price - b.course_price
        );
        break;

      case "price-high":
        filtered.sort(
          (a, b) => b.course_price - a.course_price
        );
        break;

      case "students":
        filtered.sort(
          (a, b) => b.students_rated - a.students_rated
        );
        break;

      default:
        filtered.sort(
          (a, b) => b.students_rated - a.students_rated
        );
    }

    return filtered;
  }, [courses, selectedCategory, sortBy]);

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="px-6 md:px-8 py-24 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">
            Courses
          </h1>

          <p className="text-[#666666] dark:text-[#A0A0A0] text-lg max-w-2xl leading-relaxed">
            Curated courses from industry experts. Learn skills that matter.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 md:px-8 py-8 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">

            {/* Categories */}
            <div className="flex-1">
              <div className="flex gap-2 overflow-x-auto pb-2">

                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      setSelectedCategory(
                        cat === "All"
                          ? "all"
                          : cat.toLowerCase()
                      )
                    }
                    className={`px-4 py-2 rounded-2xl font-medium whitespace-nowrap transition-all duration-300 ${
                      (cat === "All" &&
                        selectedCategory === "all") ||
                      cat.toLowerCase() === selectedCategory
                        ? "bg-[#064E3B] text-white dark:bg-[#10B981] dark:text-[#121212]"
                        : "bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#666666] dark:text-[#A0A0A0] border border-[#E8E8E8] dark:border-[#2A2A2A] hover:border-[#064E3B] dark:hover:border-[#10B981]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}

              </div>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className="px-4 py-2 rounded-2xl bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] text-[#121212] dark:text-white font-medium hover:border-[#064E3B] dark:hover:border-[#10B981] transition-colors cursor-pointer"
              >
                <option value="popular">
                  Most Popular
                </option>

                <option value="rating">
                  Highest Rated
                </option>

                <option value="students">
                  Most Students
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* LOADING */}
      {loading && (
        <section className="px-6 md:px-8 py-20 bg-white dark:bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto text-center">

            <p className="text-lg text-[#666666] dark:text-[#A0A0A0]">
              Loading courses...
            </p>

          </div>
        </section>
      )}

      {/* COURSES GRID */}
      {!loading && (
        <section className="px-6 md:px-8 py-16 bg-white dark:bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto">

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {filteredCourses.map((course) => (
                <div
                  key={course.course_id}
                  className="group bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-300 flex flex-col"
                >

                  {/* Image */}
                  <div className="w-full h-56 bg-[#F5F5F5] dark:bg-[#2A2A2A] relative overflow-hidden">

                    {course.course_image ? (
                      <img
                        src={course.course_image}
                        alt={course.course_name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-3xl font-mono font-bold text-[#999999] dark:text-[#707070] relative z-10">
                          Course
                        </span>
                      </div>
                    )}

                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">

                    {/* Level */}
                    <div className="flex gap-2 mb-3">

                      <span className="px-3 py-1 text-xs font-semibold text-[#064E3B] dark:text-[#10B981] bg-[#F5F5F5] dark:bg-[#2A2A2A] border border-[#E8E8E8] dark:border-[#3A3A3A] rounded-full">
                        {course.course_level || "All Levels"}
                      </span>

                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors mb-2 flex-1">

                      {course.course_name}

                    </h3>

                    {/* Platform */}
                    <p className="text-sm text-[#666666] dark:text-[#A0A0A0] mb-4">

                      {course.platform}

                    </p>

                    {/* Rating & Students */}
                    <div className="flex items-center gap-4 mb-6 pb-6 border-t border-[#E8E8E8] dark:border-[#2A2A2A]">

                      <div className="flex items-center gap-1 mt-4">

                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i <
                              Math.floor(course.rating || 0)
                                ? "text-[#064E3B] dark:text-[#10B981]"
                                : "text-[#E8E8E8] dark:text-[#2A2A2A]"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}

                        <span className="text-sm text-[#666666] dark:text-[#A0A0A0] ml-2">

                          {course.rating || 0}

                        </span>

                      </div>

                      <span className="text-sm text-[#999999] dark:text-[#707070]">

                        (
                        {course.students_rated?.toLocaleString() || 0}
                        {" "}students
                        )

                      </span>

                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between gap-4">

                      <span className="text-2xl font-bold text-[#064E3B] dark:text-[#10B981]">

                        {course.currency || "$"}
                        {course.course_price || 0}

                      </span>

                      <Link
                        href={course.course_url || "#"}
                        target="_blank"
                        className="flex-1 px-4 py-2.5 text-center bg-[#064E3B] text-white rounded-2xl font-semibold hover:bg-[#053D2E] transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669]"
                      >
                        Enroll
                      </Link>

                    </div>

                  </div>
                </div>
              ))}

            </div>

            {/* No Results */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-16">

                <p className="text-[#666666] dark:text-[#A0A0A0] text-lg">
                  No courses found in this category.
                </p>

              </div>
            )}

          </div>
        </section>
      )}
    </div>
  );
}