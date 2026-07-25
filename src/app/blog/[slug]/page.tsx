import { notFound } from 'next/navigation';
import { posts } from '@/lib/blog';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return post ? { title: post.title, description: post.description } : {};
}
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <main className="container prose-content py-14">
      <p className="text-primary">
        {post.category} · {post.date} · {post.readingTime}
      </p>
      <h1 className="font-heading text-4xl">{post.title}</h1>
      {post.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </main>
  );
}
