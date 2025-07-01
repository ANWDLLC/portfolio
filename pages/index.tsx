import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Solon | Audio Video Editor</title>
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
        {/* Navigation */}
        <nav className="w-full max-w-4xl flex justify-center gap-8 text-lg mb-16">
          <Link href="/" className="hover:underline hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/projects_page_matt_solon" className="hover:underline hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href="/about_page_matt_solon" className="hover:underline hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/contact" className="hover:underline hover:text-gray-300 transition">
            Contact
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Matt Solon</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Professional Audio & Video Editor, Podcast Producer, and Storyteller
          </p>
          <Link
            href="/projects_page_matt_solon"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            View My Work
          </Link>
        </section>
      </main>
    </>
  );
}
