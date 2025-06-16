'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8 mt-12 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">NextBlush</h2>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            Inspiration meets innovation. Built with love by NextStack & Mablush.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:underline text-gray-600 dark:text-gray-400">Home</Link></li>
            <li><Link href="/blog" className="hover:underline text-gray-600 dark:text-gray-400">Blog</Link></li>
            <li><Link href="/about" className="hover:underline text-gray-600 dark:text-gray-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline text-gray-600 dark:text-gray-400">Contact/ababio746@gmail.com</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-blue-500 dark:hover:text-blue-400" aria-label="Twitter">🐦</Link>
            <Link href="#" className="hover:text-pink-500 dark:hover:text-pink-400" aria-label="Instagram">📷</Link>
            <Link href="#" className="hover:text-sky-700 dark:hover:text-sky-400" aria-label="LinkedIn">💼</Link>
          </div>
        </div>

        {/* Subscribe / Social */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-4">Stay Updated</h3>
          <form
  className="flex flex-col space-y-3"
  onSubmit={async (e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    let result = await res.json();
    alert(result.message || result.error);
  }}
>
  <input
    type="email"
    name="email"
    placeholder="Your email"
    required
    className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
  />
  <button
    type="submit"
    className="bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md text-sm font-semibold"
  >
    Subscribe
  </button>
</form>

        </div>
    </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm text-gray-600 dark:text-gray-500">
        &copy; {year} NextBlush. All rights reserved.
      </div>
    </footer>
  );
}
