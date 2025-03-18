import Post from "../components/Post";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <main>
      <Post posts={posts} />
    </main>
  );
}
