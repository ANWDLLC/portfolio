import Header from '../components/Header';
export default function ProjectsPage() {
  return (
  <>
    <Header />
  <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/yoZfiLnmvHA" allowFullScreen></iframe>
        <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/fJ63waAx39w" allowFullScreen></iframe>
        <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/_voaPEGP6bg" allowFullScreen></iframe>
        <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/FKx9AQQOwYg" allowFullScreen></iframe>
        <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/2_k65PC2Wjk" allowFullScreen></iframe>
        <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/I54PaSXj-BU" allowFullScreen></iframe>
        <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/GgP325oAzTA" allowFullScreen></iframe>
        <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/0hCykGJXAgE" allowFullScreen></iframe>
        <iframe className="w-full h-32 rounded-lg" src="https://embed.podcasts.apple.com/us/podcast/katherine-kendall-surviving-harvey-weinstein/id1536041978?i=1000501136521" allow="autoplay *; encrypted-media *;"></iframe>
        <iframe className="w-full h-32 rounded-lg" src="https://embed.podcasts.apple.com/ca/podcast/turn-on-and-turn-offs/id1534943179?i=1000548908559" allow="autoplay *; encrypted-media *;"></iframe>
        <iframe className="w-full h-32 rounded-lg" src="https://embed.podcasts.apple.com/us/podcast/with-keanu-thompson/id1110253182?i=1000630346859" allow="autoplay *; encrypted-media *;"></iframe>
      </div>
    </main>
  </>
  );
}