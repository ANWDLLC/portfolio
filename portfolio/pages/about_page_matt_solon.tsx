// pages/about.tsx
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Matt Solon</title>
        <meta name="description" content="Learn more about Matt Solon, a professional podcaster, audio and video editor." />
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m Matt Solon — a professional audio and video editor with a passion for storytelling, clean sound, and visual polish. With years of experience in podcast production and YouTube content editing, I help creators elevate their work to a professional level.
          </p>
          <p className="text-lg text-gray-300 mt-6 leading-relaxed">
            Whether it's repairing poor audio, crafting compelling cuts, or delivering a polished final product, I'm here to help you sound and look your best.
          </p>
          <p className="text-lg text-gray-300 mt-6 leading-relaxed">
            Let’s collaborate — <a href="/contact" className="text-blue-400 underline hover:text-blue-300">get in touch</a> with your project idea.
          </p>
        </div>
      </main>
    </>
  );
}
