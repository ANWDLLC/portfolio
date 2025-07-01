
import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xwpbywza', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('There was a problem submitting the form.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Matt Solon</title>
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Contact Me</h1>
          {submitted ? (
            <p className="text-center text-green-400 text-lg">Thanks for reaching out! I’ll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-zinc-800 rounded-xl p-4 text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-zinc-800 rounded-xl p-4 text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-zinc-800 rounded-xl p-4 text-white placeholder-gray-400"
              ></textarea>
              <button
                type="submit"
                className="bg-white text-black py-3 px-6 rounded-xl font-semibold hover:bg-gray-200"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
