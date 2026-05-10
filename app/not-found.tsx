import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000922] via-[#0f1a3a] to-[#000922] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#86BC25] to-[#a8d63f] bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-[#c0c0c0] text-lg">
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#86BC25] to-[#a8d63f] text-[#000922] px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#86BC25]/50 transition-all duration-300"
          >
            Go Home
          </Link>

          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 border border-[#86BC25]/50 text-[#86BC25] px-6 py-3 rounded-lg font-semibold hover:bg-[#86BC25]/10 transition-all duration-300"
          >
            Browse Tutorials
          </Link>
        </div>
      </div>
    </div>
  );
}
