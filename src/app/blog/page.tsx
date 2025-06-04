import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import { Button } from '@/components/ui/button';

export default async function BlogIndex() {
  const posts = await getPosts();
  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="flex items-center justify-between">
            <span className="text-xl">{post.title}</span>
            <Button asChild>
              <Link href={`/blog/${post.slug}`}>Read</Link>
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
}
