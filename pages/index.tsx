import Header from '../components/Header';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Solon | Audio Video Editor</title>
      </Head>
      <Header />
  <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6 py-12">
        <h1 className="text-5xl font-bold mb-6">Matt Solon</h1>
        <p className="text-xl text-gray-300 mb-8">Professional Audio & Video Editor | Podcaster</p>
        <Link href="/projects_page_matt_solon" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          View My Work
        </Link>
      </main>
    </>
  );
}