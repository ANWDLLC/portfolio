// components/ProjectCard.tsx
import React from 'react';

interface ProjectProps {
  title: string;
  type: 'YouTube' | 'Podcast';
  embedUrl: string;
}

export default function ProjectCard({ title, type, embedUrl }: ProjectProps) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="aspect-video w-full">
        {type === 'YouTube' ? (
          <iframe
            className="w-full h-full rounded-lg"
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            className="w-full h-32 rounded-lg"
            src={embedUrl}
            title={title}
            allow="autoplay *; encrypted-media *;"
            frameBorder="0"
          ></iframe>
        )}
      </div>
    </div>
  );
}
