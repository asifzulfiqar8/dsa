import Link from "next/link";

const Post = ({ posts }) => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {posts?.slice(0, 8).map((post, i) => (
          <Link
            href={`/posts/details/${post.id}`}
            key={i}
            className="flex flex-col items-center gap-4 border rounded-lg p-4"
          >
            <h4 className="text-xl text-black font-semibold capitalize text-center">
              {post?.title}
            </h4>
            <p className="text-sm text-black capitalize text-center">
              {post?.body}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Post;
