import PostDetail from "@/components/PostDetail";

const getPostWithId = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
};

const DetailPost = async ({ params }) => {
  const post = await getPostWithId(params.id);
  return <PostDetail post={post} />;
};

export default DetailPost;
