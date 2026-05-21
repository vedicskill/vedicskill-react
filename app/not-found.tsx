import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold text-[#161616]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-[#161616]">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-[#666666] text-lg">
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#161616] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
          >
            Go Home
          </Link>

          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 border border-[#161616] text-[#161616] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
          >
            Browse Tutorials
          </Link>
        </div>
      </div>
    </div>
  );
}
