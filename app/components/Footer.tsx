import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#161616] rounded-lg flex items-center justify-center font-bold text-white">
                V
              </div>
              <span className="font-bold text-lg text-[#161616]">VedicSkill</span>
            </div>
            <p className="text-[#666666] text-sm">Learn AI, Data Science & Engineering with structured tutorials and real-world projects.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#161616] mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/tutorials" className="text-[#666666] hover:text-[#161616] transition-colors text-sm">Tutorials</Link></li>
              <li><Link href="/courses" className="text-[#666666] hover:text-[#161616] transition-colors text-sm">Courses</Link></li>
              <li><Link href="/blog" className="text-[#666666] hover:text-[#161616] transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-[#161616] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#666666] hover:text-[#161616] transition-colors text-sm">About</Link></li>
              <li><a href="#" className="text-[#666666] hover:text-[#161616] transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-[#666666] hover:text-[#161616] transition-colors text-sm">Privacy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-[#161616] mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-[#E5E5E5] rounded-lg flex items-center justify-center text-[#161616] hover:bg-gray-50 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20v-7.21H5.93v-2.94h2.36V7.1c0-2.37 1.45-3.66 3.55-3.66 1.01 0 1.88.08 2.13.11v2.47h-1.46c-1.14 0-1.37.54-1.37 1.34v1.76h2.74l-.35 2.94h-2.39V20z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-[#E5E5E5] rounded-lg flex items-center justify-center text-[#161616] hover:bg-gray-50 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5-5 7"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#E5E5E5] flex justify-between items-center text-sm text-[#666666]">
          <p>© 2026 Vedicskill. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#161616] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#161616] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#161616] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}