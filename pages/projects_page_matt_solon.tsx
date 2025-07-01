// pages/projects.tsx
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Podcast: Katherine Kendall – Surviving Harvey Weinstein',
    type:  'Podcast' as const
,
    embedUrl: 'https://embed.podcasts.apple.com/us/podcast/katherine-kendall-surviving-harvey-weinstein/id1536041978?i=1000501136521',
  },
  {
    title: 'Podcast: Turn Ons and Turn Offs',
    type: 'Podcast' as const
,
    embedUrl: 'https://embed.podcasts.apple.com/ca/podcast/turn-on-and-turn-offs/id1534943179?i=1000548908559',
  },
  {
    title: 'Podcast: With Keanu Thompson',
    type: 'Podcast' as const
,
    embedUrl: 'https://embed.podcasts.apple.com/us/podcast/with-keanu-thompson/id1110253182?i=1000630346859',
  },
  {
    title: 'YouTube: How to Podcast (Demo)',
    type: 'YouTube' as const
,
    embedUrl: 'https://www.youtube.com/embed/yoZfiLnmvHA',
  },
  {
    title: 'YouTube: Interview Editing Breakdown',
    type:  'YouTube' as const
,
    embedUrl: 'https://www.youtube.com/embed/fJ63waAx39w',
  },
  {
    title: 'YouTube: Audio Repair Techniques',
    type:  'YouTube' as const
,
    embedUrl: 'https://www.youtube.com/embed/_voaPEGP6bg',
  },
  {
    title: 'YouTube: Visual Storytelling with Sound',
    type:  'YouTube' as const
,
    embedUrl: 'https://www.youtube.com/embed/FKx9AQQOwYg',
  },
  {
    title: 'YouTube: Trailer Breakdown',
    type:  'YouTube' as const
,
    embedUrl: 'https://www.youtube.com/embed/2_k65PC2Wjk',
  },
  {
    title: 'YouTube: Sound Design Reel',
    type:  'YouTube' as const
,
    embedUrl: 'https://www.youtube.com/embed/I54PaSXj-BU',
  },
  {
    title: 'YouTube: Video Podcast Editing',
    type:  'YouTube' as const
,
    embedUrl: 'https://www.youtube.com/embed/GgP325oAzTA',
  },
  {
    title: 'YouTube: Behind the Scenes – Voiceover Work',
    type: 'YouTube' as const
,
    embedUrl: 'https://www.youtube.com/embed/0hCykGJXAgE',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Matt Solon</title>
        <meta name="description" content="Audio and video projects by Matt Solon." />
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
