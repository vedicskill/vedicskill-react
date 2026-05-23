import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F0F] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold text-[#121212] dark:text-white">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-[#121212] dark:text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-[#666666] dark:text-[#A0A0A0] text-lg">
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#064E3B] dark:bg-[#10B981] text-white dark:text-[#121212] px-6 py-3 rounded-2xl font-semibold hover:bg-[#053D2E] dark:hover:bg-[#059669] transition-all duration-300"
          >
            Go Home
          </Link>

          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 border-2 border-[#064E3B] dark:border-[#10B981] text-[#064E3B] dark:text-[#10B981] px-6 py-3 rounded-2xl font-semibold hover:bg-[#064E3B] dark:hover:bg-[#10B981] hover:text-white dark:hover:text-[#121212] transition-all duration-300"
          >
            Browse Tutorials
          </Link>
        </div>
      </div>
    </div>
  );
}
