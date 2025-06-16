'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-pink-600">NextBlush</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Join our journey of love, code, creativity, and life insights — from the hearts of a techie and a lifestyle creator.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/blog">
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium text-sm">
              Read the Blog
            </button>
          </Link>
          <Link href="/about">
            <button className="px-6 py-3 border border-pink-600 text-pink-600 hover:bg-pink-50 dark:hover:bg-gray-800 rounded-lg font-medium text-sm">
              Learn About Us
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-900 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Latest Highlights</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Explore trending articles, marriage tips, tech guides, and more.
          </p>
          {/* Replace with dynamic blog preview later */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
              <h3 className="font-semibold text-lg mb-2">Love in the Digital Age</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">How we balance marriage and remote work...</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
              <h3 className="font-semibold text-lg mb-2">Building Apps Together</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tips for collaborating on side projects as a couple.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
              <h3 className="font-semibold text-lg mb-2">Skincare Meets Silicon</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Why self-care and code are equally important.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
