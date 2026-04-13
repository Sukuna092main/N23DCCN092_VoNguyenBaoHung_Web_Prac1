import Link from "next/link";
import { notFound } from "next/navigation";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <Link
          href="/"
          className="inline-flex w-fit items-center rounded-full border border-indigo-200 bg-white px-4 py-2 text-md font-semibold text-indigo-600 transition hover:border-indigo-300 hover:bg-indigo-50"
        >
          Back to Blog
        </Link>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md md:p-8 lg:p-10">
          <p className="text-md font-medium uppercase tracking-[0.2em] text-indigo-500">
            Blog Detail
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-6 text-base leading-8 whitespace-pre-line text-slate-600 md:text-lg">
            {post.body}
          </p>
        </article>
      </div>
    </main>
  );
}
