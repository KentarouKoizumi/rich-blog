import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export type PostMeta = {
  slug: string;
  title: string;
  date?: string;
};

const POSTS_DIR = path.join(process.cwd(), 'posts');

export async function getPosts(): Promise<PostMeta[]> {
  const entries = await fs.readdir(POSTS_DIR);
  const posts: PostMeta[] = [];
  for (const slug of entries) {
    const file = await fs.readFile(path.join(POSTS_DIR, slug, 'index.md'), 'utf8');
    const { data } = matter(file);
    posts.push({
      slug,
      title: data.title || slug,
      date: data.date,
    });
  }
  return posts;
}

export async function getPost(slug: string) {
  const file = await fs.readFile(path.join(POSTS_DIR, slug, 'index.md'), 'utf8');
  const { data, content } = matter(file);
  return {
    slug,
    meta: {
      slug,
      title: data.title || slug,
      date: data.date,
    } as PostMeta,
    content,
  };
}
