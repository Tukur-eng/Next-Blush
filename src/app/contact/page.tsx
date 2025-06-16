export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Contact Us</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        We'd love to hear from you. Reach out via email or follow us on social media.
      </p>
      <a
        href="ababio746@gmail.com"
        className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
      >
        Send Email
      </a>
    </main>
  );
}
