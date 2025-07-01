import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">Matt Solon</h1>
        <ul className="flex gap-6 text-sm">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/projects_page_matt_solon" className="hover:text-gray-400">Projects</Link></li>
          <li><Link href="/about_page_matt_solon" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}