
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Podcast: Katherine Kendall – Surviving Harvey Weinstein',
    type: 'Podcast' as const,
    embedUrl: 'https://embed.podcasts.apple.com/us/podcast/katherine-kendall-surviving-harvey-weinstein/id1536041978?i=1000501136521',
  },
  {
    title: 'YouTube: Example Project',
    type: 'YouTube' as const,
    embedUrl: 'https://www.youtube.com/embed/yoZfiLnmvHA',
  }
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Matt Solon</title>
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </>
  );
}
