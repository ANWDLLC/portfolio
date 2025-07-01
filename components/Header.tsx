import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();

  const linkClass = (href: string) =>
    `px-3 py-2 rounded-md transition hover:bg-zinc-800 ${pathname === href ? 'bg-zinc-800 text-white' : 'text-gray-300'}`;

  return (
    <header className="bg-black/90 backdrop-blur border-b border-zinc-800 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl font-bold text-white">Matt Solon</Link>
        <ul className="flex gap-2 text-sm font-medium">
          <li><Link href="/" className={linkClass('/')}>Home</Link></li>
          <li><Link href="/projects_page_matt_solon" className={linkClass('/projects_page_matt_solon')}>Projects</Link></li>
          <li><Link href="/about_page_matt_solon" className={linkClass('/about_page_matt_solon')}>About</Link></li>
          <li><Link href="/contact" className={linkClass('/contact')}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}