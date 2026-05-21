export default function AboutPage() {
  return (
    <div className="w-full">
      
      {/* HERO */}
      <section className="px-6 md:px-8 py-32 bg-white border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#161616]">
            About VedicSkill
          </h1>
          <p className="mt-6 text-lg text-[#666666] max-w-2xl">
            Empowering learners worldwide with industry-ready skills in AI, Data Science, and Engineering.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 md:px-8 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#161616] mb-4">Our Mission</h2>
            <div className="h-1 w-20 bg-[#E5E5E5] rounded-full" />
          </div>

          <p className="text-[#666666] text-lg leading-relaxed mb-6">
            VedicSkill is dedicated to making high-quality tech education accessible to everyone. We believe in learning through doing, combining structured tutorials with real-world projects that build practical expertise.
          </p>

          <p className="text-[#666666] text-lg leading-relaxed">
            Our platform brings together the best practices from world-class learning resources, creating an immersive educational experience that bridges the gap between theory and practice.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-8 py-24 bg-gray-50 border-y border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#161616] mb-4">Our Values</h2>
            <div className="h-1 w-20 bg-[#E5E5E5] rounded-full" />
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
              <div key={i} className="bg-white border border-[#E5E5E5] rounded-xl p-8 hover:border-[#CCCCCC] transition-all duration-300 shadow-sm">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#161616] mb-3">{value.title}</h3>
                <p className="text-[#666666]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-8 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Tutorials' },
              { number: '10K+', label: 'Students' },
              { number: '100+', label: 'Courses' },
              { number: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#161616] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#666666] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
