import BlogCard from "../components/BlogCard";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {posts.slice(0, 12).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
