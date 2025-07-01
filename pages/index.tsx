// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Solon | Audio Video Editor</title>
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-12">
        <nav className="flex justify-center gap-6 mb-12 text-lg">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/projects_page_matt_solon" className="hover:underline">
            Projects
          </Link>
          <Link href="/about_page_matt_solon" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Matt Solon</h1>
          <p className="text-lg mb-8">Professional Audio & Video Editor</p>
          <Link
            href="/projects_page_matt_solon"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
          >
            View My Work
          </Link>
        </div>
      </main>
    </>
  );
}
