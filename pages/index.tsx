import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Solon | Audio Video Editor</title>
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Welcome to Matt Solon's Portfolio</h1>
        <p className="mb-8 text-gray-300">Audio & Video Editor | Podcaster</p>
        <Link href="/projects_page_matt_solon" className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 font-semibold">
          View Projects
        </Link>
      </main>
    </>
  );
}