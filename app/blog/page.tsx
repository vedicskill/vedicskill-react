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
      <section className="px-6 md:px-8 py-24 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">
            VedicSkill Blog
          </h1>
          <p className="text-[#666666] dark:text-[#A0A0A0] text-lg max-w-2xl leading-relaxed">
            Insights, tutorials, and practical knowledge about AI, Data Science, and Engineering
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && (
        <section className="px-6 md:px-8 py-16 bg-[#F5F5F5] dark:bg-[#1A1A1A] border-b border-[#E8E8E8] dark:border-[#2A2A2A]">
          <div className="max-w-4xl mx-auto">
            <Link href={`/blog/${featuredPost.slug}`} className="group">
              <div className="bg-white dark:bg-[#0F0F0F] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-300">
                
                {/* Featured Image */}
                <div className="w-full h-72 bg-[#F5F5F5] dark:bg-[#2A2A2A] flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl font-mono font-bold text-[#999999] dark:text-[#707070] relative z-10">Featured</span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-2 text-sm font-semibold text-[#064E3B] dark:text-[#10B981] bg-[#F5F5F5] dark:bg-[#2A2A2A] border border-[#E8E8E8] dark:border-[#3A3A3A] rounded-full">
                      Featured Article
                    </span>
                    <span className="text-sm text-[#999999] dark:text-[#707070]">{featuredPost.date}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-[#666666] dark:text-[#A0A0A0] mb-6 leading-relaxed">
                    {featuredPost.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#064E3B] dark:bg-[#10B981] rounded-full flex items-center justify-center text-white dark:text-[#121212] font-bold">
                      VS
                    </div>
                    <div>
                      <p className="font-semibold text-[#121212] dark:text-white">VedicSkill</p>
                      <p className="text-sm text-[#999999] dark:text-[#707070]">Tech Education</p>
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
        <section className="px-6 md:px-8 py-16 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#121212] dark:text-white mb-12 tracking-tight">Recent Articles</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((post: any) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <div className="bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-300 h-full flex flex-col">
                    
                    {/* Post Image */}
                    <div className="w-full h-40 bg-[#F5F5F5] dark:bg-[#2A2A2A] flex items-center justify-center relative overflow-hidden">
                      <span className="text-3xl font-mono font-bold text-[#999999] dark:text-[#707070] relative z-10">Post</span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs text-[#999999] dark:text-[#707070] mb-3">{post.date}</span>
                      
                      <h3 className="text-lg font-bold text-[#121212] dark:text-white group-hover:text-[#064E3B] dark:group-hover:text-[#10B981] transition-colors mb-3 flex-1">
                        {post.title}
                      </h3>

                      <p className="text-sm text-[#666666] dark:text-[#A0A0A0] mb-4 flex-1 leading-relaxed">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-2 text-[#064E3B] dark:text-[#10B981] font-semibold group-hover:gap-3 transition-all">
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
          <h2 className="text-3xl font-bold text-[#161616] mb-12">All Articles</h2>

          <div className="space-y-6">
            {(otherPosts.length > 0 ? otherPosts : posts).map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="border-b border-[#E5E5E5] pb-6 hover:pb-8 transition-all duration-300">
                  
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-[#161616] rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
                      V
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-[#161616]">VedicSkill</span>
                        <span className="text-[#999999]">·</span>
                        <span className="text-sm text-[#999999]">{post.date}</span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-[#161616] group-hover:text-[#666666] transition-colors mb-2">
                        {post.title}
                      </h3>

                      <p className="text-[#666666] text-sm md:text-base mb-4 line-clamp-2">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-4">
                        <span className="text-xs text-[#999999] hover:text-[#161616] transition-colors cursor-pointer">👏 128</span>
                        <span className="text-xs text-[#999999] hover:text-[#161616] transition-colors cursor-pointer">💬 12</span>
                        <span className="text-xs text-[#999999] hover:text-[#161616] transition-colors cursor-pointer">↗️ Share</span>
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