'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'AI & Machine Learning', 'Data Science', 'Engineering', 'Web Development'];

  const courses = [
    {
      id: 1,
      title: 'Advanced Python for Data Science',
      category: 'Data Science',
      instructor: 'John Doe',
      price: 49.99,
      rating: 4.8,
      students: 1250,
      image: 'Python',
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      category: 'AI & Machine Learning',
      instructor: 'Jane Smith',
      price: 59.99,
      rating: 4.9,
      students: 2100,
      image: 'ML',
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'Deep Learning with TensorFlow',
      category: 'AI & Machine Learning',
      instructor: 'Mike Johnson',
      price: 79.99,
      rating: 4.7,
      students: 980,
      image: 'DL',
      level: 'Advanced'
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      category: 'Web Development',
      instructor: 'Sarah Williams',
      price: 44.99,
      rating: 4.6,
      students: 3200,
      image: 'Web',
      level: 'Beginner'
    },
    {
      id: 5,
      title: 'Data Engineering Essentials',
      category: 'Engineering',
      instructor: 'David Brown',
      price: 69.99,
      rating: 4.8,
      students: 1500,
      image: 'DE',
      level: 'Intermediate'
    },
    {
      id: 6,
      title: 'Cloud Computing with AWS',
      category: 'Engineering',
      instructor: 'Emma Davis',
      price: 54.99,
      rating: 4.7,
      students: 2800,
      image: 'AWS',
      level: 'Intermediate'
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="w-full">
      
      {/* HERO */}
      <section className="px-6 md:px-8 py-24 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0EA5E9]/10 border-b border-[#10B981]/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#E8EAED] via-[#10B981] to-[#38BDF8] bg-clip-text text-transparent mb-4">
            Premium Courses
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl">
            Curated courses from industry experts. Learn skills that matter.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 md:px-8 py-8 bg-[#0F172A] border-b border-[#10B981]/30 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Categories */}
            <div className="flex-1">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat.toLowerCase().replace(/\s+/g, '-'))}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                      (cat === 'All' && selectedCategory === 'all') || 
                      cat.toLowerCase().replace(/\s+/g, '-') === selectedCategory
                        ? 'bg-[#10B981] text-[#0F172A]'
                        : 'bg-[#1E293B] text-[#94A3B8] border border-[#10B981]/30 hover:border-[#10B981]'
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
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg bg-[#1E293B] border border-[#10B981]/30 text-[#E8EAED] font-medium hover:border-[#10B981] transition-colors cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="px-6 md:px-8 py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#10B981]/30 rounded-xl overflow-hidden hover:border-[#10B981]/70 transition-all duration-300 hover:shadow-lg hover:shadow-[#10B981]/20 flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="w-full h-56 bg-gradient-to-br from-[#0EA5E9]/20 to-[#10B981]/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#10B981]/10 to-transparent group-hover:animate-pulse" />
                  <span className="text-3xl font-mono font-bold text-[#10B981]/40 relative z-10">{course.image}</span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category Badge */}
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-semibold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/30 rounded-full">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#E8EAED] group-hover:text-[#10B981] transition-colors mb-2 flex-1">
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <p className="text-sm text-[#64748B] mb-4">
                    By {course.instructor}
                  </p>

                  {/* Rating & Students */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-t border-[#10B981]/20">
                    <div className="flex items-center gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-[#10B981]' : 'text-[#64748B]'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-[#94A3B8] ml-2">{course.rating}</span>
                    </div>
                    <span className="text-sm text-[#64748B]">({course.students.toLocaleString()} students)</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-2xl font-bold text-[#10B981]">
                      ${course.price}
                    </span>
                    <button className="flex-1 px-4 py-2 bg-[#10B981] text-[#0F172A] rounded-lg font-semibold hover:bg-[#34D399] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#10B981]/50">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#94A3B8] text-lg">No courses found in this category.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
