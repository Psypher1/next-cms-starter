import Link from "next/link";

// export async function getStaticPaths() {}

// export async function getStaticProps({ params }) {}

export default function ArticleDetail() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-gray-800 mb-4 text-3xl font-semibold text-center">
        This is a post
      </h2>
      <img
        className="object-cover rounded w-[300] shadow-lg mx-auto"
        src=""
        alt=""
      />
      <div className="flex items-center mt-3 ">
        <img className="w-8 h-8 rounded-full" src="" alt="" />
        <p className="ml-2">{/* author name */}</p>
      </div>
      <div class="py-4">
        <div class="w-full border-t border-gray-400"></div>
      </div>
      <div className="max-w-[65ch]">{/* Post body */}</div>

      <div class="py-4">
        <div class="w-full border-t border-gray-400"></div>
      </div>
      <div className="flex flex-col ">
        <Link href="/blog">
          <a className="text-blue-700 hover:text-gray-800 block">
            {" "}
            {"<Back to Blog"}
          </a>
        </Link>
        <Link href="/">
          <a className="text-blue-700 block hover:text-gray-800">{"<Home"}</a>
        </Link>
      </div>
    </div>
  );
}
