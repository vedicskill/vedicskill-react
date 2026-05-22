export default function AboutPage() {
  return (
    <div className="w-full">
      
      {/* HERO */}
      <section className="px-6 md:px-8 py-32 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#121212] dark:text-white tracking-tight">
            About VedicSkill
          </h1>
          <p className="mt-6 text-lg text-[#666666] dark:text-[#A0A0A0] max-w-2xl leading-relaxed">
            Empowering learners worldwide with industry-ready skills in AI, Data Science, and Engineering.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 md:px-8 py-24 bg-white dark:bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">Our Mission</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#064E3B] to-[#064E3B] rounded-full" />
          </div>

          <p className="text-[#666666] dark:text-[#A0A0A0] text-lg leading-relaxed mb-6">
            VedicSkill is dedicated to making high-quality tech education accessible to everyone. We believe in learning through doing, combining structured tutorials with real-world projects that build practical expertise.
          </p>

          <p className="text-[#666666] dark:text-[#A0A0A0] text-lg leading-relaxed">
            Our platform brings together the best practices from world-class learning resources, creating an immersive educational experience that bridges the gap between theory and practice.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-8 py-24 bg-[#F5F5F5] dark:bg-[#1A1A1A] border-y border-[#E8E8E8] dark:border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#121212] dark:text-white mb-6 tracking-tight">Our Values</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#064E3B] to-[#064E3B] rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🍏',
                title: 'Practical Learning',
                description: 'Real-world projects and hands-on experience that matter in your career'
              },
              {
                icon: '🚀',
                title: 'Industry-Ready',
                description: 'Curated content aligned with current industry standards and trends'
              },
              {
                icon: '🤝',
                title: 'Community Driven',
                description: 'Learn alongside a global community of passionate developers and learners'
              }
            ].map((value, i) => (
              <div key={i} className="bg-white dark:bg-[#0F0F0F] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl p-8 hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all duration-300">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#121212] dark:text-white mb-3">{value.title}</h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-8 py-24 bg-white dark:bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Tutorials' },
              { number: '10K+', label: 'Students' },
              { number: '100+', label: 'Courses' },
              { number: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#064E3B] dark:text-[#10B981] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#666666] dark:text-[#A0A0A0] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
