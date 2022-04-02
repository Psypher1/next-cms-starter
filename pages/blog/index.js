import Link from "next/link";

const articlesList = [
  {
    title: "Post 1",
    slug: "first",
    description:
      "First: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi assumenda recusandae ullam facilis distinctio. Sed repellendus cupiditate atque ea pariatur. Velit quidem quod facilis, excepturi nemo cum ratione?",
  },
  {
    title: "Post 2",
    slug: "second",
    description:
      "Second: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi assumenda recusandae ullam facilis distinctio. Sed repellendus cupiditate atque ea pariatur. Velit quidem quod facilis, excepturi nemo cum ratione?",
  },
  {
    title: "Post 3",
    slug: "third",
    description:
      "Third: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi assumenda recusandae ullam facilis distinctio. Sed repellendus cupiditate atque ea pariatur. Velit quidem quod facilis, excepturi nemo cum ratione?",
  },
  {
    title: "Post 4",
    slug: "fourh",
    description:
      "Fourth: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi assumenda recusandae ullam facilis distinctio. Sed repellendus cupiditate atque ea pariatur. Velit quidem quod facilis, excepturi nemo cum ratione?",
  },

  {
    title: "Post 5",
    slug: "fifth",
    description:
      "Fifth: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi assumenda recusandae ullam facilis distinctio. Sed repellendus cupiditate atque ea pariatur. Velit quidem quod facilis, excepturi nemo cum ratione?",
  },
];

export async function getStaticProps() {
  const posts = articlesList;

  return {
    props: { posts },
  };
}

Blog.title = "Blog";
export default function Blog({ posts }) {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-semibold text-4xl">Articles</h1>
      {posts &&
        posts.map((post) => (
          <article
            className="shadow-lg flex mt-8 items-center  py-4 px-5"
            key={post.slug}
          >
            <div className="flex  justify-center items-center ">
              <Link href={`/blog/${post.slug}`}>
                <a className="text-2xl font-semibold hover:text-blue-700  text-gray-700">
                  {post.title}
                </a>
              </Link>
              <p className="flex-1 text-base ml-4 text-gray-500">
                {post.description}
              </p>
            </div>
          </article>
        ))}
    </div>
  );
}

// fetch article data from file
// export async function getStaticProps() {
//   return {};
// }
