import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="mb-6">This site uses Next.js, Tailwind CSS and shadcn/ui.</p>
      <Link
        href="/blog"
        className="text-primary underline hover:no-underline"
      >
        Read the blog
      </Link>
    </main>
  );
}
