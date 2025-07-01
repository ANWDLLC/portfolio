export default function ContactPage() {
  return (
    <Header />
  <main className="min-h-screen bg-black text-white p-6 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      <form action="https://formspree.io/f/xwpbywza" method="POST" className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" required className="bg-zinc-800 text-white p-3 rounded-lg" />
        <input type="email" name="email" placeholder="Your Email" required className="bg-zinc-800 text-white p-3 rounded-lg" />
        <textarea name="message" placeholder="Your Message" rows={5} required className="bg-zinc-800 text-white p-3 rounded-lg"></textarea>
        <button type="submit" className="bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200">Send Message</button>
      </form>
    </main>
  );
}