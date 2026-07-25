import Link from 'next/link';
import { posts } from '@/lib/blog';

export const metadata = {
  title: 'Blog',
  description: 'Developer Tool Box articles and practical developer utility guides.',
};
export default function BlogPage() {
  return (
    <main className="container py-14">
      <h1 className="font-heading text-4xl">Blog</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link className="card p-5" href={`/blog/${post.slug}`} key={post.slug}>
            <p className="font-heading text-xl">{post.title}</p>
            <p className="mt-2 text-[var(--text-secondary)]">{post.description}</p>
            <p className="mt-4 text-sm text-primary">{post.date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
