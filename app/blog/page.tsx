import Link from "next/link";
import { getAllPosts } from "@/app/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);
  const otherPosts = posts.slice(4);

  return (
    <div className="w-full">
      
      {/* HERO */}
      <section className="px-6 md:px-8 py-24 bg-gradient-to-r from-[#000922] via-[#0f1a3a] to-[#86BC25]/10 border-b border-[#86BC25]/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FFFFFF] via-[#86BC25] to-[#a8d63f] bg-clip-text text-transparent mb-4">
            VedicSkill Blog
          </h1>
          <p className="text-[#c0c0c0] text-lg max-w-2xl">
            Insights, tutorials, and practical knowledge about AI, Data Science, and Engineering
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && (
        <section className="px-6 md:px-8 py-16 bg-gradient-to-b from-[#000922] to-[#0f1a3a]/50 border-b border-[#86BC25]/30">
          <div className="max-w-4xl mx-auto">
            <Link href={`/blog/${featuredPost.slug}`} className="group">
              <div className="bg-gradient-to-br from-[#0f1a3a] to-[#000922] border border-[#86BC25]/50 rounded-xl overflow-hidden hover:border-[#86BC25] transition-all duration-300 hover:shadow-lg hover:shadow-[#86BC25]/30">
                
                {/* Featured Image */}
                <div className="w-full h-72 bg-gradient-to-br from-[#86BC25]/20 to-[#86BC25]/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#86BC25]/10 to-transparent group-hover:animate-pulse" />
                  <span className="text-6xl font-mono font-bold text-[#86BC25]/40 relative z-10">Featured</span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-2 text-sm font-semibold text-[#86BC25] bg-[#86BC25]/10 border border-[#86BC25]/30 rounded-full">
                      Featured Article
                    </span>
                    <span className="text-sm text-[#808080]">{featuredPost.date}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] group-hover:text-[#86BC25] transition-colors mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-[#c0c0c0] mb-6">
                    {featuredPost.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#86BC25] to-[#a8d63f] rounded-full flex items-center justify-center text-[#000922] font-bold">
                      VS
                    </div>
                    <div>
                      <p className="font-semibold text-[#FFFFFF]">VedicSkill</p>
                      <p className="text-sm text-[#808080]">Tech Education</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* RECENT POSTS GRID */}
      {recentPosts.length > 0 && (
        <section className="px-6 md:px-8 py-16 bg-white border-b border-[#86BC25]/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#000922] mb-12">Recent Articles</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((post: any) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <div className="bg-white border border-[#86BC25]/30 rounded-xl overflow-hidden hover:border-[#86BC25]/70 transition-all duration-300 hover:shadow-lg hover:shadow-[#86BC25]/20 h-full flex flex-col">
                    
                    {/* Post Image */}
                    <div className="w-full h-40 bg-gradient-to-br from-[#86BC25]/20 to-[#86BC25]/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#86BC25]/10 to-transparent group-hover:animate-pulse" />
                      <span className="text-3xl font-mono font-bold text-[#86BC25]/40 relative z-10">Post</span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs text-[#999999] mb-3">{post.date}</span>
                      
                      <h3 className="text-lg font-bold text-[#000922] group-hover:text-[#86BC25] transition-colors mb-3 flex-1">
                        {post.title}
                      </h3>

                      <p className="text-sm text-[#666666] mb-4 flex-1">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-2 text-[#86BC25] font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL POSTS */}
      <section className="px-6 md:px-8 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#000922] mb-12">All Articles</h2>

          <div className="space-y-6">
            {(otherPosts.length > 0 ? otherPosts : posts).map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="border-b border-[#86BC25]/20 pb-6 hover:pb-8 transition-all duration-300">
                  
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-br from-[#86BC25] to-[#a8d63f] rounded-full flex-shrink-0 flex items-center justify-center text-[#000922] font-bold">
                      V
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-[#000922]">VedicSkill</span>
                        <span className="text-[#999999]">·</span>
                        <span className="text-sm text-[#999999]">{post.date}</span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-[#000922] group-hover:text-[#86BC25] transition-colors mb-2">
                        {post.title}
                      </h3>

                      <p className="text-[#666666] text-sm md:text-base mb-4 line-clamp-2">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-4">
                        <span className="text-xs text-[#999999] hover:text-[#86BC25] transition-colors cursor-pointer">👏 128</span>
                        <span className="text-xs text-[#999999] hover:text-[#86BC25] transition-colors cursor-pointer">💬 12</span>
                        <span className="text-xs text-[#999999] hover:text-[#86BC25] transition-colors cursor-pointer">↗️ Share</span>
                      </div>
                    </div>

                    {/* Read Time */}
                    <span className="text-sm text-[#999999] flex-shrink-0">
                      5 min read
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}