export default function AboutPage() {
  return (
    <div className="w-full">
      
      {/* HERO */}
      <section className="px-6 md:px-8 py-32 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] border-b border-[#10B981]/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-[#E8EAED] via-[#10B981] to-[#38BDF8] bg-clip-text text-transparent">
            About VedicSkill
          </h1>
          <p className="mt-6 text-lg text-[#94A3B8] max-w-2xl">
            Empowering learners worldwide with industry-ready skills in AI, Data Science, and Engineering.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 md:px-8 py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#E8EAED] mb-4">Our Mission</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full" />
          </div>

          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            VedicSkill is dedicated to making high-quality tech education accessible to everyone. We believe in learning through doing, combining structured tutorials with real-world projects that build practical expertise.
          </p>

          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Our platform brings together the best practices from world-class learning resources, creating an immersive educational experience that bridges the gap between theory and practice.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-8 py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] border-y border-[#10B981]/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#E8EAED] mb-4">Our Values</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
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
              <div key={i} className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#10B981]/30 rounded-xl p-8 hover:border-[#10B981]/70 transition-all duration-300">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#E8EAED] mb-3">{value.title}</h3>
                <p className="text-[#94A3B8]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-8 py-24 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Tutorials' },
              { number: '10K+', label: 'Students' },
              { number: '100+', label: 'Courses' },
              { number: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-[#94A3B8] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
