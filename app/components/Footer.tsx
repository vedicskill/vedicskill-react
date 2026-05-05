export default function Footer() {
  return (
    <footer className="px-8 py-12 border-t mt-20">
      <div className="max-w-6xl mx-auto text-sm text-gray-500 flex justify-between">
        <p>© 2026 Vedicskill</p>

        <div className="flex gap-6">
          <a href="/tutorials">Tutorials</a>
          <a href="/blog">Blog</a>
        </div>
      </div>
    </footer>
  );
}