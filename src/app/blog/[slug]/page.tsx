import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getPost, getPosts } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: any) {
  const post = await getPost(params.slug).catch(() => null);
  if (!post) {
    notFound();
  }
  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{post.meta.title}</h1>
      <article className="prose dark:prose-invert">
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                {...props}
                src={`/posts/${post.slug}/${props.src}`}
                className="mx-auto"
              />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
