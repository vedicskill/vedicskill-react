import Link from 'next/link';

const footerLinks = {
  product: [
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'Courses', href: '/courses' },
    { label: 'Blog', href: '/blog' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#' },
    { label: 'Privacy', href: '#' },
  ],
  social: [
    {
      label: 'Facebook',
      href: '#',
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20v-7.21H5.93v-2.94h2.36V7.1c0-2.37 1.45-3.66 3.55-3.66 1.01 0 1.88.08 2.13.11v2.47h-1.46c-1.14 0-1.37.54-1.37 1.34v1.76h2.74l-.35 2.94h-2.39V20z" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: '#',
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5-5 7" />
        </svg>
      ),
    },
  ],
};

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const isExternal = href.startsWith('http');
  const Component = isExternal ? 'a' : Link;

  return (
    <Component
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      className="text-[#666666] dark:text-[#A0A0A0] hover:text-[#064E3B] dark:hover:text-[#10B981] transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] rounded px-2 py-1"
    >
      {label}
    </Component>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E8E8] dark:border-[#2A2A2A] bg-white dark:bg-[#0F0F0F] mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] rounded px-2 py-1">
              <span className="font-bold text-lg text-[#121212] dark:text-white tracking-tight">
                VedicSkill Academy
              </span>
            </Link>
            <p className="text-[#666666] dark:text-[#A0A0A0] text-sm leading-relaxed max-w-sm">
              Learn AI, Data Science & Engineering with structured tutorials and
              real-world projects.
            </p>
          </div>

          {/* Product Links */}
          <nav>
            <h3 className="font-semibold text-[#121212] dark:text-white mb-4 text-sm uppercase tracking-wide">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav>
            <h3 className="font-semibold text-[#121212] dark:text-white mb-4 text-sm uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <nav>
            <h3 className="font-semibold text-[#121212] dark:text-white mb-4 text-sm uppercase tracking-wide">
              Follow
            </h3>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-xl flex items-center justify-center text-[#121212] dark:text-white hover:bg-[#064E3B] dark:hover:bg-[#10B981] hover:text-white hover:border-[#064E3B] dark:hover:border-[#10B981] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-offset-[#0F0F0F] dark:focus-visible:ring-[#10B981]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#E8E8E8] dark:bg-[#2A2A2A] mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[#666666] dark:text-[#A0A0A0]">
          <p>© 2026 Vedicskill. All rights reserved.</p>
          <nav className="flex gap-6 flex-wrap justify-center">
            <a href="#" className="hover:text-[#064E3B] dark:hover:text-[#10B981] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] rounded px-2 py-1">
              Terms
            </a>
            <a href="#" className="hover:text-[#064E3B] dark:hover:text-[#10B981] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] rounded px-2 py-1">
              Privacy
            </a>
            <a href="#" className="hover:text-[#064E3B] dark:hover:text-[#10B981] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] rounded px-2 py-1">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}